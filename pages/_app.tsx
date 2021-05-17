import { ChakraProvider } from '@chakra-ui/react'
import { AppProps } from 'next/app'
import { DefaultLayout } from '../components/DefaultLayout'
import theme from '../components/theme'
function getLayout (Component) {
  if (Component.Layout === 'default' || !Component.Layout) {
    return DefaultLayout
  }
}
function MyApp ({ Component, pageProps }: AppProps) {
  const Layout = getLayout(Component)
  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  )
}
export default MyApp
