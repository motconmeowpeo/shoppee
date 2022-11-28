import styles from './Login.module.scss'

import classNames from "classnames/bind";

const cx = classNames.bind(styles)
function Login() {
    return (<div className={cx("login hello")}>

        <h1>Login</h1>
    </div>)
}
export default Login