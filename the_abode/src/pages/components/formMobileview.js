import { useState } from 'react'

const Form = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [countryCode, setCountryCode] = useState('')
  const [isChecked, setIsChecked] = useState(false)
  const [propertyName, setPropertyName] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log({
      name,
      email,
      phone,
      countryCode,
      isChecked,
      propertyName
    })
  }

  return (

    <div id = "form" className= " h-max  rounded-md  md:hidden bg-red-400">
    <div className='h-full'>
    <div className='flex items-center justify-center font-semibold text-lg pt-6 mb-5 text-neutral-600'>We Design for your Budget</div>
    <form 
    // onSubmit={handleSubmit} 
    className="p-4 space-y-4 mx-2 rounded-md shadow-md bg-stone-100"   action="https://formbold.com/s/oPpLb"
   method="POST" encType="multipart/form-data">
      <div className="flex flex-col space-y-2">
       
        <input type="text" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" className="border-gray-300 border-2 p-2 rounded-md" required />
      </div>
      <div className="flex flex-col space-y-2">
      
        <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" className="border-gray-300 border-2 p-2 rounded-md" required/>
      </div>
      <div className="flex flex-col space-y-2">
       
        <div className="flex space-x-2">
          <input type="text" id="countryCode" name="countryCode" value={countryCode} onChange={(e) => setCountryCode(e.target.value)} placeholder="+91" className="border-gray-300 border-2 p-2 rounded-md w-20" required />
          <input type="tel" id="phone" name="phone" value={phone} onChange={(e) => setPhone(e.target.value)}  placeholder="Phone Number" className="border-gray-300 border-2 p-2 rounded-md flex-1" required/>
        </div>
      </div>
      <div className="flex items-center space-x-2">
        <input type="checkbox" id="isChecked" name="isChecked" checked={isChecked} onChange={(e) => setIsChecked(e.target.checked)} className="text-blue-500" />
        <label htmlFor="isChecked" className='text-xs text-stone-500'>Send Me Updates on Whatsaap</label>
      </div>
      <div className="flex flex-col space-y-2">
       
        <div className="flex space-x-2">
          
          <input type="text" id="propertyName" name="propertyName" value={propertyName} onChange={(e) => setPropertyName(e.target.value)} placeholder="Property Name" className="border-gray-300 border-2 p-2 rounded-md flex-1" />
        </div>
      </div>
    
      <div className='flex flex-col items-center justify-center '>
      <button type="submit" className="bg-yellow-400 text-white py-3 px-4 flex items-center justify-center rounded-full w-full hover:bg-yellow-600">GET FREE QUOTE</button>
      <label htmlFor="isChecked" className=" text-xs w-4/5 text-center mt-3 text-stone-500">By submitting this form you agree to the <span className="text-yellow-500" >privacy policy</span> & <span className="text-yellow-500">terms and conditions</span></label>
      <div className=" text-xs w-4/5 text-center mt-3 text-red-400 ">Alternatively you can call us at</div>
      <div className=" align-middle text-base font-semibold "> 9748523583 / 7980205826 </div>
      </div>
    </form>

    </div>

    {/* <div className='bg-yellow-300 h-1/5'> </div> */}
    </div>
  )
}

export default Form