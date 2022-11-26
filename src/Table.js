import React, { useState } from 'react'
import TableRow from './TableRow'

import "./Table.css"

const Table = ({ data, config }) => {
    // console.log(config)
    let allowedColumns = config.allowedColumns ? config.allowedColumns : ["name", "city", "email", "joining", "role"]
    let allowedSorting = config.allowedSorting ? config.allowedSorting : ["name", "city", "email", "joining", "role"]

    // console.log(allowedColumns)
    // console.log(allowedSorting)

    const [tableData, setTableData] = useState(data);
    const [sortField, setSortField] = useState("");
    const [order, setOrder] = useState("asc");

    const handleSorting = (sortField, sortOrder) => {
        // console.log(sortField, sortOrder)
        // console.log(sortField)
        if (sortField) {
            const sorted = [...tableData].sort((a, b) => {
                // console.log(a["person"]["name"])
                // console.log(a[sortField])
                let temp1 = sortField == "name" ? a["person"]["name"] : a[sortField]
                let temp2 = sortField == "name" ? b["person"]["name"] : b[sortField]
                return (
                    temp1.toString().localeCompare(temp2.toString(), "en", {
                        numeric: true,
                    }) * (sortOrder === "asc" ? 1 : -1)
                )
            })
            setTableData(sorted);
        }
    };

    const handleSortingChange = (accessor) => {
        // console.log(accessor)
        const sortOrder = accessor === sortField && order === "asc" ? "desc" : "asc";
        setSortField(accessor);
        setOrder(sortOrder);
        handleSorting(accessor, sortOrder);
    }

    return (
        <table className="table-container">
            <thead>
                <tr>
                    <th className={`${allowedColumns.includes("name") ? "" : "hide"}`}>
                        Name
                        <span className={`${allowedSorting.includes("name") ? "" : "hide"}`} onClick={() => handleSortingChange("name")}><i className={`fa-solid fa-arrow-${order === "asc" ? "down" : "up"}-wide-short`}></i></span>
                    </th>
                    <th className={`${allowedColumns.includes("city") ? "" : "hide"}`}>
                        City
                        <span className={`${allowedSorting.includes("city") ? "" : "hide"}`} onClick={() => handleSortingChange("city")}><i className={`fa-solid fa-arrow-${order === "asc" ? "down" : "up"}-wide-short`}></i></span>
                    </th>
                    <th className={`${allowedColumns.includes("email") ? "" : "hide"}`}>
                        Email Address
                        <span className={`${allowedSorting.includes("email") ? "" : "hide"}`} onClick={() => handleSortingChange("email")}><i className={`fa-solid fa-arrow-${order === "asc" ? "down" : "up"}-wide-short`}></i></span>
                    </th>
                    <th className={`${allowedColumns.includes("joining") ? "" : "hide"}`}>
                        Joining Date
                        <span className={`${allowedSorting.includes("joining") ? "" : "hide"}`} onClick={() => handleSortingChange("joiningDate")}><i className={`fa-solid fa-arrow-${order === "asc" ? "down" : "up"}-wide-short`}></i></span>
                    </th>
                    <th className={`${allowedColumns.includes("role") ? "" : "hide"}`}>
                        Role
                        <span className={`${allowedSorting.includes("role") ? "" : "hide"}`} onClick={() => handleSortingChange("role")}><i className={`fa-solid fa-arrow-${order === "asc" ? "down" : "up"}-wide-short`}></i></span>
                    </th>
                </tr>
            </thead>
            <tbody>
                {tableData.map(data => (
                    <TableRow key={data.email} data={data} allowedColumns={allowedColumns} />
                ))}
            </tbody>
        </table>
    )
}

export default Table