import logo from './logo.svg';
import './App.css';
import EngagementMessagesOverTime from './components/EngagementMessagesOverTime ';
import { channels, messageCountList } from './components/data';

function App() {
  return (
    <div>
      <EngagementMessagesOverTime channels={channels} messageCountList={messageCountList} />
    </div>
  );
}

export default App;
