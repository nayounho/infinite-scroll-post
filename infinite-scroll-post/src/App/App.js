import { Route, Switch } from "react-router-dom";
import Main from "../Pages/Main/Main";
import StyledRead from "../Pages/Read/Read.styled";

function App() {
  return (
    <Switch>
      <Route path="/read/:id" component={StyledRead} />
      <Route exact path="/" component={Main} />
    </Switch>
  );
}

export default App;
