import { Header } from './_components/header';
import { Hero } from './_components/hero';
import { About } from './_components/about';
import { Lookbook } from './_components/lookbook';
import { Testimonials } from './_components/testimonials';
import { Faq } from './_components/faq';
import { Footer } from './_components/footer';

export default function Home() {
  return (
    <div>
      <header>
        <Header/>
      </header>
      <main>
        <Hero />
        <About />
        <Lookbook />
        <Testimonials />
        <Faq />
      </main>
      <footer>
        <Footer/>
      </footer>
    </div>
  )
}