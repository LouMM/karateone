
import { Box, Button, Container, createStyles, makeStyles, Theme, Typography } from '@material-ui/core';
import React, { Fragment } from 'react';
import { CommonStyles } from './ComponentStyles';
import DoIcon from './Icons';
import { activateParallaxStyles, parallaxImg } from './ParallaxComponent';
import ProTip from './ProTip';
const useStyles = makeStyles((theme: Theme) =>
    createStyles({

    }));

export function AboutBannerComponent() {
    const classes = useStyles();
    const commonClasses = CommonStyles();
    const parallaxStyles = activateParallaxStyles();
    var eventsSet: Boolean = false; //TODO: Possible Global Index
    React.useEffect(() => {

        let img = document.getElementById("parallax_img");
        if (img !== null) {

            parallaxImg(img as HTMLDivElement);
            if (!eventsSet) {
                document.addEventListener('scroll', (ev) => {
                    parallaxImg(img as HTMLDivElement);
                });
            }
        }
    });
    return (
        <div className={commonClasses.block}>
            <img src="./assets/karatebackdrop-mist.webp" data-speed="-1" id="parallax_img" className={parallaxStyles.parallax_img} />
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
export const About = (classes: any) => (
    <Fragment>
        <AboutBannerComponent />
        <Container maxWidth={false}>
            <div>
                <Box my={4}>
                    <Typography variant="h4" component="h1" gutterBottom>
                        First Section
              </Typography>
                    <ProTip />

                </Box>
                <Box my={4}>
                    <Typography variant="h4" component="h1" gutterBottom>
                        Second Section
          </Typography>
                    <ProTip />

                </Box>
                <Box my={4}>
                    <Typography variant="h4" component="h1" gutterBottom>
                        Third Section
          </Typography>
                    <ProTip />

                </Box>
                <Box my={4}>
                    <Typography variant="h4" component="h1" gutterBottom>
                        Four Section
              </Typography>
                    <ProTip />

                </Box>
                <Box my={4}>
                    <Typography variant="h4" component="h1" gutterBottom>
                        Four Section
              </Typography>
                    <ProTip />

                </Box>
                <Box my={4}>
                    <Typography variant="h4" component="h1" gutterBottom>
                        Four Section
              </Typography>
                    <ProTip />

                </Box>
                <Box my={4}>
                    <Typography variant="h4" component="h1" gutterBottom>
                        Four Section
              </Typography>
                    <ProTip />

                </Box>
            </div>
        </Container>
    </Fragment>
);