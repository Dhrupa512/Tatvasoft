import React, { useState } from "react";
import { Button, TextField, Popover, Avatar } from "@mui/material";
import { blue } from "@mui/material/colors";
import { useNavigate } from "react-router-dom";

export const Apple = () => {
  const [name, setName] = useState("Dhrupa");
  const [email, setEmail] = useState("dmistry125@gmail.com");
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate();

  const onHomePageButtonClick = () => {
    console.log("Button clicked");
    console.log("Name: ", name);
    console.log("Email: ", email);
    navigate("/");
  };

  const handleClick = (event) => {
    console.log(123);
    setAnchorEl(event.currentTarget);
    setOpen(true);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setOpen(false);
  };

  const handlePopoverContentClick = () => {
    navigate("/"); // Redirect to the home page
    handleClose(); // Close the popover after redirection
  };

  return (
    <div style={{ padding: 5 }}>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          columnGap: 5
        }}
      >
        <div onClick={handleClick}>
          <Avatar sx={{ bgcolor: blue[500] }}>DM</Avatar>
          <span>Dhrupa Mistry</span>
        </div>
      </div>
      <div>
        <h2 style={{ marginTop: "20px" }}>Apple Page 🍎</h2>
      </div>
      <div
        style={{
          padding: 10,
          display: "flex",
          flexDirection: "column",
          rowGap: 8,
          justifyContent: "center" // Aligns the button to the center
        }}
      >
        <TextField
          variant="outlined"
          type="text"
          value={name}
          label="Name"
          placeholder="Name"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <TextField
          variant="outlined"
          type="email"
          value={email}
          label="Email"
          placeholder="Email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
      <Button
          variant="contained"
          onClick={onHomePageButtonClick}
          ClassName = ""
          // style={{
          //   marginLeft: "-450px",
          //   marginTop: "30px" 
          // }}
        >
    <center>  Button ➡️ 🏠</center>
        </Button>
      </div>

      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center"
        }}
        transformOrigin={{
          vertical: "center",
          horizontal: "left"
        }}
      >
        <div onClick={handlePopoverContentClick}>Logout</div>
      </Popover>
    </div>
  );
};