import { defineDocumentType, makeSource } from "contentlayer/source-files";

export const Guide = defineDocumentType(() => ({
  name: "Guide",
  filePathPattern: `**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    description: { type: "boolean", required: false },
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (guide) => `/guides/${guide._raw.flattenedPath}`,
    },
  },
}));

export default makeSource({
  contentDirPath: "content/guides",
  documentTypes: [Guide],
});
