import Header from "./HeaderCompo";
import Navbar from "./NavbarCompo";
import CarouselCompo from "./CarouselCompo";
import PopularNews from "./PopularNewsCompo";
let skrip = "https://cdn.jsdelivr.net/npm/flowbite@2.4.1/dist/flowbite.min.js";
export default function Home() {
  return (
    <div>
      <Header />
      <Navbar />
      <div className="container mx-auto ">
        <div id="bodytag" className="grid grid-cols-2 gap-4 p-4 mt-2">
          <CarouselCompo />
          <PopularNews />
        </div>
      </div>
      <script src={skrip}></script>
    </div>
  );
}
