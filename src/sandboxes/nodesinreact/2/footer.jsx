const Footer = () => {
  return (
    <div
      style={{ marginTop: "20px", display: "flex", flexDirection: "column" }}
    >
      <div style={{ marginTop: "20px", fontSize: "14px" }}>
        The color is a state value local to the react component while the text
        is a state that's managed by Prosemirror. While you can store the color
        to a more persistent state using something like
        `useBlock(id).setProperty`, an alternative to this is to set the color
        as an attribute on the node.
      </div>
      <div style={{ marginTop: "20px", fontSize: "14px" }}>
        Try setting the color to the label node's color attribute in the
        useEditorEffect hook. Hint: You should be able to use `const pos =
        props.getPos();` to get the position of the node. Running the
        `setNodeAttribute(pos, "key", value)` method on the transaction should
        set the attribute.
      </div>
      <div style={{ marginTop: "20px", fontSize: "14px" }}>
        Further, you can also entirely eliminate react state from this example
        if you also read the current color directly from the nodes attribute.
      </div>
    </div>
  );
};

export default Footer;
