const dummyData = [
  {
    suhu: 30.75,
    kelembapan: 65.42,
    createdAt: "2023-11-08T06:00:00.000Z",
  },
  {
    suhu: 33.12,
    kelembapan: 68.91,
    createdAt: "2023-11-08T06:01:00.000Z",
  },
  {
    suhu: 32.09,
    kelembapan: 67.23,
    createdAt: "2023-11-08T06:02:00.000Z",
  },
  {
    suhu: 34.28,
    kelembapan: 60.78,
    createdAt: "2023-11-08T06:03:00.000Z",
  },
  {
    suhu: 30.97,
    kelembapan: 66.57,
    createdAt: "2023-11-08T06:04:00.000Z",
  },
  {
    suhu: 32.44,
    kelembapan: 62.15,
    createdAt: "2023-11-08T06:05:00.000Z",
  },
  {
    suhu: 31.63,
    kelembapan: 63.85,
    createdAt: "2023-11-08T06:06:00.000Z",
  },
  {
    suhu: 33.99,
    kelembapan: 64.29,
    createdAt: "2023-11-08T06:07:00.000Z",
  },
  {
    suhu: 34.56,
    kelembapan: 61.72,
    createdAt: "2023-11-08T06:08:00.000Z",
  },
  {
    suhu: 32.78,
    kelembapan: 69.14,
    createdAt: "2023-11-08T06:09:00.000Z",
  },
  {
    suhu: 31.25,
    kelembapan: 66.95,
    createdAt: "2023-11-08T06:10:00.000Z",
  },
  {
    suhu: 34.03,
    kelembapan: 63.51,
    createdAt: "2023-11-08T06:11:00.000Z",
  },
  {
    suhu: 32.87,
    kelembapan: 68.03,
    createdAt: "2023-11-08T06:12:00.000Z",
  },
  {
    suhu: 31.94,
    kelembapan: 62.89,
    createdAt: "2023-11-08T06:13:00.000Z",
  },
  {
    suhu: 30.45,
    kelembapan: 69.61,
    createdAt: "2023-11-08T06:14:00.000Z",
  },
  {
    suhu: 33.29,
    kelembapan: 61.06,
    createdAt: "2023-11-08T06:15:00.000Z",
  },
  {
    suhu: 30.51,
    kelembapan: 65.79,
    createdAt: "2023-11-08T06:16:00.000Z",
  },
  {
    suhu: 34.71,
    kelembapan: 67.67,
    createdAt: "2023-11-08T06:17:00.000Z",
  },
  {
    suhu: 30.23,
    kelembapan: 61.99,
    createdAt: "2023-11-08T06:18:00.000Z",
  },
  {
    suhu: 32.15,
    kelembapan: 66.13,
    createdAt: "2023-11-08T06:19:00.000Z",
  },
  {
    suhu: 34.84,
    kelembapan: 62.84,
    createdAt: "2023-11-08T06:20:00.000Z",
  },
  {
    suhu: 33.07,
    kelembapan: 68.49,
    createdAt: "2023-11-08T06:21:00.000Z",
  },
  {
    suhu: 32.56,
    kelembapan: 60.78,
    createdAt: "2023-11-08T06:22:00.000Z",
  },
  {
    suhu: 34.11,
    kelembapan: 69.63,
    createdAt: "2023-11-08T06:23:00.000Z",
  },
  {
    suhu: 30.92,
    kelembapan: 64.89,
    createdAt: "2023-11-08T06:24:00.000Z",
  },
  {
    suhu: 33.42,
    kelembapan: 62.14,
    createdAt: "2023-11-08T06:25:00.000Z",
  },
  {
    suhu: 34.29,
    kelembapan: 66.86,
    createdAt: "2023-11-08T06:26:00.000Z",
  },
  {
    suhu: 31.36,
    kelembapan: 67.78,
    createdAt: "2023-11-08T06:27:00.000Z",
  },
  {
    suhu: 32.76,
    kelembapan: 63.52,
    createdAt: "2023-11-08T06:28:00.000Z",
  },
  {
    suhu: 34.05,
    kelembapan: 61.09,
    createdAt: "2023-11-08T06:29:00.000Z",
  },
  {
    suhu: 33.01,
    kelembapan: 68.62,
    createdAt: "2023-11-08T06:30:00.000Z",
  },
  {
    suhu: 30.69,
    kelembapan: 66.34,
    createdAt: "2023-11-08T06:31:00.000Z",
  },
  {
    suhu: 34.21,
    kelembapan: 62.45,
    createdAt: "2023-11-08T06:32:00.000Z",
  },
  {
    suhu: 31.85,
    kelembapan: 65.92,
    createdAt: "2023-11-08T06:33:00.000Z",
  },
  {
    suhu: 33.65,
    kelembapan: 69.08,
    createdAt: "2023-11-08T06:34:00.000Z",
  },
  {
    suhu: 30.34,
    kelembapan: 61.71,
    createdAt: "2023-11-08T06:35:00.000Z",
  },
  {
    suhu: 32.93,
    kelembapan: 67.39,
    createdAt: "2023-11-08T06:36:00.000Z",
  },
  {
    suhu: 34.67,
    kelembapan: 63.16,
    createdAt: "2023-11-08T06:37:00.000Z",
  },
  {
    suhu: 31.14,
    kelembapan: 68.02,
    createdAt: "2023-11-08T06:38:00.000Z",
  },
  {
    suhu: 32.88,
    kelembapan: 64.73,
    createdAt: "2023-11-08T06:39:00.000Z",
  },
  {
    suhu: 34.32,
    kelembapan: 60.22,
    createdAt: "2023-11-08T06:40:00.000Z",
  },
  {
    suhu: 30.57,
    kelembapan: 67.01,
    createdAt: "2023-11-08T06:41:00.000Z",
  },
  {
    suhu: 33.21,
    kelembapan: 61.63,
    createdAt: "2023-11-08T06:42:00.000Z",
  },
  {
    suhu: 34.79,
    kelembapan: 66.88,
    createdAt: "2023-11-08T06:43:00.000Z",
  },
  {
    suhu: 31.78,
    kelembapan: 69.42,
    createdAt: "2023-11-08T06:44:00.000Z",
  },
  {
    suhu: 32.65,
    kelembapan: 65.85,
    createdAt: "2023-11-08T06:45:00.000Z",
  },
  {
    suhu: 33.51,
    kelembapan: 63.64,
    createdAt: "2023-11-08T06:46:00.000Z",
  },
  {
    suhu: 34.14,
    kelembapan: 61.32,
    createdAt: "2023-11-08T06:47:00.000Z",
  },
  {
    suhu: 30.84,
    kelembapan: 68.67,
    createdAt: "2023-11-08T06:48:00.000Z",
  },
  {
    suhu: 32.32,
    kelembapan: 64.07,
    createdAt: "2023-11-08T06:49:00.000Z",
  },
  {
    suhu: 34.96,
    kelembapan: 60.54,
    createdAt: "2023-11-08T06:50:00.000Z",
  },
  {
    suhu: 33.18,
    kelembapan: 67.95,
    createdAt: "2023-11-08T06:51:00.000Z",
  },
  {
    suhu: 31.46,
    kelembapan: 61.85,
    createdAt: "2023-11-08T06:52:00.000Z",
  },
  {
    suhu: 34.45,
    kelembapan: 66.26,
    createdAt: "2023-11-08T06:53:00.000Z",
  },
  {
    suhu: 30.42,
    kelembapan: 69.21,
    createdAt: "2023-11-08T06:54:00.000Z",
  },
  {
    suhu: 32.74,
    kelembapan: 62.03,
    createdAt: "2023-11-08T06:55:00.000Z",
  },
  {
    suhu: 34.03,
    kelembapan: 63.97,
    createdAt: "2023-11-08T06:56:00.000Z",
  },
  {
    suhu: 33.35,
    kelembapan: 60.68,
    createdAt: "2023-11-08T06:57:00.000Z",
  },
  {
    suhu: 31.92,
    kelembapan: 68.11,
    createdAt: "2023-11-08T06:58:00.000Z",
  },
  {
    suhu: 32.62,
    kelembapan: 65.44,
    createdAt: "2023-11-08T06:59:00.000Z",
  },
]
