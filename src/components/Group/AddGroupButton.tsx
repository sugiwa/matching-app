'use client';

import { Button } from '@mui/material';
import AddGroupModal from './AddGroupModal';
import { useState } from 'react';

const AddGroupButton = () => {
  const [showAddGroupModal, setShowAddGroupModal] = useState<boolean>(false);

  const openAddGroupModal = () => setShowAddGroupModal(true);
  const closeAddGroupModal = () => setShowAddGroupModal(false);

  return (
    <>
      <Button variant="outlined" size="small" onClick={openAddGroupModal}>
        Add Group
      </Button>
      <AddGroupModal isOpen={showAddGroupModal} onClose={closeAddGroupModal} />
    </>
  );
};
export default AddGroupButton;
