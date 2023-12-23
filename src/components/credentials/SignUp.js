// import Form from "@/components/auth/form";
import axios from "axios";
import Form from "../../components/auth/form";

export default function SignUp() {

  const onSubmit = async (obj) => {
    console.log('objj', obj)
    // const data = await axios.post('/api/users/signup', ({ email, password }))
    // const data = await axios.post('/api/users/signup/route', obj)
    const data = await axios.post('/api/auth/signup', obj)
    console.log('|dataaa|', data)
  }

  return <Form signin={false} formSubmit={onSubmit} />
};