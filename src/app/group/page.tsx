import AddGroupButton from '@/components/Group/AddGroupButton';
import GroupList from '@/components/Group/GroupList';
import { Box, Grid } from '@mui/material';

const GroupPage = () => {
  return (
    <Grid xs={12} sx={{ width: '100%', margin: '10px 0' }}>
      <Box sx={{ textAlign: 'right' }}>
        <AddGroupButton />
      </Box>
      <GroupList />
    </Grid>
  );
};

export default GroupPage;
