// // import { useNavigate } from 'react-router-dom';

// // import Button from "@mui/material/Button";

// // export const Apple = () => {
// //   const navigate = useNavigate();
// //   const onHomePageButtonClick = () => {
// //     navigate("/");
// // };

// //   return (
// //     <div><br></br>
// //       <div style={{ marginLeft: "30px" }}>Apple Page 🍎</div><br></br>
// //       <Button variant="contained" onClick={onHomePageButtonClick} className="" style={{ marginLeft: "10px" }}>
// //           Button ➡️ 🏠
// //       </Button>
// //     </div>
// //   );
// // };

// import { useNavigate } from 'react-router-dom';
// import { Button, Grid } from "@mui/material";
// import { Link } from "react-router-dom";

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

// export const Apple = () => {
//   const navigate = useNavigate();

//   const onHomePageButtonClick = () => {
//     navigate("/");
//   };

//   return (
//     <Grid container direction="column" alignItems="center">
//       <NavigationBar />
//       <Grid item>
//         <h2 style={{ marginTop: "20px" }}>Apple Page 🍎</h2>
//       </Grid>
//       <Grid item>
//         <Button variant="contained" onClick={onHomePageButtonClick} style={{ marginTop: "10px" }}>
//           Button ➡️ 🏠
//         </Button>
//       </Grid>
//     </Grid>
//   );
// };
import { Button, Grid } from "@mui/material";
import { useNavigate } from 'react-router-dom';

export const Apple = () => {
  const navigate = useNavigate();

  const onHomePageButtonClick = () => {
    navigate("/");
  };

  return (
    <Grid container direction="column" alignItems="center">
      <Grid item>
        <h2 style={{ marginTop: "20px" }}>Apple Page 🍎</h2>
      </Grid>
      <Grid item>
        <Button variant="contained" onClick={onHomePageButtonClick} style={{ marginTop: "10px" }}>
          Button ➡️ 🏠
        </Button>
      </Grid>
    </Grid>
  );
};
