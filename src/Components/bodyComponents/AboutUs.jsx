import { Avatar, Box, Typography } from "@material-ui/core";
import React from "react";
import { useStyles } from "./bodyStyle";
import pic from "../../images/About.jpg";
import { Decorator } from "../common/commonComponents";
import ArrowDownwardRoundedIcon from "@material-ui/icons/ArrowDownwardRounded";
// import  AcUnitIcon  from "@material-ui/icons/AcUnit";
import Icon1 from "@material-ui/icons/Folder";
import Icon2 from "@material-ui/icons/MoreHorizRounded";
import Icon3 from "@material-ui/icons/LocalGroceryStoreRounded";

export default function AboutUs() {
  const classes = useStyles();
  return (
    <>
      <Box>
        <Box className={classes.section}>
          <img src={pic} alt={pic} className={classes.pic} />

          <Box className={classes.abouttxt}>
            {Decorator({
              label: "ABOUT US",
              withIcon: false,
              Icon: <ArrowDownwardRoundedIcon />,
            })}
            <h1> About Section Works</h1>
            <Box>
              <Box marginTop="100px" className={classes.main}>
                <Box className={classes.box}>
                  <Avatar className={classes.logo}>
                    <Icon1 />
                  </Avatar>
                  <Typography>
                    Web Development is person Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Consequatur, tempore!
                  </Typography>
                </Box>

                <Box className={classes.box}>
                  <Avatar className={classes.logo}>
                    <Icon2 />
                  </Avatar>
                  <Typography>
                    Web Development is person Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Consequatur, tempore!
                  </Typography>
                </Box>
              </Box>

              <Box marginTop="100px" className={classes.main}>
                <Box className={classes.box}>
                  <Avatar className={classes.logo}>
                    <Icon3 />
                  </Avatar>
                  <Typography>
                    Web Development is person Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Consequatur, tempore!
                  </Typography>
                </Box>

                <Box className={classes.box}>
                  <Avatar className={classes.logo}>
                    <Icon2 />
                  </Avatar>
                  <Typography>
                    Web Development is person Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Consequatur, tempore!
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box>
            
          </Box>
        </Box>
      </Box>
    </>
  );
}
