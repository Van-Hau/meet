import {
  Avatar,
  AvatarGroup,
  Backdrop,
  Button,
  Chip,
  Divider,
  Grid,
  IconButton,
  Slider,
} from "@mui/material";
import { Stack, Box } from "@mui/system";
import React, { useState } from "react";
import PeopleIcon from "@mui/icons-material/People";
import { makeStyles } from "@mui/styles";
import AddIcon from "@mui/icons-material/Add";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import PersonOffIcon from "@mui/icons-material/PersonOff";
import Member from "./Member";
import screen from "../screen_1.jpg";
import Avatar_1 from "../avatar_1.jpg";
import Avatar_2 from "../avatar_2.jpg";
import Avatar_3 from "../avatar_3.jpg";
import Avatar_4 from "../avatar_4.jpg";
import Avatar_7 from "../avatar_7.jpg";
import Avatar_6 from "../avatar_6.jpg";
import MicIcon from "@mui/icons-material/Mic";
import CallEndIcon from "@mui/icons-material/CallEnd";
import VideocamIcon from "@mui/icons-material/Videocam";
import SettingsIcon from "@mui/icons-material/Settings";

import {
  OpenWithTwoTone,
  RadioButtonChecked,
  RadioButtonCheckedTwoTone,
  VolumeUp,
} from "@mui/icons-material";
const useStyles = makeStyles({
  flex: {
    flexDirection: "row !important",
    alignItems: "center",
  },
  member: {
    "&>div:first-child": { margin: "-35px 0 0 0px" },
    "&>div": { marginLeft: "0px !important", width: "60px", height: "60px" },
  },
  circle: {
    "&>circle": { color: "red" },
  },
  feature: {
    color: "#fff",
    padding: "10px",
    background: "rgba(173,168,165, 0.7)",
  },
  slider: {
    height: 8,
    "&": { color: "#00a389 !important" },
    "& .MuiSlider-rail": {
      opacity: 0.5,
      backgroundColor: "#bfbfbf",
    },
    "& .MuiSlider-thumb": {
      height: 15,
      width: 15,
      backgroundColor: "#fff",
      border: "2px solid currentColor",
      "&:focus, &:hover, &.Mui-active, &.Mui-focusVisible": {
        boxShadow: "inherit",
      },
      "&:before": {
        display: "none",
      },
      "& .MuiSlider-track": {
        border: "none !important",
      },
      "& .MuiSlider-valueLabel": {
        fontSize: 12,
        background: "unset",
        padding: 0,
        right: 0,
        top: 5,
        width: 32,
        height: 32,
        borderRadius: "50% 50% 50% 0",
        backgroundColor: "#52af77",
        transformOrigin: "bottom left",
        transform: "translate(50%, -100%) rotate(225deg) scale(0)",
        "&:before": { display: "none" },
        "&.MuiSlider-valueLabelOpen": {
          transform: "translate(50%, -100%) rotate(225deg) scale(1)",
        },
        "& > *": {
          transform: "rotate(135deg)",
        },
      },
    },
  },
});

