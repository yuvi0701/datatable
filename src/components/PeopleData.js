import React from 'react'
import DataTable from 'react-data-table-component'
import data from '../data.json'
const PeopleData = () => {
    const columns=[
        {
          name:"First Name",
         selector:"name",
          sortable:true},
          {
            name:"Last Name",
            selector:"name",
            sortable:true,
          },
          {
            name:"Age",
            selector:"age",
            sortable:true,
          }
          ,{
            name:"Full Name",
            selector:"name",
            sortable:true,
          }
    
      ]
  return (
    <div>
        <DataTable
        title="Employees"
        columns={columns}
        data={data}
        pagination
        highlightOnHover
      />
    </div>
  )
}

export default PeopleData