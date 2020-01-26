import React from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import Toolbar from "@material-ui/core/Toolbar";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

const drawerWidth = 240;
const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  btn: {
    flexGrow: 1
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0
    }
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
   
    
    alignItems: "center",
    justifyContent: "flex-end"
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none"
    }
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3)
  },
  done: {
    flexGrow: 1,
    fontSize: 27
  },
  closeMenuButton: {
    marginRight: "auto",
    marginLeft: 0
  }
}));
function ResponsiveDrawer() {
  const dummyCategories = [
    "Home",
    "About",
    "Blog",
    "Product",
    "Gallery",
    "Team",
    "Achievements",
    "Franchise",
    "Distributor",
    "Contact",
    "Sign In",
    "Sign Up"
  ];
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  function handleDrawerToggle() {
    setMobileOpen(!mobileOpen);
  }
  const drawer = (
    <div>
      <List>
        {dummyCategories.map((text, index) => {
          let link = `/${text.toLowerCase()}`;
          if (text === "Home") {
            link = `/`;
          }
          return (
            <Link
              key={index}
              to={link}
              style={{ textDecoration: "none", color: "#000" }}
            >
              <ListItem button key={text}>
                <ListItemText primary={text} />
              </ListItem>
            </Link>
          );
        })}
      </List>
    </div>
  );
  return (
    <div className={classes.root}>
      <CssBaseline />
      <Grid item xs={9}>
        <AppBar position="fixed" className={classes.appBar} color="primary">
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              className={classes.menuButton}
            >
              <MenuIcon />
            </IconButton>
            <Hidden only="xs">
              <span className={classes.btn}>

                <Link
                  style={{ textDecoration: "none", color: "white", float: "left" }}
                  to="/"
                >
                  <Button
                    color="inherit"
                    style={{ fontSize: 20, color: "white", }}
                  >
                    HOME
                  </Button>
                </Link>

                <Link
                  style={{ textDecoration: "none", color: "white" }}
                  to="/about"
                >
                  <Button
                    color="inherit"
                    style={{ fontSize: 20, color: "white", marginLeft: 20 }}
                  >
                    About
                  </Button>
                </Link>


                <Link
                  style={{
                    textDecoration: "none",
                    color: "white",
                    marginLeft: 20
                  }}
                  to="/blog"
                >
                  <Button
                    color="inherit"
                    style={{ fontSize: 20, color: "white", marginLeft: 20 }}
                  >
                    Blog
                  </Button>
                </Link>

                <Link
                  style={{
                    textDecoration: "none",
                    color: "white",
                    marginLeft: 20
                  }}
                  to="/signIn"
                >
                  <Button
                    color="inherit"
                    style={{ fontSize: 20, color: "white", marginLeft: 20 }}
                  >
                    SIGNIN
                  </Button>
                </Link>


                <Link
                  style={{
                    textDecoration: "none",
                    color: "white",
                    marginLeft: 20
                  }}
                  to="/signUp"
                >
                  <Button
                    color="inherit"
                    style={{ fontSize: 20, color: "white", marginLeft: 20 }}
                  >
                    SIGNUP
                  </Button>
                </Link>
              </span>
            </Hidden>
          </Toolbar>
        </AppBar>

        <nav className={classes.drawer}>
          <Hidden smUp implementation="css">
            <Drawer
              variant="temporary"
              anchor={theme.direction === "rtl" ? "right" : "left"}
              open={mobileOpen}
              onClose={handleDrawerToggle}
              classes={{
                paper: classes.drawerPaper
              }}
              ModalProps={{
                keepMounted: true
              }}
            >
              <IconButton
                onClick={handleDrawerToggle}
                className={classes.closeMenuButton}
              >
                <CloseIcon />
              </IconButton>
              {drawer}
            </Drawer>
          </Hidden>
        </nav>
      </Grid>
    </div>
  );
}
ResponsiveDrawer.propTypes = {
  container: PropTypes.object
};
export default ResponsiveDrawer;
