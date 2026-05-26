import React, { useRef } from "react";
import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { usePrintPages } from "./Components/usePrint";
import data from "./Components/Datajson";

export default function EJMAReport() {
  const contentRef = useRef(null);
  const totalPages = usePrintPages(contentRef);

  const {
    contactDetails,
    designParameters,
    thermalMovement,
    dimensions,
    material,
    resultSummaryFactors,
    stresses,
    singleLabelData,
    conditionData,
    moreData,
    evaluation,
  } = data;

  return (
    <div className="report-wrapper">
      <table className="master-table">
        {/* HEADER */}
        <thead>
          <tr>
            <td className="master-header-cell">
              <Header />
            </td>
          </tr>
        </thead>

        {/* FOOTER */}
        <tfoot>
          <tr>
            <td className="master-footer-cell">
              <Footer totalPages={totalPages} />
            </td>
          </tr>
        </tfoot>

        {/* BODY */}
        <tbody>
          <tr>
            <td>
              <div className="page-content" ref={contentRef}>
                {/* ── CONTACT DETAILS ── */}
                <table className="rpt-table">
                  <thead>
                    <tr>
                      <td className="sec-hdr" colSpan={4}>
                        Contact Details
                      </td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="label-cell">Customer</td>
                      <td className="value-cell" colSpan={3}>
                        {contactDetails.customer}
                      </td>
                    </tr>
                    <tr>
                      <td className="label-cell">Project Name</td>
                      <td className="value-cell" colSpan={3}>
                        {contactDetails.projectName}
                      </td>
                    </tr>
                    <tr>
                      <td className="label-cell">Project Desc.</td>
                      <td className="value-cell" colSpan={3}>
                        {contactDetails.projectDesc}
                      </td>
                    </tr>
                    <tr>
                      <td className="label-cell">End User</td>
                      <td className="value-cell" colSpan={3}>
                        {contactDetails.endUser}
                      </td>
                    </tr>
                    <tr>
                      <td className="label-cell">Consultant</td>
                      <td className="value-cell" colSpan={3}>
                        {contactDetails.consultant}
                      </td>
                    </tr>
                    <tr>
                      <td className="label-cell">PMC</td>
                      <td className="value-cell" colSpan={3}>
                        {contactDetails.pmc}
                      </td>
                    </tr>
                    <tr>
                      <td className="label-cell">Bellows Type</td>
                      <td className="value-cell" style={{ width: "28%" }}>
                        {contactDetails.bellowsType}
                      </td>
                      <td className="label-cell" style={{ width: "14%" }}>
                        Drawing No
                      </td>
                      <td className="value-cell">{contactDetails.drawingNo}</td>
                    </tr>
                    <tr>
                      <td className="label-cell">Item No</td>
                      <td className="value-cell">{contactDetails.itemNo}</td>
                      <td className="label-cell">Calculation No</td>
                      <td className="value-cell">
                        {contactDetails.calculationNo}
                      </td>
                    </tr>
                    <tr>
                      <td className="label-cell">Bellows No</td>
                      <td className="value-cell">{contactDetails.bellowsNo}</td>
                      <td className="label-cell">Calculation By</td>
                      <td className="value-cell">
                        {contactDetails.calculationBy}
                      </td>
                    </tr>
                  </tbody>
                </table>

                {/* ── DESIGN PARAMETERS ── */}
                <table className="rpt-table">
                  <thead>
                    <tr>
                      <td className="sec-hdr" colSpan={8}>
                        Design Parameters
                      </td>
                    </tr>
                    <tr className="column-header-row">
                    </tr>
                  </thead>
                  <tbody>
                    {designParameters.map((row, i) => (
                      <tr key={i}>
                        <td className="label-cell" style={{ width: "24%" }}>{row.label}</td>
                        <td className="symbol-cell" style={{ width: "4%" }}>{row.symbol}</td>
                        <td className="num value-cell" style={{ width: "8%" }}>{row.value}</td>
                        <td className="unit-cell" style={{ width: "5%" }}>{row.unit}</td>
                        <td className="spacer-cell"></td>
                        <td className="label-cell" style={{ width: "24%" }}>{row.label2}</td>
                        <td className="symbol-cell" style={{ width: "4%" }}>{row.symbol2}</td>
                        <td className="num value-cell" style={{ width: "8%" }}>{row.value2}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>

                {/* ── THERMAL MOVEMENT ── */}
                <table className="rpt-table">
                  <thead>
                    <tr>
                      <td className="sec-hdr" colSpan={7}>
                        Thermal Movement
                      </td>
                    </tr>
         </thead>
                   <tr className="column-header-row">
                        <td className="" colSpan="1" style={{ width: "40%" }}></td>
  
      <td className=" " colSpan="2.5" style={{ width: "40%" }}>Condition 1</td>
      <td className="spacer-cell-small"></td>
      <td className="" colSpan="3" style={{ width: "40%" }}>Condition 2</td>
    </tr>             
                  <tbody>
                    {thermalMovement.map((row, i) => (
                      <tr key={i}>
                        <td className="label-cell">{row.label}</td>
                        <td className="symbol-cell">{row.symbol}</td>
                        <td className="num value-cell ctr">{row.c1Value}</td>
                        <td className="spacer-cell-small"></td>
                        <td className="num value-cell ctr">{row.c2Value}</td>
                        <td className="value-cell">{row.c2Type}</td>
                        <td className="unit-cell">{row.unit}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>

                {/* ── DIMENSIONS ── */}
                <table className="rpt-table">
                  <thead>
                    <tr>
                      <td className="sec-hdr" colSpan={9}>
                        Dimensions
                      </td>
                    </tr>
                  </thead>
                  <tbody>
                    {dimensions.map((row, i) => (
                      <tr key={i}>
                        <td className="label-cell" style={{ width: "18%" }}>{row.label}</td>
                        <td className="symbol-cell" style={{ width: "5%" }}>
                          {row.symbol === "rm" ? <>r<sub>m</sub></> : row.symbol}
                        </td>
                        <td className="num value-cell" style={{ width: "10%" }}>{row.value}</td>
                        <td className="unit-cell" style={{ width: "5%" }}>{row.unit}</td>
                        <td className="spacer-cell"></td>
                        <td className="label-cell" style={{ width: "18%" }}>{row.label2}</td>
                        <td className="symbol-cell" style={{ width: "5%" }}>{row.symbol2}</td>
                        <td className="num value-cell" style={{ width: "10%" }}>{row.value2}</td>
                        <td className="unit-cell" style={{ width: "5%" }}>{row.unit2}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>

                {/* ── MATERIAL ── */}
                <table className="rpt-table">
                  <thead>
                    <tr>
                      <td className="sec-hdr" colSpan={5}>
                        Material
                      </td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="label-cell" style={{ width: "18%" }}>Bellows Element</td>
                      <td className="value-cell" style={{ width: "30%" }}>{material.bellowsElement}</td>
                      <td className="label-cell" style={{ width: "24%" }}>Center Spool</td>
                      <td></td>
                      <td className="value-cell">{material.centerSpool}</td>
                    </tr>
                    <tr>
                      <td className="label-cell">Collar</td>
                      <td className="value-cell">{material.collar}</td>
                      <td className="label-cell">Bellows in Creep Range</td>
                      <td></td>
                      <td className="value-cell">{material.bellowsInCreepRange}</td>
                    </tr>
                    <tr>
                      <td className="label-cell">Pipe End</td>
                      <td className="value-cell">{material.pipeEnd}</td>
                      <td className="label-cell">Bellows Material Yield</td>
                      <td className="value-cell">{material.bellowsMaterialYield}</td>
                      <td className="unit-cell">{material.bellowsMaterialYieldUnit}</td>
                    </tr>
                  </tbody>
                </table>

                {/* ── RESULT / SUMMARY – Factors ── */}
                <table className="rpt-table">
                  <thead>
                    <tr>
                      <td className="sec-hdr" colSpan={4}>
                        Result / Summary
                      </td>
                    </tr>
                  </thead>
                  <tbody>
                    {resultSummaryFactors[0] && (
                      <tr>
                        <td className="bold" style={{ width: "8%" }}>{resultSummaryFactors[0].symbol}</td>
                        <td rowSpan={3} className="description-cell" style={{ width: "62%" }}>
                          {resultSummaryFactors[0].description}
                        </td>
                        <td className="num value-cell" style={{ width: "15%" }}>{resultSummaryFactors[0].value}</td>
                        <td className="unit-cell" style={{ width: "15%" }}>{resultSummaryFactors[0].unit || ""}</td>
                      </tr>
                    )}
                    {resultSummaryFactors[1] && (
                      <tr>
                        <td className="bold" style={{ width: "8%" }}>{resultSummaryFactors[1].symbol}</td>
                        <td className="num value-cell" style={{ width: "15%" }}>{resultSummaryFactors[1].value}</td>
                        <td className="unit-cell" style={{ width: "15%" }}>{resultSummaryFactors[1].unit || ""}</td>
                      </tr>
                    )}
                    {resultSummaryFactors[2] && (
                      <tr>
                        <td className="bold" style={{ width: "8%" }}>{resultSummaryFactors[2].symbol}</td>
                        <td className="num value-cell" style={{ width: "15%" }}>{resultSummaryFactors[2].value}</td>
                        <td className="unit-cell" style={{ width: "15%" }}>{resultSummaryFactors[2].unit || ""}</td>
                      </tr>
                    )}
                    {resultSummaryFactors.slice(3).map((row) => (
                      <tr key={row.symbol}>
                        <td className="bold" style={{ width: "8%" }}>{row.symbol}</td>
                        <td className="description-cell" style={{ width: "62%" }}>{row.description}</td>
                        <td className="num value-cell" style={{ width: "15%" }}>{row.value}</td>
                        <td className="unit-cell" style={{ width: "15%" }}>{row.unit || ""}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>

                {/* ── RESULT / SUMMARY – Stresses ── */}
                <table className="rpt-table">
                  <thead>
                    <tr>
                      <td className="sec-hdr" colSpan={5}>
                        Result / Summary — Stresses
                      </td>
                    </tr>
                  </thead>
                  <tbody>
                    {stresses.map((row) => (
                      <tr key={row.symbol}>
                        <td className="bold text-center" style={{ width: "8%" }}>{row.symbol}</td>
                        <td className="description-cell" style={{ width: "44%" }} colSpan={2}>{row.description}</td>
                        <td className="num value-cell" style={{ width: "18%" }}>{row.value}</td>
                        <td className="ctr unit-cell" style={{ width: "12%" }}>{row.unit}</td>
                      </tr>
                    ))}
                    {singleLabelData.map((row, i) => (
                      <tr key={"sl" + i}>
                        <td colSpan={2} className="label-cell" style={{ width: "52%" }}>{row.label}</td>
                        <td className="ctr symbol-cell" style={{ width: "18%" }}>{row.symbol || "—"}</td>
                        <td className="num value-cell" style={{ width: "18%" }}>{row.value}</td>
                        <td className="ctr unit-cell" style={{ width: "12%" }}>{row.unit}</td>
                      </tr>
                    ))}
                    {conditionData.map((row, i) => {
                      const hasCondition = row.condition !== "";
                      return (
                        <tr key={"cr" + i}>
                          <td colSpan={hasCondition ? 1 : 2} className="label-cell" style={{ width: hasCondition ? "26%" : "52%" }}>{row.label}</td>
                          {hasCondition && <td className="condition-cell" style={{ width: "26%" }}>{row.condition}</td>}
                          <td className="ctr symbol-cell" style={{ width: "18%" }}>{row.symbol}</td>
                          <td className="num value-cell" style={{ width: "18%" }}>{row.value}</td>
                          <td className="ctr unit-cell" style={{ width: "12%" }}>{row.unit}</td>
                        </tr>
                      );
                    })}
                    {moreData.map((row, i) => (
                      <tr key={"mr" + i}>
                        <td colSpan={2} className="label-cell" style={{ width: "52%" }}>{row.label}</td>
                        <td className="ctr symbol-cell" style={{ width: "18%" }}>{row.symbol || "—"}</td>
                        <td className="num value-cell" style={{ width: "18%" }}>{row.value}</td>
                        <td className="ctr unit-cell" style={{ width: "12%" }}>{row.unit}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>

                {/* ── EVALUATION ── */}
                <table className="rpt-table">
                  <thead>
                    <tr>
                      <td className="sec-hdr" colSpan={1}>
                        Evaluation
                      </td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="evaluation-cell">{evaluation}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}