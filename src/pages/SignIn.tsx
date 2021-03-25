import {
    Button,
    FormControl, FormGroup, makeStyles,
    TextField, Typography
} from '@material-ui/core';
import TwitterIcon from '@material-ui/icons/Twitter';
import SearchIcon from '@material-ui/icons/Search';
import PeopleIcon from '@material-ui/icons/PeopleOutline';
import MessageIcon from '@material-ui/icons/ModeCommentOutlined';
import { useState } from 'react';
import {ModalBlock} from '../components/ModalBlock';

export const useStylesSignIn = makeStyles((theme) => ({
    wrapper: {
        display: 'flex',
        height: '96vh',
    },
    blueSide: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#71C9F8',
        flex: '0 0 50%',
        overflow: 'hidden',
        position: 'relative',
    },
    blueSideBigIcon: {
        position: 'absolute',
        transform: 'translate(-50%, -50%)',
        left: '45%',
        top: '65%',
        width: '350%',
        height: '350%',
    },
    blueSideListInfo: {
        zIndex: 1,
        listStyle: 'none',
        padding: 0,
        margin: 0,
        width: 380,
        '& h6': {
            display: 'flex',
            alignItems: 'center',
            color: 'white',
            fontWeight: 700,
            fontSize: 20,
        },
    },
    blueSideListInfoItem: {
        marginBottom: 40,
    },
    blueSideListInfoIcon: {
        fontSize: 30,
        marginRight: 15,
    },
    loginSide: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flex: '0 0 50%',
    },
    loginSideTwitterIcon: {
        fontSize: 45,
    },
    loginSidewrapper: {
        width: 380,
    },
    loginSideTitle: {
        fontWeight: 700,
        fontSize: 32,
        marginBottom: 45,
        marginTop: 20,
    },
    loginSideField: {
        marginBottom: 18,
    }
}));

function SignIn() {
    const classes = useStylesSignIn();

    const [visibleSignIn, setVisibleSignIn] = useState(false);

    const handleClickOpen = () => {
        setVisibleSignIn(true);
    };
    const handleClose = () => {
        setVisibleSignIn(false);
    };

    return (
        <div className={classes.wrapper}>
            <section className={classes.blueSide}>
                <TwitterIcon color="primary" className={classes.blueSideBigIcon} />

                <ul className={classes.blueSideListInfo}>
                    <li className={classes.blueSideListInfoItem}>
                        <Typography variant="h6">
                            <SearchIcon className={classes.blueSideListInfoIcon} /> Читайте о том, что вам интересно
                        </Typography>
                    </li>
                    <li className={classes.blueSideListInfoItem}><Typography variant="h6">
                        <PeopleIcon className={classes.blueSideListInfoIcon} /> Узнайте, о чем говорят в мире
                        </Typography>
                    </li>
                    <li className={classes.blueSideListInfoItem}>
                        <Typography variant="h6">
                            <MessageIcon className={classes.blueSideListInfoIcon} /> Присоединяйтесь к общению
                        </Typography>
                    </li>
                </ul>
            </section>
            <section className={classes.loginSide}>
                
                <div className={classes.loginSidewrapper}>
                    <TwitterIcon color="primary" className={classes.loginSideTwitterIcon} />
                    <Typography className={classes.loginSideTitle} variant="h4"> Узнайте, что происходит в мире прямо сейчас</Typography>
                    <Typography> <b>Присоединяйтесь к Твиттеру прямо сейчас!</b></Typography>
                    <br />
                    <Button style={{ marginBottom: 16 }} variant="contained" color="primary" fullWidth>
                        Зарегистрироваться
                    </Button>
                    <Button onClick={handleClickOpen} variant="outlined" color="primary" fullWidth>
                        Войти
                    </Button>

                    <ModalBlock visible={visibleSignIn} onClose={handleClose}  title="Войти в аккаунт">
                        <FormControl component="fieldset" fullWidth>
                            <FormGroup aria-label="position" row>
                                <TextField
                                    className={classes.loginSideField}
                                    id="email"
                                    label="E-mail"
                                    type="email"
                                    variant="filled"
                                    fullWidth>
                                </TextField>
                                <TextField
                                    className={classes.loginSideField}
                                    autoFocus
                                    id="password"
                                    label="Пароль"
                                    variant="filled"
                                    type="password"
                                    fullWidth>
                                </TextField>
                                <Button onClick={handleClose} variant="contained" color="secondary" fullWidth>
                                    Войти
                                </Button>
                                <br />
                                <br />
                                <br />
                            </FormGroup>
                        </FormControl>
                    </ModalBlock>
                </div>
            </section>
        </div>
    );
}

export default SignIn;