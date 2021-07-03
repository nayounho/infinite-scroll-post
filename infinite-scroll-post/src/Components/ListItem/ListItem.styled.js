import styled from "styled-components";
import ListItem from "./ListItem";

const StyledListItem = styled(ListItem)`
  list-style: none;
  padding: 14px;
  width: 860px;
  line-height: 20px;
  margin: 0 auto;
  & h2 {
    font-size: 16px;
    color: #000;
    margin: 0;
  }
  & p {
    margin: 0;
    font-size: 14px;
    color: #000;
  }
  & strong {
    color: rgba(59, 130, 246);
  }
`;

export default StyledListItem;
