import { ACHIEVEMENTS, ACHIEVEMENTS_LABEL } from "../data/content";

export function Achievements() {
  return (
    <section className="section achievements" aria-labelledby="achievements-label">
      <div className="container">
        <p className="achieve-label" id="achievements-label">
          {ACHIEVEMENTS_LABEL}
        </p>
        <ul className="achieve-list">
          {ACHIEVEMENTS.map((item) => (
            <li key={item.event}>
              <div>
                <p className="achieve-outcome">{item.outcome}</p>
                <p className="achieve-event">{item.event}</p>
                {item.venue ? <p className="achieve-venue">{item.venue}</p> : null}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
