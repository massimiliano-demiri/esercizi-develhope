import { useState } from "react"

export function MyForm() {
    const [username, setUsername] = useState('')
    function handleUsernameInputChange(event){
        const value = event.target.value

        setUsername(value)
        console.log(username)
    }
    return (
        <div>
            <input value = {username} onChange={handleUsernameInputChange} />
        </div>
    )
}