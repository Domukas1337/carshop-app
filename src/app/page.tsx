import TopBar from "./components/TopBar"
import CarsMain from "./components/CarsMain"
import Header from "./components/Header"
import Arrow from "./components/Arrow"

export default function Home() {
  return (
    <main className="">
      <TopBar />
      <Header />
      <Arrow />
      <CarsMain />
    </main>
  )
}
