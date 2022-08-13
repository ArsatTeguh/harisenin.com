import React from 'react'
import { useStore } from '../../context'

const Hasil = ({handleProps, username,score,themaQuis,setScore, setUsername}) => {
  const [state, addUser] = useStore()

  const handleStore = (e) => {
    addUser({...state, type: 'ADD_USERS', users: {username, score, themaQuis}})
    handleProps(e, 'home')
    setScore(0)
    setUsername('')
   
  }

  return (
    <div className='w-2/4 mx-auto border-2 px-2 py-1 rounded shadow-md'>
       <div className="hasil flex mx-auto  justify-between relative">
        <div className="name uppercase font-semibold text-slate-200"><p>Name : {username}</p></div>
        <div className={`score name uppercase font-semibold text-4xl absolute top-0 right-1 ${score < 50 ? 'text-red-600' : 'text-green-400'}`}><p>{score}</p></div>
       </div>
       <p className='text-start name uppercase font-semibold text-slate-200 '>Tema : {themaQuis}</p>
        <button className='mt-3 mb-1 border-2 px-3 py-1 hover:scale-105 rounded text-slate-100 bg-green-500 transition duration-50 ease-out hover:ease-in font-semibold' onClick={(e) => handleStore(e)}>Again and Save</button>
    </div>
  )
}

export default Hasil