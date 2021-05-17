import { ChakraProvider } from "@chakra-ui/react"
import { DefaultLayout } from "../components/DefaultLayout"
import theme from './theme'
function getLayout(Component) {
  if (Component.Layout === 'default' || !Component.Layout) {
    return DefaultLayout
  }
}
function MyApp({ Component, pageProps }) {
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
