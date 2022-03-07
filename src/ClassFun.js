import React, { useState } from 'react';
import './style.css';

export default function ClassFun(props) {
  function makeRedBox() {
    setMyClass('red-box');
    console.log(myCalss);
  }
  function makeGreanBox() {
    setMyClass('green-box');
    console.log(myCalss);
  }
  const [myCalss, setMyClass] = useState('');
  const nestyle = { borderRadius: '20px' };
  return (
    <div>
      <div style={nestyle} className={`box ${myCalss}`}>
        {props.mydata}
      </div>
      <button onClick={makeRedBox}>RED</button>
      <button onClick={makeGreanBox}>GREEN</button>
    </div>
  );
}
