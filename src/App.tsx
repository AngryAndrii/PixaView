import { FC, useEffect } from "react"
import { FetchData } from "./axios/fetch"

const App:FC = () => {
  useEffect(() => {
    FetchData()
  })
  return (
    <>
      <h1>Lol</h1>
    </>
  )
}

export default App
