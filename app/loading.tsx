'use client'
import { Box, LinearProgress, Stack, Typography } from '@mui/joy'

import Message from '@/components/Mesaage'

export default function Loading() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: { md: 'center', xs: 'start' },
        px: { md: 10, xs: 2 },
        height: '100vh',
        width: '100%',
      }}
    >
      <Stack sx={{ width: '100%', textAlign: 'center' }} spacing={3}>
        <LinearProgress
          size='lg'
          thickness={30}
          color='primary'
          sx={{ minWidth: { md: '500px', xs: '100%' } }}
        >
          <Typography level='h4' color='primary'>
            Loading ...
          </Typography>
        </LinearProgress>
        <Message />
      </Stack>
    </Box>
  )
}