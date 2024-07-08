import React from 'react';
import CloudOffIcon from '@material-ui/icons/CloudOff';
import { makeStyles, Theme } from '@material-ui/core/styles';
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';
import getLang from '@/lang/Lang';

function Alert(props: AlertProps) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

export default function OfflineStatus() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '10px',
        right: '10px',
        zIndex: 9999,
        color: '#FFF',
        borderRadius: 3,
        display: 'flex',
        background: '#d83333ba',
        padding: '10px 1rem',
        alignItems: 'center',
      }}
    >
      <CloudOffIcon />
      <div style={{ marginLeft: '10px', fontSize: '.8rem', fontWeight: 500 }}>
        {getLang(`error`, `noInternetConnection`)}
      </div>
    </div>
  );
}
