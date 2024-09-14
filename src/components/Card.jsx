import React from "react";
import { FaRegFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion";

function Card({ data, reference }) {
  return (
    <motion.div
      drag
      dragConstraints={reference}
      whileDrag={{ scale: 1.1 }}
      dragElastic={0.2}
      dragTransition={{ bounceStiffness: 100, bounceDamping: 60 }}
      className="w-60 flex-shrink-0 relative h-72 rounded-[45px] overflow-hidden px-5 bg-zinc-900/90 text-white py-10"
    >
      <FaRegFileAlt />
      <p className="text-sm mt-5 leading-tight ">{data.desc}</p>
      <div className="footer absolute bottom-0  w-full left-0">
        <div className="flex justify-between px-8 py-3  items-center mb-3">
          <h4>{data.filesize}</h4>
          <span className="w-7 h-7 bg-zinc-600 rounded-full  flex justify-center items-center">
            {data.close ? <IoClose /> : <LuDownload size=".7em" color="#fff" />}
          </span>
        </div>
        {data.tag.isOpen && (
          <div
            className={`tag w-full py-4 ${
              data.tag.tagColor === "blue" ? "bg-blue-600" : "bg-green-600"
            } flex items-center justify-center `}
          >
            <h3 className="text-sm font-semibold">{data.tag.tagTitle}</h3>
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default Card;
