import React from 'react';
import './App.css';
import NavBar from './NavBar';
import { Route, Routes } from 'react-router';
import { BasicFormOnSubmit } from './FormComponents/BasicFormOnSubmit';
import { BasicFormOnBlur } from './FormComponents/BasicFormOnBlur';
import { RtfTextField } from './FormComponents/RtfTextField';
import { AdvancedForm } from './FormComponents/AdvancedForm';
function App() {
  return (
    <div className="App">
      <NavBar>
        <Routes>

        <Route path='/submit' Component={BasicFormOnSubmit} />
        <Route path='/blur' Component={BasicFormOnBlur} />
        <Route path='/richtext' Component={RtfTextField} />
        <Route path='/advanced' Component={AdvancedForm} />

        </Routes>
      </NavBar>
    </div>
  );
}

export default App;
