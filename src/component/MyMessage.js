import React from 'react'
import {makeStyles } from '@mui/styles';
const useStyles = makeStyles({
    message: {
       "&":{ position:'relative',display:'flex',width:'100%',margin:'5px 0'},
       "&>div":{fontWeight:'500',maxWidth:'65%',display:'flex',alignItems:'flex-end',flexDirection:'column',fontSize: '0.9em'},
       "&>div>div":{alignSelf:'flex-start'},
       "& p":{position:'relative',wordBreak:'break-all',marginBottom:'5px',right:'0',textAlign:'right',padding:'12px',margin:'0 1em 0 0',background:'#d0d3e3',borderRadius:'10px',fontSize:'0.9em'},
        "& p:last-child::before":{content:"''",position:'absolute',bottom:'0',right:'-12px',width:'20px',height:'20px',background:'linear-gradient(45deg,#d0d3e3 0%,#d0d3e3 50%,transparent 50%,transparent)'},
        "& p span":{display:'block',marginTop:'5px',fontSize:'0.85em',opacity:'0.5'}
    },
    selfMessage: {
      "&": {
        justifyContent:'flex-end'  
      },
 
    },
   
  });
function MyMessage(props) {
  const classes = useStyles();
  return (
    <div className={classes.message+' '+classes.selfMessage}>
        <div>
            <div>Bạn</div>
            {props.messList.map((item,i) =>
                <p key={i}>{item.mess}<br/><span>{item.time}</span></p>
            )}
            
        </div>
    </div>
  )
}

export default MyMessage