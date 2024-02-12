import { useState } from "react"

export function WelcomeForm(){
    const [nome, setNome] = useState('')
    function handleNomeChange(event){
        const value = event.target.value
        setNome(value)
    }
    return (
        <div>
            <h1>Welcome {nome} !</h1>
            <input value = {nome} onChange={handleNomeChange} />
        </div>
    )
}