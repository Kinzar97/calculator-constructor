import Switch from "./containers/Switch";
import Elements from "./containers/Elements";
import Calculator from "./containers/Calculator";
import "./index.less";

const App = () => {
  return (
    <div className="app">
      <div className="constructor">
        <Elements />
      </div>
      <div className="calculator">
        <Switch />
        <Calculator />
      </div>
    </div>
  );
};

export default App;
