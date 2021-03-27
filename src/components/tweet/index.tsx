import React from 'react';
import { useHomeStyles } from '../../pages/Home';
import classNames from 'classnames';
import { Avatar, Grid, IconButton, Paper, Typography } from '@material-ui/core';
import RepostIcon from '@material-ui/icons/RepeatOutlined';
import LikeIcon from '@material-ui/icons/FavoriteBorderOutlined';
import ShareIcon from '@material-ui/icons/ReplyOutlined';
import CommentIcon from '@material-ui/icons/ModeCommentOutlined';


interface TweetProps {
    text: string;
    classes: ReturnType<typeof useHomeStyles>;
    user: {
        fullname: string;
        username: String;
        avatarUrl: string;
    }
}

export const Tweet: React.FC<TweetProps> = ({text, user, classes}: TweetProps): React.ReactElement => {
    
    return (
        <Paper className={classNames(classes.tweet, classes.tweetsHeader)} variant="outlined" >
            <Grid container spacing={3}>
                <Grid item xs={2}>
                    <Avatar
                        className={classes.tweetAvatar}
                        alt={`Аватарка пользователя ${user.fullname}`}
                        src={user.avatarUrl}>
                    </Avatar>
                </Grid>
                <Grid item xs={10}>
                    <Typography><b>{user.fullname}</b> <span className={classes.tweetUserName}> @{user.username}</span> </Typography>
                    <Typography variant="body1" gutterBottom>
                        {text}
                    </Typography>
                    <div className={classes.tweetFooter}>
                        <div>
                            <IconButton color="primary">
                                <CommentIcon style={{ fontSize: 20 }} />
                            </IconButton>
                            <span>1</span>
                        </div>
                        <div>
                            <IconButton color="primary">
                                <RepostIcon style={{ fontSize: 20 }} />
                            </IconButton>
                        </div>
                        <div>
                            <IconButton color="primary">
                                <LikeIcon style={{ fontSize: 20 }} />
                            </IconButton>
                        </div>
                        <div>
                            <IconButton color="primary">
                                <ShareIcon style={{ fontSize: 20 }} />
                            </IconButton>
                        </div>
                    </div>

                </Grid>
            </Grid>
        </Paper>
    );
}