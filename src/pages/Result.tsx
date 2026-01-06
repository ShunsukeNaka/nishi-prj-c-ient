import { Stack, Box, Typography, Card, CardActionArea } from '@mui/material';
import PageTitle from '../components/ui/PageTitle';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const dataset = [
  { type: '明るさ・人付き合い', score: 20 },
  { type: 'チーム意識・共感力', score: 16 },
  { type: '自ら動く力', score: 19 },
  { type: '論理性・冷静さ', score: 9 },
  { type: '時間管理・目標管理', score: 13 },
  { type: 'メンタルの安定・切り替え', score: 7 },
  { type: '学び・変化への意欲', score: 21 },
  { type: '新しい発想・表現力', score: 18 },
];

const MAX = 25;


function Result() {
    const navigate = useNavigate()

    const [date, setDate] = useState<string>("12/4")
    const [time, setTime] = useState<string>("21:14")

    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setDate("12/4")
        setTime("21:14")
    }, [])
  return (
    <>
      <PageTitle text="診断結果" />

      <Typography sx={{color: "white", textAlign: 'right', padding: 4, paddingBottom: "30px"}}>
        診断日{date}　{time}
      </Typography>

      <Stack spacing={1} sx={{ width: "100%" }}>
        {dataset.map((d, i) => (
          <Card key={i} sx={{backgroundColor: "#014541", boxShadow: 0}}>
            <CardActionArea onClick={() => navigate(`/answer_result/${i}`)}>
                <Stack key={i} direction="row" alignItems="center" spacing={2}>
                    {/* ラベル */}
                    <Typography sx={{ width: "45%", textAlign: 'center', color: "white"}}>
                    {d.type}
                    </Typography>

                    {/* バー */}
                    <Box
                    sx={{
                        flexGrow: 1,
                        height: 16,
                        backgroundColor: '#eee',
                        borderRadius: 8,
                        overflow: 'hidden',
                    }}
                    >
                    <Box
                        sx={{
                        width: `${(d.score / MAX) * 100}%`,
                        height: '100%',
                        backgroundColor: '#ff9800',
                        }}
                    />
                    </Box>

                    {/* 数値 */}
                    <Typography sx={{ width: 30,  color: "white" }}>{d.score}</Typography>
                </Stack>
            </CardActionArea>
          </Card>
        ))}
      </Stack>
    </>
  );
}

export default Result;
