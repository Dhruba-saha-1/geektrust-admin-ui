import { Button, selectClasses } from "@mui/material";
import React, { useEffect, useState } from "react";
import UserTable from "./UserTable";

function Paginator({ filteredUsers, allData, searchKey }) {
  const [paginatedData, setPaginatedData] = useState([]);

  const [pages, setPages] = useState([]);
  const [currentPage, setCurrentPage] = useState(null);

  const pagination = () => {
    let paginatedData = [];
    let currentPageEmployees = [];
    if (searchKey !== "") {
      filteredUsers.forEach((employee) => {
        if (currentPageEmployees.length < 10) {
          currentPageEmployees.push(employee);
        } else if (currentPageEmployees.length >= 10) {
          paginatedData = [...paginatedData, currentPageEmployees];
          currentPageEmployees = [employee];
        }
      });
    } else {
      allData.forEach((employee) => {
        if (currentPageEmployees.length < 10) {
          currentPageEmployees.push(employee);
        } else if (currentPageEmployees.length >= 10) {
          paginatedData = [...paginatedData, currentPageEmployees];
          currentPageEmployees = [employee];
        }
      });
    }

    if (currentPageEmployees.length) {
      paginatedData = [...paginatedData, currentPageEmployees];
    }

    setPaginatedData(paginatedData);
    setPages(Array.from(Array(paginatedData.length), (_, index) => index + 1));
  };

  useEffect(() => {
    pagination();
    if (!currentPage || searchKey != "") {
      setCurrentPage(pages[0]);
    }
  }, [filteredUsers, searchKey, allData]);

  if (paginatedData.length <= 0) {
    return <div>No Data Found</div>;
  }
  return (
    <>
      <div>
        <UserTable paginatedData={paginatedData[currentPage - 1]} />
      </div>
      <div
        style={{
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
        }}
      >
        <Button
          disabled={currentPage == pages[0] ? true : false}
          onClick={(e) => {
            e.preventDefault();
            setCurrentPage(pages[0]);
          }}
        >
          {"<<"}
        </Button>
        <Button
          disabled={currentPage == pages[0] ? true : false}
          onClick={(e) => {
            e.preventDefault();
            let previousPage = currentPage - 1;

            setCurrentPage(previousPage);
          }}
        >
          {"<"}
        </Button>
        {pages.map((page) => {
          return (
            <Button
              onClick={(e) => {
                e.preventDefault();
                setCurrentPage(page);
              }}
              color={page == currentPage ? "success" : "primary"}
              variant="contained"
            >
              {page}
            </Button>
          );
        })}
        <Button
          disabled={currentPage == pages[pages.length - 1] ? true : false}
          onClick={(e) => {
            e.preventDefault();
            let nextPage = currentPage + 1;
            setCurrentPage(nextPage);
          }}
        >
          {">"}
        </Button>
        <Button
          disabled={currentPage == pages[pages.length - 1] ? true : false}
          onClick={(e) => {
            e.preventDefault();
            setCurrentPage(pages.length);
          }}
        >
          {">>"}
        </Button>
      </div>
    </>
  );
}

export default Paginator;
