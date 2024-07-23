import { useEditorEventCallback } from "@nytimes/react-prosemirror";

const Image = () => {
  const onClickCb = useEditorEventCallback(() => {
    window.alert("Image clicked!");
  });

  return (
    <img
      src={
        "https://thumbs.dreamstime.com/b/sunrise-over-beach-cancun-beautiful-mexico-40065727.jpg"
      }
      width={100}
      height={100}
      onClick={onClickCb}
    />
  );
};

export default Image;
