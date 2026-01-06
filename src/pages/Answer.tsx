import { Stack } from '@mui/material';
import PageTitle from '../components/ui/PageTitle'
import AnswerInput from '../components/ui/Answer/AnswerInput';
import OrangeButton from '../components/ui/OrangeButton';
import imiruData from "../testdata/imiru.json";
import { useEffect, useState } from 'react';
// import ProgressBar from '../components/ui/Answer/ProgressBar';
import SimpleProgress from '../components/ui/Answer/ProgressBar';

function Answer() {
  const [count, setCount] = useState<number>(0);
  const [answered, setAnswered] = useState<boolean[]>([]);
  const [answeredSet, setAnsweredSet] = useState<Set<string>>(new Set());

  useEffect(() => {
    // setAnswered(Array(imiruData.questions.length).fill(false));
  }, []);

  function handleAnswerd(i: number){
    setAnswered(prev =>
      prev.map((v, idx) => (idx === i ? true : v))
    );
  }

  const markAnswered = (index: string) => {
    setAnsweredSet(prev => {
      const next = new Set(prev);
      next.add(index);
      return next;
    });
  };


  

  return (
    <>
      <PageTitle text={"診断モード"}/>

      <div>
        <Stack direction="column" sx={{textAlign: "center", alignContent: "center", alignItems: "center"}}>
            {/* <TextAnswer text='相手の気持ちを考えて行動することが多い'/> */}

            <SimpleProgress done={answeredSet.size} whole={imiruData.data.required_question}/>

            <AnswerInput text={''} input_questions={imiruData.questions} handleAnswered={markAnswered}/>

            <OrangeButton text='診断結果' path='/answer_result'/>
        </Stack>
      </div>
    </>
  )
}

export default Answer
