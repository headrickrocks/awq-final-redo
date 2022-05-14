import logo from './logo.svg';
import './App.css';
import { withAuthenticator } from '@aws-amplify/ui-react';
import { Routes, Route } from 'react-router-dom'
import { 
  NewAccomplishments, NavBar3, EditProfile2, AddAccomplishment2, UpdateAccomplishment
} from './ui-components';
import SetAccomplishment from './SetAccomplishment';

function App({ signOut }) { 
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <button onClick={signOut}>Logout</button>
        <Routes>
            <Route exact path='/' element={<div><NavBar3/><AddAccomplishment2 /><NewAccomplishments /></div>} />
            <Route exact path='/newaccomplishment' element={<div><NavBar3/><EditProfile2 /></div>} />
            <Route exact path='/car/:cid' element={<SetAccomplishment/>} />
        </Routes>
      </header>
    </div>
  );
}

export default withAuthenticator(App);