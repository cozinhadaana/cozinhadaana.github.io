import { styled } from '@mui/system';
import { Button } from '@mui/material';

export const GradientButton = styled(Button)(({ theme }) => ({
  color: 'primary.contrastText',
  background: 'linear-gradient(90deg, rgba(168,0,0,1) 0%, rgba(209,0,37,1) 100%)',
}));
