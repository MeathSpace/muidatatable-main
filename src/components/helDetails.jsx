import { useStyles } from "./styles";
import { useTheme } from "@emotion/react";
import { Box, Pagination } from "@mui/material";
import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { CSVLink } from "react-csv";
import { useNavigate, useParams } from "react-router";

const ModuleName = ({ params, classes }) => {
  return (
    <div className={classes.cell_class}>
      <p>{params.value}</p>
    </div>
  );
};

const LogicalBoardN = ({ params, classes }) => {
  return (
    <div className={classes.cell_class}>
      <p>{params.value}</p>
    </div>
  );
};

const AdvantestPartnumberComp = ({ params, classes }) => {
  return (
    <div className={classes.cell_class}>
      <p>{params.value}</p>
    </div>
  );
};

const PartRevisionComp = ({ params, classes }) => {
  return (
    <div className={classes.cell_class}>
      <p>{params.value}</p>
    </div>
  );
};

const SubcontractorInformationComp = ({ params, classes }) => {
  return (
    <div className={classes.cell_class}>
      <p>{params.value}</p>
    </div>
  );
};

const SerialNumberComp = ({ params, classes }) => {
  return (
    <div className={classes.cell_class}>
      <p>{params.value}</p>
    </div>
  );
};

const ProductionDateComp = ({ params, classes }) => {
  return (
    <div className={classes.cell_class}>
      <p>{params.value}</p>
    </div>
  );
};

const HLAPartnumberComp = ({ params, classes }) => {
  return (
    <div className={classes.cell_class}>
      <p>{params.value}</p>
    </div>
  );
};

const HLARevisionComp = ({ params, classes }) => {
  return (
    <div className={classes.cell_class}>
      <p>{params.value}</p>
    </div>
  );
};

const HLAManufacturerComp = ({ params, classes }) => {
  return (
    <div className={classes.cell_class}>
      <p>{params.value}</p>
    </div>
  );
};

const HLAProductionDateComp = ({ params, classes }) => {
  return (
    <div className={classes.cell_class}>
      <p>{params.value}</p>
    </div>
  );
};

const HLASerialnumberComp = ({ params, classes }) => {
  return (
    <div>
      <p>{params.value}</p>
    </div>
  );
};

const FPGARevisionComp = ({ params, classes }) => {
  return (
    <div className={classes.cell_class}>
      <p>{params.value}</p>
    </div>
  );
};

const CompliancyStatusComp = ({ params, classes }) => {
  return (
    <div className={classes.cell_class}>
      <div
        className={classes.compliancy_check}
        style={{
          background: params.value === "Yes" ? "#31C285" : "#B80351",
        }}
      ></div>
      <p>{params.value === "Yes" ? "Yes" : "No"}</p>
    </div>
  );
};

