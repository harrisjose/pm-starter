const Spacer: React.FC<{
  space: number;
}> = (props) => {
  const className = `mb-${props.space}` as const;
  return <div className={className}></div>;
};

export default Spacer;
