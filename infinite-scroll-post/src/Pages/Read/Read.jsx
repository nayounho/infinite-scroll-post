import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import api from "../../api/api";
import Title from "../../Components/Title/Title";

const Read = ({ className }) => {
  const { postType } = useSelector(state => state.renderState);
  const { id } = useParams();
  const postId = id.match(/[0-9]+/)[0];
  const history = useHistory();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const goMain = () => {
    history.push("/");
  };

  useEffect(() => {
    const setPost = async () => {
      const res = await api.getPost(postType, postId);
      const post = await res.json();
      setTitle(post.title);
      setContent(post.content);
    };
    setPost();
  }, []);

  return (
    <section className={className}>
      <main>
        <Title level={1}>{title}</Title>
        <p>{content}</p>
      </main>
      <footer>
        <button onClick={goMain}>뒤로가기</button>
      </footer>
    </section>
  );
};

export default Read;
