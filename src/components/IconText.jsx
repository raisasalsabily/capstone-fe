import React from "react"
import { Icon } from "@iconify/react"

const IconText = ({ text, className }) => {
  return (
    <div className="flex items-center gap-2">
      {/* icon */}
      <div
        className={`${className} w-6 h-6 mb-2 rounded-full flex items-center justify-center `}
      >
        <Icon icon="healthicons:high-level" className="text-xl text-white" />
        {/* Label */}
      </div>
      <h5>{text}</h5>
    </div>
  )
}

export default IconText
