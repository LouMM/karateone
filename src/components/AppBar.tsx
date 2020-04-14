import React, {
  useState, 
  ChangeEvent} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { SvgIcon, Tabs, Tab, useMediaQuery, LinkProps, TabProps } from '@material-ui/core';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
      padding: '10px'
    }
    /*,bar:{
      backgroundColor: '#33006fff'
    }*/
    ,navtabstyels: {
      paddingLeft: 12,
      paddingRight: 12
    }
  }),
);


export const HomeIcon = (props: any) => {
  return (
    <SvgIcon {...props} viewBox="0 0 751.27 748.42" >
      <path d="M376.958 94.46c-180.238 0-326.35 146.394-326.35 326.98s146.112 326.98 326.35 326.98 326.35-146.394 326.35-326.98S557.196 94.46 376.958 94.46zm-1.422 18.957c168.983 0 305.97 137.252 305.97 306.56s-136.987 306.56-305.97 306.56-305.97-137.252-305.97-306.56 136.987-306.56 305.97-306.56zm6.012 12.3c-60.863-.56-128.63 23.485-203.2 87.887 103.93 10.545 255.63 5.962 393.12-6.023-53.095-44.668-116.48-81.186-189.94-81.863zm-13.955 102c-53.48.1-53.198 66.624-49.213 60.395 8.302-12.98 14.78-29.968 30.666-33.223 19.915 43.514 69.933-13.036 26.832-26.7a71.37 71.37 0 00-8.285-.482zm20.14 2.627c-.462.03-.6.306-.3.838 7.367 13.53 19.126 27.4 14.318 42.885-36.406-2.696-30.24 38.027-10.734 43.656-11.574.708-23.13.6-31.492-7.602 24.926-40.85-49.932-50.67-37.135-7.307 28.687 55.178 89.582 13.947 81.826 14.14l-1.893.072c3.164-1.23 6.478-3.35 9.873-6.582 33.2-46.746-19.012-80.456-24.465-80.1zm233.76 45.984c-5.434.613-12.954 3.53-20.137 4.008-15.366 1.026-19.496 23.498-29.838 36.3-12.395 11.386-23.135 13.658-34.074 17.037-131.4 14.408-225.48 6.617-331.08 5.678-9.272-1.494-18.763-4.292-29.53-14.764-10.178-29.38-26.183-41.27-45.43-43.443-80.093 163.98-14.792 262.68 18.213 311.63 12.408-80.04 22.833-161.9 38.006-237.8l44.297 1.703c-13.585 88.314-17.626 196.67-24.135 299.85 24.126 15.764 57.968 46.528 128.34 50.54 4.817 2.566 7.552-9.072 16.754-10.363 4.107-2.33 4.492-4.925 4.826-11.783 1.067-7.548 1.036-17.114-2.412-32.94-9.776-24.843-4.487-56.382-3.125-86.176-.486-6.757-2.35-6.276-4.54-5.394-9.73 8.928-6.725 7.572-15.62 15.05-2.002 1.683-2.13-13.63-2.13-13.63.4-7.316-3.72-3.883-5.96-2.273l-29.246 22.574c-5.202 1.407-4.308-1.013-1.42-4.686l34.287-30.38c2.024-3.727 3.58-7.17-2.627-8.092-7.88.42-14.668-3.164-21.438-6.814-3.693-1.546-7.034-2.4-6.816 3.7 1.57 5.7 1.94 8.718 2.84 12.918-.867 4.57.905 12.016-11.357 9.797-5.97-5.658-26.682-19.643-23.283-47.135 3.816-7.8 11.555-14.06 2.557-26.834-29.153-23.93-21.927-34.214-9.23-42.45 3.266-2.097 6.325-4.957 11.785.994l10.932 23.566 4.26 1.422c33.857-37.337 77.13-16.36 101.1-20.547 2.58-.45 3.52-2.053 3.625-3.074 1.1-10.737 7.258-7.473 12.34-7.7 13.7-.6 23.426-14.28 35.295-21.12 2.265-1.57 4.408-3.346 7.443-3.633 2.938.25 5-1.272 7.156-2.562 2.6-3.322 4.256-5.04 6.106-7.098 2.697-3.06 5.394-3.064 8.092-2.414l16.47-6.674c2.088-1.122 4.67-4.298 5.252.854l1.422 12.352c.73 3.688-.65 4.56-3.125 3.975l-7.24-1.56c-13.868 2.037-8.422 6.78-10.22 10.506 3.075 4.812 5.657 8.958 5.818 9.797 2.795 5.27.603 7.836-2.978 9.652-9.3 2.562-16.46 6.748-23.143 6.814-13.364.132-53.82 45.795-61.05 72.406-8.3 30.56-6.87 65.062-6.246 97.1.296 12.697-1.96 25.94 8.375 36.486 3.928 7.2-7.258 9.002-12.918 12.777-6.567 4.036-5.343 7.724-6.106 11.5-2.62 11.328.83 16.587 3.266 22.86l-3.408 10.22c45.07-5.86 88.576-9.443 157.87-50.54l-19.3-303.82 48.27-5.678 35.207 245.33c46.105-58.492 107.9-181.4 28.965-318.02zm-263.28 194.55a11.7 11.7 0 00-.854.02c-2.937.292-4.636 1.782-7.477 3.1V474c-1.904.9-2.873.562-4.87.803-1.714.206-2.9.202-4.365.4-2.273.547-3.943 1.492-.553 4.018.626.835 1.115 1.693 4.72 1.504 2.5.192 3.993 1.112 8.182.703 2.493 1.012 4.54.85 4.92-1.453.935-1.525 2.13-2.086 2.7-4.92-.242-1.7 1.466-4.13-2.4-4.187zM64.643 286.1c1.365.42.824 2.845 5.05.253 1.892-.97 3.184-.816 2.778 2.525l-8.71 16.162c-3.545 3.934-3.76-.086-3.788-1.263.252-1.636-1.252-1.767-2.147-2.525L6.938 277.007c-1.314-1.32-2.076-.804-2.904-.505l-1 .505c-2.4 2.165-3.387.056-2.904-1.894L11.737 251.5c1.356-1.8 4.65-.934 3.788 2.778 1.04 1.86 1.744 1.05 2.557 1.168l38.354-2.557-21.718-31.82c-.968-1.944-1.936-1.623-2.904-1.263-1.82 1.796-4.194.805-3.283-1.768l10.985-22.223c1.196-1.327 3.963-2.808 3.914 1.4.308.87.556 1.8 1.515 2.02l48.1 22.98c1.37 1.47 3.606 1.33 4.672.63 2.45-1.83 3.416-.314 2.4 1.894l-6.566 18.056c-.323 1.387-3.582 3.632-4.798-1.4-.363-2.118-.2-1.994-1.894-2.525l-31.82-15.026 27.022 41.3c.543 1.207 1.555 2.577-1.136 2.652L30.05 270.32zm15.405-103.8l9.85-12.5 28.032 23.6c.677.823 2.264 1.558.944 3.722-.224 1.13-.2 2.97 3.602 2.087l11.743-14.647c1.135-2.286 1.167-3.776-2.778-2.4-1.73.086-1.785-.665-2.652-1l-28.284-24.244 10.228-13.385c.842-.294 2.103-.298 2.778-.253 1.862.303 3.6-.23 1.64-2.904l-10.733-9.218c-2.488-1.115-4.128-.6-3.535 2.4.148.873.4 1.766-.126 2.525l-29.42 38.638-2.147 1.515c-4.246-.048-4.487 1.318-3.03 3.283l10.607 8.84c1.58 1.18 2.912 1.38 3.157-2.778z" /><circle cx="161.548" cy="148.539" r="10.536" /><path d="M231.188 54.46c-9.892 1.045-20.46-2.23-31.378 12.753-2.4 3.306-.63 9.518 10.48 5.87 10.123-3.855 28.194-8.445 30.368-8.776 19.158-2.917 25.544 21 10.67 36.68-9.38 9.896-26.27 16.196-43.12 16.92-2.502-.214-2.93.402-3.85.82-2.5 2.126-4.268 2.527-4.42-.884l.442-16.415c1.276-1.966 2.782-3.038 5.556.82.958 1.496 1.654.9 2.462 1.2 21.08-.353 29.207-5.837 33.398-12.88 1.948-5.037 2.886-9.502-5.114-8.902l-29.105 9.975c-23.98 8.22-31.77-26.06-15.152-38.196 4.273-3.12 21.323-13.767 40.9-14.142 2.573.094 2.886-.817 4.104-1.326 1.172-1.17 2.373-2.676 3.22.063l-.82 16.54c.028 3.65-1.354 4-3.85 1.768-.947-1.392-2.863-1.654-4.798-1.894zm34.65-13.07c.043-2.044-1.33-2.438-2.68-2.857-1.952-1.936-.888-3.538 1.43-5l14.82-4.643c1.918-.13 4.558-.94 2.143 3.036-.226 1.797-.518 3.612.18 5.18l11.25 40.357c.712 1.346.554 3.215 2.32 3.93.738.646 3.224.01.714 3.036L280.3 90.143c-2.927.723-4.73.508-3.393-2.32 1.546-1.86 1.103-2.302 1.07-3.036zm69.66-33.877c-.078-1.053.558-2.077-1.354-3.204-1.96-2.945-1.52-4.235 1.088-4.032l17.795-.212c4.704-.394 5.27 1.043 2.8 3.818-.34.96-1.044 1.364-.866 3.115-.5 7.566-1.56 20.687-1.27 23.57l31.132-24.4c.418-.915-.695-1.14-1.043-1.7-3.223-2.4-.644-4.227 1.458-4.017l25.208-.285c7.122-.725 3.857 2.477.9 4.723l-33.83 26.19L406.7 66.32c2.27 2.455 3.515 2.924 5.504 4.28 1.868 1.274 3.943 3.947-1.005 4.025l-23.744.37c-4.393-.177-5.523-1.654-3.252-3.694 1.4-1.115 1.654-.825.874-3.3L365.39 43.17c-2.066-1.77-3.525-.4-5.03.724l-6.66 4.365-.868 21.642c3.16.9 3 3.914 1.87 4.76l-20.02-.302c-5.237.44-3.617-3.1-1.864-4.336 1.655-.452.712-.67 1.007-1.998zM459.758 24.4c-1.144.04-1.474.86-.566 2.866.684 1.247 1.036 2.563 0 4.164l-34.43 38.6c-.52.525-1.75 1.36-3.758 1.925-1.333.397-5.137 2.386 2.655 4.5l16.1 4.446c2.823.78 4.074-1.898 2.978-3.362-.7-1.155-1.7-1.568-2.52-2.408l6.444-7.568c1.202-.753 2.7-.483 4.235 0l21.358 4.73 2.392 9.462c.264 2.095-.318 1.28-2.2 2.27-3.252 1.2-2.25 4.007 1.657 4.73l20.07 5.486c2.154-.173 3.476-.968 1.84-3.974l-2.946-3.406-13.8-50.14c-.022-1.776.26-3.055 1.106-3.406 2.846-2.12 3.913-3.842.366-4.54l-20.436-4.352a3.35 3.35 0 00-.54-.029zm5.548 20.472l4.817 16.523-16.078-3.344zm66.022 1.288c-1.648.036-1.355 1.587-.672 3.445.253 1.027.56 2.1.355 2.68L509.76 90.32c-.86 1.255-1.505 2.942-3.035 2.857-5.043-.333-2.5 3.393-2.5 3.393l16.785 9.643c1.256-.26 2.312-1.056 2.857-3.213-1.7-1.68-1.064-2.362-1.25-3.394l8.93-15.893L542.44 90.5l2.857 20.713c-.85 1.74-1.823 2.898-3.037 2.857-3.54.828-2 2.097-.178 3.393l18.75 10.18c2.27.364 4.108.365 2.857-2.322-1.542-1.594-1.738-2.92-2.143-4.285L558.5 98.893c21.526 5.486 31.993-15.595 18.93-27.143-13.657-11.206-29.12-18.346-44.643-25.357-.606-.168-1.1-.24-1.47-.232zm11.203 17.465l22.855 13.66c4.504 4.617-1 9.87-6.07 8.303L538.96 74.07c-1.587-.595-1.356-1.2-1.34-1.785zM677.178 243.42l42.174-17.173c.4-.652.932-.907.884-2.904-.212-1.796 1.9-2.807 3.157-1.263l22.223 47.856c.547 1.86 2.062 2.172 3.788 2.147 2.966.987 1.862 2.188.38 3.4l-12.5 6.06c-3.198 1.1-4.386-1.104-2.525-2.652.844-.636 1.073-1.7.253-3.536l-14.016-30.305c-.786-1.47-1.786-2.15-3.283-1l-7.197 3.157 9.218 20.077c.634 1.02 1.393 1.617 2.4 1.4 1.677.262 3.345.53 1.768 2.652l-12.627 5.682c-2.693 1.074-3.938.477-3.535-2.02.52-.832 1.58-1.018 1-3.157l-9.596-19.95-9.596 3.4c-1.63 1.456-.332 2.262 0 3.283l14.395 31.567c5.1 1.853 5.668 3.28 3.157 4.42l-12.374 5.935c-2.792 1.227-4.547.001-2.525-3.157.434-.706.758-1.494.253-2.904l-21.34-48.614c-1.288-2.97-.514-3.742 1.768-2.904 1.394.198 1.836 1.157 4.293.505zm-6.2-77.1l8.934 13.17-30.988 19.57c-1 .396-2.17 1.686-3.833-.227-1-.556-2.774-1.08-3.08 2.802l10.407 15.625c1.835 1.774 3.246 2.255 3.127-1.922.44-1.675 1.174-1.5 1.765-2.222l31.667-19.62 9.662 13.8c.025.892-.352 2.095-.6 2.724-.853 1.683-.866 3.5 2.27 2.443l12.034-7.44c1.816-2.034 1.83-3.75-1.217-4.096-.877-.123-1.807-.144-2.37-.885l-27.923-39.734-.795-2.505c1.33-4.032.1-4.675-2.212-3.882l-11.634 7.434c-1.602 1.148-2.195 2.358 1.692 3.85zm-44.5-57.43c-1.03-.497-1.704.074-1.835 2.273.025 1.422-.276 2.75-1.938 3.685l-48.44 18.135c-.706.222-2.18.4-4.223-.045-1.364-.27-5.657-.28.25 5.226l12.2 11.434c2.136 2.003 4.5.217 4.2-1.6-.073-1.343-.766-2.174-1.108-3.303l9.226-3.7c1.414-.107 2.605.824 3.748 1.97l16.702 14.127-2.287 9.488c-.74 1.977-.877.985-3.012.98-3.437-.452-3.857 2.5-.735 4.96l15.2 14.198c1.987.85 3.527.762 3.48-2.66l-1.022-4.386 11.118-50.805c.808-1.582 1.653-2.582 2.564-2.5 3.505-.55 5.252-1.58 2.438-3.848l-16.06-13.365a3.35 3.35 0 00-.464-.277zm-4.62 20.7l-3.428 16.866-12.673-10.444z" />
    </SvgIcon>
  );
}
function a11yProps(index: number, link:string) {
  return {
    id: `nav-tab-${index}`,'aria-controls': `nav-tabpanel-${index}`, to:`${link}`
  };
}

