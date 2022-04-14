import React, { useState } from 'react'
import './datatable.scss'
import { DataGrid } from '@mui/x-data-grid';
import { userColumns, userRows } from '../../datatablesource';

import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


const Datatable = () => {
  const [rowsNumber, setRowsNumber] = useState('6')
  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <div className="viewButton">View</div>
            <div className="deleteButton">Delete</div>
          </div>
        );
      },
    },
  ];
  function handleChange(event) {
    setRowsNumber(event.target.value); //Change the state from the dropdown
  }

  return (
    <div className="datatable">
       <Box sx={{ minWidth: 120 }}>
      <FormControl className="select">
        <InputLabel id="demo-simple-select-label">Rows per Page</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={rowsNumber}//rowsNumber by default
          label="Rows per Page"
          onChange={handleChange}
        >
          <MenuItem value={3}>3</MenuItem>
          <MenuItem value={6}>6</MenuItem>
          <MenuItem value={9}>9</MenuItem>
          <MenuItem value={12}>12</MenuItem>
        </Select>
      </FormControl>
    </Box>
      <DataGrid
        rows={userRows}
        columns={userColumns.concat(actionColumn)}//Add action column to the end of the columns
        pageSize={rowsNumber}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  )
}

export default Datatable;