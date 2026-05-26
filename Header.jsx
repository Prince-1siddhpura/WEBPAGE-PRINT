import ratnflexLogo from '../assets/Screenshot 2026-05-25 185532.png';

export default function Header() {
  return (
    <div className="report-header">
      <h1 className="report-title">EJMA 10th Edition Report</h1>
      <img
        src={ratnflexLogo}
        alt="Ratnaflex Engineering Pvt. Ltd."
        className="report-logo"
      />
    </div>
  );
}