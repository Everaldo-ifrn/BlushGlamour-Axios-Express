const usuarios = []; 

const login = (req, res) => {
    const { email, senha } = req.body;
    const user = usuarios.find((user) => user.email === email && user.senha === senha);

    if (email === 'admin@exemple.com' && senha === '12345678') {
        return res.status(200).json({ message: 'Sucesso', token: 'admin-token' });
    }
    else if(user) {
        return res.status(200).json({ message: 'Sucesso', token: 'user-token' });
    }
    else {
        return res.status(401).json({ message: 'Credenciais Inválidas' });
    }
    
}


const signup = (req, res) => {
    const { email, senha } = req.body;

    if (!email || !senha) {
        return res.status(400).json({ message: 'Email e senha são obrigatórios' });
    }

    const userExists = usuarios.some((user) => user.email === email);
    if (userExists) {
        return res.status(409).json({ message: 'Usuário já cadastrado' });
    }
    
    usuarios.push({ email, senha });
    return res.status(201).json({ message: 'Usuário cadastrado com sucesso' });
};


module.exports = { login, signup };
