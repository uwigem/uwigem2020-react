import React, { useState } from 'react';

import firebase from '../../Firebase';

import { Paper } from '@material-ui/core';
import s from './Email.module.css';

const receivingAddr = 'zhouyifan0904@gmail.com';

const Email = () => {
  const [addr, setAddr] = useState<string>('');
  const [msg, setMsg] = useState<string>('');
  const [sbj, setSbj] = useState<string>('');
  return <div className={s.root}>
    <Paper className={s.sheet} elevation={5} >
    <form onSubmit={e => {
          send(e, addr, sbj, msg);
          setAddr(''); setMsg(''); setSbj('');
        }}>
      <h2>Contact Us</h2>
      <div className={s.cell}>
        <input
          type='email'
          placeholder='Your address (example@gmail.com)'
          value={addr}
          onChange={e => setAddr(e.target.value)} />
      </div>

      <div className={s.cell}>
        <input
          type='text'
          placeholder='Subject (optional)'
          value={sbj}
          onChange={e => setSbj(e.target.value)} />
      </div>

      <div className={s.cell}>
        <textarea
          rows={6}
          placeholder='Leave your message and we will get back to you ASAP :)'
          value={msg}
          onChange={e => setMsg(e.target.value)} />
      </div>

      <div className={s.submitContainer}><button type='submit' value='Submit'>Submit</button></div>
    </form>
    </Paper>
  </div>
}

const db = firebase.firestore();
const mailRef = db.collection('mail');

const send = (
  e: React.FormEvent<HTMLFormElement>,
  addr: string,
  sbj: string,
  msg: string
): void => {
  e.preventDefault();
  if (valid(addr, sbj, msg)) {
    mailRef.add({
      to: [receivingAddr],
      message: {
        subject: `Message From <${addr}>: ${sbj? sbj : '<No Subject>'}`,
        text: msg
      }
    });
    alert('Message Sent!');
  }
}

const valid = (
  addr: string,
  sbj: string,
  msg: string
): boolean => {
  // TODO

  // test email addr format
  if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(addr)) {
    alert('Invalid email address');
    return false;
  }

  if (msg.length == 0) {
    alert('Empty message content');
    return false;
  }
  return true;
}

export default Email;