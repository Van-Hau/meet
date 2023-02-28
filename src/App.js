import logo from './logo.svg';
import './App.css';
import ButtonMenu from './component/ButtonMenu';
import GroupChat from './component/GroupChat';
import MeetInterface from './component/MeetInterface';
import { Stack } from '@mui/system';

function App() {
  return (
    <Stack className="App" height='100vh' justifyContent='center' alignItems='center' flexDirection='row'>
        <ButtonMenu sx={{flex:'10%'}}/>
        <Stack sx={{flex:'90%',height:'100%'}} flexDirection='row'>
          <MeetInterface/>
          <GroupChat/>
        </Stack>
    </Stack>
  );
}

export default App;
