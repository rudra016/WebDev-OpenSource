import React,{useState , useRef} from 'react'
import {SiTailwindcss} from "react-icons/si"
import {BsImages} from "react-icons/bs"
import {HiOutlineLightBulb} from "react-icons/hi"
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/solid'
import {all_colors , grad_type} from "./Color_Combinations"
import toast from "react-hot-toast"
import html2canvas from 'html2canvas'
const GeneratorComp = () => {
  const [d1 , setd1] = useState("bg-gradient-to-r")
  const [d2 , setd2] = useState("from-pink-500")
  const [d3 , setd3] = useState("via-red-500")
  const [d4 , setd4] = useState("to-yellow-500")
  const ref = useRef()
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }
  const apply_style = (e,clr,con)=>{
      if(con === "grad"){
        setd1(clr)
      }else if(con === "from"){
        setd2(clr)
      }else if(con === "via"){
        setd3(clr)
      }else{
        setd4(clr)
      }
  }
  const [color , setColor] = useState(1)
  const handleDark = ()=>{
    console.log()
    const newClassArr = [...document.getElementById("dark").classList]
    if(newClassArr[2] === "bg-white"){
      newClassArr[2] = "bg-black"
      setColor(1)
    }else{
      newClassArr[2] = "bg-white"
      setColor(0)
    }
    document.getElementById("dark").className = newClassArr.join(" ")
  }
  const arr_class_join = ()=>{
    const classDem = ref.current.classList
    const arr = [...classDem]
    console.log(arr.slice(3,7).join(" "))
    return arr.slice(3,7).join(" ")
   }
  const handleCopy = ()=>{
    navigator.clipboard.writeText(arr_class_join())
    toast.success("Copied !")
  }

  const downGradGen= ()=> {
    const container = document.getElementById("yesItsMe");
    const containerStyles = window.getComputedStyle(container);
    const gradient = containerStyles.backgroundImage;
    html2canvas(container).then((canvas) => {
      const image = canvas.toDataURL('png');
      let a  = document.createElement('a');
      a.href = image;
      a.download = 'ZnoyColors.png';
      a.click()
    });
  }


  return (
    <div className='text-white'>
      <div className='border-t-2 border-b-2 border-gray-800 py-3 flex justify-between px-36'>
        <div className="flex space-x-2">
            <SiTailwindcss  className="bg-gray-800 rounded-xl  h-8 w-8 py-2 hover:bg-gray-600 hover:text-pink-600" onClick={handleCopy}/>
             <BsImages className="bg-gray-800 rounded-xl  h-8 w-8 py-2 hover:bg-gray-600 hover:text-pink-600" onClick={downGradGen}/>
        </div>
        {/* drop down code start*/}
        <div className="flex space-x-6">
          {/* drop down one  start*/}
            <Menu as="div" className="relative inline-block text-left z-50 ">
              <div>
                <Menu.Button className="inline-flex justify-center w-full rounded-md border-2 border-gray-700 text-white bg-[#111827] hover:text-[#111827] shadow-sm px-4 py-2  text-sm font-medium hover:bg-gray-50  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500">
                  {d1}
                  <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
                </Menu.Button>
              </div>
              <Transition as={Fragment} enter="transition ease-out duration-100" enterFrom="transform opacity-0 scale-95" enterTo="transform opacity-100 scale-100" leave="transition ease-in duration-75" leaveFrom="transform opacity-100 scale-100" leaveTo="transform opacity-0 scale-95"
              >
              <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="py-1">
                  {
                    grad_type.map((ele)=>(
                      <Menu.Item key={ele}>
                      {({ active }) => (
                        <p
                          className={classNames(
                            active ? 'bg-gray-100 text-gray-900 cursor-pointer' : 'text-gray-700',
                            'block px-4 py-2 text-sm cursor-pointer'
                          )}
                          onClick={(e)=>apply_style(e,ele , "grad")}
                        >
                        {ele}
                        </p>
                      )}
                    </Menu.Item>
                    ))
                  }
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
          {/* drop down one  end*/}
          {/* drop down two  end*/}
          <Menu as="div" className="relative inline-block text-left z-50 ">
              <div>
                <Menu.Button className="inline-flex justify-center w-full rounded-md border-2 border-gray-700 text-white bg-[#111827] hover:text-[#111827] shadow-sm px-4 py-2  text-sm font-medium  hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500">
                  {d2}
                  <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
                </Menu.Button>
              </div>
              <Transition as={Fragment} enter="transition ease-out duration-100" enterFrom="transform opacity-0 scale-95" enterTo="transform opacity-100 scale-100" leave="transition ease-in duration-75" leaveFrom="transform opacity-100 scale-100" leaveTo="transform opacity-0 scale-95"
              >
              <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none h-[400px] overflow-auto">
                <div className="py-1">
                  {all_colors.map((ele)=>(
                    <Menu.Item key={ele}>
                      {({ active }) => (
                        <p 
                          className={classNames(
                            active ? 'bg-gray-100 text-gray-900 cursor-pointer' : 'text-gray-700',
                            'block px-4 py-2 text-sm cursor-pointer'
                          )}
                          onClick={(e)=>apply_style(e,`from-${ele}` , "from")}
                        >
                        from-{ele} 
                        </p>
                      )}
                    </Menu.Item>
                  ))}
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
          {/* drop down two end*/}
          {/* drop down three start*/}
          <Menu as="div" className="relative inline-block text-left z-50 ">
              <div>
                <Menu.Button className="inline-flex justify-center w-full rounded-md border-2 border-gray-700 text-white bg-[#111827] hover:text-[#111827] shadow-sm px-4 py-2  text-sm font-medium  hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500">
                  {d3}
                  <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
                </Menu.Button>
              </div>
              <Transition as={Fragment} enter="transition ease-out duration-100" enterFrom="transform opacity-0 scale-95" enterTo="transform opacity-100 scale-100" leave="transition ease-in duration-75" leaveFrom="transform opacity-100 scale-100" leaveTo="transform opacity-0 scale-95"
              >
              <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none h-[400px] overflow-auto">
                <div className="py-1">
                  {all_colors.map((ele)=>(
                    <Menu.Item key={ele}>
                      {({ active }) => (
                        <p 
                          className={classNames(
                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                            'block px-4 py-2 text-sm cursor-pointer'
                          )}
                          onClick={(e)=>apply_style(e,`via-${ele}` , "via")}
                        >
                        via-{ele}  
                        </p>
                      )}
                    </Menu.Item>
                  ))}
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
          {/* drop down three end*/}
          {/* drop down four start*/}
          <Menu as="div" className="relative inline-block text-left z-50 ">
              <div>
                <Menu.Button className="inline-flex justify-center w-full rounded-md border-2 border-gray-700 text-white bg-[#111827] hover:text-[#111827] shadow-sm px-4 py-2  text-sm font-medium  hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500">
                  {d4}
                  <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
                </Menu.Button>
              </div>
              <Transition as={Fragment} enter="transition ease-out duration-100" enterFrom="transform opacity-0 scale-95" enterTo="transform opacity-100 scale-100" leave="transition ease-in duration-75" leaveFrom="transform opacity-100 scale-100" leaveTo="transform opacity-0 scale-95"
              >
              <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none h-[400px] overflow-auto">
                <div className="py-1">
                  {all_colors.map((ele)=>(
                    <Menu.Item key={ele}>
                      {({ active }) => (
                        <p
                          className={classNames(
                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                            'block px-4 py-2 text-sm'
                          )}
                          onClick={(e)=>apply_style(e,`to-${ele}` , "to")}
                        >
                        to-{ele} 
                        </p>
                      )}
                    </Menu.Item>
                  ))}
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
          {/* drop down four end*/}
        </div>
          {/* drop down end*/}
      </div>
      <div className='flex space-x-10 justify-center my-20'>
        <div className='overflow-hidden w-[500px] h-[300px] rounded-xl'>
          <div  ref={ref} className={`w-[500px] h-[300px] ${d1} ${d2} ${d3} ${d4} z-50`}>
          </div>
          <div id="yesItsMe" className={`w-[1500px] h-[1000px]  ${d1} ${d2} ${d3} ${d4} -z-50`}>
          </div>
        </div>
        <div id="dark" className="w-[500px] h-[300px] bg-black relative pt-2 rounded-xl">
          <div className='flex space-x-2 absolute right-3'>
            <HiOutlineLightBulb className="bg-gray-800 rounded-xl  h-8 w-8 py-2 hover:bg-gray-600 hover:text-pink-600" onClick={handleDark}/>
          </div>
            <p className={`absolute w-[410px] top-[130px] left-12 font-bold text-3xl text-center outline-none  pointer-events-none ${color ? "bg-black":"bg-white"}
              text-transparent bg-clip-text ${d1} ${d2} ${d3} ${d4}
            `}>Hello Stranger Abhay knows your Location!</p>
        </div>
      </div>
    </div>
  )
}
export default GeneratorComp