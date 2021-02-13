import Landing from './components/common/Landing';
import Login from './components/common/Login';
import SignUp from './components/common/SignUp';
import ForgotPassword from './components/common/ForgotPassword';
import ResetPassword from './components/common/ResetPassword';

const routes = [
    {
        name: "landing",
        path: "/",
        page: Landing,
    },
    {
        name: "login",
        path: "/login",
        page: Login,
    },
    {
        name: "signup",
        path: "/signup",
        page: SignUp,
    },
    {
        name: "forgotPassword",
        path: "/forgot-password",
        page: ForgotPassword,
    },
    {
        name: "resetPassword",
        path: "/reset-password",
        page: ResetPassword,
    }
]

export default routes;