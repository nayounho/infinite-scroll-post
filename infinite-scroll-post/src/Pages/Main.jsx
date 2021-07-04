import StyledTitle from "../Components/Title/Title.styled";
import StyledSearch from "../Container/Search/Search.styled";
import StyledNavigation from "../Container/Navigation/Navigation.styled";
import StyledList from "../Container/List/List.styled";
import { useSelector } from "react-redux";

const Main = () => {
  const { postType } = useSelector(state => state.renderState);
  return (
    <>
      <StyledTitle>게시물을 검색해보세요</StyledTitle>
      <StyledSearch />
      <StyledNavigation postType={postType} />
      <StyledList />
    </>
  );
};

export default Main;
