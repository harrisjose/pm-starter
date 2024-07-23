import { useEditorEventCallback } from "@nytimes/react-prosemirror";
import { toggleMark } from "prosemirror-commands";

const Footer = () => {
  const toggleBold = useEditorEventCallback((view) => {
    // `toggleMark` takes a mark type and returns a command that you can then run.
    //  The command will apply the mark on the current selection.
    const boldCmd = toggleMark(view.state.schema.marks.strong);
    boldCmd(view.state, view.dispatch);
    view.focus();
  });
  const toggleItalic = useEditorEventCallback((view) => {
    // Try adding a mark that applies italic styling to the selection. You'll have
    // to first define the mark in schema.js
  });

  return (
    <div
      style={{ marginTop: "20px", display: "flex", flexDirection: "column" }}
    >
      <div style={{ display: "flex", flexDirection: "row" }}>
        <button onClick={toggleBold} style={{ display: "inline-block" }}>
          Bold
        </button>
        <button
          onClick={toggleItalic}
          style={{ display: "inline-block", marginLeft: "5px" }}
        >
          Italic
        </button>
      </div>
      <div style={{ marginTop: "20px", fontSize: "14px" }}>
        Select some part of the text and click on the buttons to apply marks on
        it. You can also open the console to see the document changing when you
        add marks.
      </div>
    </div>
  );
};

export default Footer;
