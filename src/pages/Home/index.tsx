import {
    Container, Grid, Paper, Typography, Hidden, Button, InputAdornment, ListItemText, List,
} from '@material-ui/core';
import { SideMenu } from '../../components/SideMenu';
import { Tweet } from '../../components/Tweet';
import SearchIcon from '@material-ui/icons/Search';
import PersonAddIcon from '@material-ui/icons/PersonAddOutlined';
import ListItem from '@material-ui/core/ListItem/ListItem';
import Divider from '@material-ui/core/Divider/Divider';
import ListItemAvatar from '@material-ui/core/ListItemAvatar/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar/Avatar';
import { AddTweetForm } from '../../components/AddTweetForm';
import { useHomeStyles } from './theme';
import { SearchTextField } from '../../components/SearchTextField';


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
                            <AddTweetForm classes={classes} />
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