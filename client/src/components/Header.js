import { NavLink } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { lime, purple } from "@mui/material/colors";
import Home from "./Home";

const theme = createTheme({
  palette: {
    primary: {
      main: "#81D8D0",
    },
    secondary: purple,
  },
});

function Header() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position='static'>
            <Toolbar color='primary'>
              <Typography
                variant='h6'
                component='div'
                sx={{ marginRight: "20px" }}
              >
                <NavLink className='nav-link' to='/'>
                  Jewelry Store
                </NavLink>
              </Typography>
              <Typography
                variant='h6'
                component='div'
                sx={{ flexGrow: 1, marginLeft: "0px" }}
              >
                <NavLink className='nav-link' to='/sellers'>
                  Sellers
                </NavLink>
              </Typography>
              <Button
                color='primary'
                variant='contained'
                sx={{ marginRight: "20px" }}
              >
                <NavLink className='nav-link' to='/form'>
                  + Add New Item
                </NavLink>{" "}
              </Button>
            </Toolbar>
          </AppBar>
        </Box>
      </ThemeProvider>
    </>
  );
}

export default Header;
