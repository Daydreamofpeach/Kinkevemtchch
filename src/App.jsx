import {React, useState} from "react"
import { ContactUs } from "./Components/ContactUs"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from "./Components/Header"



// const [email, setEmail] = useState('');
// const [error, setError] = useState(null);

const showToast = () => {
  toast("Thanks, We Will Keep You Updated! ")
}
function App() {
  return (
 
    <div className="min-h-screen text-white font-bold  ">

      <main className="container mx-auto px-6 pt-16 flex-1 text-center">

        {/* <h2 className="text-2xl md:text-4xl lg:text-4xl uppercase">Welcome to</h2> */}
                                                                    
     
 
        <div className="mt-16 mb-20  text-xl md:mt-40     rounded-xl   w-24   uppercase  opacity-90 mx-auto    text-white font-black  flex-1 text-center" >
          <p className="pt-8 " >R18 Event</p>
        
          <p className=" " >March 17th</p>


        </div>
        <div className=" object-center  justify-center   ">

          <div className="text-2xl   px-4 py-20   hover:text-black  text-white font-black    text-opacity-100   mt-12  w-80  mx-auto md:w-1/2 ">
            Sign Up Below for Event Notifcations
          </div>
          <ContactUs className=" md:p-0  min-h-1/4 " />
        </div>

      </main>
   

      <footer className="flex  w-full flex-row justify-center   bottom-0  sm mt-8 md:mt-8 absolute text-center text-justify justify-evenly ">
        
          <p className="mb-0 md:mb-0 md:text-xl">Ōtautahi Pride 2023 💜 </p>
  
            <a href="#" className="mx-3 hover:opacity-80 duration-150">About us</a> |
            <a href="#" className="mx-3 hover:opacity-80 duration-150">Privacy</a> |
            <a href="#" className="mx-3 hover:opacity-80 duration-150">Contact</a>
        
     
        </footer>

    </div>


    
  )
}

export default App