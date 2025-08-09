import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import Signin from '../Signin';
import Signup from '../Signup';
const Button = () => {
    return (_jsxs(_Fragment, { children: [_jsx(Signin, { content: "Sign In" }), _jsx(Signup, { content: "Sign up" })] }));
};
export default Button;
