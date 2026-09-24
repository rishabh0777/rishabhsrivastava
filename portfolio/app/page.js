import Navbar from "./components/header.js"
import Home from "./components/hero.js"
import Services from "./components/services.js"
import Work from "./components/work.js"
import Process from "./components/process.js"
import Contact from "./components/contact.js"
import Footer from "./components/footer.js"

function App() {

  return (
    <>
      <main className="relative w-screen overflow-x-hidden bg-[#010101] text-[#ffffff]">
        {/* <Navbar /> */}
        <Home />
        <Services />
        <Work />
        <Process />
        <Contact />
        <Footer />
      </main>
    </>
  )
}

export default App
