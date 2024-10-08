import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./App.css";
import Header from "./components/header/header";
import HeroSection from "./components/hero/HeroSection";

function App() {
  return (
    <div>
      <Header />
      <HeroSection />
    </div>
  );
}

export default App;
