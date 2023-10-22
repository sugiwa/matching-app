import { Box, Button, Grid, TextField, Typography } from '@mui/material';
import Modal from '../common/Modal/CustomModal';

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

const AddGroupModal = ({ isOpen, onClose }: Props) => {
  return (
    <Modal open={isOpen} onClose={onClose} modalName="create group">
      <Box component="form">
        <Grid sx={{ margin: '15px 0' }}>
          <TextField label="name" variant="standard" />
        </Grid>
        <Grid sx={{ margin: '15px 0' }}>
          <Button variant="outlined" size="small">
            create
          </Button>
        </Grid>
      </Box>
    </Modal>
  );
};

export default AddGroupModal;
