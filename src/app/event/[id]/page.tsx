import * as api from "@/api/site"
import { Search } from '@/Components/site/Search'
import { redirect } from "next/navigation"
import Image from "next/image"

type Props = { params: { id: string } }
const Page = async ({ params }: Props) => {
    const eventItem = await api.getEvent(parseInt(params.id))
    if(!eventItem || !eventItem.status) return redirect('/')


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
            <h1 className="text-3xl font-bold">{eventItem.title}</h1>
            <p className="text-sm mb-5">{eventItem.description}</p>
            <div className="-mb-8 w-10 h-10 bg-blue-900 -bottom-[10%] rotate-45 rounded-md"></div>
          </div>
          <Search id={eventItem.id}/>
        </div>

        <footer className="text-xs text-black mt-20">Criado com carinho por Caio Vidinha 😁</footer>
      </main>
    )
  }
  
  export default Page