const HelvetiaCompliancyCheckDetails = ({
  setOpenDetails,
  productId,
  isNavbarOpen,
}) => {
  const theme = useTheme();
  const navigate = useNavigate();
  const { pid, fid, tid } = useParams();
  const classes = useStyles({ theme, isNavbarOpen });

  const [data, setData] = useState([
    {
      Name: "DI_TH_SX",
      "Compliancy Status": null,
      Modules: [
        {
          Modulename: "SYSN",
          LogicalBoardNrInTester: 1,
          AdvantestPartnumber: null,
          PartRevision: null,
          SubcontractorInformation: null,
          SerialNumber: "MY19101045",
          ProductionDate: null,
          HLAPartnumber: null,
          HLARevision: null,
          HLAManufacturer: null,
          HLAProductionDate: null,
          HLASerialnumber: null,
          FPGARevision: null,
          CompliancyStatus: "Unknown",
        },
        {
          Modulename: "SYST",
          LogicalBoardNrInTester: 1,
          AdvantestPartnumber: null,
          PartRevision: null,
          SubcontractorInformation: null,
          SerialNumber: "uXBTmKOViJSMtfkXmEI73M",
          ProductionDate: null,
          HLAPartnumber: null,
          HLARevision: null,
          HLAManufacturer: null,
          HLAProductionDate: null,
          HLASerialnumber: null,
          FPGARevision: null,
          CompliancyStatus: "Unknown",
        },
        {
          Modulename: "CCG",
          LogicalBoardNrInTester: 1,
          AdvantestPartnumber: null,
          PartRevision: null,
          SubcontractorInformation: null,
          SerialNumber: "8yJfnaLH6W90wmusOJxzAw",
          ProductionDate: null,
          HLAPartnumber: null,
          HLARevision: null,
          HLAManufacturer: null,
          HLAProductionDate: null,
          HLASerialnumber: null,
          FPGARevision: null,
          CompliancyStatus: "Unknown",
        },
        {
          Modulename: "CCG",
          LogicalBoardNrInTester: 2,
          AdvantestPartnumber: null,
          PartRevision: null,
          SubcontractorInformation: null,
          SerialNumber: "3FE3exrZkKDQui8E7XMnMg",
          ProductionDate: null,
          HLAPartnumber: null,
          HLARevision: null,
          HLAManufacturer: null,
          HLAProductionDate: null,
          HLASerialnumber: null,
          FPGARevision: null,
          CompliancyStatus: "Unknown",
        },
      ],
      CompliancyStatus: "Unknown",
    },
    {
      Name: "Computer Interface Card",
      CompliancyStatus: "Yes",
      Modules: [
        {
          Modulename: "CICD",
          LogicalBoardNrInTester: 1,
          AdvantestPartnumber: "EK220-66401",
          PartRevision: "015",
          SubcontractorInformation: "EL",
          SerialNumber: "3195",
          ProductionDate: 336,
          HLAPartnumber: null,
          HLARevision: null,
          HLAManufacturer: null,
          HLAProductionDate: null,
          HLASerialnumber: null,
          FPGARevision: "0x18",
          CompliancyStatus: "Yes",
        },
      ],
    },
    {
      Name: "System control board",
      CompliancyStatus: "Yes",
      Modules: [
        {
          Modulename: "SCB",
          LogicalBoardNrInTester: 1,
          AdvantestPartnumber: "EK050-66450",
          PartRevision: "018",
          SubcontractorInformation: "EL",
          SerialNumber: "2821",
          ProductionDate: 344,
          HLAPartnumber: null,
          HLARevision: null,
          HLAManufacturer: null,
          HLAProductionDate: null,
          HLASerialnumber: null,
          FPGARevision: "0x21",
          CompliancyStatus: "Yes",
        },
      ],
    },
    {
      Name: "PS5000 board in CC2 slot 5, Control-Segment-Slot-Nr 205, pogo blocks 125 525 129 529 117 517 121 521 101 501 105 505 201 601 205 605",
      CompliancyStatus: "Yes",
      Modules: [
        {
          Modulename: "BIB",
          LogicalBoardNrInTester: 205,
          AdvantestPartnumber: "EK601-66411",
          PartRevision: "025",
          SubcontractorInformation: "ZZ",
          SerialNumber: "30685",
          ProductionDate: 344,
          HLAPartnumber: "EK601-66600",
          HLARevision: "036",
          HLAManufacturer: "ZZ",
          HLAProductionDate: 345,
          HLASerialnumber: "010915",
          FPGARevision: "0x2B",
          CompliancyStatus: "Yes",
        },
        {
          Modulename: "FIB",
          LogicalBoardNrInTester: 205,
          AdvantestPartnumber: "EK601-66412",
          PartRevision: "026",
          SubcontractorInformation: "ZZ",
          SerialNumber: "30773",
          ProductionDate: 343,
          HLAPartnumber: "EK601-66600",
          HLARevision: "036",
          HLAManufacturer: "ZZ",
          HLAProductionDate: 345,
          HLASerialnumber: "010915",
          FPGARevision: null,
          CompliancyStatus: "Yes",
        },
        {
          Modulename: "MOD",
          LogicalBoardNrInTester: 2051,
          AdvantestPartnumber: "EK601-66443",
          PartRevision: "031",
          SubcontractorInformation: "ZZ",
          SerialNumber: "154673",
          ProductionDate: 342,
          HLAPartnumber: "EK601-66600",
          HLARevision: "036",
          HLAManufacturer: "ZZ",
          HLAProductionDate: 345,
          HLASerialnumber: "010915",
          FPGARevision: null,
          CompliancyStatus: "Yes",
        },
        {
          Modulename: "MOD",
          LogicalBoardNrInTester: 2052,
          AdvantestPartnumber: "EK601-66443",
          PartRevision: "031",
          SubcontractorInformation: "ZZ",
          SerialNumber: "150985",
          ProductionDate: 336,
          HLAPartnumber: "EK601-66600",
          HLARevision: "036",
          HLAManufacturer: "ZZ",
          HLAProductionDate: 345,
          HLASerialnumber: "010915",
          FPGARevision: null,
          CompliancyStatus: "Yes",
        },
        {
          Modulename: "MOD",
          LogicalBoardNrInTester: 2053,
          AdvantestPartnumber: "EK601-66443",
          PartRevision: "031",
          SubcontractorInformation: "ZZ",
          SerialNumber: "152120",
          ProductionDate: 336,
          HLAPartnumber: "EK601-66600",
          HLARevision: "036",
          HLAManufacturer: "ZZ",
          HLAProductionDate: 345,
          HLASerialnumber: "010915",
          FPGARevision: null,
          CompliancyStatus: "Yes",
        },
        {
          Modulename: "MOD",
          LogicalBoardNrInTester: 2054,
          AdvantestPartnumber: "EK601-66443",
          PartRevision: "031",
          SubcontractorInformation: "ZZ",
          SerialNumber: "151579",
          ProductionDate: 336,
          HLAPartnumber: "EK601-66600",
          HLARevision: "036",
          HLAManufacturer: "ZZ",
          HLAProductionDate: 345,
          HLASerialnumber: "010915",
          FPGARevision: null,
          CompliancyStatus: "Yes",
        },
        {
          Modulename: "MOD",
          LogicalBoardNrInTester: 2055,
          AdvantestPartnumber: "EK601-66443",
          PartRevision: "031",
          SubcontractorInformation: "ZZ",
          SerialNumber: "153607",
          ProductionDate: 341,
          HLAPartnumber: "EK601-66600",
          HLARevision: "036",
          HLAManufacturer: "ZZ",
          HLAProductionDate: 345,
          HLASerialnumber: "010915",
          FPGARevision: null,
          CompliancyStatus: "Yes",
        },
        {
          Modulename: "MOD",
          LogicalBoardNrInTester: 2056,
          AdvantestPartnumber: "EK601-66443",
          PartRevision: "031",
          SubcontractorInformation: "ZZ",
          SerialNumber: "153679",
          ProductionDate: 341,
          HLAPartnumber: "EK601-66600",
          HLARevision: "036",
          HLAManufacturer: "ZZ",
          HLAProductionDate: 345,
          HLASerialnumber: "010915",
          FPGARevision: null,
          CompliancyStatus: "Yes",
        },
        {
          Modulename: "MOD",
          LogicalBoardNrInTester: 2057,
          AdvantestPartnumber: "EK601-66443",
          PartRevision: "031",
          SubcontractorInformation: "ZZ",
          SerialNumber: "152523",
          ProductionDate: 339,
          HLAPartnumber: "EK601-66600",
          HLARevision: "036",
          HLAManufacturer: "ZZ",
          HLAProductionDate: 345,
          HLASerialnumber: "010915",
          FPGARevision: null,
          CompliancyStatus: "Yes",
        },
        {
          Modulename: "MOD",
          LogicalBoardNrInTester: 2058,
          AdvantestPartnumber: "EK601-66443",
          PartRevision: "031",
          SubcontractorInformation: "ZZ",
          SerialNumber: "152660",
          ProductionDate: 339,
          HLAPartnumber: "EK601-66600",
          HLARevision: "036",
          HLAManufacturer: "ZZ",
          HLAProductionDate: 345,
          HLASerialnumber: "010915",
          FPGARevision: null,
          CompliancyStatus: "Yes",
        },
        {
          Modulename: "PCON",
          LogicalBoardNrInTester: 205,
          AdvantestPartnumber: "EK601-61601",
          PartRevision: "007",
          SubcontractorInformation: "RB",
          SerialNumber: "17797",
          ProductionDate: 345,
          HLAPartnumber: "EK601-66600",
          HLARevision: "036",
          HLAManufacturer: "ZZ",
          HLAProductionDate: 345,
          HLASerialnumber: "010915",
          FPGARevision: null,
          CompliancyStatus: "Yes",
        },
      ],
    },
  ]);

  const [currentPage, setCurrentPage] = useState(2);

  // Api data
  const modulesArray = data.flatMap((item) => item.Modules);
  console.log(modulesArray);

  const modulesArrayData = modulesArray.map((row, index) => ({
    id: index + 1,
    ...row,
  }));

  const rows = modulesArrayData;

  const columns = [
    {
      field: "Modulename",
      headerName: "Module Name",
      headerClassName: classes.super_app_theme_header,
      width: 80,
      renderHeader: (params) => (
        <div
          style={{
            whiteSpace: "normal",
            lineHeight: "normal",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <p>MODULE</p>
          <p>NAME</p>
        </div>
      ),
      renderCell: (params) => <ModuleName params={params} classes={classes} />,
    },
    {
      field: "LogicalBoardNrInTester",
      headerName: "Logical Board N",
      headerClassName: classes.super_app_theme_header,
      width: 80,
      renderHeader: (params) => (
        <div
          style={{
            whiteSpace: "normal",
            lineHeight: "normal",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <p>LOGICAL</p>
          <p>BOARD</p>
        </div>
      ),
      renderCell: (params) => (
        <LogicalBoardN params={params} classes={classes} />
      ),
    },
    {
      field: "AdvantestPartnumber",
      headerName: "AdvantestPartnumber",
      headerClassName: classes.super_app_theme_header,
      width: 100,
      renderHeader: (params) => (
        <div
          style={{
            whiteSpace: "normal",
            lineHeight: "normal",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <p>ADV</p>
          <p>PART</p>
        </div>
      ),
      renderCell: (params) => (
        <AdvantestPartnumberComp params={params} classes={classes} />
      ),
    },

    {
      field: "PartRevision",
      headerName: "PartRevision",
      headerClassName: classes.super_app_theme_header,
      width: 70,
      renderHeader: (params) => (
        <div
          style={{
            whiteSpace: "normal",
            lineHeight: "normal",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <p>PART</p>
          <p>REV</p>
        </div>
      ),
      renderCell: (params) => (
        <PartRevisionComp params={params} classes={classes} />
      ),
    },

    {
      field: "SubcontractorInformation",
      headerName: "SubcontractorInformation",
      headerClassName: classes.super_app_theme_header,
      width: 90,
      renderHeader: (params) => (
        <div
          style={{
            whiteSpace: "normal",
            lineHeight: "normal",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <p>SUBCON</p>
          <p>INFO</p>
        </div>
      ),
      renderCell: (params) => (
        <SubcontractorInformationComp params={params} classes={classes} />
      ),
    },

    {
      field: "SerialNumber",
      headerName: "SerialNumber",
      headerClassName: classes.super_app_theme_header,
      width: 90,
      renderHeader: (params) => (
        <div
          style={{
            whiteSpace: "normal",
            lineHeight: "normal",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <p>SERIAL</p>
          <p>NUMBER</p>
        </div>
      ),
      renderCell: (params) => (
        <SerialNumberComp params={params} classes={classes} />
      ),
    },

    {
      field: "ProductionDate",
      headerName: "ProductionDate",
      headerClassName: classes.super_app_theme_header,
      width: 70,
      renderHeader: (params) => (
        <div
          style={{
            whiteSpace: "normal",
            lineHeight: "normal",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <p>PROD</p>
          <p>DATE</p>
        </div>
      ),
      renderCell: (params) => (
        <ProductionDateComp params={params} classes={classes} />
      ),
    },

    {
      field: "HLAPartnumber",
      headerName: "HLAPartnumber",
      headerClassName: classes.super_app_theme_header,
      width: 100,
      renderHeader: (params) => (
        <div
          style={{
            whiteSpace: "normal",
            lineHeight: "normal",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <p>HLA</p>
          <p>PARTIN</p>
        </div>
      ),
      renderCell: (params) => (
        <HLAPartnumberComp params={params} classes={classes} />
      ),
    },

    {
      field: "HLARevision",
      headerName: "HLARevision",
      headerClassName: classes.super_app_theme_header,
      width: 60,
      renderHeader: (params) => (
        <div
          style={{
            whiteSpace: "normal",
            lineHeight: "normal",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <p>HLA</p>
          <p>REV</p>
        </div>
      ),
      renderCell: (params) => (
        <HLARevisionComp params={params} classes={classes} />
      ),
    },

    {
      field: "HLAManufacturer",
      headerName: "HLAManufacturer",
      headerClassName: classes.super_app_theme_header,
      width: 80,
      renderHeader: (params) => (
        <div
          style={{
            whiteSpace: "normal",
            lineHeight: "normal",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <p>HLA</p>
          <p>MANUF.</p>
        </div>
      ),
      renderCell: (params) => (
        <HLAManufacturerComp params={params} classes={classes} />
      ),
    },

    {
      field: "HLAProductionDate",
      headerName: "HLAProductionDate",
      headerClassName: classes.super_app_theme_header,
      width: 90,
      renderHeader: (params) => (
        <div
          style={{
            whiteSpace: "normal",
            lineHeight: "normal",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <p>HLAPROD</p>
          <p>DATE</p>
        </div>
      ),
      renderCell: (params) => (
        <HLAProductionDateComp params={params} classes={classes} />
      ),
    },

    {
      field: "HLASerialnumber",
      headerName: "HLASerialnumber",
      headerClassName: classes.super_app_theme_header,
      width: 90,
      renderHeader: (params) => (
        <div
          style={{
            whiteSpace: "normal",
            lineHeight: "normal",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <p>HLA</p>
          <p>SERIAL.N</p>
        </div>
      ),
      renderCell: (params) => (
        <HLASerialnumberComp params={params} classes={classes} />
      ),
    },

    {
      field: "FPGARevision",
      headerName: "FPGARevision",
      headerClassName: classes.super_app_theme_header,
      width: 80,
      renderHeader: (params) => (
        <div
          style={{
            whiteSpace: "normal",
            lineHeight: "normal",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <p>FPGA</p>
          <p>REV</p>
        </div>
      ),
      renderCell: (params) => (
        <FPGARevisionComp params={params} classes={classes} />
      ),
    },

    {
      field: "CompliancyStatus",
      headerName: "CompliancyStatus",
      headerClassName: classes.super_app_theme_header,
      width: 100,
      renderHeader: (params) => (
        <div
          style={{
            whiteSpace: "normal",
            lineHeight: "normal",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <p>COMP.TO</p>
          <p>SHIPMENT</p>
        </div>
      ),
      renderCell: (params) => (
        <CompliancyStatusComp params={params} classes={classes} />
      ),
    },
  ];

  const [rowsPerPage, setRowsPerPage] = useState(5);

  const [page, setPage] = useState(1);
  const pageSize = rowsPerPage;
  const totalRows = rows.length;
  const totalPages = Math.ceil(totalRows / pageSize);

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  //This code is calculating the start and endIndex of each page
  const paginatedRows = rows.slice((page - 1) * pageSize, page * pageSize);

  const startIndex = (page - 1) * pageSize;
  const endIndex = Math.min(page * pageSize, totalRows);

  console.log("start - end Index ", startIndex, endIndex);

  const rowsperpageHandler = (e) => {
    parseInt(setRowsPerPage(e.target.value));
    setPage(1);
  };

  return (
    <>
      <Box className={classes.theader}>
        <p>List of EDC Files</p>
        <div className={classes.theaderbtngroup}>
          <button>
            <CSVLink
              style={{ textDecoration: "none" }}
              data={paginatedRows} // or whatever data you want to export
              headers={columns.map((column) => ({
                label: column.headerName,
                key: column.field,
              }))}
              filename="data.csv"
            >
              <p>Download</p>
            </CSVLink>
          </button>

          <button
            onClick={() => {
              navigate(`/overview/entry/${pid}/${fid}`);
              setOpenDetails(false);
            }}
          >
            <p>Back</p>
          </button>
        </div>
      </Box>
      <Box className={classes.pageWrapper}>
        <Box className={classes.detailsHeader}>
          <p>
            Details about System with EDC file: S2G23-094H MY19100908 edc codes
            pon.txt
          </p>
          <div>
            <p>Compliant to Shipment</p>
            <div>
              <div></div>
              <p>No</p>
            </div>
          </div>
          <div>
            <p>
              GlassWall Rev. Rule Set. 3 &nbsp; | &nbsp; Computation Date &
              Time: 2023-10-25 T 10:44:29:97
            </p>
            <p>
              Hostname: jpgl55.adv.advantest.com &nbsp; | &nbsp; Workstation
              Model: HP Z4 G4 Workstation &nbsp; | &nbsp; Workstation SN:
              4E234CPRK &nbsp; | &nbsp; Workstation BIOS: P61 V02.67 &nbsp; |
              &nbsp; Workstation VM-TYPE: Workstation
            </p>
            <p>
              Workstation Model: HP Z4 G4 Workstation &nbsp; | &nbsp;
              Workstation SN: 4E234CPRK &nbsp; | &nbsp; Workstation BIOS: P61
              V02.67 &nbsp; | &nbsp; Workstation VM-TYPE: Workstation
            </p>
          </div>
        </Box>
        <DataGrid
          rows={paginatedRows}
          pageSize={pageSize}
          columns={columns}
          checkboxSelection={false}
          disableRowSelectionOnClick
          style={{
            border: "none",
            color: "#5B5D6E",
            fontWeight: "500",
            fontSize: "13px",
            border: "1px solid #5B5D6E",
          }}
          hideFooterPagination
          disableColumnMenu={true}
          hideFooter
        />
        <Box className={classes.pagination_container}>
          <div>
            <Pagination
              count={totalPages}
              page={page}
              onChange={handlePageChange}
            />
          </div>
          <div>
            <div>
              <label style={{ marginRight: "10px" }}>Rows Per Page</label>
              <select value={rowsPerPage} onChange={rowsperpageHandler}>
                <option
                  value="5"
                  style={{
                    backgroundColor: pageSize == 5 ? "#B80351" : "initial",
                    color: pageSize == 5 ? "#fff" : "initial",
                    fontWeight: "500",
                  }}
                >
                  5
                </option>
                <option
                  value="10"
                  style={{
                    backgroundColor: pageSize == 10 ? "#B80351" : "initial",
                    color: pageSize == 10 ? "#fff" : "initial",
                    fontWeight: "500",
                  }}
                >
                  10
                </option>
                <option
                  value="18"
                  style={{
                    backgroundColor: pageSize == 18 ? "#B80351" : "initial",
                    color: pageSize == 18 ? "#fff" : "initial",
                    fontWeight: "500",
                  }}
                >
                  18
                </option>
              </select>
            </div>

            <div>
              <label>Showing</label>
              <select
                value={`${startIndex + 1} - ${endIndex}`}
                onChange={(e) =>
                  setPage(
                    Math.ceil(
                      Number(e.target.value.split(" - ")[0]) / pageSize,
                    ),
                  )
                }
              >
                {Array.from({ length: totalPages }, (_, index) => {
                  const start = index * pageSize + 1;
                  const end = Math.min((index + 1) * pageSize, totalRows);
                  const optionValue = `${start} - ${end}`;

                  return (
                    <option
                      key={index}
                      value={optionValue}
                      style={{
                        background:
                          optionValue === `${startIndex + 1} - ${endIndex}`
                            ? "#B80351"
                            : "inherit",
                        color:
                          optionValue === `${startIndex + 1} - ${endIndex}`
                            ? "#fff"
                            : "inherit",
                        fontWeight: "500",
                      }}
                    >
                      {optionValue}
                    </option>
                  );
                })}
              </select>
              <p>of {rows.length}</p>
            </div>
          </div>
        </Box>
      </Box>
    </>
  );
};

export default HelvetiaCompliancyCheckDetails;
