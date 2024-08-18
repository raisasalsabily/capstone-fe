import React from "react"
import IconText from "./IconText"
import Spinner from "./loading/Spinner"
import ThreeDots from "./loading/ThreeDots"

const MinMaxBox = ({ maxTemp, minTemp, maxHum, minHum }) => {
  return (
    <div
      id="minxmax__box"
      className="bg-white min-w-full min-h-full py-4 px-2 flex flex-col rounded-md shadow-outline"
    >
      <div
        id="minmax__main__content"
        className="min-w-full min-h-full flex flex-row justify-center items-center gap-6"
      >
        {/* tertinggi - terendah label start*/}
        <div className="flex flex-col gap-2">
          <div className="basis-1/3">
            <IconText text="Tertinggi" className="bg-red-300" />
          </div>
          <div className="basis-1/3">
            <IconText text="Terendah" className="bg-blue-300" />
          </div>
          <div className="basis-1/3 text-white">.</div>
        </div>
        {/* tertinggi - terendah label end*/}

        {/* suhu start*/}
        <div className="flex flex-col gap-2 justify-center items-center">
          {/* max temperature start */}
          <div id="temp__max" className="flex flex-row">
            <div className="flex w-8">
              {maxTemp ? (
                <div className="flex">
                  <p className="font-normal text-2xl">{maxTemp}</p>
                  <p className="font-normal text-md">°C</p>
                </div>
              ) : (
                <div className="w-14 h-8">
                  <ThreeDots />
                </div>
              )}
            </div>
          </div>
          {/* max temperature end */}

          {/* min temperature start */}
          <div id="hum__max" className="flex flex-row">
            <div className="flex w-8">
              {minTemp ? (
                <div className="flex">
                  <p className="font-normal text-2xl">{minTemp}</p>
                  <p className="font-normal text-md">°C</p>
                </div>
              ) : (
                <div className="w-14 h-8">
                  <ThreeDots />
                </div>
              )}
            </div>
          </div>
          {/* min temperature end */}

          <div>Suhu</div>
        </div>
        {/* suhu end*/}

        {/* humidity start*/}
        <div className="flex flex-col gap-2 justify-center items-center">
          {/* max humidity start */}
          <div id="hum__max" className="flex flex-row">
            <div className="flex w-8">
              {maxHum ? (
                <div className="flex">
                  <p className="font-normal text-2xl">{maxHum}</p>
                  <p className="font-normal text-lg">%</p>
                </div>
              ) : (
                <div className="w-14 h-8">
                  <ThreeDots />
                </div>
              )}
            </div>
          </div>
          {/* max humidity end */}

          {/* min humidity start */}
          <div id="hum__min" className="flex flex-row">
            <div className="flex w-8">
              {minHum ? (
                <div className="flex">
                  <p className="font-normal text-2xl">{minHum}</p>
                  <p className="font-normal text-lg">%</p>
                </div>
              ) : (
                <div className="w-14 h-8">
                  <ThreeDots />
                </div>
              )}
            </div>
          </div>
          {/* min humidity end */}
          <div>Kelembapan</div>
        </div>
        {/* kelembapan end*/}
      </div>
    </div>
  )
}

export default MinMaxBox
