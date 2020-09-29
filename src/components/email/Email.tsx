import React, { useState } from 'react';

import firebase from '../../Firebase';

import s from 'Email.module.css';


export const Email = () => {
  const [addr, setAddr] = useState<string>('');
  const [msg, setMsg] = useState<string>('');
  const [sbj, setSbj] = useState<string>('');
  return <div className={s.root}>
    <form onSubmit={e => send(e, addr, sbj, msg)}>
      <input type='email' value={addr} onChange={e => setAddr(e.target.value)} />
      <input type='text' value={sbj} onChange={e => setSbj(e.target.value)} />
      <input type='text' value={msg} onChange={e => setMsg(e.target.value)} />
      <button type='submit' value='Submit' />
    </form>
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
  console.log('sending email');
  e.preventDefault();
  if (valid(addr, sbj, msg)) {
    mailRef.add({
      to: [addr],
      message: {
        subject: sbj,
        text: msg
      }
    });
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

  if (sbj.length == 0) {
    alert('Empty subject line');
    return false;
  }

  if (msg.length == 0) {
    alert('Empty message content');
    return false;
  }
  return true;
}