import React from 'react'
import DataTable from 'react-data-table-component'
import dataa from '../dataa.json'
import styled from "styled-components";

const StyledCell = styled.div`
  &.true {
    color: green !important;
    width: 100%;
    height: 100%;
  }
  &.false{
    color: red !important;
  }
`;
const PeopleData = () => {

  function getCssClass(value) {
    if (value===1) return "true";
     else return "false";
    
  }
    const columns=[
        {
          name:"First Name",
         selector:"first_name",
          sortable:true},
          {
            name:"Last Name",
            selector:"last_name",
            sortable:true,
          },
          {
            name:"Area",
            selector:"area",
            sortable:true,
          }
          ,{
            name:"email",
            selector:"email",
            sortable:true,
          }
          ,{
            name:"Gender",
            selector:"gender",
            sortable:true,
          }
          ,{
            name:"Time",
            selector:"time",
            sortable:true,
          }
          ,{
            
            name:"Status",
            selector:"status",
            sortable:true,
            cell: (row) => (
              <StyledCell className={getCssClass(row.status)}>
                {row.status}
              </StyledCell>)
          
          }
          ,{
            name:"Mobile",
            selector:"mobile",
            sortable:true,
          }
    
      ]
   
const conditionalRowStyles = [
    {
      when: row => row.toggleSelected,
      style: {
        backgroundColor: "blue",
        color:"white"
      }
    }
  ];
   
  const [data, setData] = React.useState(dataa);

  const handleRow = row => {
    const updatedData = data.map(item => {
      if (row.id !== item.id) {
        return item;
      }

      return {
        ...item,
        toggleSelected: !item.toggleSelected
      };
    });

    setData(updatedData);
  };

  return (
    <div>
        <DataTable
        title="Data table"
        columns={columns}
        data={data}
        onRowClicked={handleRow}
        conditionalRowStyles={conditionalRowStyles}
         responsive
      />
    </div>
  )
}

export default PeopleData
