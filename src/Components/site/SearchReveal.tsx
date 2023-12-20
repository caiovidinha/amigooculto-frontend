import { SearchResult } from "@/types/SearchResult";

type Props = {
    results: SearchResult;
}

export const SearchReveal = ({ results }: Props) => {
    
    
    return (
        <div>
            <p className="text-3xl">{results.person.name}</p>
            <p className="text-2xl my-3">Você tirou:</p>
            <p className="text-4xl bg-blue-800 my-5 px-5 py-20 rounded-lg">{results.personMatched.name}</p>
        </div>
    )
}