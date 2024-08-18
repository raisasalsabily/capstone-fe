import React, { useState } from "react"
import { Icon } from "@iconify/react"

const ToggleWithText = ({ isChecked, onToggleChange }) => {
  //   const [isChecked, setIsChecked] = useState(false)

  const handleCheckboxChange = () => {
    onToggleChange(!isChecked)
  }

  return (
    <>
      <label className="min-w-min relative inline-flex cursor-pointer select-none items-center justify-center rounded-md bg-white p-1">
        <input
          type="checkbox"
          className="sr-only flex"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
        <span
          className={`flex items-center space-x-[6px] rounded py-2 px-[18px] text-sm font-medium ${
            !isChecked
              ? "text-primary bg-purple-300 text-body-color"
              : "text-neutral-500"
          }`}
        >
          <Icon icon="carbon:temperature-max" className="text-xl mx-1" />
          suhu
        </span>
        <span
          className={`flex items-center space-x-[6px] rounded py-2 px-[18px] text-sm font-medium ${
            isChecked
              ? "text-primary bg-purple-300 text-body-color"
              : "text-neutral-500"
          }`}
        >
          <Icon
            icon="material-symbols:humidity-percentage-outline-rounded"
            className="text-xl mx-1"
          />
          kelembapan
        </span>
      </label>
    </>
  )
}

export default ToggleWithText
