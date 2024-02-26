export function UncontrolledLogin(){

    const handleSubmit = (event) =>{
        event.preventDefault()
        const formData = new FormData(event.target);
        const loginData = {};
        formData.forEach((value, key) =>{
            loginData[key] = value;
            console.log(loginData);
        })
    }

    

    return (
        <form onSubmit={handleSubmit}>
            <input name="username"></input>
            <input name="password"></input>
            <input name="session" type="checkbox"></input>
            <button>Login</button>
            
        </form>
    )
}