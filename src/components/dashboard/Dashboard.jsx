import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Grid, FormControl, InputAdornment, Input, Typography } from '@mui/material';
import Search from '@mui/icons-material/Search';
import { ThemeProvider } from '@mui/material/styles';
import { TracksGrid } from '../TracksGrid/TracksGrid';
import useSearchTracks from '../../hooks/useSearchTracks';
import { theme } from '../../themes';

export const Dashboard = () => {
  const navigate = useNavigate();

  const { searchTerm } = useParams();
  const [query, setQuery] = useState();
  const [tracks] = useSearchTracks({ query });

  useEffect(() => {
    setQuery(searchTerm);
  }, [searchTerm]);

  const handleSubmit = (event) => {
    if (event.key !== 'Enter') return;
    if (event.target.value === '') return navigate(`/`);
    return navigate(`/search/${event.target.value}`);
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        sx={{ height: '100vh', width: '100%', marginTop: query ? theme.spacing(20) : 0 }}>
        <FormControl variant="standard">
          <Input
            startAdornment={
              <InputAdornment position="start">
                <Search />
              </InputAdornment>
            }
            placeholder="Artistas, canciones o podcasts"
            disableUnderline
            sx={{
              backgroundColor: 'common.white',
              borderRadius: theme.spacing(3),
              padding: theme.spacing(1),
              width: theme.spacing(50),
              marginRight: theme.spacing(1),
              marginLeft: theme.spacing(1),
            }}
            onKeyPress={handleSubmit}
          />
          <Typography variant="subtitle1" align="center">
            Presione Enter Para Buscar
          </Typography>
        </FormControl>
        {query && tracks?.href && <TracksGrid {...tracks} />}
      </Grid>
    </ThemeProvider>
  );
};
