const news = [
  ["Обновление «Хроники Периферии»", "12.05.2024"],
  ["Новый игровой сезон", "01.05.2024"],
  ["Изменения в механике боёв", "20.04.2024"],
];

export default function NewsPanel() {
  return (
    <div className="news-panel" id="news">
      <div className="panel-title">ПОСЛЕДНИЕ НОВОСТИ</div>
      {news.map(([title, date]) => (
        <div className="news-row" key={title}>
          <span>
            <i />
            {title}
          </span>
          <time>{date}</time>
        </div>
      ))}
      <button className="panel-button">ВСЕ НОВОСТИ</button>
    </div>
  );
}
