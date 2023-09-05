import LocationSelector from "@/components/LocationSelector"
import Map from "@/components/Map"
import Navbar from "@/components/Navbar"


const style = {
  wrapper: 'h-screen w-screen flex flex-col',
  rideRequestContainer: 'h-full w-[400px] ml-[1rem] py-[3rem] absolute top-0 left-0 flex flex-col justify-end z-20',
  rideRequest: 'h-full max-h-[700px] bg-[#64c4c4] rounded-lg flex flex-col overflow-scroll',
}

export default function Home() {
  return (
    <div className={style.wrapper}>
     {/* Navbar */}
      <Navbar />
      <div className={style.main}>
        {/* Map */}
        <Map />
      </div>
      <div className={style.rideRequestContainer}>
        <div className={style.rideRequest}>
            <LocationSelector />
        </div>
      </div>
    </div>
  )
}
