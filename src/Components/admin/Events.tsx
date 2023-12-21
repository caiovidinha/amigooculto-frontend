"use client"

import { IoIosArrowDown } from "react-icons/io";
import * as api from '@/api/admin'
import { useState } from "react";


const Events = () => {
  const [eventList, setEventList] = useState([])
  const [open, setOpen] = useState(false)

  

  

  const getEvents = async () => {
    const urlParams = new URLSearchParams(window.location.search);
    const tokenParam = urlParams.get('token')
    if(tokenParam) {
      const list = await api.getEvents(tokenParam)
      setEventList(list)
      setOpen(true)
    }
  }

  return (
    <div>
      <div 
        className={ open ? "bg-gray-300 text-gray-700 py-3 px-4 flex flex-row justify-between mx-auto rounded-t-lg" :"bg-gray-300 text-gray-700 py-3 px-4 flex flex-row justify-between mx-auto rounded-lg"}>
        <h2 className="text-2xl font-semibold p-3">Eventos</h2>
        <button className="active:bg-gray-400 p-3 rounded-md" onClick={getEvents}><IoIosArrowDown  size={30}/></button>
      </div>
      <div className={open ? "rounded-b-lg bg-gray-300 grid grid-cols-2 md:grid-cols-3 transition-all duration-500 p-12" : "rounded-b-lg bg-gray-300 grid grid-cols-2 md:grid-cols-3 transition-all duration-500"}> 
      {eventList.map((event, index) => (
        <div className="rounded-lg bg-gray-600 px-3 py-20 hover:cursor-pointer hover:bg-gray-500"><h1 className="font-bold text-2xl">{event.title ? event.title : ''}</h1>
            <h2>{event.description ? event.description : ''}</h2>
        </div>
      ))} </div>
    </div>
  )
}

export default Events