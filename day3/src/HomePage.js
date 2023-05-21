// import { Button } from "@mui/material";
// import { Link, useNavigate } from "react-router-dom";

// export const HomePage = () => {
//   const navigate = useNavigate();

//   const onHomePageButtonClick = () => {
//     navigate("/apple");
//   };

//   return (
//     <div ><br></br>
//       <div style={{ marginLeft: "30px" }}>Home Page 🏠</div><br></br>
//       <Link to="/apple">
//         <Button variant="contained" onClick={onHomePageButtonClick} className="" style={{ marginLeft: "10px" }}>
//           Button ➡️ 🍎
//         </Button>
//       </Link>
//     </div>
  // );
// };

// import { Button, Grid } from "@mui/material";
// import { Link, useNavigate } from "react-router-dom";

// const NavigationBar = () => {
//   return (
//     <Grid container justifyContent="flex-start" alignItems="center" style={{ backgroundColor: "#f0f0f0", padding: "10px" }}>
//       <Link to="/" style={{ textDecoration: "none" }}>
//         <Button variant="contained" style={{ marginRight: "10px" }}>
//           Home
//         </Button>
//       </Link>
//       <Link to="/apple" style={{ textDecoration: "none" }}>
//         <Button variant="contained">
//           Apple
//         </Button>
//       </Link>
//     </Grid>
//   );
// };

// export const HomePage = () => {
//   const navigate = useNavigate();

//   const onHomePageButtonClick = () => {
//     navigate("/apple");
//   };

//   return (
//     <Grid container direction="column" alignItems="center">
//       <NavigationBar />
//       <Grid item>
//         <h2 style={{ marginTop: "20px" }}>Home Page 🏠</h2>
//       </Grid>
//       <Grid item>
//         <Button variant="contained" onClick={onHomePageButtonClick} style={{ marginTop: "10px" }}>
//           Button ➡️ 🍎
//         </Button>
//       </Grid>
//     </Grid>
//   );
// };
import { Button, Grid } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

export const HomePage = () => {
  const navigate = useNavigate();

  const onHomePageButtonClick = () => {
    navigate("/apple");
  };

  return (
    <Grid container direction="column" alignItems="center">
      <Grid item>
        <h2 style={{ marginTop: "20px" }}>Home Page 🏠</h2>
      </Grid>
      <Grid item>
        <Button variant="contained" onClick={onHomePageButtonClick} style={{ marginTop: "10px" }}>
          Button ➡️ 🍎
        </Button>
      </Grid>
    </Grid>
  );
};
