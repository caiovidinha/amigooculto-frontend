"use client"

import { escapeCPF } from "@/utils/escapeCPF";
import { useState } from "react";

type Props = {
    onSearchButton: (cpf: string) => void;
    loading: boolean;
}

export const SearchForm = ({ onSearchButton, loading }: Props) => {
    const [cpfInput, setCpfInput] = useState('')

    return (
        <div>
            <p className="mb-3 text-2xl">Qual o seu código individual?</p>
            <input 
            type="text"
            inputMode="numeric"
            placeholder="Insira aqui"
            className="disabled:opacity-20 w-full p-3 bg-white text-black text-center text-4xl md:text-3xl outline-none rounded-lg"
            autoFocus
            value={cpfInput}
            onChange={e => setCpfInput(escapeCPF(e.target.value))}
            disabled={loading}
            />
            <button 
            className="disabled:opacity-20 w-full p-3 mt-3 rounded-lg text-white text-2xl border-b-4 border-gray-300 active:border-b-0 active:border-t-4 active:border-gray-700 bg-gray-600 hover:bg-gray-500 active:bg-gray-700 select-none"
            onClick={() => onSearchButton(cpfInput)}
            disabled={loading}
            >{!loading ? 'Acessar' : 'Carregando...'}</button>
        </div>
    )
}