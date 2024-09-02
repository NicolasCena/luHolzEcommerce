import { Link } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';

type Props = {
    title: string;
    path: string;
    onClick: () => void;
};

export const OptionMenu = ({ title, path, onClick }: Props) => {
  return (
    <Nav.Link as="span" onClick={onClick}>
      <Link to={path}>{title}</Link>
    </Nav.Link>
  );
};