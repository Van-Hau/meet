import React, { useState, useEffect } from 'react'
import { Stack,Button,IconButton } from '@mui/material'
import AvTimerIcon from '@mui/icons-material/AvTimer';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import PeopleOutlineRoundedIcon from '@mui/icons-material/PeopleOutlineRounded';
import EqualizerRoundedIcon from '@mui/icons-material/EqualizerRounded';
import VideocamIcon from '@mui/icons-material/Videocam';
import { Avatar} from '@mui/material';
import {makeStyles } from '@mui/styles';
import HourglassBottomTwoToneIcon from '@mui/icons-material/HourglassBottomTwoTone';
const useStyles = makeStyles({
    root: {
        borderRight: '3px solid #00a389 !important',
        borderTopRightRadius: '0 !important',
        borderBottomRightRadius: '0 !important',
    },
  });
  
function ButtonMenu() {
    const [list, setList] = useState([
        <AvTimerIcon/>,
        <EventAvailableIcon/>,
        <RemoveRedEyeIcon/>,
        <PeopleOutlineRoundedIcon/>,
        <EqualizerRoundedIcon/>,
        <VideocamIcon/>])
  const [active, setActive] = useState(null)
  const classes = useStyles();
  return (
    <Stack height='100%' alignItems='center' >
    <Stack sx={{flex:'10%',justifyContent:'center'}}>
        <IconButton >
                <HourglassBottomTwoToneIcon sx={{color:'warning.light'}}/>
        </IconButton>
    </Stack>
    <Stack sx={{flex:'80%',justifyContent:'center'}}>
    <Stack direction='column' spacing={1} >
    {list.map((item,i) => {
          return (
            <Button key={i}
            onClick={() => setActive(item)} 
            className={active == item && classes.root}>
            <IconButton >
                {item}
            </IconButton>
            </Button>
          )
        })} 
    </Stack>
    </Stack>
    <Stack sx={{flex:'10%',justifyContent:'center'}}>
        <Avatar src='https://randomuser.me/api/portraits/thumb/women/91.jpg'></Avatar>
    </Stack>
</Stack>
  )
}
export default ButtonMenu
