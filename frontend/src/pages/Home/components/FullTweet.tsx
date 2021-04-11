import { Avatar, CircularProgress, IconButton, Paper, Typography } from '@material-ui/core';
// import classNames from 'classnames';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
// import { Tweet } from '../../../components/Tweet';
import { fetchTweetData, setTweetData } from '../../../store/ducks/tweet/actionCreators';
import { selectIsTweetLoading, selectTweetData } from '../../../store/ducks/tweet/selectors';
import { useHomeStyles } from '../theme';
import CommentIcon from '@material-ui/icons/ModeCommentOutlined';
import RepostIcon from '@material-ui/icons/RepeatOutlined';
import LikeIcon from '@material-ui/icons/FavoriteBorderOutlined';
import ShareIcon from '@material-ui/icons/ReplyOutlined';


export const FullTweet: React.FC = (): React.ReactElement | null => {
    const classes = useHomeStyles();
    const dispatch = useDispatch()
    const tweetData = useSelector(selectTweetData)
    const isLoading = useSelector(selectIsTweetLoading);
    const params: { id?: string } = useParams();
    const id = params.id


    useEffect(() => {
        // console.log('SET TWEET DATAAAA', tweetData)

        if (id)
            dispatch(fetchTweetData(id))
        return () => {
            dispatch(setTweetData(undefined));
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dispatch, id])

    if (isLoading)
        return (
            <div className={classes.tweetsCentered}><CircularProgress /></div>
        )

    if (tweetData) {
        return (
            <Paper variant="outlined" className={classes.fullTweet}>
                <div className={classes.tweetsHeaderUser}>
                    <Avatar
                        className={classes.tweetAvatar}
                        alt={`Аватарка пользователя ${tweetData.user.fullname}`}
                        src={tweetData.user.avatarUrl}>
                    </Avatar>
                    <Typography>
                        <b>{tweetData.user.fullname}</b>
                        <div>
                            <span className={classes.tweetUserName}> @{tweetData.user.username}</span>&nbsp;
                            <span className={classes.tweetUserName}>·</span>&nbsp;
                            <span className={classes.tweetUserName}>1 ч</span>
                        </div>
                    </Typography>
                </div>

                <Typography className={classes.fullTweetText} gutterBottom>
                    {tweetData.text}
                </Typography>
                <div className={classes.tweetFooter}>
                    <div>
                        <IconButton>
                            <CommentIcon style={{ fontSize: 20 }} />
                        </IconButton>
                        <span>1</span>
                    </div>
                    <div>
                        <IconButton>
                            <RepostIcon style={{ fontSize: 20 }} />
                        </IconButton>
                    </div>
                    <div>
                        <IconButton>
                            <LikeIcon style={{ fontSize: 20 }} />
                        </IconButton>
                    </div>
                    <div>
                        <IconButton>
                            <ShareIcon style={{ fontSize: 20 }} />
                        </IconButton>
                    </div>
                </div>
            </Paper>)
        // return <Tweet classes={classes} {...tweetData}></Tweet>
    }
    return null;

}
