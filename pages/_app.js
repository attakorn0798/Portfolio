import '../styles/globals.css'
import Sidebar from '../components/slidebar/sidebar'

function MyApp({ Component, pageProps }) {
  return (
    <Sidebar>
      <Component {...pageProps} />
    </Sidebar>
  );
}

export default MyApp
