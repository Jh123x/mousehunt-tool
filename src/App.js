import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ProTip from './ProTip';
import Copyright from './components/copyright';
import { Link } from '@mui/material';
import Form from './components/form';
import { getItemById, login } from './api/api';

export default function App() {
  const tipText = <>Pro tip: See more <Link href="https://mui.com/getting-started/templates/">templates</Link> on
    the MUI documentation.</>

  const onSubmit = async ({username, password, itemValue}) => {
    // Login into mousehunt
    await login(username, password);
    const data = await getItemById(itemValue);
    document.getElementById('result').innerText = data;
  }
  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Mousehunt Marketplace Tool.
        </Typography>
        <Form onSubmit={onSubmit}/>
        <div id="result"></div>
        <ProTip text={tipText} />
        <Copyright />
      </Box>
    </Container>
  );
}