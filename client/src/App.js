import logo from './logo.svg';
import './App.css';
import {Layout} from "antd";
import NavBar from "./components/Layout/Header/NavBar";

function App() {
  return (
    <div className="App">
      <Layout className="layout">
        <NavBar/>
      </Layout>
    </div>
  );
}

export default App;
