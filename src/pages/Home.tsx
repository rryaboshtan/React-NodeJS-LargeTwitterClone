import {
    Container, Grid, makeStyles, Paper, TextField, Theme, Typography, withStyles,
    Hidden, TextareaAutosize, IconButton, Button, InputAdornment, ListItemText, List,
} from '@material-ui/core';
import { SideMenu } from '../components/SideMenu';
import { Tweet } from '../components/Tweet';
import SearchIcon from '@material-ui/icons/Search';
import PersonAddIcon from '@material-ui/icons/PersonAddOutlined';
import ImageOutlinedIcon from '@material-ui/icons/ImageOutlined';
import EmodjiIcon from '@material-ui/icons/SentimentSatisfiedOutlined';
import ListItem from '@material-ui/core/ListItem/ListItem';
import Divider from '@material-ui/core/Divider/Divider';
import ListItemAvatar from '@material-ui/core/ListItemAvatar/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar/Avatar';
import CircularProgress from '@material-ui/core/CircularProgress/CircularProgress';
import React from 'react';

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
        borderBottom: '12px solid #E6ECF0',
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

const SearchTextField = withStyles((theme: Theme) => ({
    root: {
        '& .MuiOutlinedInput-root': {
            borderRadius: 30,
            backgroundColor: '#E6ECF0',
            paddingLeft: 15,
            "&.Mui-focused": {
                backgroundColor: '#fff',
                '& svg path': {
                    fill: theme.palette.primary.main,
                },
            },
            '&:hover': {
                '& svg path': {
                    fill: theme.palette.primary.main,
                },
                backgroundColor: '#fff',
                border: `1px solid ${theme.palette.primary.main}`,
                '& fieldset': { borderColor: 'transparent' },
            },
        },
    },
}))(TextField);

export const Home = (): React.ReactElement => {
    const classes = useHomeStyles();

    return (
        <Container className={classes.wrapper} maxWidth="lg">
            <Grid container >
                <Grid className={classes.gridItem} item md={3} sm={2}>
                    <SideMenu classes={classes} />
                </Grid>
                <Grid item md={6} sm={9} >
                    <Paper className={classes.tweetsWrapper} >
                        <Paper className={classes.tweetsHeader} variant="outlined" >
                            <Typography variant="h6"> Главная</Typography>
                        </Paper>
                        <Paper>
                            <div className={classes.addForm}>
                                <div className={classes.addFormBody}>
                                    <Avatar
                                        className={classes.tweetAvatar}
                                        alt={`Аватарка пользователя UserAvatar`}
                                        src="https://avatars.githubusercontent.com/u/79945546?s=60&u=0023c769c150c34e9b512a1d6b63e54abef57bef&v=4"
                                    />
                                    <TextareaAutosize
                                        className={classes.addFormTextArea}
                                        placeholder="Что происходит?"
                                    />
                                </div>
                                <div className={classes.addFormBottom}>
                                    <div className={classes.addFormBottomActions}>
                                        <IconButton color="primary">
                                            <ImageOutlinedIcon style={{ fontSize: 26 }} />
                                        </IconButton>
                                        <IconButton color="primary">
                                            <EmodjiIcon style={{ fontSize: 26 }} />
                                        </IconButton>
                                    </div>
                                    <div className={classes.addFormBottomRight}>
                                        <span>280</span>
                                        <div className={classes.addFormCircleProgress}>
                                            <CircularProgress variant="static" size={20} />
                                            <CircularProgress
                                                style={{ color: 'rgba(0,0,0, 0.1)' }}
                                                variant="static"
                                                size={20}
                                                thickness={4}
                                                value={100}
                                            />
                                        </div>
                                        <Button color="primary" variant="contained">
                                            Твитнуть
                                        </Button>
                                    </div>
                                </div>
                            </div>
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
                <Hidden smDown>
                    <Grid item lg={3} >
                        <div className={classes.rightSide}>
                            <SearchTextField
                                variant="outlined"
                                placeholder="Поиск по Твиттеру"
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <SearchIcon />
                                        </InputAdornment>
                                    ),
                                }}
                                fullWidth>
                            </SearchTextField>
                            <Paper className={classes.rightSideBlock} elevation={0}>
                                <Paper className={classes.rightSideBlockHeader} elevation={0}>
                                    <b>Актуальные темы</b>
                                </Paper>
                                <List>
                                    <ListItem className={classes.rightSideBlockItem}>
                                        <ListItemText
                                            primary="Санкт-Петербург"
                                            secondary={
                                                <Typography component="span" variant="body2">
                                                    Твитов: 3 331
                                                </Typography>
                                            }
                                        />
                                    </ListItem>
                                    <Divider component="li" />
                                    <ListItem className={classes.rightSideBlockItem}>
                                        <ListItemText
                                            primary="#коронавирус"
                                            secondary={
                                                <Typography component="span" variant="body2">
                                                    Твитов: 163 122
                                                </Typography>
                                            }
                                        />
                                    </ListItem>
                                    <Divider component="li" />
                                    <ListItem className={classes.rightSideBlockItem}>
                                        <ListItemText
                                            primary="Беларусь"
                                            secondary={
                                                <Typography component="span" variant="body2">
                                                    Твитов: 13 554
                                                </Typography>
                                            }
                                        />
                                    </ListItem>
                                    <Divider component="li" />
                                </List>
                            </Paper>
                            <Paper className={classes.rightSideBlock} elevation={0}>
                                <Paper className={classes.rightSideBlockHeader} variant="outlined">
                                    <b>Кого читать</b>
                                </Paper>
                                <List>
                                    <ListItem className={classes.rightSideBlockItem}>
                                        <ListItemAvatar>
                                            <Avatar
                                                alt="Remy Sharp"
                                                src="https://images.unsplash.com/photo-1590086782957-93c06ef21604?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OXx8bWFufGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"
                                            />
                                        </ListItemAvatar>
                                        <ListItemText
                                            primary="Dock of Shame"
                                            secondary={
                                                <Typography component="span" variant="body2">
                                                    @FavDockOfShame
                                                </Typography>
                                            }
                                        />
                                        <Button color="primary">
                                            <PersonAddIcon />
                                        </Button>
                                    </ListItem>
                                    <Divider component="li" />
                                </List>
                            </Paper>
                        </div>
                    </Grid>
                </Hidden>
            </Grid>
        </Container>
    );
}