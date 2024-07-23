const Footer = () => {
  return (
    <div
      style={{ marginTop: "20px", display: "flex", flexDirection: "column" }}
    >
      <div style={{ marginTop: "20px", fontSize: "14px" }}>
        Try changing the action associated with onClick in <em>image.js</em> to
        remove the image node. The props passed to the image component will have
        the node and the current position of the node in the document.
      </div>
    </div>
  );
};

export default Footer;
