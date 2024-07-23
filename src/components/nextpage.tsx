import { Link } from "react-router-dom";
import { ReactComponent as ArrowRight } from "../assets/arrow-right-circle.svg";
import { PropsWithChildren } from "react";

const NextPage: React.FC<PropsWithChildren<{ to: string }>> = ({
  to,
  children,
}) => {
  return (
    <div>
      Next Up:{" "}
      <Link to={to} className="no-underline hover:text-green-600">
        {children} <ArrowRight className="inline-block" />
      </Link>
    </div>
  );
};

export default NextPage;
