import React, { useState } from 'react';
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';

const App = () => {
    const [currentPage, setCurrentPage] = useState('login'); 
    const renderPage = () => {
        switch (currentPage) {
            case 'login':
                return <LoginForm />;
            case 'signup':
                return <SignupForm />;
            default:
                return <LoginForm />;
        }
    };

    return (
        <div>
            <nav>
                <button onClick={() => setCurrentPage('login')}>Login</button>
                <button onClick={() => setCurrentPage('signup')}>Cadastro</button>
            </nav>
            <div>{renderPage()}</div>
        </div>
    );
};

export default App;
