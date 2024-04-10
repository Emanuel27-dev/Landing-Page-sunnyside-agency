import { ClientsContainer } from './components/ClientsContainer'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { SecondImagesContainer } from './components/SecondImagesContainer'
import { Main } from './components/Main'


export const App = () =>  {
  
  return (
    <>
      <Header />
      <Main />
      <ClientsContainer />
      <SecondImagesContainer />
      <Footer />
    </>
  )
}

