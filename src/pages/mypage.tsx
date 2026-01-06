import { Stack } from '@mui/material';
import PageTitle from '../components/ui/PageTitle';
import MyPageMenuButton from '../components/ui/MyPageMenuButton';

function MyPage() {
  return (
    <>
      <PageTitle text={"まいぺーじ"}/>

      <div>
        <Stack direction="column" sx={{textAlign: "center", alignContent: "center", alignItems: "center"}}>
            <MyPageMenuButton text='あいみーるの診断結果'/>
            <MyPageMenuButton text='ゆーみーるの診断結果'/>
            <MyPageMenuButton text='あいみーる x ゆーみーる'/>
            <MyPageMenuButton text='おーるみーるの診断結果'/>
        </Stack>
      </div>
    </>
  )
}

export default MyPage
