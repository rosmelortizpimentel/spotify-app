import { Typography } from '@mui/material';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { useParams } from 'react-router-dom';

export const Dashboard = () => {
  const { searchValue } = useParams();
  return <Typography variant="h4">Hi {searchValue}!</Typography>;
};
