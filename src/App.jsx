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
                                                                    
     
 
        <div className="mt-60 text-xl md:mt-80  bg-black  rounded-xl  -p-12 w-24   font-bold uppercase container mx-auto  outline outline-black text-red-500  flex-1 text-center" >
          <p className="" >R18 Event</p>
        </div>
        <div className="mt-40">

          <div className="text-lg  px-4 py-2   bg-black text-red-500  w-52    rounded-3xl bg-opacity-100 text-opacity-100 mb-12">
            Sign Up Below for Event Notifcations
          </div>
          <ContactUs className="" />
        </div>

      </main>
    

        <footer className="flex  flex-row items-right justify-center   bottom-0 sticky bg-red-600 pb-4">
          <p className="mb-0 md:mb-0 md:text-xl">Ōtautahi Pride 2023 💜 </p>
          <div className="flex justify-center mx-6 text-white  ">
            <a href="#" className="mx-3 hover:opacity-80 duration-150">About us</a> |
            <a href="#" className="mx-3 hover:opacity-80 duration-150">Privacy</a> |
            <a href="#" className="mx-3 hover:opacity-80 duration-150">Contact</a>
          </div>
     
        </footer>
 
        {/* <Router>
        <Route>
        </Route>
      </Router> */}
    </div>


    
  )
}

export default App