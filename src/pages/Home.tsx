import { Grid, IconButton, makeStyles, Paper, Typography } from '@material-ui/core';
import React from 'react';
import TwitterIcon from '@material-ui/icons/Twitter';
import SearchIcon from '@material-ui/icons/Search';
import NotificationIcon from '@material-ui/icons/NotificationsNone';
import MessageIcon from '@material-ui/icons/MailOutline';
import BookmarkIcon from '@material-ui/icons/BookmarkBorderOutlined';
import ListIcon from '@material-ui/icons/ListAltOutlined';
import UserIcon from '@material-ui/icons/PermIdentityOutlined';

const useHomeStyles = makeStyles(() => ({
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
    sideMenuListItemIcon: {
        fontSize: 28,
    }
}
));

export const Home = () => {
    const classes = useHomeStyles();
    
    return (

        <section>
            <Grid container spacing={3}>
                <Grid item xs={1}>
                    <ul className={classes.sideMenuList}>
                        <li className={classes.sideMenuListItem}>
                            <IconButton aria-label="Twitter invite" color="primary" >
                                <TwitterIcon className={classes.sideMenuListItemIcon}/>
                            </IconButton>
                        </li>
                        <li className={classes.sideMenuListItem}>
                            <IconButton aria-label="Search">
                                <SearchIcon className={classes.sideMenuListItemIcon}/>
                            </IconButton>
                            <Typography className={classes.sideMenuListItemLabel } variant="h6">Поиск</Typography>
                        </li>
                        <li className={classes.sideMenuListItem}>
                            <IconButton aria-label="Notification">
                                <NotificationIcon className={classes.sideMenuListItemIcon}/>
                            </IconButton>
                            <Typography className={classes.sideMenuListItemLabel } variant="h6">Уведомления</Typography>

                        </li>
                        <li className={classes.sideMenuListItem}>
                            <IconButton aria-label="delete">
                                <MessageIcon className={classes.sideMenuListItemIcon}/>
                            </IconButton>
                            <Typography className={classes.sideMenuListItemLabel } variant="h6">Сообщения</Typography>
                        </li>
                        <li className={classes.sideMenuListItem}>
                            <IconButton aria-label="Bookmarks">
                                <BookmarkIcon className={classes.sideMenuListItemIcon}/>
                            </IconButton>
                            <Typography className={classes.sideMenuListItemLabel } variant="h6">Закладки</Typography>

                        </li>
                        <li className={classes.sideMenuListItem}>
                            <IconButton aria-label="Your lists">
                                <ListIcon className={classes.sideMenuListItemIcon}/>
                            </IconButton>
                            <Typography className={classes.sideMenuListItemLabel } variant="h6">Список</Typography>

                        </li>
                        <li className={classes.sideMenuListItem}>
                            <IconButton aria-label="Your lists">
                                <UserIcon className={classes.sideMenuListItemIcon}/>
                            </IconButton>
                            <Typography className={classes.sideMenuListItemLabel } variant="h6">Профиль </Typography>

                        </li>
                    </ul>
                </Grid>
                <Grid item xs={7}>
                    <Paper>xs</Paper>
                </Grid>
                <Grid item xs={4}>
                    <Paper>xs</Paper>
                </Grid>
            </Grid>
        </section>
    );
}