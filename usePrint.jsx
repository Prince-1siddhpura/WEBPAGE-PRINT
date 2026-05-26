// import { useState, useEffect } from 'react';

// /**
//  * usePrintPages
//  * Estimates the total number of A4 portrait pages that the report
//  * will occupy, both on screen (live) and at the moment the browser
//  * fires the beforeprint event.
//  *
//  * A4 portrait at 96 dpi = 1122.52 px tall (297 mm).
//  * With @page margins of 15mm top/bottom that printable height ≈ 960 px.
//  * We subtract a further ~80 px to account for the fixed thead / tfoot
//  * cells that the browser repeats on every page.
//  *
//  * @param {React.RefObject} ref  – ref attached to the scrollable content div
//  * @returns {number} totalPages
//  */
// export function usePrintPages(ref) {
//   const [totalPages, setTotalPages] = useState(1);

//   useEffect(() => {
//     const A4_PRINTABLE_HEIGHT = 880; // px per page (empirically safe value)

//     const calculate = () => {
//       if (!ref.current) return;
//       const contentH = ref.current.scrollHeight;
//       const pages = Math.max(1, Math.ceil(contentH / A4_PRINTABLE_HEIGHT));
//       setTotalPages(pages);
//     };

//     // Run immediately and on every layout change
//     calculate();
//     window.addEventListener('resize', calculate);
//     window.addEventListener('beforeprint', calculate);

//     return () => {
//       window.removeEventListener('resize', calculate);
//       window.removeEventListener('beforeprint', calculate);
//     };
//   }, [ref]);

//   return totalPages;
// }/

import { useState, useEffect } from "react";

export function usePrintPages(contentRef) {
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const calculatePages = () => {
      if (contentRef.current) {
        // Get the page height in pixels (A4 - margins)
        const pageHeight = 1122; // Approximate A4 height in pixels at 96dpi
        const contentHeight = contentRef.current.scrollHeight;
        const pages = Math.ceil(contentHeight / pageHeight);
        setTotalPages(pages || 1);
      }
    };

    calculatePages();
    window.addEventListener("resize", calculatePages);
    return () => window.removeEventListener("resize", calculatePages);
  }, [contentRef]);

  return totalPages;
}