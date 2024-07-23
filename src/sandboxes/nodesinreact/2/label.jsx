import { useState } from "react";
import * as Popover from "@radix-ui/react-popover";
import { GithubPicker } from "react-color";
import { useEditorEffect } from "@nytimes/react-prosemirror";

const LabelComponent = (props) => {
  const [color, setColor] = useState("#C14D2B");
  useEditorEffect(
    (view) => {
      // const tr = view.state.tr;
      // Set color as attribute on the node
      // view.dispatch(tr);
    },
    [color]
  );
  return (
    <div
      style={{
        display: "inline-flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        border: `1px solid ${color}`,
      }}
    >
      <Popover.Root>
        <Popover.Trigger asChild>
          <div
            style={{
              width: "10px",
              height: "10px",
              borderRadius: "50%",
              backgroundColor: color,
              padding: "2px",
              margin: "1px 5px",
            }}
            contentEditable={false}
          ></div>
        </Popover.Trigger>
        <Popover.Content>
          <div contentEditable={false}>
            <GithubPicker onChangeComplete={(color) => setColor(color.hex)} />
          </div>
        </Popover.Content>
      </Popover.Root>

      <div style={{ width: "100px", color }}>{props.children}</div>
    </div>
  );
};

export default LabelComponent;
