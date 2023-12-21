import Events from "@/Components/admin/Events"
import Image from "next/image"

const Page = () => {
    return(
        <main className="text-center mx-auto max-w-full p-1">
        <header className="flex flex-row items-center justify-between bg-blue-900 p-5 rounded-t-3xl">
            <Image 
            src="/img/logo-branca.png"
            width={140}
            height={500}
            alt="Picture of the author"/>
            
            <h1 className="text-sm md:text-xl font-bold">Painel administrativo</h1>
            
        </header>
        <div className="rounded-3xl shadow-2xl mt-8 transition-all duration-500 p-5">
            <Events />
        </div>

        <footer className="text-xs text-black mt-20">Criado com carinho por Caio Vidinha 😁</footer>
      </main>
    )
  }
  
  export default Page