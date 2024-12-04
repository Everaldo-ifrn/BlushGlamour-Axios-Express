import React, { useState } from 'react';
import axios from '../axiosConfig';

const SignupForm = () => {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const handleSignup = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/auth/signup', { email, senha });
            alert(response.data.message); 
            setEmail('');
            setSenha('');
        } catch (error) {
            alert(error.response?.data?.message || 'Erro ao cadastrar');
        }
    };

    return (
        <div>
            <h1>Cadastro</h1>
            <form onSubmit={handleSignup}>
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
                <button type="submit">Cadastrar</button>
            </form>
        </div>
    );
};

export default SignupForm;
