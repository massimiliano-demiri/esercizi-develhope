import { Counter } from "./Counter";
import { Login } from "./Login";
import { MyForm } from "./MyForm";
import { UncontrolledLogin } from "./UncontrolledLogin";
import { WelcomeForm } from "./WelcomeForm";


export function App(){
    const handleLogin = (loginData) => {
        console.log(loginData)
    }
    return (
        <UncontrolledLogin />
    )
}

