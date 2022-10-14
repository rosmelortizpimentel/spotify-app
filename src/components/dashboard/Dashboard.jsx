import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Grid, FormControl, InputAdornment, Input, Typography } from '@mui/material';
import Search from '@mui/icons-material/Search';
import { TracksGrid } from '../TracksGrid/TracksGrid';
import useSearchTracks from '../../hooks/useSearchTracks';
import { theme } from '../../themes';
import { AudioPlayer } from '../AudioPlayer/AudioPlayer';

export const Dashboard = () => {
  const navigate = useNavigate();
  const { searchTerm } = useParams();
  const [query, setQuery] = useState();
  const [tracks] = useSearchTracks({ query });

  const gridStyles = {
    height: query ? '100%' : '100vh',
    width: '100%',
    marginTop: query ? theme.spacing(20) : 0,
  };

  const inputStyles = {
    backgroundColor: 'common.white',
    borderRadius: theme.spacing(3),
    padding: theme.spacing(1),
    width: theme.spacing(50),
    marginRight: theme.spacing(1),
    marginLeft: theme.spacing(1),
  };

  useEffect(() => {
    setQuery(searchTerm);
  }, [searchTerm]);

  const handleSubmit = (event) => {
    if (event.key !== 'Enter') return;
    if (event.target.value === '') return navigate(`/`);
    return navigate(`/search/${event.target.value}`);
  };

  return (
    <Grid container direction="row" justifyContent="center" alignItems="center" sx={gridStyles}>
      <AudioPlayer></AudioPlayer>
      <FormControl variant="standard">
        <Input
          startAdornment={
            <InputAdornment position="start">
              <Search />
            </InputAdornment>
          }
          placeholder="Artistas, canciones o podcasts"
          disableUnderline
          sx={inputStyles}
          onKeyPress={handleSubmit}
        />
        <Typography variant="subtitle1" align="center">
          Presione Enter Para Buscar
        </Typography>
      </FormControl>
      {query && tracks?.href && <TracksGrid {...tracks} />}
    </Grid>
  );
};
