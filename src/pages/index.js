import Image from 'next/image'
import { Inter } from 'next/font/google'
import { useEffect } from 'react'
import axios from 'axios'
import { useRouter } from 'next/router'
// import Home from '@/components/home/home'
import Home from '../home';
// import Navbar from '@/components/navbar/navbar'
import Navbar from '../navbar'
import FloatingData from './FloatingData'


import { store } from './app/store'
import { Provider } from 'react-redux'

const Index = () => {

  // const router = useRouter()

  // useEffect(() => {
  //   const tok = async () => {
  //     const token = localStorage.getItem('token')
  //     console.log('tokennn', token)
  //     try {
  //       const { data } = await axios.get('/api/auth/verifyuser', { headers: { 'x-auth-token': token } })
  //       console.log('dataa', data)
  //       if (!data.success || data === null) {
  //         router.replace('/auth/login')
  //       }

  //     } catch (err) {
  //       console.error(err)
  //       localStorage.setItem('token', '')
  //       router.replace('/auth/login')
  //     }
  //   }
  //   tok()
  // }, [])

  return (
    <div>
      <Provider store={store}>

        <Navbar />
        <Home />
        <div
          className='absolute right-10 bottom-10'
        >
          <FloatingData />
        </div>
      </Provider>,
    </div>
  )
}

export default Index
