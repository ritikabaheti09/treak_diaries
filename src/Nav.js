import React, { useState } from 'react';
import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { Link } from 'react-router-dom';

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

export default function Nav () {
    let [open,setOpen]=useState(false);

  return (

    <div className='shadow-md bg-white w-full fixed top-0 left-0'>
      <div className='md:flex items-center justify-between bg-white py-4 md:px-10 px-7'>
            <div className='font-bold text-2xl cursor-pointer flex items-center font-[Poppins] 
            text-gray-800 '>
                <span className='text-3xl text-yellow-600 mr-2 pt-2'>
                <ion-icon name="sunny-outline"></ion-icon>
                </span>
                Trek Diary
            </div>
      
            <div onClick={()=>setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
             <ion-icon name={open ? 'close':'menu'}></ion-icon>
            </div>

            <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 opacity-100':'top-[-490px]'} md:opacity-100 opacity-0`}> 
                    <li  className='md:ml-8 text-xl md:my-0 my-7'>
                        <a  className='text-gray-800 hover:text-gray-400 duration-500 cursor-pointer'>Home</a>
                    </li>
                    <li  className=' md:ml-8 text-xl md:my-0 my-7'>
                    <Menu as="div" className="relative inline-block text-left">
                        <div>
                            <Menu.Button className="text-gray-800 duration-500 hover:text-gray-400">
                            Upcoming Trek
                            </Menu.Button>
                        </div>

                        <Transition
                            as={Fragment}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                        >
                            <Menu.Items className="md:absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                            <div className="py-1">
                                <Menu.Item>
                                {({ active }) => (
                                    <a href="#"className={classNames(active ? 'bg-gray-100 text-gray-900' : 'text-gray-700','block px-4 py-2 text-base')}>
                                    Summer Camp
                                    </a>
                                )}
                                </Menu.Item>
                                <Menu.Item>
                                {({ active }) => (
                                    <a href="#"className={classNames(active ? 'bg-gray-100 text-gray-900' : 'text-gray-700','block px-4 py-2 text-base')}>
                                    Weekend special
                                    </a>
                                )}
                                </Menu.Item>
                                <Menu.Item>
                                {({ active }) => (
                                    <a href="#"className={classNames(active ? 'bg-gray-100 text-gray-900' : 'text-gray-700','block px-4 py-2 text-base')}>
                                    Family Trek
                                    </a>
                                )}
                                </Menu.Item>
                                <Menu.Item>
                                {({ active }) => (
                                    <a href="#"className={classNames(active ? 'bg-gray-100 text-gray-900' : 'text-gray-700','block px-4 py-2 text-base')}>
                                    Special Treak
                                    </a>
                                )}
                                </Menu.Item>
                            </div>
                            </Menu.Items>
                        </Transition>
                        </Menu>
                    </li>
                    <li  className='md:ml-8 text-xl md:my-0 my-7'>
                        <a  className='text-gray-800 hover:text-gray-400 duration-500 cursor-pointer'>Our story </a>
                    </li>
                    <li  className='md:ml-8 text-xl md:my-0 my-7'>
                        <a  className='text-gray-800 hover:text-gray-400 duration-500 cursor-pointer'>Contact Us</a>
                    </li>
                    <li  className='md:ml-8 text-xl md:my-0 my-7'>
                    <Menu as="div" className="relative inline-block text-left">
                        <div>
                            <Menu.Button className="text-gray-800 duration-500 hover:text-gray-400">
                            City
                            </Menu.Button>
                        </div>

                        <Transition
                            as={Fragment}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                        >
                            <Menu.Items className="md:absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                            <div className="py-1">
                                <Menu.Item>
                                {({ active }) => (
                                    <a href="#"className={classNames(active ? 'bg-gray-100 text-gray-900' : 'text-gray-700','block px-4 py-2 text-base')}>
                                    SambhajiNagar (Aurangabad)
                                    </a>
                                )}
                                </Menu.Item>
                                <Menu.Item>
                                {({ active }) => (
                                    <a href="#"className={classNames(active ? 'bg-gray-100 text-gray-900' : 'text-gray-700','block px-4 py-2 text-base')}>
                                    Pune
                                    </a>
                                )}
                                </Menu.Item>
                                <Menu.Item>
                                {({ active }) => (
                                    <a href="#"className={classNames(active ? 'bg-gray-100 text-gray-900' : 'text-gray-700','block px-4 py-2 text-base')}>
                                    Bombay
                                    </a>
                                )}
                                </Menu.Item>
                                <Menu.Item>
                                {({ active }) => (
                                    <a href="#"className={classNames(active ? 'bg-gray-100 text-gray-900' : 'text-gray-700','block px-4 py-2 text-base')}>
                                    Jalna
                                    </a>
                                )}
                                </Menu.Item>
                            </div>
                            </Menu.Items>
                        </Transition>
                        </Menu>
                    </li>        
            </ul>
      </div>
    </div>
  )
}
