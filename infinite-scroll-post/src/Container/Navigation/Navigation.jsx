import { useDispatch, useSelector } from "react-redux";
import { createPostTypeAction } from "../../redux/reducers/renderState";

const Navigation = ({ className }) => {
  const dispatch = useDispatch();

  const changePostType = type => {
    dispatch(createPostTypeAction(type));
  };

  return (
    <ul className={className}>
      <li>
        <button onClick={() => changePostType("a")}>A Posts</button>
      </li>
      <li>
        <button onClick={() => changePostType("b")}>B Posts</button>
      </li>
    </ul>
  );
};

export default Navigation;
