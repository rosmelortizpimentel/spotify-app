import { Grid, Typography } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import PropTypes from 'prop-types';
import Track from '../Track/Tracks';
import { theme } from '../../themes';

export const TracksGrid = ({ items, total }) => {
  if (total === 0) {
    return (
      <Grid container>
        <Grid item xs={12}>
          <Typography variant="subtitle1" align="center">
            No hay canciones con este nombre
          </Typography>
        </Grid>
        <Grid item xs={12} container justifyContent="center" alignItems="center">
          <img src="/404-logo.png" />
        </Grid>
      </Grid>
    );
  }
  return (
    <ThemeProvider theme={theme}>
      <Grid
        container
        sx={{
          paddingTop: theme.spacing(5),
        }}>
        <Grid item xs={2}></Grid>
        <Grid item container xs={8} spacing={4}>
          {items.map((item) => {
            return (
              <Grid item xs={12} sm={4} key={item.id}>
                <Track key={item.id} track={item} />
              </Grid>
            );
          })}
        </Grid>
        <Grid item xs={2}></Grid>
      </Grid>
    </ThemeProvider>
  );
};

TracksGrid.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape),
  total: PropTypes.number,
};
