import { Tabs, TextField, Typography } from '@material-ui/core';
import { TabContext, TabList, TabPanel } from '@mui/lab'
import { Box, Tab,Button, Input, InputBase } from '@mui/material'
import React, { useState } from 'react' ;  
import {makeStyles } from '@mui/styles';
import { Stack } from '@mui/system';
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import {FormControl,InputLabel,FilledInput,OutlinedInput,InputAdornment,IconButton} from '@material-ui/core';
import { TextFields, TextFieldsOutlined } from '@mui/icons-material';
import MyMessage from './MyMessage';
import AnotherMessage from './AnotherMessage';
const useStyles = makeStyles({
      active: {
         "& button":{ borderRadius: '10px'},
          "& button:focus":{color: '#00a389',background: '#d1e6e7'},
          "& button.Mui-selected":{color: '#00a389',background: '#d1e6e7'},
      },
      tabs: {
        "& .MuiTabs-indicator": {
          display: "none"  
        }
      },
      input: {
        "& input:focus": {
          border: "none",
        }
      },
    });
function GroupChat() {
const [value,setValue]=useState('1')
const handleChange=(event,newValue)=>{
  setValue(newValue)}
const classes = useStyles();
  return (
    <Stack sx={{flex:'30%',borderRadius:'10px',overflow: 'hidden',height:'100%'}}>
        <Stack justifyContent='space-around' direction='row' style={{backgroundColor:'#edf0f5',height:'100%'}}>
          <Box sx={{width:'100%'}}>
            <TabContext value={value}>
                <Stack direction='row' sx={{borderBottom: '1px solid rgba(50, 50, 93, 0.25)',justifyContent:'space-around'}}>
                    <Stack justifyContent='center' fontSize='1rem' fontWeight='500'>Group Chat</Stack>
                    <TabList aria-label='Tabs example' onChange={handleChange} className={classes.tabs+' '+ classes.active} >
                        <Tab value="1" label='Messages' />
                        <Tab value="2" label='Participants' />
                    </TabList>   
                </Stack>
                
                <TabPanel value="1" sx={{p:1,height:'calc(100% - 64px)'}}>
                    <Stack sx={{width:'100%',boxSizing:'border-box',height:'calc(100% - 48px)',position:'relative',overflowY:'auto'}}>
                        <MyMessage messList={[{mess:"Thanks",time:"12:14"}]}/>
                        <AnotherMessage messList={[{mess:"No Problems !",time:"12:14"},{mess:"See you again",time:"12:15"}]} srcAvatar="https://randomuser.me/api/portraits/thumb/women/91.jpg" name="Alexander Morris"/>
                        <MyMessage messList={[{mess:"Thanks",time:"12:14"}]}/>
                        <AnotherMessage messList={[{mess:"No Problems !",time:"12:14"},{mess:"See you again",time:"12:15"}]} srcAvatar="https://randomuser.me/api/portraits/thumb/women/91.jpg" name="Alexander Morris"/>
                        <MyMessage messList={[{mess:"Thanks",time:"12:14"}]}/>
                        <AnotherMessage messList={[{mess:"No Problems !",time:"12:14"},{mess:"See you again",time:"12:15"}]} srcAvatar="https://randomuser.me/api/portraits/thumb/women/91.jpg" name="Alexander Morris"/>
                        <MyMessage messList={[{mess:"Thanks",time:"12:14"}]}/>
                        <AnotherMessage messList={[{mess:"No Problems !",time:"12:14"},{mess:"See you again",time:"12:15"}]} srcAvatar="https://randomuser.me/api/portraits/thumb/women/91.jpg" name="Alexander Morris"/>
                        <MyMessage messList={[{mess:"Thanks",time:"12:14"}]}/>
                        
                    </Stack>
                    <Stack sx={{background:'#fff',p:1,borderRadius:'10px'}}>
                        <FormControl variant="outlined" >
                            <InputBase placeholder='Write your message...'
                              id="outlined-adornment-password"
                              type='text'
                              sx={{ml:1}}
                              endAdornment={
                                <InputAdornment position="end">
                                  <IconButton 
                                    // onClick={handleClickSend}
                                    // onMouseDown={handleMouseDownPassword}
                                    // onChange={handleChangeType} 
                                    edge="end">
                                      <SendRoundedIcon fontSize='small' sx={{borderRadius:'10px',p:1,backgroundColor:'#26ccb1',color:'#fff'}} />
                                  </IconButton>
                                </InputAdornment>}
                                
                              />
                        </FormControl>
                    </Stack>
                </TabPanel>
                <TabPanel value="2">Participants</TabPanel>
            </TabContext>
          </Box>
        </Stack>
    </Stack>
    

  )
}

export default GroupChat