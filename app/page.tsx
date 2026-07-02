import Navbar from "@/app/components/Navbar"; 
import Hero from "@/app/components/Hero"; 
import About from "@/app/components/About"; 
import Skills from "@/app/components/Skills"; 
import Experience from "@/app/components/Experience"; 
import Contact from "@/app/components/Contact"; 
 
export default function Home() { 
  return ( 
    <>
      <div className="bg-mesh" />
      <Navbar /> 
      <main className="flex flex-col items-center w-full px-6 md:px-12 lg:px-24"> 
        <Hero /> 
        <About /> 
        <Skills /> 
        <Experience /> 
        <Contact /> 
      </main> 
    </> 
  ); 
}