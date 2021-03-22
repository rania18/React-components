import logo from './logo.svg';
import './App.css';
import ProfilPhoto from './components/profil/ProfilPhoto';
import FullName from './components/profil/FullName';
import Address from './components/profil/Address';

function App() {
  return (
    <div className="App">
    <div className="profilWrapper">
      <ProfilPhoto></ProfilPhoto>
      <FullName></FullName>
      <Address></Address>
      </div>
    </div>  
  );
}

export default App;
