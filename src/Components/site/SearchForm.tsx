"use client"

import { useState } from "react";

type Props = {
    onSearchButton: (cpf: string) => void;
}

export const SearchForm = ({ onSearchButton }: Props) => {
    const [cpfInput, setCpfInput] = useState('')

    return (
        <div>
            <p className="mb-3 text-2xl">Qual o seu código individual?</p>
            <input 
            type="text"
            inputMode="numeric"
            placeholder="Insira aqui"
            className="w-full p-3 bg-white text-black text-center text-4xl md:text-3xl outline-none rounded-lg"
            autoFocus
            />
            <button className="w-full p-3 mt-3 rounded-lg text-white text-2xl bg-gray-600 active:bg-gray-700 select-none"
            >Acessar</button>
        </div>
    )
}