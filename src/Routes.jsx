import Landing from './components/common/Landing';
import Login from './components/common/Login';
import SignUp from './components/common/SignUp';
import ForgotPassword from './components/common/ForgotPassword';
import ResetPassword from './components/common/ResetPassword';
import HomeCandidate from './components/candidate/Home';
import AppliedJobs from './components/candidate/AppliedJobs';
import Recruiter from './components/recruiter/Recruiter';
import PostJob from './components/recruiter/PostJob';

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
    },
    {
        name: "home",
        path: "/home",
        page: HomeCandidate,
    },
    {
        name: "appliedJobs",
        path: "/applied-jobs",
        page: AppliedJobs,
    },
    {
        name: "recruiter",
        path: "/home-recruiter",
        page: Recruiter,
    },
    {
        name: "postJob",
        path: "/post-job",
        page: PostJob,
    }
]

export default routes;