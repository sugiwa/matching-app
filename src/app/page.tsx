import Image from 'next/image';
import Header from '../components/Header';
import NavBar from '../components/NavBar';
import GroupList from '../components/Group/GroupList';
import { Box, Container, Grid } from '@mui/material';

export default function Home() {
  return (
    <Box sx={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header />

      <Box sx={{ display: 'flex', flex: 1 }}>
        <NavBar />
        <Container
          sx={{
            margin: '20px 0',
            display: 'flex',
            flex: 1,
            flexDirection: 'column',
          }}
        >
          <Grid xs={12} sx={{ width: '100%', margin: '10px 0' }}>
            <GroupList />
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}
