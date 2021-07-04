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
    width: 1.5em;
    height: 1.5em;
    background-image: url("https://i2.wp.com/www.thinkafrica.fi/wp-content/uploads/2019/04/search-icon.png?fit=1200%2C1200&ssl=1");
    background-size: cover;
    background-position-y: 4px;
    margin-right: 5px;
  }
  & > label {
    display: block;
    background-size: cover;
    overflow: hidden;
    position: absolute;
    top: 11px;
    left: 21px;
  }
`;

export default StyledSearch;
