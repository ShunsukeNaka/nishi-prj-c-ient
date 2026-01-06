import { Stack } from '@mui/material';
import PageTitle from '.././components/ui/PageTitle'
import DiagnosisMenuButton from '../components/ui/DiagnosisMenuButton'
import PersonIcon from '@mui/icons-material/Person';

function DiagnosisMenu() {

  return (
    <>
      <PageTitle text={"診断モード"}/>

      <div>
        <Stack direction="column" sx={{textAlign: "center", alignContent: "center", alignItems: "center"}}>
            <DiagnosisMenuButton maintext='あいみーる' subtext='自己診断' icon={PersonIcon} path='/imiru'/>
            <DiagnosisMenuButton maintext='ゆーみーる' subtext='他社診断' icon={PersonIcon} path='/youmiru'/>
            <DiagnosisMenuButton maintext='おーるみーる' subtext='グループ診断' icon={PersonIcon} path='/allmiru'/>
        </Stack>
      </div>
    </>
  )
}

export default DiagnosisMenu
