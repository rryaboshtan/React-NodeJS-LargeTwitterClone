import { makeStyles, Theme } from '@material-ui/core';

export const useHomeStyles = makeStyles((theme: Theme) => ({
    wrapper: {
        height: '100vh',
    },
    sideMenuList: {
        position: 'fixed',
        listStyle: 'none',
        width: 230,
        padding: 0,
        margin: 0,
    },
    sideMenuListItem: {
        '& div': {
            cursor: 'pointer',
            display: 'inline-flex',
            alignItems: 'center',
            position: 'relative',
            left: -10,
            padding: '0 25px 0 20px',
            borderRadius: 30,
            marginBottom: 15,
            height: 50,
            transition: 'background-color 0.2s ease-in-out',
            '&:hover': {
                backgroundColor: 'rgba(29, 161, 242, 0.1)',
                '& h6, & svg path': {
                    color: theme.palette.primary.main,
                },
            },
        },
    },
    sideMenuListItemLabel: {
        fontWeight: 700,
        fontSize: 23,
        marginLeft: 12,
    },
    logo: {
        marginBottom: 10,
    },
    logoIcon: {
        fontSize: 36,
    },
    sideMenuListItemIcon: {
        fontSize: 32,
        color: '#000',
    },
    sideMenuTweetButton: {
        color: '#fff',
        fontSize: 17,
        fontWeight: 700,
        padding: theme.spacing(2),
        marginTop: theme.spacing(2),
        height: 48,
    },
    gridItem: {
        paddingLeft: 12,
        paddingRight: 12,
    },
    tweetsWrapper: {
        borderRadius: 0,
        height: '100vh',
        borderTop: 0,
        borderBottom: 0,
    },
    tweetsCentered: {
        marginTop: 100,
        textAlign: 'center',
    },
    tweetsHeader: {
        padding: '10px 15px',
        '& h6': {
            fontWeight: 800,
        },
    },
    tweet: {
        cursor: 'pointer',
        paddingTop: 15,
        paddingLeft: 20,
        '&:hover': {
            backgroundColor: 'rgb(244, 248, 250)',
        },
    },
    tweetAvatar: {
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(4),
            height: theme.spacing(4),
        },
        [theme.breakpoints.up('md')]: {
            width: theme.spacing(5),
            height: theme.spacing(5),
        },
    },
    tweetFooter: {
        display: 'flex',
        position: 'relative',
        left: -13,
        justifyContent: 'space-between',
        [theme.breakpoints.up('sm')]: {
            width: 200,
        },
        [theme.breakpoints.up('md')]: {
            width: 450,
        },
    },
    tweetUserName: {
        color: '#5B7083',
    },
    rightSide: {
        marginLeft: 20,
        paddingTop: 4,
        position: 'fixed',
    },
    rightSideBlock: {
        backgroundColor: '#F5F8FA',
        borderRadius: 15,
        marginTop: 20,
        '& .MuiList-root': {
            paddingTop: 0,
        },
    },
    rightSideBlockHeader: {
        borderTop: 0,
        borderLeft: 0,
        borderRight: 0,
        borderBottom: "1px solid #333",
        borderRadius: 0,
        backgroundColor: 'transparent',
        padding: "13px 18px",
        '& b': {
            fontSize: 20,
            fontWeight: 800,
        },
    },
    rightSideBlockItem: {
        cursor: 'pointer',
        '& .MuiTypography-body1': {
            fontWeight: 700,
        },
        '& .MuiListItemAvatar-root': {
            minWidth: 50,
        },
        '& .MuiListItemText-root': {
            margin: 0,
        },
        '&:hover': {
            backgroundColor: '#edf3f6',
        },
    },
    addForm: {
        padding: 20,
    },
    addFormBody: {
        display: 'flex',
        width: '100%',
    },
    addFormBottom: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    addFormBottomActions: {
        marginTop: 10,
        paddingLeft: 70,
    },
    addFormTextArea: {
        width: '100%',
        border: 0,
        fontSize: 20,
        outline: 'none',
        fontFamily: 'inherit',
        resize: 'none',
    },
    addFormCircleProgress: {
        position: 'relative',
        width: 20,
        height: 20,
        margin: '0 10px',

        '& .MuiCircularProgress-root': {
            position: 'absolute',
        },
    },
    addFormBottomRight: {
        display: 'flex',
        alignItems: 'center',
    },
}
));