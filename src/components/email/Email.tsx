import React, { useState } from 'react';

import s from 'Email.module.css';

// firebase for email trigger
import * as firebase from "firebase/app";
import "firebase/firestore";

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

const send = (
  e: React.FormEvent<HTMLFormElement>,
  addr: string,
  sbj: string,
  msg: string
): void => {
  console.log('sending email');
  e.preventDefault();
  if (check(addr, sbj, msg)) {

  } else {
    
  }
  // TODO
}


const check = (
  addr: string,
  sbj: string,
  msg: string
): boolean => {
  // TODO
  return false;
}