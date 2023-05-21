import Navbar from "./components/navbar";
import Introduction from "./components/introduction";
import Footer from "./components/footer";
import Form from "./components/form";

import Design from "./components/Design Inspiration"
import Teammembers from "./components/Teammembers";
import Process from "./components/Abode_booking_Process";
import Abode_booking_Process from "./components/Abode_booking_Process";
import Testimonial from "./components/Testimonial"
import Services from "./components/services"
import Payment_Process from "./components/Payment_Process"


export default function Home() {
  return (
   <div>
<Navbar />
<Introduction />

<Form />
<Teammembers />

<Abode_booking_Process />

<Design />

<Services />
<Testimonial />
<Payment_Process />

<Footer />




   </div>
  )
}
