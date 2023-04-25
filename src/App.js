import './App.css';
import DropDown from './components/dropdown/DropDown';
import { SearchProider } from './hooks/search/SearchProvaider';
import Routings from './routes/Routings';

function App() {

  return (
    <SearchProider>
    <div className="App">
      <nav class='sidebar'><DropDown /></nav>
      <div class="grid">
        <div class='content'><Routings /></div>
      </div>
    </div>
    </SearchProider>
  );
}

export default App;
