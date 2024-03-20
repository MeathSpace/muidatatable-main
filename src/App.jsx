import React from "react";
import Datagrid from "./components/Datagrid";
import Datagrid2 from "./components/Datagrid2";
import Datagrid3 from "./components/Datagrid3";
import Table from "./Table/Table";

const App = () => {
  return (
    <>
      <h1
        style={{
          textAlign: "center",
          marginBlock: "25px",
        }}
      >
        DataGrid Material UI
      </h1>
      <Table />
    </>
  );
};

export default App;
