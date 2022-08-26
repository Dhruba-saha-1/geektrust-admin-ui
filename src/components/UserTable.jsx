import React, { useEffect, useState } from "react";
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
import IconButton from "@mui/material/IconButton";
import { Checkbox } from "@mui/material";
import "./UserTable.css";

export default function UserTable({ paginatedData }) {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    setEmployees(paginatedData);
  }, [paginatedData]);

  if (employees) {
    return (
      <div>
        <table id="mainTable">
          <thead>
            <tr>
              <th>
                <Checkbox
                  checked={
                    employees.filter((employees) => !employees.isSelected)
                      .length
                      ? false
                      : true
                  }
                  onChange={({ target: { checked } }) => {
                    if (!checked) {
                      setEmployees(
                        employees.map((employee) => {
                          employee.isSelected = false;

                          return employee;
                        })
                      );

                      return;
                    }

                    setEmployees(
                      employees.map((employee) => {
                        employee.isSelected = true;

                        return employee;
                      })
                    );
                  }}
                />
              </th>
              <th>Name</th>
              <th>Email-ID</th>
              <th>Role</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((emps, index) => {
              return (
                <tr key={emps.id}>
                  <td style={{ width: "1rem" }}>
                    <Checkbox
                      onChange={() => {
                        emps.isSelected = !emps.isSelected;
                        setEmployees((prevEmployees) => {
                          prevEmployees[index] = emps;

                          return [...prevEmployees];
                        });
                      }}
                      checked={emps.isSelected}
                    />
                  </td>
                  <td>{emps.name}</td>
                  <td>{emps.email}</td>
                  <td>{emps.role}</td>
                  <td>
                    <IconButton
                      onClick={() => {
                        alert("edit");
                      }}
                    >
                      <AiOutlineEdit />
                    </IconButton>
                    <IconButton
                      onClick={() => {
                        alert("delete");
                      }}
                    >
                      <AiOutlineDelete color="red" />
                    </IconButton>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
