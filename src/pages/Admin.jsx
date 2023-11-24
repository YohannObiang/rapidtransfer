import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Login from '../components/Login';
import Dashboard from '../components/Dashboard';




const LoginForm = ({setIsTurned, isTurned}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [connected, setconnected] = React.useState(false);

  const handleLogin = async () => {


console.log(username);
console.log(password);
setconnected(true)
    try {
      const response = await axios.post(`https://moneyflow-25oe.onrender.com/api/login`, {
        username,
        password
      });

      const { token } = response.data;
      // Stockez le token dans le stockage local ou dans un cookie sécurisé
      localStorage.setItem('token', token);

      // Effectuez les actions nécessaires après une connexion réussie
      console.log('Connexion réussie');
      setIsTurned(false);

    } catch (error) {
      // Gérez les erreurs de connexion ici
      console.error(error.response.data.message);
      window.location.reload();
      setconnected(false)


    }
  };







  const logoff = () => {
    setIsTurned(true);
    localStorage.removeItem('token')
    window.location.reload();
  };

  



   return (
 <div >    
     {isTurned ? (
     <div>            
            <Login
            username={username}
            password={password}
            setUsername={setUsername}
            setPassword={setPassword}
            handleLogin={handleLogin}
            connected={connected}
            />
     </div>
     ) : ( 
     <div>
        <Dashboard
        logoff={logoff}
        />

     </div>
 
     )}
    
     </div>
   );
};

export default LoginForm;