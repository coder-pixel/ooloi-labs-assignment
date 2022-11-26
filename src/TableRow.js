import React from 'react'

const TableRow = ({ data, allowedColumns }) => {
    return (
        <tr>
            <td className={`${allowedColumns.includes("name") ? "" : "hide"}`}><span className='profile'><img src={data.person.avatar} alt={data.person.name} />{data.person.name}</span></td>
            <td className={`${allowedColumns.includes("city") ? "" : "hide"}`}>{data.city}</td>
            <td className={`${allowedColumns.includes("email") ? "" : "hide"}`}><a href={`mailto:${data.email}`}>{data.email}</a></td>
            <td className={`${allowedColumns.includes("joining") ? "" : "hide"}`}>{data.joiningDate}</td>
            <td className={`${allowedColumns.includes("role") ? "" : "hide"}`}>{data.role}</td>
        </tr>
    )
}

export default TableRow