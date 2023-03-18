import "./App.css";
import Card from "./components/card";
function App() {
  return (
    <div className="App">
      <section className="pricing py-5">
        <div className="container">
          <div className="row">
            <Card price="40" />
            <Card price="50" />
            <Card price="60" />
            <Card price="70" />
            <Card price="80" />
            <Card price="90" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
