import { Box, Button, Grid, TextField, Typography } from '@mui/material';
import Modal from '../common/Modal/CustomModal';
import { useForm } from 'react-hook-form';
import useCreateGroup from '@/hooks/group/useCreateGroup';

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

type GroupInputs = {
  name: string;
};

const AddGroupModal = ({ isOpen, onClose }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<GroupInputs>();

  const { state, createGroup, isPending } = useCreateGroup();

  const onSubmit = async (data: GroupInputs) => {
    console.log(data);
    try {
      const { name } = data;
      await createGroup(name);
    } catch (e) {
      console.log('create group error', e);
    }
  };

  return (
    <Modal open={isOpen} onClose={onClose} modalName="create group">
      <Box component="form" onSubmit={handleSubmit(onSubmit)}>
        <Grid sx={{ margin: '15px 0' }}>
          <TextField
            id="name"
            label="name"
            variant="standard"
            {...register('name', {
              required: { value: true, message: 'Enter an name' },
            })}
          />
          {errors.name?.message && (
            <Typography sx={{ color: 'red' }}>{errors.name.message}</Typography>
          )}
        </Grid>
        <Grid sx={{ margin: '15px 0' }}>
          <Button variant="outlined" size="small" type="submit">
            create
          </Button>
        </Grid>
      </Box>
    </Modal>
  );
};

export default AddGroupModal;
