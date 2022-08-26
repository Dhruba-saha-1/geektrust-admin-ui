import React, { useState, useEffect } from "react";
import Paginator from "./Paginator";

function SearchBar({ allEmployees, allData }) {
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [searchKey, setSearchKey] = useState("");

  useEffect(() => {
    if (searchKey !== "") {
      setFilteredUsers(
        allEmployees.filter((employee) => {
          return (
            employee.name.toLowerCase().includes(searchKey.toLowerCase()) ||
            employee.email.toLowerCase().includes(searchKey.toLowerCase()) ||
            employee.role.toLowerCase().includes(searchKey.toLowerCase())
          );
        })
      );
    } else {
      setFilteredUsers(allEmployees);
    }
  }, [allEmployees, searchKey]);

  const handleChange = (e) => {
    setSearchKey(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        value={searchKey}
        onChange={handleChange}
        placeholder="Search by Name, E-Mail or Role"
        style={{
          width: "90%",
          padding: 10,
          justifyContent: "center",
          borderRadius: 10,
          borderColor: "black",
          margin: 10,
          fontSize: 20,
        }}
      />
      <Paginator
        filteredUsers={filteredUsers}
        searchKey={searchKey}
        allData={allData}
      />
    </div>
  );
}

export default SearchBar;
