'use client';

import { SessionProvider } from 'next-auth/react';
import { ReactElement } from 'react';

type Props = {
  children: ReactElement;
};

const CustomProvider = ({ children }: Props) => {
  return <SessionProvider>{children}</SessionProvider>;
};

export default CustomProvider;
