import './App.scss';
import Header from './components/shared/Header/Header';
import Footer from './components/shared/Footer/Footer';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import MusicAdd from './pages/MusicAdd/MusicAdd';
import MusicView from './pages/MusicView/MusicView';
import MusicEdit from './pages/MusicEdit/MusicEdit';

function App() {
  return (
    <div className="App">
      <Header/>
        <Switch>
          <Route path="/" exact={true} component={Home}/>
          <Route path="/add" component={MusicAdd}/>
          <Route path="/view/:id" component={MusicView}/>
          <Route path="/edit/:id" component={MusicEdit}/>
        </Switch>
      <Footer/>
    </div>
  );
}

export default App;