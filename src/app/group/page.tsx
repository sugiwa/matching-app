import GroupList from "@/components/Group/GroupList";
import { Grid } from "@mui/material";

const groupPage = () => {
  return (
    <Grid xs={12} sx={{ width: '100%', margin: '10px 0' }}>
      <GroupList />
    </Grid>
  );
};

export default groupPage;
