import { AppRoutes } from "./routes"
import { Header } from "../shared/components/Header"
import { BrowserRouter } from "react-router-dom"

function App() {

  return (
    <BrowserRouter>
      <Header/>
      <AppRoutes/>
    </BrowserRouter>
  )
}

export default App
