import "./css/App.css";
import Header from "./components/Header";
import Dropdown from "./components/Dropdown";

function App() {
  return (
    <div className="App">
      <Header title="FINANCR" />
      <Dropdown />
    </div>
  );
}

export default App;
