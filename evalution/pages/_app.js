import { ChakraProvider } from '@chakra-ui/react'
import Nav from '../Components/Navbar'
import '../styles/globals.css'

export default function App({ Component, pageProps }) {
  return(
<>
<ChakraProvider>
  <Nav/>
      <Component {...pageProps} />
</ChakraProvider>
</>
  ) 
}


;
