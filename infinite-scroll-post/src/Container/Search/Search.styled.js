import styled from "styled-components";
import Search from "./Search";

const StyledSearch = styled(Search)`
  margin: 40px auto;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 320px;

  & > input {
    padding: 14px;
    width: 100%;
    height: 21px;
  }
  & > input:focus + label {
    display: none;
  }
  & > label::before {
    content: "";
    display: inline-block;
    width: 1em;
    height: 1em;
    background-image: url("https://cdn.icon-icons.com/icons2/1744/PNG/512/3643762-find-glass-magnifying-search-zoom_113420.png");
    background-size: cover;
    background-position-y: 1px;
    margin-right: 5px;
  }
  & > label {
    display: block;
    background-size: cover;
    overflow: hidden;
    position: absolute;
    top: 17px;
    left: 21px;
  }
`;

export default StyledSearch;
