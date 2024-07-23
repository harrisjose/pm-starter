import { Schema } from "prosemirror-model";

const schema = new Schema({
  nodes: {
    doc: { content: "block+" },
    paragraph: {
      group: "block",
      content: "inline*",
      parseDOM: [{ tag: "p" }], // change this
      toDOM() {
        return ["p", 0]; // and this
      },
    },
    text: { group: "inline" },
  },
});

export default schema;
