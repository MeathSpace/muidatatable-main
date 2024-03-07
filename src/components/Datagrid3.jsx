import React from "react";
import MUIDataTable from "mui-datatables";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const Datagrid3 = () => {
  const columns = [
    {
      name: "Lot No",
      options: {
        customHeadRender: () => (
          <th
            style={{
              background: "#1e293b",
              width: "150px",
              borderBottom: "1px solid white",
              borderRight: "1px solid white",
            }}
          >
            <p style={{ textAlign: "center" }}>Lot Nos</p>
          </th>
        ),
        customBodyRender: (value) => (
          <div className="th-col" style={{ borderRight: "1px solid white" }}>
            <p style={{ textAlign: "center", color: "white" }}>{value}</p>
          </div>
        ),
      },
    },
    {
      name: "DieReceipt",
      options: {
        customBodyRender: (value) => (
          <div className="th-col-2">
            <p style={{ textAlign: "center", color: "#8F00FF" }}>{value}</p>
          </div>
        ),
      },
    },

    {
      options: {
        customHeadRender: (value) => (
          <th
            className="diff_div_head_3"
            style={{ borderBottom: "1px solid white", borderRight: "none" }}
          >
            <div className="diff_div_head_3">
              <div />
              <div>V</div>
            </div>
          </th>
        ),
        customBodyRender: (value) => (
          <div className="diff_div_3">
            <div />
            <div>{value} days</div>
          </div>
        ),
        filter: false,
        viewColumns: false,
      },
    },

    {
      name: "DumpIn",
      options: {
        customBodyRender: (value) => (
          <div className="th-col-2">
            <p style={{ textAlign: "center", color: "red" }}>{value}</p>
          </div>
        ),
      },
    },
    {
      options: {
        customHeadRender: (value) => (
          <th
            className="diff_div_head_3"
            style={{ borderBottom: "1px solid white", borderRight: "none" }}
          >
            <div className="diff_div_head_3">
              <div />
              <div>V</div>
            </div>
          </th>
        ),
        customBodyRender: (value) => (
          <div className="diff_div_3">
            <div />
            <div>{value} days</div>
          </div>
        ),
        filter: false,
        viewColumns: false,
      },
    },

    {
      name: "PumpOut",
      options: {
        customBodyRender: (value) => (
          <div className="th-col-2">
            <p style={{ textAlign: "center", color: "orangered" }}>{value}</p>
          </div>
        ),
      },
    },
    {
      options: {
        customHeadRender: (value) => (
          <th
            className="diff_div_head_3"
            style={{ borderBottom: "1px solid white", borderRight: "none" }}
          >
            <div className="diff_div_head_3">
              <div />
              <div>V</div>
            </div>
          </th>
        ),
        customBodyRender: (value) => (
          <div className="diff_div_3">
            <div />
            <div>{value} days</div>
          </div>
        ),
        filter: false,
        viewColumns: false,
      },
    },

    {
      name: "ProbeIn",
      options: {
        customBodyRender: (value) => (
          <div className="th-col-2">
            <p style={{ textAlign: "center", color: "yellow" }}>{value}</p>
          </div>
        ),
      },
    },
    {
      options: {
        customHeadRender: (value) => (
          <th
            className="diff_div_head_3"
            style={{ borderBottom: "1px solid white", borderRight: "none" }}
          >
            <div className="diff_div_head_3">
              <div />
              <div>V</div>
            </div>
          </th>
        ),
        customBodyRender: (value) => (
          <div className="diff_div_3">
            <div />
            <div>{value} days</div>
          </div>
        ),
        filter: false,
        viewColumns: false,
      },
    },

    {
      name: "ProbeOut",
      options: {
        customBodyRender: (value) => (
          <div className="th-col-2">
            <p style={{ textAlign: "center", color: "green" }}>{value}</p>
          </div>
        ),
      },
    },
    {
      options: {
        customHeadRender: (value) => (
          <th
            className="diff_div_head_3"
            style={{ borderBottom: "1px solid white", borderRight: "none" }}
          >
            <div className="diff_div_head_3">
              <div />
              <div>V</div>
            </div>
          </th>
        ),
        customBodyRender: (value) => (
          <div className="diff_div_3">
            <div />
            <div>{value} days</div>
          </div>
        ),
        filter: false,
        viewColumns: false,
      },
    },

    {
      name: "AssemblyIn",
      options: {
        // customHeadRender: () => (
        //     <th style={{ background: "#1e293b", borderBottom: "1px solid white" }}>
        //         <p style={{ textAlign: "center" }}>AssemblyIn</p>
        //     </th>
        // ),
        customBodyRender: (value) => (
          <div className="th-col-2">
            <p style={{ textAlign: "center", color: "red" }}>22-05-09</p>
          </div>
        ),
      },
    },
  ];

  const data = [
    ["00009", "-", 5, "-", 5, "-", 5, "22-05-05", 5, "-"],
    ["00009", "-", 5, "22-05-05", 5, "22-05-05", 5, "22-05-05", 5, "22-05-05"],
    ["00009", "22-05-05", 5, "22-05-05", 5, "-", 5, "-", 5, "22-05-05"],
    ["00009", "22-05-05", 5, "22-05-05", 5, "22-05-05", 5, "22-05-05", 5, "-"],
    ["00009", "26-05-05", 6, "-", 6, "26-05-05", 6, "26-05-05", 6, "-"],
    ["00009", "27-05-05", 7, "27-05-05", 7, "-", 7, "27-05-05", 7, "27-05-05"],
  ];

  const options = {
    selectableRows: false,
    elevation: 10,
    rowsPerPage: 6,
    rowsPerPageOptions: [6, 12, 18, 24],
    filter: false,
  };

  const getMuiTheme = () =>
    createTheme({
      typography: {
        // fontFamily:"Poppins"
      },
      palette: {
        background: {
          paper: "#1e293b",
          default: "#0f172a",
        },
        mode: "dark",
      },
      components: {
        MuiTableCell: {
          styleOverrides: {
            head: {
              padding: "10px",
              background: "#1e293b",
            },
            body: {
              background: "#1e293b",
              paddingInline: "0px",
              paddingBlock: "0px",
            },
            footer: {},
          },
        },
      },
    });

  return (
    <div className="container">
      <ThemeProvider theme={getMuiTheme()}>
        <MUIDataTable
          title={"Lots Status Tracking"}
          data={data}
          columns={columns}
          options={options}
        />
      </ThemeProvider>
      <MUIDataTable title={"table"} data={data} />
    </div>
  );
};

export default Datagrid3;
