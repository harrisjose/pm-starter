import { Schema } from "prosemirror-model";

export const schema = new Schema({
  nodes: {
    doc: { content: "block+" },
    label: {
      group: "block",
      content: "text*",
      attrs: {
        color: {
          default: "#C14D2B",
        },
      },
    },
    text: { group: "inline" },
  },
});

export const doc = schema.nodeFromJSON({
  type: "doc",
  content: [
    {
      type: "label",
      content: [{ type: "text", text: "Build: Failing" }],
    },
  ],
});
