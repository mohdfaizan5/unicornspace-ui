import { toc } from "mdast-util-toc";
import { remark } from "remark";
import { visit } from "unist-util-visit";

const textTypes = ["text", "emphasis", "strong", "inlineCode"];

function flattenNode(node: any): string {
  const p: string[] = [];
  visit(node, (node) => {
    if (!textTypes.includes(node.type)) return;
    p.push(node.value);
  });
  return p.join("");
}

export interface Item {
  title: string;
  url: string;
  items?: Item[];
}

export interface Items {
  items?: Item[];
}

function getItems(node: any, current: any): Items {
  if (!node) {
    return {};
  }

  if (node.type === "paragraph") {
    visit(node, (item) => {
      if (item.type === "link") {
        current.url = item.url;
        current.title = flattenNode(node);
      }

      if (item.type === "text") {
        current.title = flattenNode(node);
      }
    });

    return current;
  }

  if (node.type === "list") {
    current.items = node.children
      .map((i: any) => getItems(i, {}))
      .filter((item: Item) => item.title && item.url); // Filter out invalid items

    return current;
  } else if (node.type === "listItem") {
    if (!node.children?.length) return {};

    const heading = getItems(node.children[0], {});

    if (node.children.length > 1) {
      getItems(node.children[1], heading);
    }

    return heading;
  }

  return {};
}

const getToc = () => (node: any, file: any) => {
  const table = toc(node);
  const items = getItems(table.map, {});

  file.data = items;
};

export type TableOfContents = Items;

export async function getTableOfContents(
  content: string
): Promise<TableOfContents> {
  const result = await remark().use(getToc).process(content);

  return result.data as TableOfContents;
}
