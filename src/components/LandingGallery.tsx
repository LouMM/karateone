import React from 'react';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-around',
            overflow: 'hidden',
            backgroundColor: theme.palette.background.paper,
            paddingTop: '20px'
        },
        gridList: {           
            height: "100%"            
        },  
        gridLisItem: {           
            resize: 'both',
            overflow: 'auto'        
        },
        listImg: {    
            /*objectFit:"cover",    
            width: "90%"*/
            maxWidth: "100%",
            height: "auto"    
        }
    }),
);

import imageone from '../../assets/blackbelts.jpg';
import imagetwo from '../../assets/kidskarate.jpg';
import imagethree from '../../assets/mtsiblackbelts.jpg';
import imagefour from '../../assets/mtsiblackbelt.jpg';
import imagefive from '../../assets/outdoorkarate.jpg';
const tileData = [
    {
        img: imageone ,
        title: 'Black Belt',
        author: 'author',
        cols: 1
    }
    ,{
        img: imagetwo,
        title: 'Kids Karate',
        author: 'author',
        cols: 2
    }
    ,{
        img: imagefive ,
        title: 'Black Belt Team',
        author: 'author',
        cols: 2
    }
    ,{
        img: imagethree,
        title: 'Black Belt',
        author: 'author',
        cols: 1
    }
    ,{
        img: imagefour,
        title: 'Black Belt',
        author: 'author',
        cols: 1
    }
];


export default function ImageGridList() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <GridList cellHeight={'auto'} className={classes.gridList} cols={3} spacing={1}>
                {tileData.map((tile) => (
                    <GridListTile key={tile.img} cols={tile.cols || 1}  >
                        <img src={tile.img} alt={tile.title} className={classes.listImg} />
                    </GridListTile>
                ))}
            </GridList>
        </div>
    );
}