import './App.css';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Feed from './components/Feed/Feed';
import Widgets from './components/Widgets/Widgets';
import Login from './components/auth/Login/Login';
// import { useState } from 'react';
import { useStateValue } from './Context/StateProvider';

function App() {
  const [{ user }] = useStateValue();
  // const user = 'nigm4';
  // const user = null;
  return (
    <div className="app">
      {user ?
        <>
          <Header />
          < div className="app__body">
            <Sidebar />
            <Feed />
            <Widgets />
          </div>
        </>
        : <Login />}
    </div>
  );
}

export default App;
