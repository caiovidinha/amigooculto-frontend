"use client"

import { SearchResult } from "@/types/SearchResult";
import { SearchForm } from "./SearchForm";
import { useState } from "react";
import * as api from '@/api/site'
import { SearchReveal } from "./SearchReveal";

type Props = { id: number; }

export const Search = ({ id }: Props) => {
    const [results, setResults] = useState<SearchResult>()
    const [loading, setLoading] = useState(false)

    const handleSearchButton = async (cpf: string) => {
        if(!cpf) return
        setLoading(true)
        const result = await api.searchCPF(id, cpf)
        setLoading(false)
        if(!result) return alert('Desculpe, seu código não existe!')

        setResults(result)
    }
    
    return (
        
        <section className="overflow-y-hidden">
            {!results && <SearchForm 
            onSearchButton={handleSearchButton}
            loading={loading} />}
            {results && <SearchReveal results={results} />}
        </section>
    )
}