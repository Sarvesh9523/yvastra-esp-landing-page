import Header from "./components/Header"
import Body from "./components/Body"
import Footer from './components/Footer'

function App() {
  
  return (
    <>
      <div className="bg-gradient-to-tr  from-red-700 via-white to-black min-h-screen px-6 py-3 flex flex-col gap-16 md:px-10 md:py-7 md:justify-between">
        <Header/>
        <Body/>
        <Footer/>
      </div>
        
    </>
  )
}

export default App
