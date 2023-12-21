"use client"

import { IoIosArrowDown } from "react-icons/io";
import * as api from '@/api/admin'
import { useState } from "react";


const Events = () => {
  const [eventList, setEventList] = useState([])
  const [open, setOpen] = useState(false)

  

  

  const getEvents = async () => {
    if(open) {
      setOpen(false)
      return}
    
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
        onClick={getEvents} 
        className={ open ? "bg-gray-300 text-gray-700 py-3 px-4 flex flex-row justify-between mx-auto rounded-t-lg" :"bg-gray-300 text-gray-700 py-3 px-4 flex flex-row justify-between mx-auto rounded-lg hover:cursor-pointer"}>
        <h2 className="text-2xl font-semibold p-3 select-none">Eventos</h2>
        <button className={open ? "active:bg-gray-400 p-3 rounded-md rotate-180 duration-500 transition-all" : "active:bg-gray-400 p-3 rounded-md duration-500 transition-all"} 
        onClick={getEvents}><IoIosArrowDown size={30}/></button>
      </div>
      <div className={open ? "rounded-b-lg bg-gray-300 grid grid-cols-2 md:grid-cols-3 transition-all duration-500 py-12 px-4 md:p-12 gap-4" : "rounded-b-lg bg-gray-300 hidden grid-cols-2 md:grid-cols-3 transition-all duration-500"}> 
      {eventList.map((event, index) => (
        <div className="rounded-lg bg-gray-600 md:px-3 p-2 md:py-20 hover:cursor-pointer hover:bg-gray-500"><h1 className="font-bold md:text-2xl">{event.title ? event.title : ''}</h1>
            <h2 className="text-xs md:text-md">{event.description ? event.description : ''}</h2>
        </div>
      ))} </div>
    </div>
  )
}

export default Events