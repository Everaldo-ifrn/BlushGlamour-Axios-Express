import React, { useState } from 'react';
import axios from '../axiosConfig';

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const handleLogin = async () => {
        try {
          const response = await axios.post('/api/auth/login', { email, senha });
          alert(response.data.message); 
          console.log(response.data.token);
        } catch (error) {
          alert(error.response.data.message); 
        }
      };
      
    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleLogin}>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Senha"
                    value={senha}
                    onChange={(e) => setSenha(e.target.value)}
                    required
                />
                <button type="submit">Entrar</button>
            </form>
        </div>
    );
};

export default LoginForm;
