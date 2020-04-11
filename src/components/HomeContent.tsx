import React from 'react';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';

const sectionImgs = [
    {img:'../assets/blackbelts.jpg', columns: 1, title:""},
    {img:"../assets/Karate-Downblock-Lg.jpg", columns: 2, title:""} ,
    {img:"../assets/outdoorkarate.jpg", columns: 2, title:""}
    
];


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      backgroundColor: theme.palette.background.paper,
      margin: '0'
    },
    gridList: {
     width: '100%',
      height: 'auto'
    },
    tileimages: {     
      top: 0, 
      pointer_events: 'none'
    }
  }),
);

export default function ImageGridList() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <GridList className={classes.gridList} cols={3} spacing={13}>
        {sectionImgs.map((tile) => (
          <GridListTile key={tile.img} cols={tile.columns || 1}>
            <img src={tile.img} alt={tile.title} className={classes.tileimages} />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}