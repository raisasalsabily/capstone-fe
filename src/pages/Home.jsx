import React, { useState, useEffect } from "react"
import axios from "axios"
// import io from "socket.io-client"

import Navbar from "../components/Navbar"
import ValueBox from "../components/Home/ValueBox"
import Skeleton from "../components/Skeleton"
import LineChartComp from "../components/LineChartComp"
import SectionTitle from "../components/SectionTitle"
import MinMaxBox from "../components/MinMaxBox"
import Footer from "../components/Footer"
import Spinner from "../components/loading/Spinner"
import ThreeDBtn from "../components/button/ThreeDBtn"
import ToggleWithText from "../components/button/ToggleWithText"

// const socket = io("http://localhost:5000", {
//   transports: ["websocket"],
//   withCredentials: true,
//   extraHeaders: {
//     "my-custom-header": "my-custom-value",
//   },
// })

export default function Home() {
  // ------------------ fetch logs ------------------
  const [isLogsLoading, setIsLogsLoading] = useState(false)
  const [isChartLogsLoading, setIsChartLogsLoading] = useState(false)

  const [error, setError] = useState(false)
  const [errorChartLogs, setErrorChartLogs] = useState(false)
  const [errMinMax, setErrMinMax] = useState(false)

  const [logs, setLogs] = useState(null) // state to fetch logs
  const [altLogs, setAltLogs] = useState(null) // state to fetch alternative logs
  const [chartLogs, setChartLogs] = useState(null) // state to fetch logs for chart
  const [minMaxLogs, setMinMaxLogs] = useState(null)

  // altenative logs dibuat ketika device iot tidak mengirimkan data, sehingga data yang ditampilkan merupakan data terakhir yang tersimpann di mongodb

  // useEffect(() => {
  //   socket.on("logs", (data) => {
  //     setLogs(data)

  //     // console.log(data)
  //   })
  // }, [])

  // fetch log data
  const getLogs = async () => {
    setIsLogsLoading(true)
    try {
      const res = await axios.get(
        "https://capstonebe.vercel.app/api/log/latest",
        {
          headers: {
            Accept: "application/json",
          },
        }
      )
      // console.log(res.data)
      setAltLogs(res.data)
    } catch (error) {
      setError(error)
      // console.log(error)
    }
    setIsLogsLoading(false)
  }

  // fetch chart log data
  const getChartLogs = async () => {
    setIsChartLogsLoading(true)
    try {
      const res = await axios.get(
        "https://capstonebe.vercel.app/api/log/chartlog",
        {
          headers: {
            Accept: "application/json",
          },
        }
      )
      console.log(res.data)

      setChartLogs(res.data)
    } catch (error) {
      setErrorChartLogs(error)
      console.log(error)
    }
    setIsChartLogsLoading(false)
  }

  // fetch minimum and maximum data
  const getMinMaxLog = async () => {
    try {
      const res = await axios.get(
        "https://capstonebe.vercel.app/api/log/minmaxlog24",
        {
          headers: {
            Accept: "application/json",
          },
        }
      )
      // console.log(res.data)
      setMinMaxLogs(res.data)
    } catch (error) {
      setErrMinMax(error)
      // console.log(error)
    }
  }

  useEffect(() => {
    getChartLogs()
    const intervalChartLogs = setInterval(getChartLogs, 1000) // Menjalankan pembaruan setiap menit
    return () => {
      clearInterval(intervalChartLogs) // Membersihkan interval saat komponen dibongkar
    }
  }, [])

  useEffect(() => {
    getLogs()
    const intervalGetLogs = setInterval(getLogs, 1000) // Menjalankan pembaruan setiap menit
    return () => {
      clearInterval(intervalGetLogs) // Membersihkan interval saat komponen dibongkar
    }
  }, [])

  useEffect(() => {
    getMinMaxLog()
    const intervalMinMax = setInterval(getMinMaxLog, 1000) // Menjalankan pembaruan setiap menit
    return () => {
      clearInterval(intervalMinMax) // Membersihkan interval saat komponen dibongkar
    }
  }, [])

  // ------------------ current date ------------------
  const [currentDate, setCurrentDate] = useState(new Date())

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDate(new Date())
    }, 1000)

    return () => {
      clearInterval(intervalId)
    }
  }, [])

  const getIndonesianDayName = (date) => {
    const days = [
      "Minggu",
      "Senin",
      "Selasa",
      "Rabu",
      "Kamis",
      "Jumat",
      "Sabtu",
    ]
    return days[date.getDay()]
  }

  const getIndonesianDate = (date) => {
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
    }
    return date.toLocaleDateString("id-ID", options)
  }

  // ---------------------------------------------
  const handleReset = async (e) => {
    e.preventDefault()
    try {
      await axios
        .post(`https://capstonebe.vercel.app/api/log/updatesisapakan`, {
          sisaPakan: 2,
        })
        .then(function (response) {})
    } catch (err) {
      console.log(err)
    }
  }

  // const feed = 7
  // const [remainingFeed, setRemainingFeed] = useState(feed)
  // const decreaseFeed = () => {
  //   setRemainingFeed((prevValue) => {
  //     if (prevValue > 0) {
  //       return prevValue - 1
  //     }
  //     return prevValue
  //   })
  // }
  // const resetFeed = () => {
  //   setRemainingFeed(feed)
  // }
  // useEffect(() => {
  //   // Mengurangkan nilai setiap hari (ubah 86400000 menjadi 86400 jika mengurangkan setiap detik)
  //   const interval = setInterval(decreaseFeed, 60000)
  //   return () => {
  //     clearInterval(interval)
  //   }
  // }, [])

  // ------------------------------
  const [isChecked, setIsChecked] = useState(false)
  const handleChange = (isChecked) => {
    setIsChecked(isChecked)
  }

  // Log untuk debug
  console.log("chartLogs:", chartLogs)

  return (
    <div className="bg-white h-screen">
      <div id="navbar" className="h-16">
        <Navbar />
      </div>

      {/* dashboard main start */}
      <div
        id="main__container"
        className="min-h-min flex flex-col justify-center items-center text-purple-dark"
      >
        {/* TOP INFO (DATE & CHART) START */}
        <div
          id="top__info"
          className="mb-2 px-4 md:px-20 pt-6 pb-4 rounded-br-2xl rounded-bl-2xl w-full min-h-20 font-bold bg-purple-300 flex flex-col justify-between items-center gap-2 shadow-outline"
        >
          {/* tanggal start*/}
          <div className="mb-2 px-4 py-2 w-full rounded-md font-bold bg-white flex flex-row justify-between md:justify-center md:gap-12 items-center">
            <div> {getIndonesianDayName(currentDate)}</div>
            <div>{getIndonesianDate(currentDate)}</div>
          </div>
          {/* tanggal end*/}

          {/* grafik start*/}
          <div className="p-4 md:px-12 md:py-8 w-full max-h-full font-bold bg-white flex flex-col rounded-md">
            <div id="chart___title" className="mb-2 md:text-2xl">
              {!isChecked ? <h4>Histori Suhu</h4> : <h4>Histori Kelembapan</h4>}
              <p className="md:mb-4 text-sm md:text-xl font-normal">
                1 jam terakhir
              </p>
            </div>

            <div className="w-full h-60 flex justify-center items-center font-normal text-[16px]">
              {chartLogs ? (
                isChecked ? (
                  <LineChartComp
                    data={chartLogs}
                    xData="createdAt"
                    yData="kelembapan"
                    xLabel="Waktu (menit)"
                    yLabel="Kelembapan (%)"
                    xDomain={[45, 85]}
                    // batasAtas="26"
                    // batasBawah="22"
                  />
                ) : (
                  <LineChartComp
                    data={chartLogs}
                    xData="createdAt"
                    yData="suhu"
                    xLabel="Waktu (menit)"
                    yLabel="Suhu (°C)"
                    xDomain={[21, 34]}
                    batasAtas="26"
                    batasBawah="22"
                  />
                )
              ) : (
                <div className="w-16">
                  <Spinner />
                </div>
              )}
            </div>
          </div>
          {/* grafik end*/}

          {/* toggle button start */}
          <div className="mt-3">
            <ToggleWithText
              isChecked={isChecked}
              onToggleChange={handleChange}
            />
          </div>
          {/* toggle button end */}
        </div>
        {/* TOP INFO (DATE & CHART) END */}

        {/* BOTTOM INFO START */}
        <div
          id="bottom__info"
          className="h-full w-10/12 gap-1 flex items-center justify-center"
        >
          {/* DATA CONTAINER START */}
          <div
            id="data__container"
            className="w-full flex flex-col md:flex-row md:justify-center md:gap-12"
          >
            {/* 1. data terkini container start*/}
            <div id="data__terkini__container" className="md:basis-1/3">
              {/* data terkini - section title start */}
              <SectionTitle title="Data terkini" />

              {/* data terkini - section title end */}

              <div id="nilai__content" className="flex gap-4 font-bold">
                {/* box 1 start */}
                {logs ? (
                  <div className="basis-1/2 min-w-42 min-h-42">
                    <ValueBox
                      className="bg-yellow-300"
                      title="Suhu"
                      value={logs.suhu}
                      unit="°C"
                      icon="carbon:temperature-max"
                    />
                  </div>
                ) : altLogs ? (
                  <div className="basis-1/2 min-w-42 min-h-42">
                    <ValueBox
                      className="bg-yellow-300"
                      title="Suhu"
                      value={altLogs.suhu}
                      unit="°C"
                      icon="carbon:temperature-max"
                    />
                  </div>
                ) : (
                  <div className="w-full min-w-42 min-h-42">
                    <Skeleton />
                  </div>
                )}
                {/* box 1 end */}

                {/* box 2 start */}
                {logs ? (
                  <div className="basis-1/2 min-w-42 min-h-42">
                    <ValueBox
                      className="bg-blue-300"
                      title="Kelembapan"
                      value={logs.kelembapan}
                      unit="%"
                      icon="material-symbols:humidity-percentage-outline-rounded"
                    />
                  </div>
                ) : altLogs ? (
                  <div className="basis-1/2 min-w-42 min-h-42">
                    <ValueBox
                      className="bg-blue-300"
                      title="Kelembapan"
                      value={altLogs.kelembapan}
                      unit="%"
                      icon="material-symbols:humidity-percentage-outline-rounded"
                    />
                  </div>
                ) : (
                  <div className="w-full min-w-42 min-h-42">
                    <Skeleton />
                  </div>
                )}

                {/* box 2 end */}
              </div>
            </div>
            {/* 1. data terkini container end*/}

            {/* 2. data pakan air container start */}
            <div id="data__pakanair__container" className="md:basis-1/3">
              {/* data 24 - section title start */}
              <SectionTitle title="Perkiraan pakan" />
              {/* data 24 - section title end */}

              {/* data 24 - content start */}
              <div id="pakanair__content" className="flex flex-col">
                {/* 1. valuebox start */}
                <div className="flex gap-4 font-bold">
                  {/* value waktu sisa pakan start */}
                  <div className="basis-2/2 min-w-full min-h-42 font-normal">
                    {altLogs ? (
                      <div className="basis-1/2 min-w-42 min-h-42">
                        <ValueBox
                          className="bg-yellow-300"
                          title="Sisa pakan"
                          value={altLogs.sisaPakan}
                          unit="hari"
                          icon="carbon:temperature-max"
                        />
                      </div>
                    ) : (
                      <div className="w-full min-w-42 min-h-42">
                        <Skeleton />
                      </div>
                    )}
                    {/* <ValueBox
                      className="bg-yellow-300"
                      title="Pakan habis dalam"
                      value={
                        altLogs.sisaPakan ? (
                          altLogs.sisaPakan
                        ) : (
                          <div>
                            <p className="text-sm font-semibold text-red-400">
                              pakan habis!
                            </p>
                            <p className="text-[14px] font-normal text-red-400">
                              harap isi ulang
                            </p>
                          </div>
                        )
                      }
                      unit={
                        remainingFeed ? "hari" : <p className="text-sm"></p>
                      }
                      icon="mdi:dots-triangle"
                    /> */}
                  </div>

                  {/* value waktu sisa pakan end */}

                  {/* value waktu sisa air start */}
                  {/* <div className="basis-1/2 min-w-42 min-h-42 font-normal">
                    <ValueBox
                      className="bg-blue-300"
                      title={
                        <div className="break-words">
                          Volume
                          <br />
                          Air
                        </div>
                      }
                      value="600"
                      unit="ml"
                      icon="ion:water-outline"
                    />
                  </div> */}
                  {/* value waktu sisa air end */}
                </div>
                {/* 1. valuebox end */}

                {/* 2. reset button start */}
                <div className="my-3">
                  <ThreeDBtn text="Reset Pakan" onClick={handleReset} />
                </div>
                {/* 2. reset button end */}
              </div>
              {/* data 24 - content end */}
            </div>
            {/* 2. data pakan air container end */}

            {/* 3. data dalam 24 jam terakhir container start */}
            <div id="data__24__container" className="md:basis-1/3">
              {/* data 24 - section title start */}
              <SectionTitle title="Dalam 24 jam terakhir" />
              {/* data 24 - section title end */}

              {/* data 24 - content start */}
              <div className="bg-pink-300 md:h-[165px]">
                <MinMaxBox
                  maxTemp={minMaxLogs?.highestTemperature}
                  minTemp={minMaxLogs?.lowestTemperature}
                  maxHum={minMaxLogs?.highestHumidity}
                  minHum={minMaxLogs?.lowestHumidity}
                />
              </div>
              {/* data 24 - content end */}
            </div>
            {/* 3. data dalam 24 jam terakhir container end */}
          </div>
          {/* DATA CONTAINER END */}
        </div>
      </div>

      {/* dashboard main end */}

      {/* FOOTER */}
      <div id="footer" className="mt-10">
        <Footer />
      </div>
    </div>
  )
}
