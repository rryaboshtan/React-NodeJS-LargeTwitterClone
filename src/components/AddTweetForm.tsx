import React, { useState } from 'react';
import ImageOutlinedIcon from '@material-ui/icons/ImageOutlined';
import EmodjiIcon from '@material-ui/icons/SentimentSatisfiedOutlined';
import { Avatar, Button, CircularProgress, IconButton, TextareaAutosize } from '@material-ui/core';
import { useHomeStyles } from '../pages/Home/theme';

interface AddTweetFormProps {
    maxRows?: number;
    padding?: number;
    classes: ReturnType<typeof useHomeStyles>;
}

const MAX_LENGTH = 280;

export const AddTweetForm: React.FC<AddTweetFormProps> = ({
    classes,
    maxRows,
    padding,
}: AddTweetFormProps): React.ReactElement => {
    const [text, setText] = useState<string>('');
    const textLimitPercent = (text.length / 280) * 100;
    const maxLength = MAX_LENGTH - text.length;

    const handleChangeTextarea = (e: React.FormEvent<HTMLTextAreaElement>) => {
        if (e.currentTarget) 
            setText(e.currentTarget.value);
    }
    const handleClickAddTweet = ():void => {
        setText('');
    }

    return (
        <div className={classes.addForm} style={{padding: padding}}>
            <div className={classes.addFormBody}>
                <Avatar
                    className={classes.tweetAvatar}
                    alt={`Аватарка пользователя UserAvatar`}
                    src="https://avatars.githubusercontent.com/u/79945546?s=60&u=0023c769c150c34e9b512a1d6b63e54abef57bef&v=4"
                />
                <TextareaAutosize
                    onChange={handleChangeTextarea}
                    className={classes.addFormTextArea}
                    placeholder="Что происходит?"
                    value={text}
                    rowsMax={maxRows}
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
                    {text && (<>
                        <span>{maxLength}</span>
                        <div className={classes.addFormCircleProgress}>
                            <CircularProgress
                                variant="static"
                                size={20}
                                thickness={5}
                                value={text.length >= MAX_LENGTH ? 100 : textLimitPercent}
                                style={text.length >= MAX_LENGTH ? { color: 'red' } : {}}
                            />
                            <CircularProgress
                                style={{ color: 'rgba(0,0,0, 0.1)' }}
                                variant="static"
                                size={20}
                                thickness={5}
                                value={50}
                            />
                        </div>
                    </>)
                    }
                    <Button
                        className={classes.AddFormButton}
                        onClick={handleClickAddTweet}
                        disabled={text.length >= MAX_LENGTH}
                        color="primary"
                        variant="contained">
                            Твитнуть
                    </Button>
                </div>
            </div>
        </div>
    );
}