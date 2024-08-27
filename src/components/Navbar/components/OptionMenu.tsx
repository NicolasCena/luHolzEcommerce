import { Link } from "react-router-dom";

type Props = {
    title: string;
    path: string;
}

export const OptionMenu = ({ title, path }: Props) => {
  return (
    <li>
      <Link to={path}>{title}</Link>
    </li>
  );
};
