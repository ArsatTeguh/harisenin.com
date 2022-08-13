import React, { useEffect, useState } from "react";

const Home = ({handleProps, handleName, username}) => {
const [isBtn, setIsBtn] = useState(false)

useEffect(() => {
  if(username === '') {
    setIsBtn(false)
  }else {
    setIsBtn(true)
  }
},[username])

  return (
    <div>
        <form onSubmit={(e) => handleProps(e,'choice')} className="flex flex-col gap-2">
          <label className="text-slate-100 font-semibold" htmlFor="">
            Masukan Nama Anda :{" "}
          </label>
          <input
            className="w-1/3 mx-auto px-2 py-1 rounded-sm mb-3 text-sm text-black font-semibold"
            type="text"
            placeholder="Masukan Nama Anda"
            value={username}
            onChange={(e) => handleName(e.target.value)} 
          />
          <input
            className="px-3 py-2 bg-green-500 rounded shadow-md w-1/3 mx-auto font-semibold text-2md text-slate-200 transition duration-50 ease-out hover:ease-in hover:scale-105 disabled:opacity-75 disabled:scale-100"
            disabled={!isBtn}
            type="submit"
          />
        </form>
    </div>
  );
};

export default Home;
