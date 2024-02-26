import { useState } from "react"

export function Login({onLogin}){
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [remember, setRemember] = useState(false);

    const handleUsername = (event) => {
        setUsername(event.target.value);
    }

    const handlePassword = (event) => {
        setPassword(event.target.value);
    }

    const handleCheckbox = (event) => {
        setRemember(event.target.checked);
    }

    const isLoginDisabled = !username || !password;


    const handleSubmit = (event) =>{
        onLogin({username, password, remember})
    }

    const resetAll = () => {
        setUsername('');
        setPassword('')
        setRemember('false')
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
            <input value={username} type="text" onChange={handleUsername}></input>
            <input value={password} type="password" onChange={handlePassword}></input>
            <input type="checkbox" onChange={handleCheckbox} value={remember}></input>
            <button type="submit" disabled={isLoginDisabled}>Login</button>
            <button onClick={resetAll}>Reset</button>
            </form>
            
            <h2>{username}</h2>
            <h2>{password}</h2>
            <h2>{remember}</h2>
        </div>
    )
}