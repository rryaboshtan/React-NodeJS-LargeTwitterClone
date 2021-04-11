import { makeStyles, Theme } from '@material-ui/core';

export const useHomeStyles = makeStyles((theme: Theme) => ({
    wrapper: {
        height: '100vh',
    },
    sideMenuList: {
        position: 'fixed',
        listStyle: 'none',
        width: '9vw',
        [theme.breakpoints.up('sm')]: {
            left: '0vw',
        },
        [theme.breakpoints.up('md')]: {
            left: '8vw',
        },
        [theme.breakpoints.up('lg')]: {
            left: '24vw',
        },
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
        display: 'inline-block',
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
        position: 'absolute',
        left: '50vw',
        borderRadius: 0,
        height: '100vh',
        width: '38vw',
        borderTop: 0,
        borderBottom: 0,
        [theme.breakpoints.down('sm')]: {
            width: '85vw',
            left: '10vw',
        },
        [theme.breakpoints.up('md')]: {
            width: '52vw',
            left: '18vw',
        },
        [theme.breakpoints.up('lg')]: {
            width: '35vw',
            left: '35vw',
        },
    },
    tweetWrapper: {
        color: 'inherit',
        textDecoration: 'none',
    },
    tweetsCentered: {
        marginTop: 100,
        textAlign: 'center',
    },
    tweetsHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: '15px 20px',
        '& h6': {
            fontWeight: 800,
        },
    },
    tweetsHeaderUser: {
        display: 'flex',
        alignItems: 'center',
    },
    tweetsHeaderBackButton: {
        fontSize: 29,
        marginRight: 30,
        padding: 5,
    },
    tweet: {
        cursor: 'pointer',
        paddingTop: 15,
        paddingLeft: 20,
        '&:hover': {
            backgroundColor: 'rgb(244, 248, 250)',
        },
    },
    fullTweet: {
        padding: 22,
    },
    fullTweetText: {
        fontSize: 24,
        marginTop: 20,
    },
    tweetAvatar: {
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(3),
            height: theme.spacing(3),
        },
        [theme.breakpoints.up('md')]: {
            width: theme.spacing(4),
            height: theme.spacing(4),
        },
        [theme.breakpoints.up('lg')]: {
            width: theme.spacing(5),
            height: theme.spacing(5),
        },
    },
    tweetFooter: {
        display: 'flex',
        position: 'relative',
        left: -13,
        justifyContent: 'space-between',
    },
    tweetUserName: {
        color: '#5B7083',
    },
    rightSide: {
        left: '70vw',
        marginLeft: 20,
        paddingTop: 4,
        position: 'fixed',
        [theme.breakpoints.up('sm')]: {
            left: '45vw',
        },
        [theme.breakpoints.up('md')]: {
            left: '70vw',
        },
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
        '& a': {
            color: 'inherit',
            textDecoration: 'none',
        },
    },
    addForm: {
        padding: 20,
    },
    addFormBody: {
        display: 'flex',
        width: '100%',
    },
    AddFormButton: {
        [theme.breakpoints.down('sm')]: {
            width: 30,
        },
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