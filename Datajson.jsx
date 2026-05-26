const reportData = {
  "contactDetails": {
    "customer": "Galiakotwala Engineering Company Pvt. Ltd.",
    "projectName": "Technical Re-Equipment Production & Technological Area",
    "projectDesc": "SK-20 OPO \"Sulfuric Acid Production Site\"",
    "endUser": "Charitable Foundation JSC \"Apatit\" SKP SK-20/1",
    "consultant": "Galiakotwala Technical Services",
    "pmc": "Chem. composition%: 4.76 - SO2, 7.3 - SO3, 5.96 - O2; 81.97 - N2",
    "bellowsType": "Single | Unreinforced",
    "drawingNo": "REPL-DRG-0191-001-R0",
    "itemNo": "Gas Duct: 2320x10 - 12X18H10T",
    "calculationNo": "REPL/2024/2057-R0",
    "bellowsNo": "2320ID-UEJ-100-WWL",
    "calculationBy": "Bhavin Siddhpura"
  },
  "designParameters": [
    {
      "label": "Internal Design Temperature",
      "symbol": "T",
      "value": "620",
      "unit": "°C",
      "label2": "Bellows Heat Treatment",
      "symbol2": "",
      "value2": "No",
      "unit2": ""
    },
    {
      "label": "Internal Design Pressure",
      "symbol": "P",
      "value": "0.1",
      "unit": "MPa",
      "label2": "Bellows Preset",
      "symbol2": "",
      "value2": "No",
      "unit2": ""
    },
    {
      "label": "Add. Fatigue Safety Factor",
      "symbol": "",
      "value": "1",
      "unit": "",
      "label2": "Bellows Weld Factor",
      "symbol2": "Cwb",
      "value2": "0.7",
      "unit2": ""
    },
    {
      "label": "Required Fatigue Cycles",
      "symbol": "",
      "value": "1000",
      "unit": "Nos",
      "label2": "Collar Weld Factor",
      "symbol2": "Cwb",
      "value2": "0.7",
      "unit2": ""
    }
  ],
  "thermalMovement": [
    {
      "label": "Axial Movement",
      "symbol": "x",
      "c1Value": "125",
      "c1Type": "Extension",
      "c2Value": "-0",
      "c2Type": "Compression",
      "unit": "mm"
    },
    {
      "label": "Lateral Movement",
      "symbol": "y",
      "c1Value": "0",
      "c1Type": "In Plan",
      "c2Value": "0",
      "c2Type": "Out Plan",
      "unit": "mm"
    },
    {
      "label": "Angular Movement",
      "symbol": "Θ",
      "c1Value": "0",
      "c1Type": "",
      "c2Value": "0",
      "c2Type": "",
      "unit": "Degree"
    }
  ],
  "dimensions": [
    {
      "label": "Bellows ID",
      "symbol": "",
      "value": "2320",
      "unit": "mm",
      "label2": "Tangent Length",
      "symbol2": "Lt",
      "value2": "25",
      "unit2": "mm"
    },
    {
      "label": "Bellows Outside Diameter",
      "symbol": "",
      "value": "2422.54",
      "unit": "mm",
      "label2": "Collar Length",
      "symbol2": "Lc",
      "value2": "0",
      "unit2": "mm"
    },
    {
      "label": "No. of Convolution",
      "symbol": "N",
      "value": "9",
      "unit": "Nos",
      "label2": "Collar Thickness",
      "symbol2": "tc",
      "value2": "0",
      "unit2": "mm"
    },
    {
      "label": "Layer Thickness",
      "symbol": "t",
      "value": "1.27",
      "unit": "mm",
      "label2": "Collar Area",
      "symbol2": "Atc",
      "value2": "0",
      "unit2": "mm²"
    },
    {
      "label": "No. of Layers",
      "symbol": "n",
      "value": "1",
      "unit": "No",
      "label2": "Center Spool Length",
      "symbol2": "",
      "value2": "0",
      "unit2": "mm"
    },
    {
      "label": "Mean Radius",
      "symbol": "rm",
      "value": "12.5",
      "unit": "mm",
      "label2": "Center Spool Mass",
      "symbol2": "Wcs",
      "value2": "0",
      "unit2": "Kgs"
    },
    {
      "label": "Convolution Pitch",
      "symbol": "q",
      "value": "50",
      "unit": "mm",
      "label2": "Center Spool Angle",
      "symbol2": "θu",
      "value2": "0",
      "unit2": "Deg."
    },
    {
      "label": "Convolution Depth",
      "symbol": "w",
      "value": "50",
      "unit": "mm",
      "label2": "Pipe End Length",
      "symbol2": "",
      "value2": "100",
      "unit2": "mm"
    },
    {
      "label": "Tangent End ID",
      "symbol": "Db",
      "value": "2320",
      "unit": "mm",
      "label2": "Pipe End Thickness",
      "symbol2": "tpe",
      "value2": "10",
      "unit2": "mm"
    }
  ],
  "material": {
    "bellowsElement": "Inconel 625",
    "centerSpool": "N.A",
    "collar": "N.A",
    "bellowsInCreepRange": "No",
    "pipeEnd": "SA 240 TYPE 304L",
    "bellowsMaterialYield": "414",
    "bellowsMaterialYieldUnit": "MPa"
  },
  "resultSummaryFactors": [
    {
      "symbol": "Cd",
      "description": "Factor used in specific design calculation to relate U-shaped bellows convolutions segment behaviour to simple strip beam",
      "value": "1.7048",
      "unit":""
    },
    {
      "symbol": "Cf",
      "description": "Factor used in specific design calculation to relate U-shaped bellows convolutions segment behaviour to simple strip beam",
      "value": "1.7033",
      "unit":""
    },
    {
      "symbol": "Cp",
      "description": "Factor used in specific design calculation to relate U-shaped bellows convolutions segment behaviour to simple strip beam",
      "value": "0.6634",
      "unit":""
    },
    {
      "symbol": "Ku",
      "description": "Factor establishing relationship between equivalent axial displacement per convolution due to lateral deflection and the ration",
      "value": "N.A",
      "unit":""
    }
  ],
  "stresses": [
    {
      "symbol": "S1",
      "description": "Bellows Tangent Circumferential Membrane Stress Due to Pressure",
      "value": "28.0563",
      "unit": "MPa"
    },
    {
      "symbol": "S'1",
      "description": "Collar Circumferential Membrane Stress Due to Pressure",
      "value": "N.A.",
      "unit": "MPa"
    },
    {
      "symbol": "S2",
      "description": "Bellows Circumferential Membrane Stress Due to Pressure",
      "value": "46.9124",
      "unit": "MPa"
    },
    {
      "symbol": "S3",
      "description": "Bellows Meridional Membrane Stress Due to Pressure",
      "value": "1.9901",
      "unit": "MPa"
    },
    {
      "symbol": "S4",
      "description": "Bellows Meridional Bending Stress Due to Pressure",
      "value": "52.5494",
      "unit": "MPa"
    },
    {
      "symbol": "S5",
      "description": "Bellows Meridional Membrane Stress Due to Deflection",
      "value": "10.6543",
      "unit": "MPa"
    },
    {
      "symbol": "S6",
      "description": "Bellows Meridional Bending Stress Due to Deflection",
      "value": "1412.3173",
      "unit": "MPa"
    }
  ],
  "singleLabelData": [
    {
      "label": "Bellows Allowable Stress",
      "symbol": "Sab",
      "value": "147.2",
      "unit": "MPa"
    },
    {
      "label": "Bellows E at temperature",
      "symbol": "Eb",
      "value": "170800",
      "unit": "MPa"
    },
    {
      "label": "Bellows Yield at temperature",
      "symbol": "Sy",
      "value": "409.203",
      "unit": "MPa"
    },
    {
      "label": "Rated Max Axial Movement",
      "symbol": "ec",
      "value": "213.57",
      "unit": "mm"
    },
    {
      "label": "Rated Max Axial Movement",
      "symbol": "ee",
      "value": "225",
      "unit": "mm"
    },
    {
      "label": "Total Equiv. Axial Movement",
      "symbol": "",
      "value": "125.0001",
      "unit": "mm"
    },
    {
      "label": "Axial Spring Rate",
      "symbol": "fiu",
      "value": "712.2796",
      "unit": "N/mm"
    }
  ],
  "conditionData": [
    {
      "label": "Lateral Spring Rate",
      "condition": "condition 1",
      "symbol": "Vl",
      "value": "N.A.",
      "unit": "N/mm"
    },
    {
      "label": "Lateral Spring Rate",
      "condition": "condition 2",
      "symbol": "Vl",
      "value": "N.A",
      "unit": "N/mm"
    },
    {
      "label": "Bending Spring Rate",
      "condition": "condition 1",
      "symbol": "Mθ",
      "value": "0",
      "unit": "N.m / Deg."
    },
    {
      "label": "Bending Spring Rate",
      "condition": "condition 2",
      "symbol": "Mθ",
      "value": "0",
      "unit": "N.m / Deg."
    },
    {
      "label": "Inplane Instability",
      "condition": "",
      "symbol": "Psi",
      "value": "0.3846",
      "unit": "MPa"
    },
    {
      "label": "Column Instability",
      "condition": "condition 1",
      "symbol": "Psc",
      "value": "1.6907",
      "unit": "MPa"
    },
    {
      "label": "Column Instability",
      "condition": "condition 2",
      "symbol": "Psc",
      "value": "1.6907",
      "unit": "MPa"
    }
  ],
  "moreData": [
    {
      "label": "Allowed Cycle",
      "symbol": "Nc",
      "value": "27496",
      "unit": "Nos."
    },
    {
      "label": "Bellows Length",
      "symbol": "Le",
      "value": "500",
      "unit": "mm"
    },
    {
      "label": "Bellows Convoluted Length",
      "symbol": "Lb",
      "value": "450",
      "unit": "mm"
    },
    {
      "label": "Bellows Length",
      "symbol": "Lu",
      "value": "0",
      "unit": "mm"
    },
    {
      "label": "Total Length",
      "symbol": "",
      "value": "650",
      "unit": "mm"
    },
    {
      "label": "Thickness",
      "symbol": "tp",
      "value": "1.2562",
      "unit": "mm"
    },
    {
      "label": "Effective Area",
      "symbol": "Ae",
      "value": "4416232.1506",
      "unit": "mm²"
    },
    {
      "label": "Thrust Force",
      "symbol": "",
      "value": "441.6232",
      "unit": "kN"
    }
  ],
  "evaluation": "Bellows element is equal or stronger than weld ends/pipe ends against vacuum."
};

export default reportData;