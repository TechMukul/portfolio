import { makeStyles } from "@material-ui/core";
import { Theme } from "./Theme";
import Image from "../../images/brandBanner.jpg";

export const useStyles = makeStyles((theme) => ({
  HeardeWraper: {
    width: "100%",
    minHeight: "90vh",
    height: "auto",
    backgroundColor:Theme.colors.base1,
    background: `linear-gradient(to bottom right,#04303140,#00606473),url(${Image})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  },
  HearderContainer: {
    width: "85%",
    minHeight:"90vh",
    height: "auto",
    padding: "20px",
    color:Theme.colors.base2,
    display: "flex",
    flexFlow: "column wrap",
    justifyContent: "center",
    fontFamily:"roboto",
  },
  headerTitle: {
    fontSize: "3rem",
  },
  headerDesc:{
    fontSize: "2rem",
  },
  navbar: {
    backgroundColor: Theme.colors.base1,
    color: Theme.colors.base2,
  },
  Toolbar: {
    display: "flex",
    flexFlow: "row wrap",
    justifyContent: "space-between",
  },
  navlinks: {
    color: Theme.colors.base2,
  },
  decorator:{
    display:"flex",
    fontWeight:"bolder",
    fontFamily:"roboto",
    position:"relative",
    marginTop:"20px",
    '&:before':{
        width:"40px",
        height:"40px",
        backgroundColor:Theme.colors.primary,
        content:'""',
        borderRadius:"50%",
        
    },
  },
  decoratorText:{
    lineHeight:"40px",
    position:"absolute",
    left:"20px",
  },
  arrow:{
    lineHeight:"50px",
    position:"absolute",
    left:"95px",
    animationName:"upDown",
    animationDuration:"0.7s",
    animationIterationCount:"infinite",
  },

  "@global":{ 
    "@keyframes upDown":{
        "0%":{
        paddingTop:"0px",
        transform:"scale(0)",
        },
        "100%":{
        paddingTop:"10px",
        transform:"scale(1))",},
    },
  },
}));
