import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataTeam } from "../../data/mockData";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";

import SecurityOutlinedIcon from '@mui/icons-material/SecurityOutlined';
// import SecurityOutlinedIcon from "../../components/Header";
const Team = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const columns = [
    { field: "id", headerName: "ID" },
    {
      field: "name",
      headerName: "NAME",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "age",
      headerName: "AGE",
      type: "number",
      headerAlign: "left",
      align: "left",
    },
    { field: "phone", headerName: "Phone Number", flex: 1 },
    { field: "email", headerName: "Email", flex: 1 },
    {
      field: "access",
      headerName: "Access level",
      flex: 1,
      renderCell: ({ row: { access } }) => {
        return (
          <Box
            width="60%"
            m="0 auto"
            p="5px"
            display="flex"
            justifyContent="center"
            backgroundColor={
              access === "admin"
                ? colors.greenAccent[600]
                : colors.greenAccent[700]
            }
            borderRadius="4px"
          >
            {access === "admin" && <AdminPanelSettingsOutlinedIcon />}
            {access === "manager" && <SecurityOutlinedIcon />}
            <Typography color={colors.grey[100]} sx={{ ml: "5px" }}></Typography>
          </Box>
        );
      },
    },
  ];

  return (
    <Box m="20px">
      <Box title="Team" subtitle="Team members" />
      <Box m="40px 0 0 0" height="75vh"
      sx={{
        "& .MuiDataGrid-root":{border:"none"},
        "& .MuiDataGrid-cell":{borderbottom:"none"},
        "& .name-column--cell":{color:colors.greenAccent[300]},
        "& .MuiDataGrid-columnHeaders":{backgroundColor:colors.blueAccent[500],borderBottom:"none",},
         "& .MuiDataGrid-virtualScroller":{backgroundColor:colors.primary[400]},
         "& .MuiDataGrid-footerContainer":{borderTop:"none",backgroundColor:colors.blueAccent[800],},
      }}
      >
        <DataGrid rows={mockDataTeam} columns={columns} />
      </Box>
    </Box>
  );
};
export default Team;
