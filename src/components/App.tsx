import { Badge, Collapse, IconButton } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import BusinessIcon from '@material-ui/icons/Business';
import CloseIcon from '@material-ui/icons/Close';
import PhoneIcon from '@material-ui/icons/Phone';
import Alert from '@material-ui/lab/Alert';
import { icon, LatLngLiteral } from "leaflet";
import React from 'react';
import { Map, Marker, Popup, TileLayer } from "react-leaflet";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { About } from './AboutComponent';
import { ButtonAppBar } from './AppBar';
import { CommonStyles } from './ComponentStyles';
import { Copyright } from './CopyrightComponent';
import { Home } from './HomeComponent';
import DoIcon from './Icons';

//import '../../node_modules/leaflet/dist/leaflet.css'

const queries = {
  xs: '(max-width: 320px)',
  md: '(max-width: 720px)',
  lg: '(max-width: 1024px)'
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    grow: {
      flexGrow: 1,
    },
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    container: {
      paddingLeft: '5vw',
      paddingRight: '5vw',
    },
    bannerwrapper: {
      width: '100%',
      position: 'relative',
      top: 0,
      left: 0
    }
    ,
    footercontainer: {
      width: '100%',
      margin: 0,
      height: '50px',
      backgroundImage: "url(./assets/footer.jpg)",
      backgroundColor: "#272727",
      backgroundRepeat: "repeat-x"

    },
    footcontainerpanels: {
      display: 'flex',
      flexDirection: 'row',
      width: '80vw',
      justifyContent: 'center',
      alignItems: 'center',
      fontFamily: "'Roboto', sans-serif",
      fontSize: "calc(1em + .2vw)",
    }
    ,
    footerList: {
      listStyle: "none",
    },
    flexcontainer: {
      display: 'flex',
      flexDirection: 'row',
      backgroundColor: '#eeeeee'
    },
    mapContainer: {
      display: "contents"
    },
    paper: {
      padding: theme.spacing(2),
      margin: 'auto',
      maxWidth: '1000',
    },
    image: {
      width: 400,
      height: 400,
    },
    img: {
      margin: 'auto',
      display: 'block',
      maxWidth: '100%',
      maxHeight: '100%',
    }

  }),
);

export default function App() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  return (
    <div className={classes.grow} >
      <Router>
        <div style={{ top: 0, left: 'auto', right: 0, position: 'fixed', height: 'auto', width: '100%', zIndex: 9999 }}>
          <ButtonAppBar />
          <Collapse in={open}>
            <Alert action={
              <IconButton
                aria-label="close"
                color="inherit"
                size="medium"
                onClick={() => {
                  setOpen(false);
                }}
              >
                <CloseIcon fontSize="inherit" />
              </IconButton>
            } severity="warning">Due to COVID-19 - Si View Community Center is currently closed. Student content will continue online.</Alert>
          </Collapse>
        </div>
        <Route path="/" exact render={(props) => { return Home(classes) }} />
        <Route path="/about" render={(props) => { return About(classes) }} />
        <footer>
          <FooterComponent />
        </footer>    
      </Router>
    </div>
  );
}


function FooterComponent() {
  const classes = useStyles();
  const commonClasses = CommonStyles();
  const position: LatLngLiteral = { lat: 47.4903662, lng: -121.7844456 };
  var mtsiIcon = icon({
    iconUrl: '../assets/MtSiKarateLogo_min.svg',
    iconSize: [50, 95],
    iconAnchor: [22, 94],
    popupAnchor: [-3, -76],
    shadowSize: [68, 95],
    shadowAnchor: [22, 94]
  });
  return (
    <div>

      <div className={classes.flexcontainer}>
        <div id='contactcontainer' className={classes.footcontainerpanels}>
          <ul className={classes.footerList} >
            <li className={classes.flexcontainer}>
              <div className={classes.flexcontainer}><Badge color="secondary" badgeContent={0}>
                <BusinessIcon />
              </Badge>
              </div>
              <div> Snoqualmie Valley, 400 SE Orchard Dr, North Bend, WA 98045 </div>
            </li>
            <li className={classes.flexcontainer} >
              <div className={classes.flexcontainer}><Badge color="secondary" badgeContent={0}>
                <PhoneIcon />
              </Badge>
              </div>
              <div> (425) 831-1900 </div>
            </li>
          </ul>
        </div>
        <div className={classes.mapContainer}>
          <Map center={position} zoom={15}>
            <TileLayer
              url='https://{s}.tile.osm.org/{z}/{x}/{y}.png'
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={position} icon={mtsiIcon}>
              <Popup keepInView={true}>
                <ul className={commonClasses.gridList} >
                  <li className={commonClasses.gridListIconContainer}>
                    <DoIcon style={{ width: '4vw', height: 'auto' }} />
                  </li>
                  <li>
                    <div>
                      Mount Si School of Karate
                      Si View Community center
               </div>
                  </li>
                </ul>
              </Popup>
            </Marker>
          </Map>
        </div>
      </div>
      <div className={classes.footercontainer}>
        <Copyright />
      </div>
    </div>
  );
}


