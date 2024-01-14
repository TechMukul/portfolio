import {Box, Typography} from '@material-ui/core'
import { useStyles } from '../HeadersComponents/headerStle'
// import { useStyles as BodyStyles } from '../bodyComponents/bodyStyle';

export const Decorator =({label,withIcon,Icon,styles})=>{
    const classes =useStyles();
    return(
        <Box className={classes.decorator}style={styles}>
      <Typography component="span" className={classes.decoratorText}>
        {label}
      </Typography>
     {withIcon?(
         <Typography component="span" className={classes.arrow}>
         {Icon}
      </Typography>
     ):null}
    </Box> 
);   
};

export const Divider =()=>{
  const classes=useStyles();
  return<Typography variant="span" className={classes.divider}></Typography>
}
export const RenderSectionHeading=({smallTxt,heading,alignCenter})=>{
 //decorator
 //heading
 //line
 //description
 <Box>
 {Decorator({label:smallTxt,withIcon:false,styles:alignCenter ? {width:"100px",margin:"10px auto"}:""})}
 <Typography variant="h4" align={alignCenter?"center":"left"} className="classes.sectionHeading">{heading}</Typography>
 Divider()
 <Typography variant="body1" component='h6' className="classes.sectionHeading">{heading}</Typography>
 </Box>
 
};