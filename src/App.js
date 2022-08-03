import "./App.css";
import Row from "./components/Row";
import categories from "./api";
import Banner from "./components/Banner";

function App() {
  return (
    <div className="App">
      {/* Navbar */}
      {/* Destaques */}
      <Banner />
      {categories.map((category, index) => {
        return (
          <Row
            key={category.name}
            title={category.title}
            path={category.path}
            isLarge={category.isLarge}
          />
        );
      })}
    </div>
  );
}

export default App;
