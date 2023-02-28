import { Avatar, Badge, Box, Stack } from '@mui/material'
import React from 'react';
import MicOffIcon from '@mui/icons-material/MicOff';
import GraphicEqIcon from '@mui/icons-material/GraphicEq';
import {makeStyles } from '@mui/styles';
const useStyles= {
    transform: 'scale(0.8)',
    position:'absolute',
    bottom:'0px',
    right:'10px',
    borderRadius:'50%',
    padding:'2px'    
  
};
const icons = [
    <div></div>,
    <MicOffIcon style={useStyles} fontSize="small" sx={{background:'#fc5d5b',color:'#fff'}}/>,
    <GraphicEqIcon style={useStyles} fontSize="small" sx={{background:'#00a389',color:'#fff'}}/>
];
function Member(props) {
 
  return (
    <Box sx={{position:'relative'}}>
        <Avatar variant="rounded" src={props.url} sx={{position:'relative',width:'60px',height:'60px'}}>
        </Avatar>
        {icons[props.state]}
    </Box>
  )
}

export default Member