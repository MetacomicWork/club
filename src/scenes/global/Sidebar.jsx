import {useState} from "react";
import { ProSidebar,Menu,MenuItem } from "react-pro-sidebar";
import 'react-pro-sidebar/dist/css/styles.css';
import {Box,IconButton,Typography,useTheme} from "@mui/material";
import {Link} from 'react-router-dom';
import {tokens} from '../../theme';
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MenuBookIcon from '@mui/icons-material/MenuBook';
import ViewListSharpIcon from '@mui/icons-material/ViewListSharp';
import AdsClickIcon from '@mui/icons-material/AdsClick';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import HailOutlinedIcon from '@mui/icons-material/HailOutlined';
const Item=({title,to,icon,selected,setSelected})=>{
    const theme=useTheme();
    const colors=tokens(theme.palette.mode);
    return (
        <MenuItem active={selected===title} style={{ color: colors.grey[100]}} onClick={()=>setSelected(title)} icon={icon}>
            <Typography>{title}</Typography>
            <Link to={to}/>
            </MenuItem>
    )
}
const Sidebar=()=>{
    const theme=useTheme();
    const colors=tokens(theme.palette.mode);
    const [isCollapsed,setIsCollapsed]=useState(false);
    const [selected,setSelected]=useState("Dashboard");

    return( 
        <Box sx={{
            "& .pro-sidebar-inner":{
                background: `${colors.primary[400]} !important`
            },
            "& .pro-icon-wrapper":{
                backgroundColor:"transparent !important"
            },
            "& .pro-inner-item":{
                padding:"5px 35px 5px 20px !important"
            },
            "& .pro-inner-item:hover":{
                color:"#868dfb !important"
            },
            "& .pro-menu-item.active":{
                color:"#6870fa !important"
            },
        }}
        >
            <ProSidebar collapsed={isCollapsed}>
                <Menu iconShape='square'>
                    <MenuItem 
                    onClick={()=>setIsCollapsed(!isCollapsed)}
                    icon={isCollapsed?<MenuOutlinedIcon/>:undefined}
                    style={{
                        margin:"10px 0 20px 0",
                        color: colors.grey[100],
                    }}
                    >
         {!isCollapsed && (
            
            <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            ml="15px">
                
                <Typography variant="h3" color={colors.grey[100]}>
                    ADMINS
                </Typography>
                    <IconButton onClick={()=>setIsCollapsed(!isCollapsed)}/>
<MenuOutlinedIcon/>
                </Box>
         )}
         </MenuItem>
        
  

            <Box md='25px'>
                <Box padding-Left={isCollapsed?undefined:"10px"} >
                    <Item
                    title="Dashboard"
                    to='/'
                    icon={<HomeOutlinedIcon/>}
                    selected={selected}
                    setSelected={setSelected}/>
                    <Item
                    title="Team"
                    to='/team'
                    icon={<PeopleOutlinedIcon/>}
                    selected={selected}
                    setSelected={setSelected}/>
                     <Item
                    title="Menu"
                    to='/menu'
                    icon={<MenuBookIcon/>}
                    selected={selected}
                    setSelected={setSelected}/>
                    <Item
                    title="Orders"
                    to='/orders'
                    icon={<ViewListSharpIcon/>}
                    selected={selected}
                    setSelected={setSelected}/>
                    <Item
                    title="Ads"
                    to='/Ads'
                    icon={<AdsClickIcon/>}
                    selected={selected}
                    setSelected={setSelected}/>
                     <Item
                    title="Add Resturant"
                    to='/Add'
                    icon={<AddCircleOutlineIcon/>}
                    selected={selected}
                    setSelected={setSelected}/>
                    
                   

                    </Box>
                    <Box padding-Left={isCollapsed?undefined:"10px"}  >
                    <Item
                    title="Helpline"
                    to='/help'
                    icon={<ContactSupportIcon/>}
                    selected={selected}
                    setSelected={setSelected}/>
                   
                    <Item
                    title="Logout"
                    to='/'
                    icon={<ExitToAppIcon/>}
                    selected={selected}
                    setSelected={setSelected}/>
                        </Box>
            </Box>
        
         </Menu>
       
         </ProSidebar>
        
         </Box>
    );
};
export default Sidebar;