import { Container } from 'react-bootstrap'
import './login.css'
import useAuth from '../hooks/useAuth'
const Login = () => {

    const {signInWithGoogle} = useAuth();

    const handleGoogleSignIng = () =>{
        signInWithGoogle()
        .then(result =>(
            console.log(result.user)
        ))
    }

    return (
        <Container>
            <div className="login-card d-flex justify-content-center">
                <div className="card w-50 ">
                    <h2>Login</h2>
                    <form>
                        <input type="text" id="username" name="username" placeholder="Username" required />
                        <input type="password" id="password" name="password" placeholder="Password" required />
                        <button type="submit">Login</button>
                        <button type="submit" className="my-1 bg-dark" onClick={handleGoogleSignIng}>Google</button>
                    </form>
                </div>
            </div>
        </Container>
    )
}

export default Login