import React, { useState } from 'react';
import { createAccount } from '../pages/api/createAccount';

export default function SignupForm(): JSX.Element {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleSignup = () => {
    createAccount(email, password, name)
      .then((response) => {
        console.log('Account created:', response);
        // Handle success, e.g., redirect the user to a success page or show a success message
      })
      .catch((error) => {
        console.error('Account creation failed:', error);
        // Handle error, e.g., display an error message to the user
      });
  };

  return (
    <div>
      <h2>Signup</h2>
      <form>
        <div>
          <label>Name:</label>
          <input type="text" value={name} onChange={handleNameChange} />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={handleEmailChange} />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" value={password} onChange={handlePasswordChange} />
        </div>
        <button type="button" onClick={handleSignup}>
          Signup
        </button>
      </form>
    </div>
  );
}
