const stats = [
  { value: "1287+", label: "АКТИВНЫХ ИГРОКОВ" },
  { value: "42", label: "ФРАКЦИИ" },
  { value: "3200+", label: "СИСТЕМ" },
  { value: "∞", label: "ВОЗМОЖНОСТЕЙ" },
];

export default function Stats() {
  return (
    <section className="stats section">
      {stats.map((stat) => (
        <div className="stat" key={stat.label}>
          <strong>{stat.value}</strong>
          <span>{stat.label}</span>
        </div>
      ))}
    </section>
  );
}
