import './Buttons.scss';

export default function Buttons() {
  return (
    <div className="button-demo">
      <button className="btn btn--primary">Primär knapp</button>
      <button className="btn btn--secondary">Sekundär knapp</button>
      <button className="btn btn--outline">Outline knapp</button>
      <button className="btn btn--ghost">Ghost knapp</button>
      <button className="btn btn--disabled" disabled>Inaktiverad</button>
    </div>
  );
} 