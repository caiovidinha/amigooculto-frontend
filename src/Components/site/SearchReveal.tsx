import { SearchResult } from "@/types/SearchResult";

type Props = {
    results: SearchResult;
}

export const SearchReveal = ({ results }: Props) => {
    
    
    return (
        <div className="p-3 bg-white rounded-b-lg">
            <p className="text-3xl text-gray-900 font-bold">{results.person.name}</p>
            <p className="text-2xl text-gray-800 mb-3">Você tirou:</p>
            <p className="text-4xl bg-blue-800 my-5 px-5 py-20 rounded-lg">{results.personMatched.name}</p>
        </div>
    )
}