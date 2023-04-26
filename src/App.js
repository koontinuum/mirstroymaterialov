import './App.css';
import { Helmet } from 'react-helmet';
import DropDown from './components/dropdown/DropDown';
import Routings from './routes/Routings';
import { SearchProider } from './hooks/search/SearchProvaider';

function App() {
  return (
    <SearchProider>
    <div className="App">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Мир Стройматериалов</title>
      </Helmet>
      <nav class='sidebar'><DropDown /></nav>
      <div class="grid">
        <div class='content'><Routings /></div>
      </div>
    </div>
    </SearchProider>
  );
}

export default App;
