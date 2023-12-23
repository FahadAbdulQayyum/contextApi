// import Form from "@/components/auth/form";
import Form from "../auth/form";
import axios from "axios";
// import { signIn } from "next-auth/react"
import { useRouter } from 'next/router'
// import { useRouter } from 'next/navigation'

export default function Login() {

    const router = useRouter();

    // const onSubmit = async (obj) => {
    //     const { email, password } = obj
    // const onSubmit = async (email, password) => {
    // const onSubmit = async ({ email, password }) => {
    const onSubmit = async (obj) => {
        // signIn('credentials', { redirect: false, email, password });
        // const data = await signIn('credentials', { redirect: false, email, password });
        // console.log('data', data)
        // if (data.ok) {
        //     router.push('/')
        // }

        // const data = await axios.post('/api/auth/login/route', { email, password })
        // const data = await axios.post('/api/users/login/route', obj)
        // const data = await axios.post('/api/users/login', ({ email, password }))
        // const data = await axios.post('/api/auth/login', { email, password })
        const { data } = await axios.post('/api/auth/login', obj)
        // const data = await axios.post('/api/auth/login', obj)
        localStorage.setItem('token', data.token)
        console.log('|dataaa|', data)
    }

    return <Form signin={true} formSubmit={onSubmit} />
};





















// import Form from "@/components/auth/form";
// import axios from "axios";

// export default function Login() {

//     const onSubmit = async (obj) => {
//         console.log('objj login', obj)

//         try {
//             const ress = await axios.post('/api/auth', obj)
//             // const ress = await axios.post('/api/routes/fahad', obj)
//             const data = ress.json();
//             console.log('ress, data', ress, data)

//         } catch (err) {
//             console.error(err)
//         }

//     }

//     return <Form signin={true} formSubmit={onSubmit} />
// };