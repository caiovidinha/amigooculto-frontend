import * as api from "@/api/site"
import { Search } from '@/Components/site/Search'
import { redirect } from "next/navigation"

type Props = { params: { id: string } }
const Page = async ({ params }: Props) => {
    const eventItem = await api.getEvent(parseInt(params.id))
    if(!eventItem || !eventItem.status) return redirect('/')


    return(
      <main className="text-center mx-auto max-w-lg p-5">
        <header>
            <h2 className="text-2xl text-black">Amigo Oculto</h2>
            <h1 className="text-3xl mt-5 mb-2 text-gray-700 font-bold">{eventItem.title}</h1>
            <p className="text-sm mb-5">{eventItem.description}</p>
        </header>

        <Search id={eventItem.id}/>

        <footer className="text-xs">Criado com carinho por Caio Vidinha 😁</footer>
      </main>
    )
  }
  
  export default Page