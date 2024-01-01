import React, { useState } from 'react';
import { ToastProvider } from './hooks/toast.hook';
import { ToastStyled } from "./toast.styled";

const AUTO_HIDE_DURATION = 10000
const Toast = ({ children }: any) => {

  const [showToast, setShowToast] = useState(false)
  const [component, setComponent] = useState(null);
  const [autoHide, setAutoHide] = useState<boolean | undefined>(true)

  const openToast = (component: any, autoHide?: boolean) => {
    setComponent(component)
    setShowToast(true)
    if (autoHide) {
      setAutoHide(autoHide)
    }
  };

  const closeToast = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    setComponent(null);
    setShowToast(false)
    setAutoHide(true)
  };

  return (
    <ToastProvider value={{openToast, closeToast}}>
      {children}
      { component &&
        <ToastStyled.SnackBar anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
                              autoHideDuration={autoHide ? AUTO_HIDE_DURATION : null}
                              open={showToast}
                              onClose={closeToast}
        >
          <ToastStyled.Container>
            {component}
          </ToastStyled.Container>
        </ToastStyled.SnackBar>
      }
    </ToastProvider>
  );
};

export default Toast;
