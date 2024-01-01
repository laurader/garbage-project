import * as React from 'react';
import Tooltip, { TooltipProps, tooltipClasses } from '@mui/material/Tooltip';
import styled from '@emotion/styled';
import { Colors } from '../../../../../colors';


const CustomTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} arrow classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.arrow}`]: {
    color: Colors.White,
  },
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: Colors.White,
    boxShadow: '0 0 30px 0 rgba(0, 0, 0, 0.2)',
  },
}));

export default CustomTooltip;
