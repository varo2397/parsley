import { makeStyles } from '@material-ui/styles';
import {ReactNode} from 'react'

const useStyles = makeStyles({
    root: {
      display: 'flex',
      marginLeft: '4rem',
      marginRight: '4rem',
      marginTop: '1rem',
      marginBottom: '2rem',
    },
});

type Props = {
    children: ReactNode
}

export const Layout = ({children}: Props): JSX.Element => {
    const classes = useStyles()
    return <div className={classes.root}>
        {children}
    </div>
}