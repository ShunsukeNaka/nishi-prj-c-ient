import { Stack } from '@mui/material';
import PageTitle from '../components/ui/PageTitle'
import ButtonAnswer from '../components/ui/Answer/Answer';

function Answer() {

  return (
    <>
      <PageTitle text={"診断モード"}/>

      <div>
        <Stack direction="column" sx={{textAlign: "center", alignContent: "center", alignItems: "center"}}>
            {/* <TextAnswer text='相手の気持ちを考えて行動することが多い'/> */}
            <ButtonAnswer text={''} />
        </Stack>
      </div>
    </>
  )
}

export default Answer
