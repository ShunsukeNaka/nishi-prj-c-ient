import { Stack } from '@mui/material';
import PageTitle from '../components/ui/PageTitle'
import DiagnosisMenuButton from '../components/ui/DiagnosisMenuButton'
import PersonIcon from '@mui/icons-material/Person';
import TextAnswer from '../components/ui/Answer/TextAnswer';
import ButtonAnswer from '../components/ui/Answer/ButtonAnswer';

function Answer() {

  return (
    <>
      <PageTitle text={"診断モード"}/>

      <div>
        <Stack direction="column" sx={{textAlign: "center", alignContent: "center", alignItems: "center"}}>
            {/* <TextAnswer text='相手の気持ちを考えて行動することが多い'/> */}
            <ButtonAnswer />
        </Stack>
      </div>
    </>
  )
}

export default Answer
