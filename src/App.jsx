import './App.css'
import Header from './components/Header'
import WhatsAppButton from './components/WhatsAppButton'
import Opportunity from './sections/Opportunity'
import Faq from './sections/Faq'
import Gallery from './sections/Gallery'
import Hero from './sections/Hero'
import Footer from './components/Footer'

function App() {

  return (

    <div className="min-h-screen bg-sky-primary text-white">
      <Header />
      
      <Hero />
      <Gallery />
      <Opportunity />
      <Faq />

      <WhatsAppButton />

      <Footer />
    </div>
  )
}

export default App;

