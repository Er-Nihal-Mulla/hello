import './App.css';
import BootstrapNavbar from './component/Navbar/BootstrapNavbar'
import {Helmet} from 'react-helmet'


const TITLE = 'DeployDemo'
function App() {
  return (
    <div className="App">
      <Helmet>
      <title>{TITLE}</title>
    </Helmet>
      <BootstrapNavbar/>
    </div>
  );
}

export default App;
