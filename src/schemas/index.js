import * as yup from "yup";
const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
 
export const validateUser = yup.object().shape({
    email: yup.string().email("Please Enter Email").required("required"),
    password: yup.string().min(5).matches(passwordRules,{message: "Please enter a strong password"}).required("required"),
})