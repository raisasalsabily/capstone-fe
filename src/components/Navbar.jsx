import React from "react"

const Navbar = () => {
  return (
    <div className="fixed z-50 w-full bg-white">
      {/* container start */}
      <div className="container mx-auto">
        <nav className="h-16 md:h-18 px-4 py-4 flex items-center justify-between ">
          <div className="text-purple-dark font-bold text-2xl">KandangKoo</div>
          {/* <div>notif btn</div> */}
        </nav>
      </div>
      {/* container end */}
    </div>
  )
}

export default Navbar
