import React, { useEffect, useState } from "react";
import APIRequest from "../services/APIRequest";
import Paginator from "./Paginator";
import SearchBar from "./SearchBar";

function MainData() {
  const [allEmployees, setAllEmployees] = useState([]);
  const [allData, setAllData] = useState([]);
  const apiRequest = new APIRequest();

  const loadEmployees = async () => {
    try {
      const employees = await apiRequest.getData();
      setAllEmployees(employees);
      setAllData(employees);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadEmployees();
  }, []);

  return (
    <div>
      <SearchBar allEmployees={allEmployees} allData={allData} />
    </div>
  );
}

export default MainData;
