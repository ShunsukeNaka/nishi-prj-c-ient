import { LinearProgress, Box, Typography, Stack } from '@mui/material';

export default function SimpleProgress(props: { done: number; whole: number }) {
  const value = props.whole === 0 ? 0 : Math.round((props.done / props.whole) * 100);

  return (
    <Box sx={{ width: 300 }}>
      <Stack
        direction="row"
        alignItems="center"
        spacing={1}
      >
        <LinearProgress
          variant="determinate"
          value={value}
          sx={{
            flexGrow: 1,
            height: 8,
            borderRadius: 4,
          }}
        />

        <Typography
          sx={{
            fontSize: 12,
            color: 'white',
            minWidth: 36,
            textAlign: 'right',
          }}
        >
          {value}%
        </Typography>
      </Stack>
    </Box>
  );
}
