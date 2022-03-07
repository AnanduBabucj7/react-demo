import './style.css';
import React, { useState } from 'react';

export default function PassClassName() {
  function clickHandler() {
    setMyClass('box-right');
    console.log('Clicked');
  }
  const [myclassname, setMyClass] = useState('box-wrong');
  return (
    <div>
      <div className="box"></div>
      <TestClass myclass={myclassname} onClick={clickHandler} />
    </div>
  );
}

class TestClass extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <button
        onClick={this.props.onClick}
        className={`box ${this.props.myclass}`}
      ></button>
    );
  }
}
