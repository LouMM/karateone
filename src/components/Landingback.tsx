import React from 'react';
import {ParallaxProvider,ParallaxBanner} from 'react-scroll-parallax'

export function MainPageBanner() {
    //const classes = useStyles();

    return (
        
            <ParallaxBanner
                //className="your-class"
                layers={[
                    {
                        image: '../../assets/mtsi-cr.webp',
                        amount: 0.1,
                    }
                ]}
                style={{
                    width: '100%'
                }}
            >
                <h1>Banner Children</h1>
            </ParallaxBanner>        
    );
}