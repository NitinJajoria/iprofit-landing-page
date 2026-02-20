import { defineField, defineType } from "sanity";

export const divider = defineType({
  name: "divider",
  title: "Divider",
  type: "object",
  fields: [
    defineField({
      name: "style",
      title: "Style",
      type: "string",
      options: {
        list: [{ title: "Line", value: "line" }],
      },
      initialValue: "line",
    }),
  ],
  preview: {
    prepare() {
      return { title: "Divider" };
    },
  },
});
