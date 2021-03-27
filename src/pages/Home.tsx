import {
    Container, createStyles, Grid, InputBase, makeStyles,
    Paper, Theme, Typography, withStyles } from '@material-ui/core';
import { SideMenu } from '../components/SideMenu';
import { Tweet } from '../components/Tweet';

export const useHomeStyles = makeStyles((theme: Theme) => ({
    wrapper: {
        height: '100vh',
    },
    sideMenuList: {
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
                '& h6, & svg path' : {
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
        width: theme.spacing(5),
        height: theme.spacing(5),
    },
    tweetFooter: {
        display: 'flex',
        position: 'relative',
        left: -13,
        justifyContent: 'space-between',
        width: 450
    },
    tweetUserName: {
        color: '#5B7083',
    },
}
));

const SearchTextField = withStyles(() =>
    createStyles({
        input: {
            borderRadius: 30,
            backgroundColor: '#EBEEF0',
            height: 45,
            padding: 0,
        },
    }),
)(InputBase);

export const Home = () => {
    const classes = useHomeStyles();

    return (
        <Container className={classes.wrapper} maxWidth="lg">
            <Grid container >
                <Grid className={classes.gridItem} item xs={3}>
                    <SideMenu classes={classes}/>
                </Grid>
                <Grid item xs={6}>
                    <Paper className={classes.tweetsWrapper} >
                        <Paper className={classes.tweetsHeader} variant="outlined" >
                            <Typography variant="h6"> Главная</Typography>
                        </Paper>
                        {
                            [...new Array(20).fill(<Tweet
                                text="Технологию сделать общей, объединить с обж и преобразовать в предмет о жизни: основы кулинарии, умение держать молоток, оказание ПМП, экономика и ещё по мелочи"
                                user={{
                                    fullname: 'Евгений',
                                    username: 'lalayodi',
                                    avatarUrl: 'https://images.unsplash.com/photo-1533227268428-f9ed0900fb3b?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTN8fG1hbnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60',
                                }}
                                classes={classes} >
                            </Tweet>)]
                        }
                    </Paper>
                </Grid>
                <Grid item xs={3}>
                    <SearchTextField
                        placeholder="Поиск по Твиттеру"
                        fullWidth>
                    </SearchTextField>
                </Grid>
            </Grid>
        </Container>
    );
}