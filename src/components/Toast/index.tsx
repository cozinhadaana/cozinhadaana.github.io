import * as React from 'react';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps, AlertColor } from '@mui/material/Alert';

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export interface ToastProps {
  open: boolean;
  type: AlertColor;
  message: string;
  handleClose: VoidFunction;
}

export const ToastInitialState: ToastProps = {
  open: false,
  type: 'success',
  message: '',
  handleClose: () => { }
}

export default function Toast({ open, type, message, handleClose }: ToastProps) {
  return (
    <Snackbar open={open} autoHideDuration={6000} onClose={handleClose} anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}>
      <Alert onClose={handleClose} severity={type} sx={{ width: '100%' }}>
        {message}
      </Alert>
    </Snackbar>
  );
}
