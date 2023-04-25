import './App.css';
import { Helmet } from 'react-helmet';
import tabLogo from './assets/tabLogo.png'
import DropDown from './components/dropdown/DropDown';
import Routings from './routes/Routings';

function App() {
  return (
    <div className="App">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Мир Стройматериалов</title>
        <link rel="tabLogo" type="image/png" href={tabLogo} sizes="16x16" />
      </Helmet>
      <nav class='sidebar'><DropDown /></nav>
      <div class="grid">
        <div class='content'><Routings /></div>
      </div>
    </div>
  );
}

export default App;
