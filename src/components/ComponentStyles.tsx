import { createStyles, makeStyles, Theme } from "@material-ui/core";

export const CommonStyles = makeStyles((theme: Theme) =>
    createStyles({
        block: {
            width: '100%',
            height: '45vh',
            position: 'relative',
            overflow: 'hidden',
            fontSize: '16px'
        },herotext: {
            position: "relative",
            display: "block",
            textalign: "center",
            marginLeft: "5vw",
            padding: ".6rem",
            top: "50%",
            transform: "translateY(-50%)",
            color: "black",
            width: "20vw",
            minWidth: "160px",
            height: "14vh",
            minHeight: "170px",
            //background: "rgba(0, 0, 0, .5)",
            borderWidth: "2px 4px",
            borderRadius: "5px",
            fontFamily: "'Roboto', sans-serif",
            fontWeight: 400,
            fontSize: "calc(1em + .5vw)",
            textTransform: "uppercase",
            textDecoration: "none",
            lineHeight: "2.9vh"
        },
        gridList: {
            flexWrap: 'nowrap',
            listStyle: "none",
            textalign: 'center',
            // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
            transform: 'translateZ(0)',
            display: 'flex'
        }
        , gridListIcon: {
            flexWrap: 'nowrap',
            width: "2vw"
        },
        gridListIconContainer: {
            justifyContent: "center",
            alignItems: "center",
            display: 'flex',
            flexWrap: 'nowrap',
            width: "fit-content",
            minwidth: "50px"
        },
        taglinetext: {
            textTransform: "revert",
            fontFamily: "'Roboto', sans-serif",
            fontWeight: 100,
            fontSize: "calc(.5em + .1vw)",
        }
    })
);