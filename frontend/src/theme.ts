import { createMuiTheme } from "@material-ui/core";

export const theme = createMuiTheme({
    typography: {
        fontFamily: [
            'system-ui',
            '-apple-system',
            'BlyncMacSystemFont',
            'Segoe UI',
            'Roboto',
            'Ubuntu',
            'Helvetica Neue',
            'sans-serif',
        ].join(','),
    },
    palette: {
        primary: {
            main: 'rgb(29, 161, 242)',
            // dark: 'rgb(26, 145, 218)',
        },
        secondary: {
            main: 'rgb(26, 145, 218)',
        },
        text: {
            primary: '#14171A',
        },
    },
    overrides: {
        MuiButton: {
            root: {
                borderRadius: 30,
                textTransform: 'none',
                fontSize: 16,
                height: 40,
                fontWeight: 600,
            },
            textPrimary: {
                paddingLeft: 20,
                paddingRight: 20,
            },
            outlinedPrimary: {
                borderColor: 'rgb(29, 161, 243)',

            }
        },
        MuiFilledInput: {
            underline: {
                '&:after': {
                    borderBottomWidth: 2,
                },
                '&:before': {
                    borderColor: '#000',
                    borderBottomWidth: 2,
                },

            },
            input: {
                backgroundColor: 'rgb(245, 248, 250)',
            },
        },
        MuiDialog: {
            paper: {
                borderRadius: 15,
            },
        },
        MuiDialogActions: {
            root: {
                marginBottom: 8,
            },
        },
        MuiDialogTitle: {
            root: {
                borderBottom: '1px solid rgb (204, 214, 221)',
                marginBottom: 10,
                padding: '10 15',
                '& h2': {
                    display: 'flex',
                    alignItems: 'center',
                    fontWeight: 800,
                },
                '& button': {
                    padding: 8,
                    marginRight: 20,
                },
            },
        },
    },
});