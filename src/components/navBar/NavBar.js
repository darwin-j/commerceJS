import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  MenuItem,
  Menu,
  Typography,
} from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import "./navBar.css";

const NavBar = () => {
  return (
    <AppBar position="static" color="inherit">
      <Toolbar>
        <Typography variant="h6">ecommerce</Typography>
        <div className="grow"></div>
        <IconButton aria-label="Show cart items">
          <Badge badgeContent={3}>
            <ShoppingCart />
          </Badge>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
