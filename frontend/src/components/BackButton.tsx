import React from 'react';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { IconButton, Paper, Typography } from '@material-ui/core';
import { useHomeStyles } from '../pages/Home/theme';
import { useHistory } from 'react-router-dom';

interface BackButtonProps {
    classes: ReturnType<typeof useHomeStyles>;
}

export const BackButton: React.FC<BackButtonProps> = ({ classes }: BackButtonProps): React.ReactElement => {
    const history = useHistory();

    const handleClickButton = () => {
        history.goBack();
    }

    return (
        <Paper style={{ height: 40 }} className={classes.tweetsHeader} variant="outlined" >
            <IconButton onClick={handleClickButton} color="primary">
                <ArrowBackIcon className={classes.tweetsHeaderBackButton} />
            </IconButton>
            <Typography variant="h6"> Твитнуть </Typography>
        </Paper>
    )
}