function MeetInterface() {
  const classes = useStyles();
  const feature = {
    color: "#fff",
    padding: "10px",
    background: "rgba(173,168,165, 0.7)",
  };
  const [value, setValue] = useState(0);
  const [list, setList] = useState([
    <IconButton sx={feature}>
      <OpenWithTwoTone />
    </IconButton>,
    <IconButton sx={feature}>
      <MicIcon />
    </IconButton>,
    <IconButton sx={{ color: "#fff", padding: "20px", background: "#fc5d5b" }}>
      <CallEndIcon />
    </IconButton>,
    <IconButton sx={feature}>
      <VideocamIcon />
    </IconButton>,
    <IconButton sx={feature}>
      <SettingsIcon />
    </IconButton>,
  ]);
  return (
    <Stack sx={{ flex: "70%", flexDirection: "column", margin: "0 10px" }}>
      <Stack sx={{ flex: "10%", justifyContent: "center" }}>
        <Stack className={classes.flex} gap="20px">
          <ArrowBackIosNewIcon
            fontSize="small"
            sx={{
              borderRadius: "10px",
              p: 0.5,
              backgroundColor: "#f0f1f3",
              color: "#b7bdc5",
            }}
          />
          <Stack fontSize="0.9rem" fontWeight="500">
            Group Chat
          </Stack>
          <Button
            sx={{
              backgroundColor: "#d0d3e3",
              textTransform: "none",
              color: "#56619c",
              padding: "0px 10px",
              borderRadius: "10px",
            }}
            startIcon={<PeopleIcon />}
          >
            Team
          </Button>
        </Stack>
      </Stack>
      <Divider variant="middle" />
      <Stack sx={{ flex: "90%" }}>
        <Stack
          className={classes.flex}
          justifyContent="space-between"
          margin="10px"
        >
          <Stack className={classes.flex} gap="10px">
            <Stack className={classes.flex} gap="5px">
              <PeopleIcon sx={{ color: "gray" }} />
              <Box fontSize="0.9rem" fontWeight="500">
                Invited to the call:{" "}
              </Box>
              <Chip
                label="6"
                sx={{
                  background: "#edfaf8",
                  color: "#28b29c",
                  fontWeight: "bold",
                }}
              />
            </Stack>
            <Stack className={classes.flex} gap="10px">
              <PersonOffIcon sx={{ color: "gray" }} />
              <Box fontSize="0.9rem" fontWeight="500">
                Invited to the call:{" "}
              </Box>
              <Chip
                label="4"
                sx={{
                  background: "#fcf2f2",
                  color: "#fc7a79",
                  fontWeight: "bold",
                }}
              />
            </Stack>
          </Stack>
          <Stack>
            <Button
              sx={{ textTransform: "none", color: "#00a389" }}
              startIcon={
                <AddIcon
                  fontSize="small"
                  sx={{
                    borderRadius: "10px",
                    p: 1,
                    backgroundColor: "#00a389",
                    color: "#fff",
                  }}
                />
              }
            >
              Add user to the call
            </Button>
          </Stack>
        </Stack>
        <Stack
        className="demo"
          sx={{
            alignItems: "center",
            position: "relative",
            height: "calc(100% - 68px)",
            backgroundSize: "cover",
            marginBottom: "30px",
            borderRadius: "20px",
            background:`url(${screen})`,
            backgroundSize:'cover !important'
          }}
        >
          <Stack
            sx={{
              background: "radial-gradient(black, transparent)",
              position: "absolute",
              top: "20px",
              left: "20px",
              color: "#fff",
              flexDirection: "row",
            }}
          >
            <Avatar
              variant="rounded"
              src={Avatar_1}
            />
            <Stack margin="0 10px" alignItems="flex-start">
              <span style={{ fontSize: "0.8em" }}>Publisher</span>
              <Box sx={{ fontSize: "1em" }}>John Smith</Box>
            </Stack>
          </Stack>
          <Stack
            sx={{
              width: "fit-content",
              justifyItems: "center",
              padding: "10px",
              borderRadius: "10px",
              background: "rgba(173,168,165, 0.6);",
              flexDirection: "row",
              color: "#fff",
              justifyContent: "center",
              position: "absolute",
              top: "20px",
            }}
          >
            <RadioButtonCheckedTwoTone
              className={classes.circle}
              fontSize="small"
              sx={{
                background: "#fff",
                borderRadius: "50%",
                transform: "scale(0.8)",
                marginRight: "10px",
              }}
            />
            <span>03:15</span>
          </Stack>
          <Stack sx={{ position: "absolute", top: "20px", right: "20px" }}>
            <AvatarGroup
              className={classes.member}
              max={6}
              variant="rounded"
              sx={{ flexDirection: "column-reverse", gap: "20px" }}
            >
              <Member
                state={0}
                url={Avatar_2}
              />
              <Member
                state={2}
                url={Avatar_3}
              />
              <Member
                state={1}
                url={Avatar_4}
              />
              <Member
                state={1}
                url={Avatar_7}
              />
              <Member
                state={2}
                url={Avatar_6}
              />
              <Member
                state={2}
                url="https://randomuser.me/api/portraits/med/men/18.jpg"
              />
              <Member
                state={1}
                url="https://randomuser.me/api/portraits/med/men/85.jpg"
              />
              <Member
                state={1}
                url="https://randomuser.me/api/portraits/med/men/85.jpg"
              />
            </AvatarGroup>
          </Stack>
          <Stack
            sx={{ position: "absolute", bottom: "40px", flexDirection: "row" }}
          >
            {list.map((item, i) => {
              return <Button key={i}>{item}</Button>;
            })}
          </Stack>
          <Stack
            sx={{
              position: "absolute",
              bottom: "30px",
              left: "30px",
              minHeight: "200px",
              gap: "20px",
              padding: "15px",
              borderRadius: "30px",
              background: "rgba(173,168,165, 0.3)",
            }}
          >
            <Grid item xs>
              <Slider
                className={classes.slider}
                orientation="vertical"
                valueLabelDisplay="auto"
                defaultValue={40}
                aria-label="pretto slider"
              />
            </Grid>
            <Grid item>
              <VolumeUp sx={{ color: "#fff" }} />
            </Grid>
          </Stack>
        </Stack>
        <Stack></Stack>
      </Stack>
    </Stack>
  );
}

export default MeetInterface;
