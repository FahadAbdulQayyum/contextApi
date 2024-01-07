// import GlobalState from '@/global/GlobalState'

import { Provider } from 'react-redux';
import store from '../store';

import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return <>
    {/* <GlobalState> */}

    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>

    {/* </GlobalState > */}
  </>
}
