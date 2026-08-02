import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
      <a href="#top" className="brand">ПЕРИФЕРИЯ</a>
      <nav className="nav">
        <a href="#about">О ПРОЕКТЕ</a>
        <a href="#world">МИР</a>
        <a href="#mechanics">МЕХАНИКИ</a>
        <a href="#community">СООБЩЕСТВО</a>
        <a href="#news">НОВОСТИ</a>
      </nav>
      <div className="auth">
        <button className="button button--ghost">ВОЙТИ</button>
        <button className="button button--outline">РЕГИСТРАЦИЯ</button>
      </div>
    </header>
  );
}
