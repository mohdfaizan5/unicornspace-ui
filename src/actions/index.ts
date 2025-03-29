"use server";

import fs from "fs/promises";
import path from "path";
import { getPayload } from "payload";

export async function readFileContent(filePath: string): Promise<string> {
  const fullPath = path.join(
    process.cwd(),
    "src",
    "registry",
    "components",
    "Faq.tsx"
    // filePath
  );
  // console.log("fullPath", fullPath);
  try {
    return await fs.readFile(fullPath, "utf-8");
  } catch (error) {
    console.error(`Error reading file ${filePath}:`, error);
    return "";
  }
}

import config from "@payload-config";
import { toTitle } from "@/lib/utils";

export const getGuidesFromPayload = async () => {
  const payload = await getPayload({ config });
  const guides = await payload.find({
    collection: "guides",
    where: {
      or: [{ isPublished: { equals: true } }],
    },
  });
  return guides;
};

export const getBlogsFromPayload = async () => {
  const payload = await getPayload({ config });
  const blogs = await payload.find({
    collection: "blogs",
    where: {
      or: [{ isPublished: { equals: true } }],
    },
  });
  return blogs;
};

export const getBlogFromSlug = async (slug: string) => {
  const payload = await getPayload({ config });
  console.log("🚀🚀🚀🚀🚀🚀", slug, "---", toTitle(slug));
  const data = await payload.find({
    collection: "blogs",
    where: {
      title: { contains: toTitle(slug) },
    },
  });
  console.log("🚀🚀🚀🚀🚀🚀", data);
  if (data.docs.length === 0) return null;

  return data.docs[0];
};
