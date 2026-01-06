import PersonIcon from '@mui/icons-material/Person';
import { Card, CardActionArea, Stack, Typography } from "@mui/material";
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  return (
    <>
      <Stack direction="column">
        <Card sx={{ width: "300px", height: "250px", margin: "20px" }}>
          <CardActionArea
            sx={{ textAlign: "center", height: "100%" }}
            onClick={() => navigate("/mypage")}
          >
            <Typography sx={{ paddingTop: "20px", fontSize: "36px" }}>
              まいぺーじ
            </Typography>
            <PersonIcon sx={{ fontSize: 150 }} />
          </CardActionArea>
        </Card>

        <Card sx={{ width: "300px", height: "300px", margin: "20px" }}>
          <CardActionArea
            sx={{ textAlign: "center", height: "100%" }}
            onClick={() => navigate("/diagnosis_menu")}
          >
            <Typography sx={{ fontSize: "36px" }}>
              診断
            </Typography>
          </CardActionArea>
        </Card>
      </Stack>
    </>
  );
}

export default Home;
