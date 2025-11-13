import React from "react"

export default function Login() {

    const [username, setUsername] = React.useState("")
    const [password, setPassword] = React.useState("")
    const [message, setMessage] = React.useState("Hey, Welcome back! 👋")
    const [isLoggedIn, setIsLoggedIn] = React.useState(false)
    const [error, setError] = React.useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()

        if (username !== "rosalia" || password !== "rosalia") {
            setUsername("")
            setPassword("")
            setIsLoggedIn(false)
            setMessage("Incorrect Login ❌")
            setError(true)
        } else {
            setIsLoggedIn(true)
            setError(false)
            setMessage("Welcome Back " + username + "!")
        }
    }

    const handleReset = (e) => {
        e.preventDefault()

        setUsername("")
        setPassword("")
        setIsLoggedIn(false)
        setMessage("Hey, Welcome back! 👋")
        setError(false)
    }

    return(
        <section>
            <span>{message}</span>
            {isLoggedIn ? "" : (
                <form onSubmit={handleSubmit}>
                    <label htmlFor="username">Username</label>
                    <input 
                        type="text" 
                        name="username" 
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className={error ? "red" : ""}
                        />

                    <label htmlFor="password">Password</label>
                    <input 
                        type="password"
                        name="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className={error ? "red" : ""}
                        />

                    <div className="btns">
                        <button type="button" onClick={handleReset}>Reset</button>
                        <button type="submit">Login</button>
                    </div>
                </form>
            )}
            {isLoggedIn ? (
                <div className="links">
                <p><a href="#">My Account</a></p>
                <p><a href="#">Sign-out</a></p>
                </div>
            ) : (
                <div className="links">
                <p><a href="#">Forgotten Password?</a></p>
                <p><a href="#">Sign-up</a></p>
                </div>
            )}
        </section>
    )
}
