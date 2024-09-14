import React, { useRef, useState } from "react";
import Card from "./Card";

Card;

function Foreground() {
  const ref = useRef(null);

  const data = [
    {
      desc: "lorem12  ipsum dolor sit amet consectetur adipisicing elit.",
      filesize: ".9mb",
      close: true,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green" },
    },
    {
      desc: "lorem12  ipsum dolor sit amet consectetur adipisicing elit.",
      filesize: ".10mb",
      close: true,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green" },
    },
    {
      desc: "lorem12  ipsum dolor sit amet consectetur adipisicing elit.",
      filesize: ".19mb",
      close: false,
      tag: { isOpen: false, tagTitle: "Download Now", tagColor: "green" },
    },
    {
      desc: "lorem12  ipsum dolor sit amet consectetur adipisicing elit.",
      filesize: ".19mb",
      close: false,
      tag: { isOpen: false, tagTitle: "Download Now", tagColor: "green" },
    },
    {
      desc: "lorem12  ipsum dolor sit amet consectetur adipisicing elit.",
      filesize: ".19mb",
      close: true,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "blue" },
    },
  ];

  return (
    <div
      ref={ref}
      className="fixed top-0 left-0 z-[3] w-full gap-5 flex flex-wrap h-full p-5 bg-sky-800/50 "
    >
      {/* <Card />
      <Card /> */}
      {data.map((item, index) => (
        <Card data={item} reference={ref} />
      ))}
    </div>
  );
}

export default Foreground;
