import * as React from 'react';
import Box from '@mui/material/Box';
import Container from 'components/Container';
import SignUpForm from 'components/SignUpForm/index.ee';

export default function Login(): React.ReactElement {
  return (
    <Box sx={{ display: 'flex', flex: 1, alignItems: 'center' }}>
      <Container maxWidth="sm">
        <SignUpForm />
      </Container>
    </Box>
  );
}
