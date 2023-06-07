import React from 'react';
import './App.css';
// import { BasicTextField } from './FormComponents/BasicFormOnSubmit';
// import { RtfTextField } from './FormComponents/RtfTextField';
import BasicTabs from './FormComponents/Tabs';
import NavBar from './NavBar';
import { Route, Routes } from 'react-router';
import { BasicFormOnSubmit } from './FormComponents/BasicFormOnSubmit';
import { BasicFormOnBlur } from './FormComponents/BasicFormOnBlur';
import { RtfTextField } from './FormComponents/RtfTextField';
function App() {
  return (
    <div className="App">
      <NavBar>
        <Routes>

        <Route path='/submit' Component={BasicFormOnSubmit} />
        <Route path='/blur' Component={BasicFormOnBlur} />
        <Route path='/richtext' Component={RtfTextField} />

        </Routes>
      </NavBar>
    </div>
  );
}

export default App;
