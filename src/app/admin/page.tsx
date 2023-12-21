import Image from "next/image"

const Page = () => {
    return(
        <main className="text-center mx-auto max-w-lg p-5">
        <header className="flex flex-col items-center justify-center p-3">
            <Image 
            src="/img/logo.png"
            width={150}
            height={500}
            alt="Picture of the author"/>
            
            
        </header>
        <div className="rounded-3xl shadow-2xl mt-8 transition-all duration-500">
          <div className="flex flex-col items-center justify-center bg-blue-900 p-5 rounded-t-3xl">
            <h1 className="text-3xl font-bold mb-3">Login</h1>
            <p className="text-sm mb-1">Acessar</p>
            <div className="-mb-8 w-10 h-10 bg-blue-900 -bottom-[10%] rotate-45 rounded-md"></div>
          </div>
          {/* <Login /> */}
        </div>

        <footer className="text-xs text-black mt-20">Criado com carinho por Caio Vidinha 😁</footer>
      </main>
    )
  }
  
  export default Page