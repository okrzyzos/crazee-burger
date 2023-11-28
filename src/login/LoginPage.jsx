import React, { useState } from 'react';
import './LoginPage.css';

const LoginPage = () => {
  const [firstName, setFirstName] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (firstName) {
      alert(`Bonjour ${firstName}`);
      setFirstName('');
    } 
  };

  return (
    <div className='container-form'>
      <h1>Bienvenue chez nous !</h1>
      <h3>Connectez-vous </h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          placeholder="Entrez votre prénom..."
          required
        />
     
        <button type="submit">Accéder à votre espace</button>
      </form>
    </div>
  );
};

export default LoginPage;
