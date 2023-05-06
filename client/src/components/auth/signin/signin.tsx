import { useAuth } from "@/contexts/auth";
import { signIn } from "@/services/auth";
import { ChangeEvent, FormEvent, FunctionComponent, useState } from "react";
import { BsFacebook } from "react-icons/bs";
import { FcGoogle } from 'react-icons/fc'
import styles from './signin.module.scss'

interface SignInProps {
    changeTab: (tab: "signin" | "signup") => void
}

interface SigninInitialState {
    username: string,
    password: string
}

const SignIn: FunctionComponent<SignInProps> = ({ changeTab }) => {
    const [signinForm, setSigninForm] = useState<SigninInitialState>({
        username: '',
        password: ''
    })
    const [loading, setLoading] = useState<boolean>(false)
    const [message, setMessage] = useState<string>("")

    const { addTokens } = useAuth()

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setSigninForm(prevS => ({
            ...prevS,
            [name]: value
        }))
    }

    const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
        setLoading(true)
        setMessage("")
        e.preventDefault()

        const { username, password } = signinForm
        const data = await signIn(username, password)
        if (!data) {
            setMessage('Username or password incorrect !')
            setLoading(false)
            return;
        }
                
        addTokens(data)
    }

    return (
        <div className={styles['signin']}>
            <h1>Welcome back to AI ARTIST!<br />Please sign in</h1>
            <div className={styles['to-signup-box']}>
                <span>New to page? </span>
                <span onClick={() => changeTab("signup")}>Create an account</span>
            </div>
            <div className={styles['oauth-method']}>
                <div className={styles['oauth-method-item']}>
                    <BsFacebook color="#14a" size={20} />
                    <p>Login with Facebook</p>
                </div>
                <div className={styles['oauth-method-item']}>
                    <FcGoogle color="#f93707" size={20} />
                    <p>Login with Google</p>
                </div>
            </div>
            <div className={styles['split-line']}>
                <span>or</span>
            </div>
            <form onSubmit={handleFormSubmit}>
                <div className={styles['auth-method']}>
                    <div>
                        <input
                            type="text"
                            placeholder="Enter your username"
                            value={signinForm.username}
                            name="username"
                            onChange={handleInputChange}
                        />
                    </div>
                    <div>
                        <input
                            type="password"
                            placeholder="Password"
                            value={signinForm.password}
                            name="password"
                            onChange={handleInputChange}
                        />
                    </div>
                </div>
                <div className={styles['message-box']}>
                    {message}
                </div>
                <div className={styles["remember-forget-box"]}>
                    <div className={styles["remember-box"]}>
                        <input type="checkbox" />
                        Remember me
                    </div>
                    <span className={styles["gold-content"]}>Forget your password?</span>
                </div>
                <div className={styles["signin-box"]}>
                    <button type="submit">Sign In</button>
                </div>
            </form>
        </div>
    );
}

export default SignIn;