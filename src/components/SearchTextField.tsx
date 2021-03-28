import { TextField, Theme, withStyles } from "@material-ui/core";

export const SearchTextField = withStyles((theme: Theme) => ({
    root: {
        '& .MuiOutlinedInput-root': {
            borderRadius: 30,
            backgroundColor: '#E6ECF0',
            paddingLeft: 15,
            "&.Mui-focused": {
                backgroundColor: '#fff',
                '& svg path': {
                    fill: theme.palette.primary.main,
                },
            },
            '&:hover': {
                '& svg path': {
                    fill: theme.palette.primary.main,
                },
                backgroundColor: '#fff',
                border: `1px solid ${theme.palette.primary.main}`,
                '& fieldset': { borderColor: 'transparent' },
            },
        },
    },
}))(TextField);