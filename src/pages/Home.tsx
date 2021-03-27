import { Avatar, Container, createStyles, Grid, IconButton, InputBase, makeStyles, Paper, Typography, withStyles } from '@material-ui/core';
import TwitterIcon from '@material-ui/icons/Twitter';
import SearchIcon from '@material-ui/icons/Search';
import NotificationIcon from '@material-ui/icons/NotificationsNone';
import MessageIcon from '@material-ui/icons/MailOutline';
import BookmarkIcon from '@material-ui/icons/BookmarkBorderOutlined';
import ListIcon from '@material-ui/icons/ListAltOutlined';
import UserIcon from '@material-ui/icons/PermIdentityOutlined';
import CommentIcon from '@material-ui/icons/ModeCommentOutlined';

// import { grey } from '@material-ui/core/colors';

const useHomeStyles = makeStyles(() => ({
    wrapper: {
        height: '100vh',
    },
    sideMenuList: {
        listStyle: 'none',
        padding: 0,
        margin: 0,
    },
    sideMenuListItem: {
        display: 'flex',
        alignItems: 'center',
        height: 60,
    },
    sideMenuListItemLabel: {
        fontWeight: 700,
        fontSize: 20,
        marginLeft: 12,
    },
    logo: {
        marginBottom: 10,
    },
    logoIcon: {
        fontSize: 36,
    },
    sideMenuListItemIcon: {
        fontSize: 28,
        color: '#000',
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
    tweetsUserName: {
        // color: grey[500],
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
                    <ul className={classes.sideMenuList}>
                        <li className={classes.sideMenuListItem}>
                            <IconButton className={classes.logo} aria-label="Twitter invite" color="primary" >
                                <TwitterIcon className={classes.logoIcon} />
                            </IconButton>
                        </li>
                        <li className={classes.sideMenuListItem}>
                            <IconButton aria-label="Search">
                                <SearchIcon className={classes.sideMenuListItemIcon} />
                            </IconButton>
                            <Typography className={classes.sideMenuListItemLabel} variant="h6">Поиск</Typography>
                        </li>
                        <li className={classes.sideMenuListItem}>
                            <IconButton aria-label="Notification">
                                <NotificationIcon className={classes.sideMenuListItemIcon} />
                            </IconButton>
                            <Typography className={classes.sideMenuListItemLabel} variant="h6">Уведомления</Typography>

                        </li>
                        <li className={classes.sideMenuListItem}>
                            <IconButton aria-label="delete">
                                <MessageIcon className={classes.sideMenuListItemIcon} />
                            </IconButton>
                            <Typography className={classes.sideMenuListItemLabel} variant="h6">Сообщения</Typography>
                        </li>
                        <li className={classes.sideMenuListItem}>
                            <IconButton aria-label="Bookmarks">
                                <BookmarkIcon className={classes.sideMenuListItemIcon} />
                            </IconButton>
                            <Typography className={classes.sideMenuListItemLabel} variant="h6">Закладки</Typography>

                        </li>
                        <li className={classes.sideMenuListItem}>
                            <IconButton aria-label="Your lists">
                                <ListIcon className={classes.sideMenuListItemIcon} />
                            </IconButton>
                            <Typography className={classes.sideMenuListItemLabel} variant="h6">Список</Typography>

                        </li>
                        <li className={classes.sideMenuListItem}>
                            <IconButton aria-label="Your lists">
                                <UserIcon className={classes.sideMenuListItemIcon} />
                            </IconButton>
                            <Typography className={classes.sideMenuListItemLabel} variant="h6">Профиль </Typography>

                        </li>
                    </ul>
                </Grid>
                <Grid item xs={6}>
                    <Paper className={classes.tweetsWrapper} >
                        <Paper className={classes.tweetsHeader} variant="outlined" >
                            <Typography variant="h6"> Главная</Typography>
                        </Paper>
                        <Paper className={classes.tweetsHeader} variant="outlined" >
                            <Grid container spacing={3}>
                                <Grid item xs={1}>
                                    <Avatar
                                        alt="User avatar"
                                        src="https://images.unsplash.com/photo-1533227268428-f9ed0900fb3b?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTN8fG1hbnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60">
                                    </Avatar>
                                </Grid>
                                <Grid item xs={11}>
                                    <Typography><b>mxhxvoid</b> <span className={classes.tweetsUserName}> @mahavoid</span> </Typography>
                                    <Typography variant="body1" gutterBottom>
                                        по результатам анонимного опроса, школьники и педагоги назвали ненужными в школе, как минимум, 5 предметов:
                                        1. ОБЖ
                                        2. музыка
                                        3. рисование
                                        4. технология
                                        5. природоведение
                                    </Typography>
                                    <div>
                                        <IconButton>
                                            <CommentIcon />
                                        </IconButton>
                                    </div>
                                </Grid>
                            </Grid>
                        </Paper>
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