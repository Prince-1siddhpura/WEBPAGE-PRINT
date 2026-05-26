/**
 * Footer
 * @param {number} totalPages  – total page count from usePrintPages
 *
 * Screen: renders "Page 1 of N" via React (JS-driven).
 * Print:  CSS counter(page) drives the live page number;
 *         data-total drives the denominator via attr(data-total).
 */
export default function Footer({ totalPages = 1 }) {
  return (
    <div className="report-footer">
      <span className="footer-company">Ratnaflex Engineering Pvt. Ltd.</span>
      {/* The ::before pseudo-element shows "Page X" via CSS counter(page) in print.
          The ::after pseudo-element shows " of Y" via attr(data-total).
          On screen, the .footer-page-screen span shows a JS-calculated value. */}
      <span className="footer-page" data-total={totalPages} />
      <span className="footer-page-screen">Page 1 of {totalPages}</span>
    </div>
  );
}