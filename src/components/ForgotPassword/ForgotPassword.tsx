import { useState,SetStateAction } from "react"
import { toast, ToastContainer } from "react-toastify"


const ForgotPassword = () => {

  const [regNo,setRegNo] = useState('')
  const [res,setRes] = useState('')
  const [pass,setPass] = useState('')
  const [newPass,setNewPass] = useState('')

  const handleRegNoChange = (e: { target: { value: SetStateAction<string>; }; }) => {
        setRegNo(e.target.value)
      }


  const handleResChange = (e: { target: { value: SetStateAction<string>; }; })  => {
        setRes(e.target.value)
      }
  
  const handlePassChange = (e: { target: { value: SetStateAction<string>; }; }) => {
        setPass(e.target.value)
      }

  
    const handleNewPassChange = (e:{target:{value :SetStateAction<string>; }; }) => {
        setNewPass(e.target.value)
      }

    const validateFields= () => {

      if(regNo.length === 0 || pass.length === 0 || newPass.length === 0 || res.length === 0){
        toast.info('Please fill all the fields')
        return false
      }

      if(pass.length < 8 ){
        toast.error('Password must be at least 8 characters.')
        return false
      }
      if(newPass !== pass){
        toast.error('Passwords do not match.')
        return false
      }
      if(regNo.length !== 9){
        toast.error('The Reg No must be exactly 9 characters.')
        return false
      }
      return true
    }

    const handleSubmit = (e: { preventDefault: () => void; }) => {
      e.preventDefault();
    
      if(validateFields()){
        toast.warning('Password reset successfully.')
      }
      setRegNo('')
      setPass('')
      setRegNo('')
      setRes('')
      setNewPass('')
    }


  return (
    <div className="h-[500px] w-[700px] ml-70 mt-14 mb-10  flex shadow-2xl shadow-cyan-950" style={{borderTopLeftRadius:'10px',borderBottomLeftRadius:'10px',borderTopRightRadius:'10px',borderBottomRightRadius:'10px'}}>
      <div className="w-1/2 " style={{borderColor: "#006991"}}>
          <div className="text-center font-serif justify-center flex-col text-5xl mt-9" style={{color:"#006991",}}>UR Connect</div>

            
        <div className="h-72 w-72 ">
            <img src="/public/ur.jpg" alt="Ur-logo" className="w-full h-full object-contain mt-15 ml-9" />
          </div>
      </div>

      <form action="" className="w-1/2 p-3 flex flex-col items-center" style={{backgroundColor:'#006991',borderTopRightRadius:'10px',borderBottomRightRadius:'10px'}}
      onSubmit={handleSubmit} >

      <div className="text-white text-5xl mt-6 font-serif">Student Page</div>
        <div className="text-white text-3xl mt-4 font-serif">Forgot Password</div>


        <label htmlFor="">
         
          <input type="text" placeholder="Reg No"className="focus-visible:outline-0 w-full px-13 mt-5 text-gray-700 rounded-lg p-2 bg-white"
          value={regNo}
          onChange={handleRegNoChange}/>

          <select name="Questions" id="secret-quest" className="bg-white text-gray-700 focus-visible:outline-0 w-full mt-4 pl-12 px-13 rounded-lg p-2 font-sans">
            <option value="1">What is your hobby?</option>
            <option value="2">When is your birthday?</option>
            <option value="3">Who is your role model?</option>
            <option value="4">What is your middle name?</option>
          </select>

          <input type="text" placeholder="Answer" className="focus-visible:outline-0 w-full px-13 mt-5 text-gray-700 rounded-lg p-2 bg-white" 
          value={res}
          onChange={handleResChange}  />

          <input type="password" placeholder="New Password" className="focus-visible:outline-0 w-full px-13 mt-5 text-gray-700 rounded-lg p-2 bg-white" 
          value={pass}
          onChange={handlePassChange}/>

          <input type="password" placeholder="Confirm Password" 
          className="focus-visible:outline-0 w-full px-13 mt-5 text-gray-700 rounded-lg p-2 bg-white" 
          value={newPass}
          onChange={handleNewPassChange}/>
        </label>

        <button className="p-2 w-full bg-transparent text-white mt-5 border-1 border-white hover:bg-cyan-50/30 rounded-lg ">Reset Password</button>
      </form>
      <ToastContainer position="top-right" autoClose={3000}/>
    </div>
  )
}
export default ForgotPassword
