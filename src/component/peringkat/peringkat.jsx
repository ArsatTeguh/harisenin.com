import React from "react";
import { useStore } from "../../context";

const Peringkat = () => {
  const [state] = useStore();

  state?.users?.sort((a, b) => {
    if (a.score > b.score) return -1;
    if (a.score < b.score) return 1;
    return 0;
  });

  return (
    <div className="content-peringkat absolute top-0 right-0 w-full mx-auto rounded bg-blue-500 p-2 flex flex-col gap-3 ">
      <p className="text-slate-100 font-semibold text-xl border-b py-1">
        Top Rating
      </p>
      {state?.users?.map((e, i) => {
        return (
          <div key={i} className=" flex w-full items-center gap-2">
            <p
              className={`w-6 h-6 border-2 rounded-full flex items-center justify-center text-slate-200 font-semibold ${
                i + 1 < 4 ? "border-amber-400 text-green-100 " : ""
              } `}
            >
              {i + 1}
            </p>
            <div
              key={i}
              className=" w-full border-2 px-3 py-2 rounded shadow-md"
            >
              <div className="hasil flex mx-auto  justify-between relative">
                <div className="name uppercase font-semibold text-slate-200">
                  <p>Name : {e.username}</p>
                </div>
                <div
                  className={`score name uppercase font-semibold text-4xl absolute top-0 right-1 ${
                    e.score < 50 ? "text-red-600" : "text-green-400"
                  }`}
                >
                  <p>{e.score}</p>
                </div>
              </div>
              <p className="text-start name uppercase font-semibold text-slate-200 ">
                Tema : {e.themaQuis}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Peringkat;
