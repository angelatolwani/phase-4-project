import Button from "@mui/material/Button";
import { NavLink } from "react-router-dom";
import theme from './ThemeComponent';
import { createTheme, ThemeProvider } from "@mui/material/styles";

function SellersCard({seller}) {
    return (
        <li className="card">
          <img src={seller.logo} alt="sellers-logo" />
          <h4> {seller.name} </h4>
          <p>Location:  {seller.location} </p>
          <div className="btn-group">
          {/* <ThemeProvider theme={theme}> */}
          <Button className="primary"
                // color='primary'
                variant='contained'
                sx={{ marginRight: "20px" }}
              >
                <NavLink to={seller.website} target="_blank">
                  Go to website
                </NavLink>{" "}
              </Button>
            {/* </ThemeProvider> */}
          </div>
        </li>
      );
}

export default SellersCard