'use client';
import {
  Box,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Typography,
} from '@mui/material';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import NoImage from 'public/no_image.png';
import { useState } from 'react';

const AccountStatus = () => {
  const router = useRouter();
  const { data: session, status } = useSession();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  if (status != 'authenticated') {
    return (
      <Link href="/api/auth/signin">
        <Button variant="outlined">Sign In</Button>
      </Link>
    );
  }

  const handleClick = (event: React.MouseEvent<HTMLElement>) =>
    setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  const signout = () => router.push('/api/auth/signout');

  const image = session.user?.image || NoImage;
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <IconButton onClick={handleClick} sx={{ p: 0, mx: '10px' }}>
        <Image
          src={image}
          width={40}
          height={40}
          alt="profile image"
          className="rounded-full"
        />
      </IconButton>
      <Menu open={open} anchorEl={anchorEl} onClose={handleClose}>
        <MenuItem onClick={signout}>
          <Typography>Sign Out</Typography>
        </MenuItem>
      </Menu>
    </Box>
  );
};
export default AccountStatus;
