export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__stars" />
      <div className="hero__nebula" />
      <div className="hero__content">
        <h1>ПЕРИФЕРИЯ</h1>
        <div className="title-line">
          <span />
          <b>ТЕКСТОВАЯ КОСМИЧЕСКАЯ MMO</b>
          <span />
        </div>
        <p>Живой мир. Свобода действий. Твой путь среди звёзд.</p>
        <a href="#about" className="hero__cta">НАЧАТЬ ПУТЕШЕСТВИЕ</a>
        <a href="#about" className="hero__more">
          УЗНАТЬ БОЛЬШЕ
          <span>⌄</span>
        </a>
      </div>
      <div className="hero__fade" />
    </section>
  );
}
