import React from 'react';
import { signIn } from '../utils/auth';

export default function LogIn() {
  return (
    <div className="text-center mt-5">
      <h1>Dear Santa</h1>
      <button type="button" className="btn btn-success" onClick={signIn}>
        Sign In
      </button>
    </div>
  );
}
// show picture of scroll with header
