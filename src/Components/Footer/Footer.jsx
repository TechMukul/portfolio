import React from "react";
import {
  AppBar,
  Box,
  Button,
  Hidden,
  IconButton,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import MenuOpenRoundedIcon from "@material-ui/icons/MenuOpenRounded";

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: "#333",
    color: "#fff",
    height: 300, // Adjust height as needed
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: theme.spacing(2),
  },
  navlinks: {
    color: "#fff",
    margin: theme.spacing(1),
    marginTop: "100px",
  },
  copyright: {
    marginTop: "auto",
  },
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <AppBar position="relative" className={classes.footer}>
      <Typography variant="h5" component="h6">
        Mukul Chauhan
      </Typography>
      <Box>
        <Hidden xsDown>
          <Button className={classes.navlinks}>About</Button>
          <Button className={classes.navlinks}>Privacy</Button>
          <Button className={classes.navlinks}>Blog</Button>{" "}
          <Button className={classes.navlinks}>Link</Button>
          <Button className={classes.navlinks}>Link</Button>
          <Button className={classes.navlinks}>Link</Button>
          {/* Add more navlinks as needed */}
        </Hidden>
        <Hidden smUp>
          <IconButton
            color="inherit"
            onClick={() => console.log("Menu Clicked")}
          >
            <MenuOpenRoundedIcon />
          </IconButton>
        </Hidden>
      </Box>
      <Typography variant="body2" align="center" className={classes.copyright}>
        &copy; {new Date().getFullYear()} Mukul Chauhan. All Rights Reserved.
      </Typography>
    </AppBar>
  );
};

export default Footer;
