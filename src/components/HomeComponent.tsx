import { Box, Button } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React, { Fragment } from 'react';
import { HomeIcon } from './AppBar';
import { CommonStyles } from './ComponentStyles';
import { Copyright } from './CopyrightComponent';
import DoIcon from './Icons';
import { activateParallaxStyles, parallaxImg } from './ParallaxComponent';
import ProTip from './ProTip';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        heroblock: {
            width: '100%',
            //height: '60vh',
            maxHeight: '60vh',
            minHeight: '40vh',
            position: 'relative',
            overflow: 'hidden',
            fontSize: '16px'
        }
        , hero_img: {
            left: "50%",
            width: "100%",
            z_index: -1,
            pointerEvents: 'none',
            position: 'absolute'
        }

    }),
);
function HeroImage() {
    const classes = useStyles();
    const commonClasses = CommonStyles();

    React.useEffect(() => {

        let img = document.getElementById("hereoparallax");
        if (img !== null) {

            parallaxImg(img as HTMLImageElement);
            if (!eventsSet) {
                document.addEventListener('scroll', (ev) => {
                    parallaxImg(img as HTMLImageElement);
                });
            }
        }
    });

    return (
        <div className={classes.heroblock}>
            <div className={commonClasses.herotext} style={{ zIndex: 10001, position: "absolute" }} >
                <ul className={commonClasses.gridList} >
                    <li className={commonClasses.gridListIconContainer}>
                        <HomeIcon style={{ width: '20vw', height: 'auto', minWidth: '50px', maxWidth: '80px', color: 'white' }} />
                    </li>
                    <li style={{ color: 'white' }} >
                        <div>
                            Come join the community!
              </div>
                        <div className={commonClasses.taglinetext}>
                            Traditional Shudokan
              </div>

                    </li>
                </ul>
            </div>
            <img src="./assets/wb-ghee-bg.jpg" id="hereoparallax" className={classes.hero_img} />
        </div>
    );
}

var eventsSet: Boolean = false;
function HomeBannerComponent() {
    const classes = useStyles();
    const commonClasses = CommonStyles();
    const parallaxStyles = activateParallaxStyles();
    React.useEffect(() => {

        let img = document.getElementById("parallax_img");
        if (img !== null) {

            parallaxImg(img as HTMLImageElement);
            if (!eventsSet) {
                document.addEventListener('scroll', (ev) => {
                    parallaxImg(img as HTMLImageElement);
                });
            }
        }
    });

    return (
        <div className={commonClasses.block}>
            <img src="./assets/mtsisnowcaps.webp" data-speed="-1" id="parallax_img" className={parallaxStyles.parallax_img} />
            <div className={commonClasses.herotext} >
                <ul className={commonClasses.gridList} >
                    <li className={commonClasses.gridListIconContainer}>
                        <DoIcon style={{ width: '4vw', height: 'auto', minWidth: '50px', maxWidth: '70px' }} />
                    </li>
                    <li>
                        <div>
                            Leaders in Success skills Development
                        </div>
                        <div className={commonClasses.taglinetext}>
                            Find the path with us.
                        </div>
                        <Button variant="contained" color="secondary">
                            more info
                        </Button>
                    </li>
                </ul>
            </div>
        </div>
    );
}
export const Home = (classes: any) => (
    <Fragment>
        <HomeBannerComponent />
        <HeroImage />
        <Container maxWidth="xl">
            <div>
                <Box my={4}>

                </Box>
                <Box my={4}>
                    <Typography variant="h4" component="h1" gutterBottom>
                        Second Section
          </Typography>
                    <ProTip />
                    <Copyright />
                </Box>
                <Box my={4}>
                    <Typography variant="h4" component="h1" gutterBottom>
                        Third Section
          </Typography>
                    <ProTip />
                    <Copyright />
                </Box>
                <Box my={4}>
                    <Typography variant="h4" component="h1" gutterBottom>
                        Four Section
              </Typography>
                    <ProTip />
                    <Copyright />
                </Box>
                <Box my={4}>
                    <Typography variant="h4" component="h1" gutterBottom>
                        Four Section
              </Typography>
                    <ProTip />
                    <Copyright />
                </Box>
                <Box my={4}>
                    <Typography variant="h4" component="h1" gutterBottom>
                        Four Section
              </Typography>
                    <ProTip />
                    <Copyright />
                </Box>
                <Box my={4}>
                    <Typography variant="h4" component="h1" gutterBottom>
                        Four Section
              </Typography>
                    <ProTip />
                    <Copyright />
                </Box>
            </div>

        </Container>

    </Fragment>
);