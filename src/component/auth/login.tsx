import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.scss';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Example of basic authentication logic
    if (email === 'test@example.com' && password === 'password') {
      navigate('/dashboard');
    } else {
      setError('Adresse e-mail ou mot de passe incorrect');
    }
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h2>Connexion Pilote</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Adresse e-mail</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Mot de passe</label>
            <div className="password-input">
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <span
                className="password-toggle"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? '👁️' : '👁️‍🗨️'}
              </span>
            </div>
          </div>
          {error && <p className="error-message">{error}</p>}
          <button type="submit" className="submit-btn">Se connecter</button>
        </form>
        <div className="auth-links">
          <a href="/forgot-password">Mot de passe oublié ?</a>
          <a href="/signup">Créer un compte</a>
        </div>
      </div>
    </div>
  );
};

export default Login;
