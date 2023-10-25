'use client';
import { Box, Button } from '@mui/material';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';

const AccountStatus = () => {
  const { data: session, status } = useSession();
  if (status != 'authenticated') {
    return (
      <Link href="/api/auth/signin">
        <Button variant="outlined">Sign In</Button>
      </Link>
    );
  }

  const image = session.user?.image;
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      {image && (
        <Image
          src={image}
          width={40}
          height={40}
          alt="profile image"
          className="rounded-full mx-3"
        />
      )}
      <Link href="/api/auth/signout">
        <Button variant="outlined">Sign Out</Button>
      </Link>
    </Box>
  );
};
export default AccountStatus;
