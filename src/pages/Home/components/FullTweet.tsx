import { CircularProgress } from '@material-ui/core';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { Tweet } from '../../../components/Tweet';
import { fetchTweetData, setTweetData } from '../../../store/ducks/tweet/actionCreators';
import { selectIsTweetLoading, selectTweetData } from '../../../store/ducks/tweet/selectors';
import { useHomeStyles } from '../theme';

export const FullTweet: React.FC = (): React.ReactElement | null=> {
    const classes = useHomeStyles();
    const dispatch = useDispatch()
    const tweetData = useSelector(selectTweetData)
    const isLoading = useSelector(selectIsTweetLoading);
    const params: {id?:string} = useParams();
    const id = params.id

    useEffect(() => {
        if (id)
            dispatch(fetchTweetData(id))
        
        return () => {
            dispatch(setTweetData(undefined));
        }
    }, [dispatch, id])

    if (isLoading)
        return (
            <div className={classes.tweetsCentered}><CircularProgress /></div>
        )
    
    if (tweetData)
        return <Tweet classes={classes} {...tweetData}></Tweet>    
    
    return null;
}

