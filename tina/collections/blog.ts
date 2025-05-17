import type { Collection } from "tinacms";

export const BlogCollection: Collection = {

  name: "blog",
  label: "Blogs",
  path: "src/content/blog",
  format: "mdx",
  ui: {
    router({ document }) {
      return `/blog/${document._sys.filename}`;
    },
  },
  fields: [
    {
      name: "test",
      label: "Test",
      type: "object",
      list: true,
      templates: [
        {
          name: "test",
          label: "Test",
          fields: [
            {
              type: "string",
              name: "title",
              label: "Title",
            }
          ],
        },
        {
          name: "test2",
          label: "Test2",
          fields: [
            {
              type: "string",
              name: "title",
              label: "Title",
            }
          ],
        },
        {
          name: "test3",
          label: "Test3",
          fields: [
            {
              type: "string",
              name: "title",
              label: "Title",
            }
          ],
        },
        {
          name: "test4",
          label: "Test4",
          fields: [
            {
              type: "string",
              name: "title",
              label: "Title",
            }
          ],
        },
        {
          name: "test5",
          label: "Test5",
          fields: [
            {
              type: "string",
              name: "title",
              label: "Title",
            }
          ],
        }
      ]
    },
    {
      type: "string",
      name: "title",
      label: "Title",
      isTitle: true,
      required: true,
    },
    {
      name: "description",
      label: "Description",
      type: "string",
    },
    {
      name: "pubDate",
      label: "Publication Date",
      type: "datetime",
    },
    {
      name: "updatedDate",
      label: "Updated Date",
      type: "datetime",
    },
    {
      name: "heroImage",
      label: "Hero Image",
      type: "image",
    },
    {
      type: "rich-text",
      name: "body",
      label: "Body",
      isBody: true,
    },
  ],
}
