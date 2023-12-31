import { Box, Container } from '@mui/material';
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from '@/components/Header';
import NavBar from '@/components/NavBar';
import CustomProvider from '@/providers/CustomProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CustomProvider>
          <Box
            sx={{ height: '100vh', display: 'flex', flexDirection: 'column' }}
          >
            <Header />

            <Box sx={{ display: 'flex', flex: 1 }}>
              <NavBar />
              <Container
                sx={{
                  margin: '20px 0',
                  display: 'flex',
                  flex: 1,
                  flexDirection: 'column',
                }}
              >
                {children}
              </Container>
            </Box>
          </Box>
        </CustomProvider>
      </body>
    </html>
  );
}
