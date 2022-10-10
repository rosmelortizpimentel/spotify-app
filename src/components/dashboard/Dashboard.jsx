import { Typography } from '@mui/material';
import { useParams } from 'react-router-dom';

export const Dashboard = () => {
  const { searchValue } = useParams();
  return <Typography variant="h4">Hi {searchValue}!</Typography>;
};
