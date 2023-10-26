import logo from './logo.svg';
import './App.css';
import Header from "./components/Ui/Header/Header";
import {Fragment} from "react";
import Main from "./components/Main/Main";

function App() {
  return (
    <Fragment className="App">
        <Header />
        <Main />
    </Fragment>
  );
}

export default App;
