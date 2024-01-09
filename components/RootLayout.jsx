import { Footer } from './Footer';
import { Header } from './Header';

const RootLayout = ({children}) => {

  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}


export default RootLayout;