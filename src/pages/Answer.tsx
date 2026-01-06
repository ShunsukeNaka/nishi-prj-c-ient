import { Stack } from '@mui/material';
import PageTitle from '../components/ui/PageTitle'
import AnswerInput from '../components/ui/Answer/AnswerInput';
import OrangeButton from '../components/ui/OrangeButton';

function Answer() {

  return (
    <>
      <PageTitle text={"診断モード"}/>

      <div>
        <Stack direction="column" sx={{textAlign: "center", alignContent: "center", alignItems: "center"}}>
            {/* <TextAnswer text='相手の気持ちを考えて行動することが多い'/> */}
            <AnswerInput text={''} />

            <OrangeButton text='診断結果' path='/answer_result'/>
        </Stack>
      </div>
    </>
  )
}

export default Answer
