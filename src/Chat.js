import React, { useState, useEffect } from 'react';
// import db from './firebase.js';
import './style.css';

// export default function Chat() {
//   function inpHandler(e) {
//     var inp = e.target.value;
//     console.log(inp);
//     setMsg(inp);
//   }
//   useEffect(() => {
//     setUname(prompt('Please enter your name : '));
//     console.log(uname);
//   }, []);
//   // useEffect(() => {
//   //   db.collection(
//   //     'messages'.onSnapshot((snapshot) => {
//   //       setMessage(snapshot.docs.map((doc) => doc.data()));
//   //     })
//   //   );
//   // });
//   function addMessage(ev) {
//     ev.preventDefault();
//     // ev.priventDefault();
//     setMessage([...messages, { uname: uname, text: msg }]);
//     setMsg('');
//     console.log(messages);
//   }
//   const [uname, setUname] = useState('');
//   const [messages, setMessage] = useState([
//     { uname: 'sys', text: 'Hello' },
//     { uname: 'sys', text: 'Welcome' },
//   ]);
//   const [msg, setMsg] = useState('');
//   const displayMsgs = messages.map((m) => (
//     <div>
//       <p className="chat-msg">
//         {m.uname}:{m.text}
//       </p>
//     </div>
//   ));
//   return (
//     <div className="messanger">
//       <h1>Messenger</h1>
//       <h6>Welcome {uname} </h6>
//       <div className="chat-main">
//         <div className="msg">{displayMsgs}</div>
//         <form action="" onSubmit={addMessage}>
//           <input type="text" value={msg} name="msg" onChange={inpHandler} />
//           <button type="submit">Send</button>
//         </form>
//       </div>
//     </div>
//   );
// }

export default function Chat() {
  function inpHandler(e) {
    var inp = e.target.value;
    if (inp !== '') {
      // console.log(inp);
      setBtnState(false);

      setMsg(inp);
    }
  }
  function addMessage(ev) {
    ev.preventDefault();
    if (msg == '') {
      setPlaceHolder('Please enter your massage !!!');
      console.log('No data in massage !!!');
    } else {
      setMessage([...messages, msg]);
      setMsg('');
      setBtnState(true);
      setPlaceHolder('');
      console.log(messages);
    }
    // ev.priventDefault();
  }
  const [messages, setMessage] = useState(['Hello Welcome...', '😻']);
  const [msg, setMsg] = useState('');
  const [btnState, setBtnState] = useState(true);
  const [inpPlaceHolder, setPlaceHolder] = useState('');
  const displayMsgs = messages.map((m) => (
    <p className="alert alert-primary ">{m}</p>
  ));
  const disabled = 'disabled';
  return (
    <div className="container">
      <h1>Messenger</h1>
      <div className=" chat">
        <div className="msg">{displayMsgs}</div>
        <form className="row container" action="" onSubmit={addMessage}>
          <input
            className="col-8 form-control"
            type="text"
            value={msg}
            name="msg"
            placeholder={inpPlaceHolder}
            onChange={inpHandler}
          />
          <button
            className="btn col-4 btn-warning"
            disabled={btnState}
            type="submit"
          >
            🔺
          </button>
        </form>
      </div>
    </div>
  );
}
