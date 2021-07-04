import styled from "styled-components";
import Read from "./Read";

const StyledRead = styled(Read)`
  & main {
    margin: 70px auto;
    margin-bottom: 14px;
    justify-content: center;
    width: 858px;
    border: 1px solid rgba(229, 231, 235, 1);
    padding: 35px;
  }
  & h1 {
    text-align: center;
    font-size: 32px;
    margin: 0 auto;
    margin-bottom: 35px;
  }
  & p {
    line-height: 22px;
    font-size: 14px;
  }
  & footer {
    width: 928px;
    margin: 0 auto;
    & button {
      padding: 10px 28px;
      border: none;
      color: #fff;
      background-color: rgba(59, 130, 246, 1);
      border-radius: 5px;
      cursor: pointer;
    }
    & button:hover {
      background-color: rgba(59, 130, 246, 0.8);
    }
  }
`;

export default StyledRead;
