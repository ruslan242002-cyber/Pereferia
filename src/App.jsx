import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Stats from "./components/Stats";
import NewsPanel from "./components/NewsPanel";
import CommunityPanel from "./components/CommunityPanel";
import Mechanics from "./components/Mechanics";
import Footer from "./components/Footer";
import "./styles.css";

export default function App() {
  return (
    <div className="site">
      <Navbar />
      <main id="top">
        <Hero />
        <About />
        <Stats />
        <section className="lower section">
          <NewsPanel />
          <CommunityPanel />
        </section>
        <Mechanics />
      </main>
      <Footer />
    </div>
  );
}
