import { Close } from '@mui/icons-material';
import { Box, Card, IconButton, Modal, Typography } from '@mui/material';
import { ReactElement } from 'react';

type Props = {
  children: ReactElement;
  modalName?: string;
  open: boolean;
  onClose: () => void;
};

const CustomModal = ({
  children,
  modalName = 'header',
  open,
  onClose,
}: Props) => {
  return (
    <Modal
      open={open}
      onClose={onClose}
      sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
    >
      <Card
        sx={{
          width: '50%',
          height: '80%',
          backgroundColor: 'white',
        }}
      >
        <div className="px-5 flex justify-between items-center bg-gray-200 border-gray-300 border-b">
          <Typography>{modalName}</Typography>
          <IconButton size="small" onClick={onClose}>
            <Close />
          </IconButton>
        </div>
        <Box sx={{ padding: '30px' }}>{children}</Box>
      </Card>
    </Modal>
  );
};

export default CustomModal;
