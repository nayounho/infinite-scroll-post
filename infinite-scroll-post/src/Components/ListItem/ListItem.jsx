import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Title from "../Title/Title";

const ListItem = ({ item, className }) => {
  const { postType } = useSelector(state => state.renderState);
  const { id, title, content } = item;

  return (
    <li className={className}>
      <Link to={`read/${postType + id}`} style={{ textDecoration: "none" }}>
        <Title key={id} level={2}>
          <strong>{id}</strong> {". " + title}
        </Title>
        <p>{content}</p>
      </Link>
    </li>
  );
};

export default ListItem;
