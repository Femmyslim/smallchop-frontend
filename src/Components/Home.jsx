import React from "react"
import HeaderField from "./Header"
import ParagraphField from "./Paragraph"
import ButtonField from "./Button"
import InputField from "./Input"
import LabelField from "./Label"
import {BsDoorOpen} from 'react-icons/bs';

function Home() {

    return(
    <div className="font-Mulish mx-[10rem]">

        <nav className="flex justify-between bg-[#a5854f] px-[3rem] items-center rounded-lg">      
           <div className="flex items-center">
                <HeaderField headType="h1 border rounded-full w-[3rem] h-[3rem] text-center py-[1rem] text-bold" headText="AF" HeadTextSize="18px" headColor="white" bgColor="#3C2415"/>
                <div className="ml-2">
                    <ParagraphField ParaText="Hi," paraTextSize="30px" paraTextColor=""/>
                    <ParagraphField ParaText="Femisola" paraTextSize="30px" paraTextColor=""/>
                </div> 
            </div>   
            
            <div className="btn flex border-white h-[3rem] shadow-white hover:-translate-y-1 duration-700">
                 <BsDoorOpen className="ml text-[2rem] text-[white]"/>
                 <ButtonField  buttonText="LOGOUT" InputType="1" className="btn text-white rounded"/>
            </div>
        </nav> 
        <div className="bg-white drop-shadow-2xl">  
            <div className="flex flex-col bg-[#e4daca] mx-[2rem] mt-[3rem] pl-10 rounded-lg h-[10rem]">
                <HeaderField headType="h2 text-[#a98165] font-bold pt-[3rem]" headText="Welcome to your account" HeadTextSize="30px" headColor="brown" bgColor=""/>
                <ParagraphField ParaText="It's always a good day to order Smallchops" paraTextSize="20px font-bold" paraTextColor="text-[#593813]"/>
            </div>
            <div className="mt-5 rounded-lg px-10">
                <HeaderField headType="h2 bg-[#f6f3ed] h-[3rem] pt-3 font-bold text-[#a5854f]" headText="Personal Information" HeadTextSize="15px" headColor="" bgColor=""/>
                
                <div className="text-[#828282] font-bold text-xs">
                    <form action="form-control flex">
                        <div className="flex justify-between">
                            <div className="w-[20rem]">
                            <LabelField labelText="Name" labelClass="label-form my-[0.7rem]" labelFor="Name"/>
                            <br />
                            <InputField inputType="text" inputId="Name" inputPlaceholder="Alawiye Femisola" inputClass="outline-pink-200 w-[20rem] h-[3rem] rounded-lg bg-[#f6f3ed]" required/>
                            </div>
                            <div className="w-[20rem] mr-12">
                            <LabelField labelText="Email Address" labelClass="label-form my-[0.7rem]" labelFor="Email Address"/>
                            <br />
                            <InputField inputType="email" inputId="Email Address" inputPlaceholder="femisolaalawiye@gmail.com" inputClass=" outline-pink-200 bg-[#f6f3ed] w-[20rem] h-[3rem] rounded-lg" required/>
                            </div>  
                        </div>     
                    <br />
                    <LabelField labelText="Phone Number" labelClass="label-form my-[0.7rem]" labelFor="Phone Number"/>
                    <br />
                    <InputField inputType="tel" inputId="Phone Number" inputPlaceholder="08132851453" inputClass="outline-pink-200 bg-[#f6f3ed] rounded-lg w-[20rem] h-[3rem]" required/>
                    <ParagraphField ParaText="One special day in one year where you get a little extra with your order. On this day, you get a free package with whatever you order. Could be your birthday, or anniversary, whichever." paraTextSize="10px solid" paraTextColor=""/>
                    <LabelField labelText="Special Event Date" labelClass="label-form my-[0.7rem]" labelFor="Special Event Date"/>
                    <br />
                    <InputField inputType="Date" inputId="Special Event Date" inputClass="w-[20rem] h-[3rem] rounded-lg outline-pink-200 bg-[#f6f3ed]" disabled/> 
                    <div></div>
                    </form>
                    <div className="flex justify-end">
                        <ButtonField buttonText="Save Changes" InputType="1" className="button my-[5rem] bg-[#a5854f] text-[#dfd3cc] font-bold w-[8rem] h-[2.5rem] rounded"/>
                    </div>
                </div>
            


            
            </div>
            
            
            
        </div>
    </div> 

        
    )    

}




export default Home