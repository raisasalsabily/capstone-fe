import React from "react"

const ThreeDBtn = ({ text, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="w-full bg-yellow-500 hover:bg-yellow-400 text-black font-semibold py-2 px-4 border-b-4 border-yellow-700 hover:border-yellow-500 rounded-md"
    >
      {text}
    </button>
  )
}

export default ThreeDBtn
