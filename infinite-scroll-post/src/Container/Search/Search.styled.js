import styled from "styled-components";
import Search from "./Search";
// import inmage from '../../assets/search.png'

const StyledSearch = styled(Search)`
  margin: 40px auto;
  display: flex;
  align-items: center;
  justify-content: center;
  & > label {
    display: block;
    background: url("../../assets/search.png");
    background-size: cover;
    overflow: hidden;
  }
  & > input {
    padding: 14px;
    width: 300px;
    height: 21px;
  }
`;

export default StyledSearch;
