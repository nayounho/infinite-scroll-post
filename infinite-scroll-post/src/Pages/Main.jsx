import StyledTitle from "../Components/Title/Title.styled";
import StyledSearch from "../Container/Search/Search.styled";
import StyledNavigation from "../Container/Navigation/Navigation.styled";
import StyledList from "../Container/List/List.styled";

const Main = () => {
  return (
    <>
      <StyledTitle>게시물을 검색해보세요</StyledTitle>
      <StyledSearch />
      <StyledNavigation />
      <StyledList />
    </>
  );
};

export default Main;
