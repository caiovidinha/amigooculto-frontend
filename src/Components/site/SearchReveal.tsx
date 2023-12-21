import { SearchResult } from "@/types/SearchResult";

type Props = {
    results: SearchResult;
}

export const SearchReveal = ({ results }: Props) => {
    
    
    return (
        <div className="flex flex-col items-center p-3 bg-white rounded-b-lg transition-all duration-500">
            <p className="text-3xl text-gray-900 font-bold mt-4">{results.person.name}</p>
            <p className="text-2xl text-gray-800 mb-3">Você tirou:</p>
            <p className="shadow-xl border-b-8 border-blue-900 text-4xl bg-blue-800 my-5 px-5 w-4/5 py-20 rounded-lg">{results.personMatched.name}</p>
        </div>
    )
}