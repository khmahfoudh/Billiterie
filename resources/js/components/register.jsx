import { useState } from 'react';
import axios from 'axios';

const register = () => {  
      const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setSuccess('');

        if (password !== confirmPassword) {
            setError("Les mots de passe ne correspondent pas");
            return;
        }

        try {
            const response = await axios.post('http://localhost:8000/api/register', {
                email,
                password
            });
            setSuccess("Inscription réussie ! Connectez-vous.");
        } catch (err) {
            setError("Erreur lors de l'inscription");
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-lg w-96">
                <h2 className="text-2xl font-bold mb-4 text-center">S'inscrire</h2>
                {error && <p className="text-red-500 text-sm">{error}</p>}
                {success && <p className="text-green-500 text-sm">{success}</p>}
                <form onSubmit={handleSubmit}>
                    <input
                        type="email"
                        placeholder="Votre adresse email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full p-2 border rounded mb-3"
                        required
                    />
                    <input
                        type="password"
                        placeholder="Créez un mot de passe"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full p-2 border rounded mb-3"
                        required
                    />
                    <input
                        type="password"
                        placeholder="Confirmez votre mot de passe"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        className="w-full p-2 border rounded mb-3"
                        required
                    />
                    <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">S'inscrire</button>
                </form>
            </div>
        </div>
    );
};
    export default register;
