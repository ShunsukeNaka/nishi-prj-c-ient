import { Box, Typography } from '@mui/material'
import PageTitle from '../components/ui/PageTitle'
import OrangeButton from '../components/ui/OrangeButton'

function IMiru() {
  

  return (
    <>
      <PageTitle text={"あいみーる"}/>
      <Box sx={{textAlign: "center", paddingTop: "40px"}}>
        <Typography sx={{color: "white", paddingBottom: "40px"}}>
          あなたは、今の自分をちゃんと理解できていますか？
          <br />
          <br />
          まずは自己分析《自分（I）を見る（みーる）》
          <br />
          をして自分のことを言語化できるくらい
          <br />
          理解しよう！
          <br />
          <br />
          １回だけの診断ではなくて、日を空けて
          <br />
          再診断することでより正直な”まいぺーじ”を
          <br />
          作成することができるよ！
        </Typography>

        <OrangeButton text='診断' path='/answer'/>
      </Box>
    </>
  )
}

export default IMiru
