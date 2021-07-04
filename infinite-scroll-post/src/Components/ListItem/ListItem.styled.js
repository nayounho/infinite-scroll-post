import styled from "styled-components";
import ListItem from "./ListItem";

const StyledListItem = styled(ListItem)`
  list-style: none;
  padding: 14px;
  width: 860px;
  line-height: 20px;
  margin: 0 auto;
  & a {
    text-decoration: none;
  }
  & h2 {
    font-size: 16px;
    color: #000;
    margin: 0;
  }
  & p {
    margin: 0;
    font-size: 14px;
    color: #000;

    overflow: hidden;
    text-overflow: ellipsis;
    white-space: normal;
    line-height: 1.4;
    height: 3.8em;
    text-align: left;
    word-wrap: break-word;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
  }
  & strong {
    color: rgba(59, 130, 246);
  }
`;

export default StyledListItem;
