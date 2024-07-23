import { useEditorEventCallback } from "@nytimes/react-prosemirror";
import { Node } from "prosemirror-model";
import { TextSelection } from "prosemirror-state";

const Footer = () => {
  const insert = useEditorEventCallback((view) => {
    // Create a new transaction
    const tr = view.state.tr;

    const pos = view.state.doc.resolve(view.state.selection.anchor); // find the position of the current node
    const newPos = pos.after(pos.depth); // find the position to insert the new node

    // Create a new paragraph node
    const schema = view.state.schema;
    const node = Node.fromJSON(schema, {
      type: "paragraph",
      content: [{ type: "text", text: "This is a new paragraph" }],
    });

    // Insert this node into the document at newPos
    tr.insert(newPos, node);

    // Dispatch this transaction so that we can apply the changes on the state in App.js
    view.dispatch(tr);
    view.focus();
  });

  return (
    <div
      style={{ marginTop: "20px", display: "flex", flexDirection: "column" }}
    >
      <button onClick={insert}>Insert</button>
      <div style={{ marginTop: "20px", fontSize: "14px" }}>
        Click on the button to add a new node to the document
      </div>
    </div>
  );
};

export default Footer;
