import React from 'react'
import './Login.css';
import { Button } from "@material-ui/core";
import { auth, provider} from "./firebase";
import { useStateValue } from "./StateProvider";
import { actionTypes } from "./reducer";

function Login() {
    const [ state, dispach] = useStateValue();

    const signIn = () => {
        auth
        .signInWithPopup(provider)
        .then( (result) => {
            console.log(result);
            dispach({
                type: actionTypes.SET_USER,
                user: result.user
            });
        })
        .catch( (error) => {
            alert(error.message);
        });
    };

    return (
        <div className='login'>
            <div className="login__container">
                <img src="https://cdn.brandfolder.io/5H442O3W/as/pl546j-7le8zk-4nzzs1/Slack_Mark_Web.png" alt="" />
                <h1> Sign in to Slack (by Ashutosh)</h1>
                <p>slack.ashutoshmishra.com.np</p>
                <Button onClick={signIn}>Sign In with Google</Button>
            </div>
        </div>
    )
}

export default Login;
