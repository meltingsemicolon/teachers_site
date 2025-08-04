import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Teachers from "./pages/Teachers";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Home />
        <About />
        <Teachers />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
