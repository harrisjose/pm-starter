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
      const ns = s.apply(tr);
      tr.docChanged && console.log(ns.toJSON().doc);
      return ns;
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
        <Footer />
      </ProseMirror>
    </>
  );
}
