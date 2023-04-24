import './App.css';
import DropDown from './components/dropdown/DropDown';
import Routings from './routes/Routings';

function App() {
  return (
    <div className="App">
      <nav class='sidebar'><DropDown /></nav>
      <div class="grid">
        <div class='content'><Routings /></div>
      </div>
    </div>
  );
}

export default App;
