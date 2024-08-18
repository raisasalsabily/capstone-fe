import React from "react"
import { Icon } from "@iconify/react"

function ValueBox({ className, title, value, unit, icon }) {
  return (
    <div
      id="nilai__box"
      className="bg-white min-w-full min-h-full p-4 flex flex-col gap-6 rounded-md shadow-outline"
    >
      <div id="nilai__title">
        {/* icon */}
        <div
          className={`${className} w-10 h-10 mb-2 rounded-full flex items-center justify-center `}
        >
          <Icon icon={icon} className="text-2xl text-white" />
        </div>

        {/* title */}
        <h5>{title}</h5>
      </div>

      <div id="nilai" className="flex flex-row">
        {value ? (
          <div className="flex gap-2">
            <p className="font-normal text-4xl">{value}</p>
            <p className="font-normal text-xl">{unit}</p>
          </div>
        ) : (
          <div className="max-w-full max-h-full">
            <p>...</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default ValueBox
