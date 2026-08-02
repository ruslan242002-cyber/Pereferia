const features = [
  {
    icon: "◉",
    title: "ЖИВОЙ МИР",
    text: "Реальные игроки, динамичные события и постоянное развитие вселенной.",
  },
  {
    icon: "◇",
    title: "СВОБОДА ДЕЙСТВИЙ",
    text: "Выбирай свой путь: дипломатия, торговля, исследования, война или всё сразу.",
  },
  {
    icon: "⬡",
    title: "ГЛУБОКИЕ МЕХАНИКИ",
    text: "Фракции, технологии, корабли, ресурсы, экономика и многое другое.",
  },
  {
    icon: "◎",
    title: "СООБЩЕСТВО",
    text: "Активные игроки, поддержка разработчиков и регулярные обновления.",
  },
];

export default function About() {
  return (
    <section className="intro section" id="about">
      <div className="intro__text">
        <span className="section-kicker">ПЕРИФЕРИЯ</span>
        <h2>Мир без границ</h2>
        <p>
          «Периферия» — текстовая космическая MMO, где каждое ваше решение
          имеет значение. Исследуйте галактику, вступайте в фракции,
          создавайте союзы, торгуйте, воюйте и пишите свою историю в живом мире.
        </p>
        <a href="#world" className="small-button">О МИРЕ</a>
      </div>
      <div className="feature-grid" id="world">
        {features.map((feature) => (
          <article className="feature" key={feature.title}>
            <div className="feature__icon">{feature.icon}</div>
            <h3>{feature.title}</h3>
            <p>{feature.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
