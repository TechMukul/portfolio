import { makeStyles } from "@material-ui/core";
import {Theme} from"../HeadersComponents/Theme";
export const useStyles= makeStyles((theme)=>({
    section:{
        backgroundColor:Theme.colors.base1,
        padding:theme.spacing(10,0,8,0),
        display:"flex",
        
      },
      divider:{
        width:"65px",
        height:"4px",
        backgroundColor:Theme.colors.primary,
      },
      pic:{
        width:"35%",
        height:"100vh",
        marginLeft:"50px",
      },
      abouttxt:{
        marginLeft:"50px",
        color:"white",
        fontFamily:"roboto",
        fontWeight:"bolder", 
      },
      main:{
        display:"flex",
      },
      box:{
        width:"40%",
        height:"20  vh",
        justifyContent:"space-between",
        marginLeft:"30px",

      },
      logo:{
        marginLeft:"35%",
        marginBottom:"20px",
      },
}));