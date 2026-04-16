export default function GridBackdrop() {
  return (
    <>
      <div className="horizon-grid" />
      <div className="page-grid page-grid-primary" />
      <div className="page-grid page-grid-secondary" />
      <div className="scanline-overlay" />
      <div className="radar-sweep radar-sweep-left animate-radar-spin" />
      <div className="radar-sweep radar-sweep-right animate-radar-spin-delayed" />
      <div className="noise-overlay" />
    </>
  );
}
