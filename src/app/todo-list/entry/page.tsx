import Box from '@mui/material/Box';

export default function Page() {
  return page();
}

const page = () => {
  return (
    <Box mt={16} display="flex" alignItems="flex-start" minHeight="100vh">
      <h1 style={{ margin: '0 auto', width: 'fit-content' }}>This is Entry</h1>
    </Box>
  );
};
