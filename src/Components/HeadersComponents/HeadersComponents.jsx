import React from 'react'
import{Box,Typography} from '@material-ui/core'
import { useStyles } from './headerStle'
import Navbar from './Navbar'
import ArrowDownwardRoundedIcon  from '@material-ui/icons/ArrowDownwardRounded'
import { Decorator } from '../common/commonComponents'



export default function HeadersComponents() {
    const classes=useStyles();
  return (
    <Box className={classes.HeardeWraper}>
      <Navbar/>
      <Box className={classes.HearderContainer}>
        <Typography varinat="h3" component="h4" className={classes.headerTitle}>I am UI/UX Designer</Typography>
        <Typography varinat="h3" component="h4" className={classes.headerDesc}>I can create website and applications 
        <br />base on your needs.</Typography>
        {Decorator({label:"About us",withIcon:true,Icon:<ArrowDownwardRoundedIcon/>})}
    </Box>
    </Box>
  )
}
