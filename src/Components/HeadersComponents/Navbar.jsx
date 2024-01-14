import {AppBar,Box,Button,Hidden,IconButton,Toolbar,Typography} from '@material-ui/core';
import {useStyles} from "./headerStle";
import MenuOpenRoundedIcon from '@material-ui/icons/MenuOpenRounded';


export default function Navbar() {
  const classes=useStyles()
  const navlinks=[
    {label:"About",Id:"About"},
    {label:"Portfolio",Id:"Portfolio"},
    {label:"Contact ",Id:"Contact"}
  ]
  return (
    
      <AppBar position="fixed" className={classes.navbar}>
        <Toolbar className={classes.Toolbar}>
          
          <Typography variant="h5" component="h6" >
            Mukul Chauhan
          </Typography>
          <Box component={Hidden} xsDown>
            <Box>
         {navlinks.map((item,i)=><Button key={i} className={classes.navlinks}>{item.label}</Button>)}
         </Box>
         </Box>
         <Box component={Hidden} smUp> 
           <IconButton color="inherit" onClick={()=> console.log("Menu Clicked")}>
           <MenuOpenRoundedIcon />
           </IconButton>
         </Box>
        </Toolbar>
      </AppBar>
    
  );
}
