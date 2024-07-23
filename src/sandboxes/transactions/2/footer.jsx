import { useEditorEventCallback } from "@nytimes/react-prosemirror";
import { selectAll, deleteSelection } from "prosemirror-commands";

const Footer = () => {
  const selectAllFn = useEditorEventCallback((view) => {
    selectAll(view.state, view.dispatch);
    view.focus();
  });

  const deleteSelectionFn = useEditorEventCallback((view) => {
    deleteSelection(view.state, view.dispatch);
    view.focus();
  });

  return (
    <div
      style={{ marginTop: "20px", display: "flex", flexDirection: "column" }}
    >
      <button onClick={selectAllFn}>Select all</button>
      <button
        onClick={deleteSelectionFn}
        style={{ marginTop: "20px", fontSize: "14px" }}
      >
        Delete selection
      </button>
      <div style={{ marginTop: "20px", fontSize: "14px" }}>
        Try clicking on the buttons to run the respective commands
      </div>
    </div>
  );
};

export default Footer;
