import Navbar from "./components/navbar";
import Introduction from "./components/introduction";
import Footer from "./components/footer";
import Form from "./components/formMobileview";

import Design from "./components/Design Inspiration"
import Teammembers from "./components/Teammembers";
import Process from "./components/Abode_booking_Process";
import Abode_booking_Process from "./components/Abode_booking_Process";
import Testimonial from "./components/Testimonial"
import Services from "./components/services"
import Payment_Process from "./components/Payment_Process";
import Connect from "./components/Connect";

import Design2 from "./components/Design Inspiration2"


export default function Home() {
  return (
   <div>
<Navbar />
<Introduction />

<Form />
<Teammembers />

<Abode_booking_Process />

<div className=" md:hidden"> <Design /></div>
<div className="hidden md:block"><Design2  /></div>


<Services />
<Testimonial />
{/* <Payment_Process /> */}
<Connect />

<Footer />




   </div>
  )
}
