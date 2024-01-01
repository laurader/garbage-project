import { Box, CircularProgress } from '@mui/material';
import { Colors } from '../../../../colors';

export interface CircularLoadingProps {
  loading: boolean;
  color?: string;
  size?: number
}

const CircularLoading = (props: CircularLoadingProps) => {
  const { color = Colors.Primary } = props;

  return (
    <Box sx={{ display: 'flex', ml: '10px' }}>
      {props.loading && <CircularProgress size={props.size ? props.size : 30} sx={{ color: color }} />}
    </Box>
  );
};

export default CircularLoading;
