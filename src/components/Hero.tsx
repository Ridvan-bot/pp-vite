import './Hero.scss';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__content">
        <h1>Välkommen till denna hemsida</h1>
        <p>Byggd med React, TypeScript, Vite och modern design.</p>
        <a href="#" className="hero__cta">Kom igång</a>
      </div>
    </section>
  );
} 