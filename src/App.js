import Introduction from "./components/introduction";
import Gallery from "./components/gallery"
import Publications from "./components/publications"
import './App.css';

function App() {
  return (
    <div className="App">
      <Introduction/>
      <Publications/>
      <Gallery/>
    </div>
  );
}

export default App;
