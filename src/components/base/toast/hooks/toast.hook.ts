import { createContext, useContext } from 'react';

export const ToastContext = createContext({
  openToast: (component: any, autoHide?: boolean) => {},
  closeToast: () => {},
});

export const ToastProvider = ToastContext.Provider;

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
};
