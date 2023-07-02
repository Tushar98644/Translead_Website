import { About, Contact, Footer, Home, Navbar, Team, Work } from "@/components";

const Home_page = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Work />
      <Team />
      <Contact />
      {/* <Footer/> */}
    </div>

  );
}

export default Home_page;