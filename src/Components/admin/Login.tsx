"use client"

import { useEffect, useState } from "react"
import * as api from "@/api/admin"
import { redirect } from "next/navigation"

export const Login = () => {
    const [password, setPassword] = useState('')
    const [token, setToken] = useState('')
    const [loading, setLoading] = useState(false)
    const [wrong, setWrong] = useState(false)
    const [auth, setAuth] = useState(false)

    const onLoginButton = async (pswd: string) => {
        setLoading(true)
        const token = await api.login(pswd)
        setLoading(false)
        if(!token) setWrong(true)
        else {
            setToken(token)
            setAuth(true)    
            setWrong(false)
        }
    }

    if(auth) redirect(`/admin/painel?token=${token}`)

    return (
        <div>
            <p className="mb-3 mt-8 text-2xl text-black">Insira a senha do administrador:</p>
            <input 
            type="text"
            placeholder="********"
            className=" disabled:opacity-20 w-2/3 p-3 bg-gray-200 text-black text-center text-2xl md:text-3xl outline-none rounded-lg"
            autoFocus
            value={password}
            onChange={e => setPassword(e.target.value)}
            disabled = {loading}
            />
            <p className={wrong ? "text-red-700" : "hidden" }>Senha inválida !</p>
            <button 
            className="disabled:opacity-20 w-2/3 p-3 mt-6 mb-8 rounded-lg text-white text-2xl border-b-4 border-gray-300 active:border-b-0 active:border-t-4 active:border-gray-700 bg-gray-600 hover:bg-gray-500 active:bg-gray-700 select-none"
            onClick={() => onLoginButton(password)}
            >{!loading ? 'Entrar' : 'Carregando...'}</button>
        </div>
    )
}