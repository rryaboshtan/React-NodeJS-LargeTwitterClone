import { Button, Hidden, IconButton, Typography } from '@material-ui/core';
import React from 'react';
import { useHomeStyles } from '../pages/Home';
import TwitterIcon from '@material-ui/icons/Twitter';
import SearchIcon from '@material-ui/icons/Search';
import NotificationIcon from '@material-ui/icons/NotificationsNone';
import MessageIcon from '@material-ui/icons/MailOutline';
import BookmarkIcon from '@material-ui/icons/BookmarkBorderOutlined';
import ListIcon from '@material-ui/icons/ListAltOutlined';
import UserIcon from '@material-ui/icons/PermIdentityOutlined';
import CreateIcon from '@material-ui/icons/CreateOutlined';

interface SideMenuProps {
    classes: ReturnType<typeof useHomeStyles>;
}

export const SideMenu: React.FC<SideMenuProps> = ({
    classes,
}: SideMenuProps): React.ReactElement => {
    return (
        <ul className={classes.sideMenuList}>
            <li >
                <div>
                    <IconButton className={classes.logo} aria-label="Twitter invite" color="primary" >
                        <TwitterIcon className={classes.logoIcon} />
                    </IconButton>
                </div>
            </li>
            <li className={classes.sideMenuListItem}>
                <div>
                    <SearchIcon className={classes.sideMenuListItemIcon} />
                    <Hidden smDown>
                        <Typography className={classes.sideMenuListItemLabel} variant="h6">Поиск</Typography>
                    </Hidden>
                </div>
            </li>
            <li className={classes.sideMenuListItem}>
                <div>
                    <NotificationIcon className={classes.sideMenuListItemIcon} />
                    <Hidden smDown>
                        <Typography className={classes.sideMenuListItemLabel} variant="h6">Уведомления</Typography>
                    </Hidden>
                </div>
            </li>
            <li className={classes.sideMenuListItem}>
                <div>
                    <MessageIcon className={classes.sideMenuListItemIcon} />
                    <Hidden smDown>
                            <Typography className={classes.sideMenuListItemLabel} variant="h6">Сообщения</Typography>
                    </Hidden>
                </div>
            </li>
            <li className={classes.sideMenuListItem}>
                <div>
                    <BookmarkIcon className={classes.sideMenuListItemIcon} />
                    <Hidden smDown>
                            <Typography className={classes.sideMenuListItemLabel} variant="h6">Закладки</Typography>
                    </Hidden>
                </div>
            </li>
            <li className={classes.sideMenuListItem}>
                <div>
                    <ListIcon className={classes.sideMenuListItemIcon} />
                    <Hidden smDown>
                        <Typography className={classes.sideMenuListItemLabel} variant="h6">Список</Typography>
                    </Hidden>
                </div>
            </li>
            <li className={classes.sideMenuListItem}>
                <div>
                    <UserIcon className={classes.sideMenuListItemIcon} />
                    <Hidden smDown>
                        <Typography className={classes.sideMenuListItemLabel} variant="h6">Профиль </Typography>
                    </Hidden>
                </div>
            </li>
            <li >
                <Hidden smDown>
                <Button className={classes.sideMenuTweetButton} variant="contained" color="primary" fullWidth>
                        Твитнуть
                </Button>
                </Hidden>
                <Hidden mdUp>
                    <Button className={classes.sideMenuTweetButton}
                        variant="contained" color="primary" >
                        <CreateIcon />
                    </Button>
                </Hidden>
            </li>
        </ul>
    );
}