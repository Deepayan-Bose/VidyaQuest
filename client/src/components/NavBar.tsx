import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, useNavigate } from 'react-router-dom';

const NavBar = () => {
    const {userId , userName} = useSelector(state => state.user);
    const navigate = useNavigate();
    const handleLoginBtnClick = () => {
        alert("you have clicked on login btn");
        navigate("/login");
    }

    const handleSingupBtnClick = () => {
        alert("you have clicked on singup button");
        navigate("/signup")

    }

  return (
    <div className='flex fixed w-full h-15 rounded-3xl bg-[#FFF0BD] justify-between' >
        <img className="mx-4 my-2 hover:cursor-pointer" src="VidyaQuestLogo.svg" alt="VidyaQuestLogo"></img>
        
        {
            (userId === undefined) && (
                <div className="space-x-3" >
                    <button className="bg-[#B4EBE6] my-3 px-1 py-1 text-2xl uppercase font-roborto rounded-md text-orange-400 hover:cursor-pointer"
                    onClick={handleLoginBtnClick}
                    > Login </button>
                    <button className="bg-[#B4EBE6] mx-3 px-1 py-1 text-2xl uppercase font-roborto rounded-md text-orange-400 hover:cursor-pointer"
                    onClick={handleSingupBtnClick}> Signup </button>
                </div>    
            )
        }
        {
            (userId !== undefined) && (
                <div className="space-x-4" >
                    <button className="bg-[#B4EBE6] my-3 px-1 py-1 text-2xl uppercase font-mono rounded-md text-orange-400 hover:cursor-pointer"> View Profile </button>
                    <button className="bg-[#B4EBE6] mx-3 px-1 py-1 text-2xl uppercase font-mono rounded-md text-orange-400 hover:cursor-pointer"> Logout </button>
                </div>    
            )
        }
    </div>
    
  )
}

export default NavBar
