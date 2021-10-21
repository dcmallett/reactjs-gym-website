import Header from "./Components/Layout/Header/Header";
import Home from './Components/Home/Home';
import Footer from './Components/Layout/Footer/Footer';
const App = () => {
  return (
    <div className="App">
      <Header />
      <main>
          <Home />
      </main>
      <Footer />
    </div>
  );
}

export default App;
