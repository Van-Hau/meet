import React from 'react'
import {makeStyles } from '@mui/styles';
import { Avatar} from '@mui/material';
const useStyles = makeStyles({
    message: {
       "&":{ position:'relative',display:'flex',width:'100%',margin:'5px 0'},
       "&>div":{fontWeight:'500',maxWidth:'65%',display:'flex',alignItems:'flex-start',flexDirection:'column',fontSize: '0.9em'},
       "&>div>div":{marginLeft:'12px'},
       "& p":{position:'relative',marginBottom:'5px',right:'0',textAlign:'left',padding:'12px',margin:'0 0 0 1em',background:'#fff',borderRadius:'10px',fontSize:'0.9em'},
        "& p:last-child::before":{content:"''",position:'absolute',bottom:'0',left:'-12px',width:'20px',height:'20px',background:'linear-gradient(315deg,#fff 0%,#fff 50%,transparent 50%,transparent)'},
        "& p span":{display:'block',marginTop:'5px',fontSize:'0.85em',opacity:'0.5'}
    },
    selfMessage: {
      "&": {
        alignItems: "flex-end",
        justifyContent:'flex-start'  
      },
 
    },
   
  });
function AnotherMessage(props) {
  const classes = useStyles();
  return (
    <div className={classes.message+' '+classes.selfMessage}>
        <Avatar sx={{ width: 30, height: 30 }} src={props.srcAvatar}></Avatar>
        <div>
            <div>{props.name}</div>
            {props.messList.map((item,i) =>
                <p key={i}>{item.mess}<br/><span>{item.time}</span></p>
            )}
            
        </div>
    </div>
  )
}

export default AnotherMessage