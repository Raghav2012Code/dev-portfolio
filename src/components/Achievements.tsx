import { ACHIEVEMENTS, ACHIEVEMENTS_LABEL } from "../data/content";

export function Achievements() {
  return (
    <section className="achievements" aria-labelledby="achievements-label">
      <div className="container container-wide">
        <p className="achieve-label" id="achievements-label">
          {ACHIEVEMENTS_LABEL}
        </p>
        <ul className="achieve-list">
          {ACHIEVEMENTS.map((item) => (
            <li key={item.title}>
              <div>
                <p className="achieve-title">{item.title}</p>
                <p className="achieve-sub">{item.sub}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
