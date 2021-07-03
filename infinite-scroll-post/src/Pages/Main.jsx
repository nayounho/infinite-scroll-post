import Title from "../Components/Title/Title";
import List from "../Container/List/List";
import Search from "../Container/Search/Search";
import Navigation from "../Container/Navigation/Navigation";

const Main = () => {
  return (
    <>
      <Title>게시물을 검색해보세요</Title>
      <Search />
      <Navigation />
      <List />
    </>
  );
};

export default Main;
