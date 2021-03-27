import { Button, IconButton, Typography } from '@material-ui/core';
import React from 'react';
import { useHomeStyles } from '../pages/Home';
import TwitterIcon from '@material-ui/icons/Twitter';
import SearchIcon from '@material-ui/icons/Search';
import NotificationIcon from '@material-ui/icons/NotificationsNone';
import MessageIcon from '@material-ui/icons/MailOutline';
import BookmarkIcon from '@material-ui/icons/BookmarkBorderOutlined';
import ListIcon from '@material-ui/icons/ListAltOutlined';
import UserIcon from '@material-ui/icons/PermIdentityOutlined';

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
                    <Typography className={classes.sideMenuListItemLabel} variant="h6">Поиск</Typography>
                </div>
            </li>
            <li className={classes.sideMenuListItem}>
                <div>
                    <NotificationIcon className={classes.sideMenuListItemIcon} />
                    <Typography className={classes.sideMenuListItemLabel} variant="h6">Уведомления</Typography>
                </div>
            </li>
            <li className={classes.sideMenuListItem}>
                <div>
                    <MessageIcon className={classes.sideMenuListItemIcon} />
                    <Typography className={classes.sideMenuListItemLabel} variant="h6">Сообщения</Typography>
                </div>
            </li>
            <li className={classes.sideMenuListItem}>
                <div>
                    <BookmarkIcon className={classes.sideMenuListItemIcon} />
                    <Typography className={classes.sideMenuListItemLabel} variant="h6">Закладки</Typography>
                </div>
            </li>
            <li className={classes.sideMenuListItem}>
                <div>
                    <ListIcon className={classes.sideMenuListItemIcon} />
                    <Typography className={classes.sideMenuListItemLabel} variant="h6">Список</Typography>
                </div>
            </li>
            <li className={classes.sideMenuListItem}>
                <div>
                    <UserIcon className={classes.sideMenuListItemIcon} />
                    <Typography className={classes.sideMenuListItemLabel} variant="h6">Профиль </Typography>
                </div>
            </li>
            <li className={classes.sideMenuListItem}>
                <Button variant="contained" color="primary" fullWidth>
                    Твитнуть
                </Button>
            </li>
        </ul>
    );
}