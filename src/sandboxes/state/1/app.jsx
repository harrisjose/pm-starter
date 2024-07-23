import { ProseMirror } from "@nytimes/react-prosemirror";
import { EditorState } from "prosemirror-state";
import React, { useCallback, useState } from "react";
import Footer from "./footer";
import { schema, doc } from "./schema";

export default function App() {
  const [mount, setMount] = useState();

  const [editorState, setEditorState] = useState(
    EditorState.create({ schema, doc })
  );

  const dispatch = useCallback((tr) => {
    setEditorState((s) => {
      const newState = s.apply(tr);
      if (tr.docChanged) console.log(`State changed to`, newState);
      return newState;
    });
  }, []);

  return (
    <>
      <ProseMirror
        mount={mount}
        state={editorState}
        dispatchTransaction={dispatch}
      >
        <div ref={setMount} />
      </ProseMirror>

      <Footer />
    </>
  );
}
