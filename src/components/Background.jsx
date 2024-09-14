import React from "react";

function Background() {
  return (
    <div className="fixed w-full z-[2] h-screen">
      <div className="w-full py-10 absolute top-[5%] flex text-xl justify-center text-zinc-200 font-semibold">
        {" "}
        Documents.
      </div>
      <h1 className="text-[13vw] absolute top-1/2 text-zinc-400 font-semibold left-1/2 -translate-x-[50%] -translate-y-[50%]  ">
        Docs.
      </h1>
    </div>
  );
}

export default Background;
