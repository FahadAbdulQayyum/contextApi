// import Form from "@/components/auth/form";
import Form from "../auth/form";
import axios from "axios";
// import { signIn } from "next-auth/react"
import { useRouter } from 'next/router'
// import { useRouter } from 'next/navigation'

export default function Login() {

    const router = useRouter();

    const onSubmit = async (obj) => {
        const { data } = await axios.post('/api/auth/login', obj)
        // const { data } = await axios.get('/api/auth/login', { headers: localStorage.getItem('token') })
        localStorage.setItem('token', data.token)
        console.log('|dataaa|', data)
        router.replace('/')
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