export interface ILinkTabProps {
  page:string,

}
function LinkTab(props: any) {
  return (
    <Tab
      component={Link}
      /*onClick={(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        event.preventDefault();
      }}*/
      {...props}
    />
  );
}

export function ButtonAppBar() {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const [mobilePlat, setMobilePlat] =  useState(false);
  useMediaQuery
  const handleChange = (event: ChangeEvent<{}>, value: any) => {
    setValue(value);
  };
  React.useEffect(() => {

  });


  return (
    <AppBar style={{position:"relative"}}>
      <Toolbar>
        <HomeIcon style={{ color: 'white', width: '50px', height: '50px' }} />
        <Typography variant="h6" className={classes.title} noWrap>
          Mount Si School of Karate
        </Typography>
        <Tabs value={value} onChange={handleChange} aria-label="ne">
          <LinkTab label="Home" {...a11yProps(0,"/")}/>
          <LinkTab label="Shudokan Karate" {...a11yProps(1,"/about")} />
          <LinkTab label="Events" {...a11yProps(2,"/about")}  />
          <LinkTab label="Schedule" {...a11yProps(3,"/about")}  />
          <LinkTab label="About Us" {...a11yProps(4,"/about")} />  
          <LinkTab label="Student Portal" {...a11yProps(5,"/about")} />          
        </Tabs>
        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}