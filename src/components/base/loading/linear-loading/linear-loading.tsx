import { LinearProgress, useMediaQuery } from '@mui/material';
import React from 'react';
import { mediaQueryMobileLimit } from '../../../../utils/constants';

export interface LinearLoadingProps {
  loading: boolean;
}

const LinearLoading = (props: LinearLoadingProps) => {
  const desktopMode = useMediaQuery(`(min-width:${mediaQueryMobileLimit}px)`);

  return (
    <>
      {props.loading ? (
        <LinearProgress
          sx={{ height: 3, width: desktopMode ? '100%' : '100vw' }}
        />
      ) : (
        <div style={{ height: 3, width: desktopMode ? '100%' : '100vw' }} />
      )}
    </>
  );
};

export default LinearLoading;
