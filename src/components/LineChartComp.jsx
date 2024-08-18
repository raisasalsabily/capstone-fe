import React from "react"
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ReferenceLine,
} from "recharts"

function LineChartComp({
  data,
  xData,
  yData,
  xLabel,
  yLabel,
  xDomain,
  batasAtas,
  batasBawah,
}) {
  console.log("chartLogs type inside LineChartComp:", typeof data)
  const dataArray = Array.isArray(data) ? data : Object.values(data)

  return (
    <div className="w-full h-full">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={dataArray}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey={xData}
            tick={false}
            label={{ value: xLabel, position: "insideBottom" }}
          />
          <YAxis
            label={{
              value: yLabel,
              angle: -90,
              position: "insideBottomLeft",
              offset: 12,
            }}
            domain={xDomain}
          />
          {/* <CartesianGrid vertical={false} strokeDasharray="3 3" /> */}
          <Tooltip
            labelFormatter={(value) => {
              const originalTimestamp = Date.parse(value)
              const adjustedTimestamp = originalTimestamp - 7 * 60 * 60 * 1000

              const options = {
                day: "numeric",
                month: "short",
                year: "2-digit",
                hour: "numeric",
                minute: "numeric",
              }
              const formattedDate = new Date(
                adjustedTimestamp
              ).toLocaleDateString(undefined, options)
              return formattedDate.replace(
                /(\d{2}) (\w{3}) (\d{2})/,
                "$1 $2 $3"
              )
            }}
          />
          {/* <Legend /> */}
          <Line
            type="monotone"
            dataKey={yData}
            stroke="#0066cc"
            name=""
            // dot={{ fill: "#978feb" }}
            dot={false}
            strokeWidth={3}
          />
          {/* Garis horizontal untuk batas bawah dan batas atas */}
          <ReferenceLine
            y={batasBawah}
            stroke="red"
            strokeDasharray="3 3"
            label=""
          />
          <ReferenceLine
            y={batasAtas}
            stroke="green"
            strokeDasharray="3 3"
            label=""
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default LineChartComp
