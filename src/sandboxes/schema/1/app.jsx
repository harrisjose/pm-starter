import { ProseMirror } from "@nytimes/react-prosemirror";
import { EditorState } from "prosemirror-state";
import React, { useState } from "react";
import schema from "./schema";

export default function App() {
  const [mount, setMount] = useState();
  return (
    <>
      <ProseMirror mount={mount} defaultState={EditorState.create({ schema })}>
        <div ref={setMount} />
      </ProseMirror>

      <div style={{ marginTop: "20px", fontSize: "14px" }}>
        Try typing something in the editor above.
      </div>
    </>
  );
}
