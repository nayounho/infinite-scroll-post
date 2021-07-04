import styled from "styled-components";
import Navigation from "./Navigation";

const StyledNavigation = styled(Navigation)`
  list-style: none;
  display: flex;
  margin: 0 auto;
  width: 930px;
  padding: 0;
  border-bottom: 1px solid rgba(229, 231, 235, 1);
  & > li > button {
    border: none;
    background-color: #fff;
    font-size: 14px;
    padding: 16px;
    border-radius: 5px;
  }

  & > li button:hover {
    background-color: rgba(229, 231, 235, 0.5);
  }
  ${props => (props.postType === "a" ? "li:first-child > button { color: blue;}" : "li:last-child > button { color: blue; }")}
`;

export default StyledNavigation;
