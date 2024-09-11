import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { Typography, Box as MuiBox } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu'; // Importing the MenuIcon from MUI

// Custom Header Component
const CustomHeader = (props) => {
  const { colDef } = props;

  const handleClick = () => {
    console.log(`${colDef.headerName} icon clicked`); // Handle the click event here
  };

  return (
    <MuiBox
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '100%',
        px: 1,
        position: 'relative',
        paddingRight: '40px', // Ensure there's enough space for the icon
        overflow: 'hidden', // Prevent content overflow
      }}
    >
      <Typography variant="subtitle2" sx={{ flex: 1, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
        {colDef.headerName}
      </Typography>
      <MenuIcon 
        style={{ 
          fontSize: '16px', 
          color: '#333', 
          position: 'absolute', 
          right: 8, // Space from the right edge
          top: '50%', // Center vertically
          transform: 'translateY(-50%)',
          transition: 'none', // Disable transitions if any
          zIndex: 1, // Ensure icon is on top
          width: '16px', // Explicit width
          height: '16px', // Explicit height
        }} 
        onClick={handleClick} // Add onClick event handler
      />
    </MuiBox>
  );
};

const columns = [
  { field: 'subjectAll', headerName: 'Subject All', flex: 1, renderHeader: (params) => <CustomHeader {...params} /> },
  { field: 'callType', headerName: 'Call Type', flex: 1, renderHeader: (params) => <CustomHeader {...params} /> },
  { field: 'callStartTime', headerName: 'Call Start Time', flex: 1, renderHeader: (params) => <CustomHeader {...params} /> },
  { field: 'callDuration', headerName: 'Call Duration', flex: 1, renderHeader: (params) => <CustomHeader {...params} /> },
  { field: 'relatedTo', headerName: 'Related To', flex: 1, renderHeader: (params) => <CustomHeader {...params} /> },
  { field: 'contactName', headerName: 'Contact Name', flex: 1, renderHeader: (params) => <CustomHeader {...params} /> },
  { field: 'callOwner', headerName: 'Call Owner', flex: 1, renderHeader: (params) => <CustomHeader {...params} /> },
];

const rows = [
  { id: 1, subjectAll: 'Follow up with Lead', callType: 'Outbound', callStartTime: '03/07/2024 00:41', callDuration: '00:41', relatedTo: 'Chau Kitzman (Sample)', contactName: 'Sabu John E', callOwner: '' },
  // Add more rows as needed
];

export default function CallAgenda() {
  return (
    <Box sx={{ height: 750, width: 1200, backgroundColor: 'white' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={25}
        pageSizeOptions={[10, 25, 50]}
        checkboxSelection
        disableRowSelectionOnClick
        disableColumnMenu
        disableColumnSelector
        sx={{
          '& .MuiDataGrid-columnHeader': {
            position: 'relative',
            backgroundColor: '#f9f9f9',
            // Hide sorting icons and prevent extra spacing
            '& .MuiDataGrid-sortIcon': {
              display: 'none',
            },
            '& .MuiDataGrid-columnSeparator': {
              display: 'none',
            },
          },
          '& .MuiDataGrid-columnHeaderTitle': {
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
          },
          '& .MuiDataGrid-columnHeader:not(:first-of-type)': {
            '&::after': {
              content: '""',
              position: 'absolute',
              right: 0,
              top: '20%',
              bottom: '20%',
              width: '1px',
              backgroundColor: 'rgba(224, 224, 224, 1)',
            },
          },
          '& .MuiDataGrid-columnHeaders': {
            borderBottom: '2px solid rgba(224, 224, 224, 1)', // Solid line below the headers
          },
          '& .MuiDataGrid-cell': {
            borderBottom: '1px solid rgba(224, 224, 224, 1)', // Solid line between rows
          },
        }}
      />
    </Box>
  );
}
