import React from "react"

export default function Skeleton() {
  return (
    <div
      className="max-w-[80%] flex flex-col gap-4 animate-pulse m-4"
      data-aos="fade"
    >
      <div className="w-3/12 h-4 bg-neutral-200 rounded-md"></div>
      <div className="w-6/12 h-4 bg-neutral-200 rounded-md"></div>
      <div className="w-9/12 h-4 bg-neutral-200 rounded-md"></div>
      <div className="w-12/12 h-4 bg-neutral-200 rounded-md"></div>
      {/* <div className="w-8/12 h-6 bg-neutral-100 rounded-md"></div>
      <div className="w-12/12 h-6 bg-neutral-100 rounded-md"></div>  */}
    </div>
  )
}
