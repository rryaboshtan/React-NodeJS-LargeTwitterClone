import {
    Container, Grid, Paper, Typography, Hidden, Button, InputAdornment, ListItemText, List,
} from '@material-ui/core';
import ListItemAvatar from '@material-ui/core/ListItemAvatar/ListItemAvatar';
import ListItem from '@material-ui/core/ListItem/ListItem';
import Divider from '@material-ui/core/Divider/Divider';
import Avatar from '@material-ui/core/Avatar/Avatar';
import SearchIcon from '@material-ui/icons/Search';
import PersonAddIcon from '@material-ui/icons/PersonAddOutlined';
import { Tweet } from '../../components/Tweet';
import { AddTweetForm } from '../../components/AddTweetForm';
import { SideMenu } from '../../components/SideMenu';
import { SearchTextField } from '../../components/SearchTextField';
import { useHomeStyles } from './theme';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTweets } from '../../store/ducks/tweets/actionCreators';
import { selectIsTweetsLoading, selectTweetsItems } from '../../store/ducks/tweets/selectors';
import { ReactElement, useEffect } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import { fetchTags } from '../../store/ducks/tags/actionCreators';
import { Tags } from '../../components/Tags';
import { Route } from 'react-router-dom';
import { BackButton } from '../../components/BackButton';
import { FullTweet } from './components/FullTweet';
// import { fetchTweetData } from '../../store/ducks/tweet/actionCreators';


export const Home = (): ReactElement => {
    const dispatch = useDispatch();

    const classes = useHomeStyles();
    const tweets = useSelector(selectTweetsItems);
    const isLoading = useSelector(selectIsTweetsLoading);

    // if (tweets.length > 0)
    //     console.log(' typeof(tweets)', typeof tweets, ' JFDJFHD ', tweets);

    useEffect(() => {
        dispatch(fetchTweets());
        dispatch(fetchTags());
        // dispatch(fetchTweetData('606615c2c5d6dcbf42090629'));
    }, [dispatch]);

    return (
        <Container className={classes.wrapper} maxWidth="lg">
            <Grid container >
                <Grid className={classes.gridItem} item /*md={4} sm={2}*/>
                    <SideMenu classes={classes} />
                </Grid>
                <Grid item /*md={6} sm={9}*/ >
                    <Paper className={classes.tweetsWrapper}>
                        <Route path="/home/tweet" >
                            <BackButton classes={classes} />
                        </Route>
                        <Route path={["/home", "/"]} exact>
                            <Paper style={{ height: 40 }} className={classes.tweetsHeader} variant="outlined" >
                                <Typography variant="h6"> Главная </Typography>
                            </Paper>

                            <Paper style={{ borderBottom: '12px solid #E6ECF0' }}>
                                <AddTweetForm maxRows={15} classes={classes} />
                            </Paper>
                        
                            {isLoading ?
                                <div className={classes.tweetsCentered}><CircularProgress /></div>
                                :
                                tweets.length > 0 &&
                                tweets.map(tweet =>
                                    <Tweet _id={tweet._id} key={tweet._id} text={tweet.text} user={tweet.user} classes={classes}> </Tweet>
                                )
                            }
                        </Route>
                        <Route path="/home/tweet/:id" component={FullTweet} exact />
                        
                    </Paper>
                </Grid>
                <Hidden smDown>
                    <Grid item /*lg={2}*/ >
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

                            <Tags classes={classes} />
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
                                    <Divider />
                                </List>
                            </Paper>
                        </div>
                    </Grid>
                </Hidden>
            </Grid>
        </Container >
    );
}