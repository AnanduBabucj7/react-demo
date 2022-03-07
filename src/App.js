import React, { useState } from 'react';
import './style.css';
import { Routes, Route, NavLink } from 'react-router-dom';
import Chat from './Chat.js';
import Game from './TicTac';
import Composition from './Composition';
import Axios from './Axios';
import ClassFun from './ClassFun';

import PassClassName from './PassClassName';
import PruductSerach from './Products.js';
import Redux from './Redux';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
// import Grid from '@mui/material/Grid';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';

export default function App() {
  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
  return (
    <div>
      <NavBAr />
      <Box xs={{ flexGrow: 1 }}>
        {/* <h1>Pick one from work areas</h1> */}
        <main className="jobs">
          <Routes>
            <Route path="/" element={<NewForm />} exact />
            <Route path="form" element={<Form />} />
            <Route path="chat" element={<Chat />} />
            <Route path="tictac" element={<Game />} />
            <Route path="think" element={<PruductSerach />} />
            <Route path="class" element={<PassClassName />} />
            <Route path="redux" element={<Redux />} />
            <Route path="*" element={<Error />} />
            <Route path="comp" element={<Composition />} />
            <Route path="axios" element={<Axios />} />
            <Route
              path="classfun"
              mydata="Hello theer"
              element={<ClassFun />}
            />
          </Routes>
        </main>
      </Box>
    </div>
  );
}

function Error() {
  return (
    <div>
      <h1>404</h1>
      <h4>Oos thats not here buddy</h4>
    </div>
  );
}

function NewForm() {
  function inpHandler(e) {
    var inp = e.target.value;
    console.log(inp);
    setName(inp);
  }

  function submitHandler(e) {
    e.preventDefault();
  }
  const [name, setName] = useState('');
  return (
    <div>
      <form onSubmit={submitHandler}>
        <input name="name" value={name} onChange={inpHandler} />
      </form>
      <p>Name is {name}</p>
    </div>
  );
}

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: 23,
    };
    this.nameChangeHandler = this.nameChangeHandler.bind(this);
  }
  nameChangeHandler(e) {
    this.setState({ name: e.target.value });
    console.log(this.state.age, this.state.name);
  }
  render() {
    return (
      <div>
        <form>
          <input
            type="text"
            value={this.state.name}
            onChange={this.nameChangeHandler}
          />
          <p>
            Name : {this.state.name} <br />
            Age : {this.state.age}
          </p>
        </form>
      </div>
    );
  }
}

function NavBAr() {
  return (
    <AppBar className="navbar" position="relative">
      <NavLink
        className={({ isActive }) => (isActive ? 'active-link' : 'nav-link')}
        to="form"
      >
        form1
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? 'active-link' : 'nav-link')}
        to="chat"
      >
        Chat
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? 'active-link' : 'nav-link')}
        to="/"
      >
        Home form
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? 'active-link' : 'nav-link')}
        to="/tictac"
      >
        Tic tack
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? 'active-link' : 'nav-link')}
        to="/class"
      >
        Classs
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? 'active-link' : 'nav-link')}
        to="/think"
      >
        think
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? 'active-link' : 'nav-link')}
        to="/redux"
      >
        redux
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? 'active-link' : 'nav-link')}
        to="/comp"
      >
        Composition
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? 'active-link' : 'nav-link')}
        to="/classfun"
      >
        ClassFun
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? 'active-link' : 'nav-link')}
        to="/axios"
      >
        Axios
      </NavLink>
    </AppBar>
  );
}
