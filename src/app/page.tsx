import { Button } from '@mui/material';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      Join Group
      <Link href="/group">
        <Button variant="outlined">search groups</Button>
      </Link>
    </>
  );
}
