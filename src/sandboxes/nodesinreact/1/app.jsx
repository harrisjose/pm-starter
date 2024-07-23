import { ProseMirror, useNodeViews } from "@nytimes/react-prosemirror";
import { EditorState } from "prosemirror-state";
import React, { useCallback, useMemo, useState } from "react";
import Image from "./image";
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

  const nodeViewSpec = useMemo(() => {
    return {
      image: () => ({
        component: Image,
        dom: document.createElement("div"),
      }),
    };
  }, []);

  const { nodeViews, renderNodeViews } = useNodeViews(nodeViewSpec);

  return (
    <>
      <ProseMirror
        mount={mount}
        state={editorState}
        nodeViews={nodeViews}
        dispatchTransaction={dispatch}
      >
        <div ref={setMount} />
        {renderNodeViews()}
        <Footer />
      </ProseMirror>
    </>
  );
}
