import { Fragment, useState, useEffect } from 'react';
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react';
import logo from "../assets/logo.png";
import Sidebar from "./Sidebar";
import axios from 'axios';

import {
    ArrowPathIcon,
    Bars3Icon,
    ChartPieIcon,
    CursorArrowRaysIcon,
    FingerPrintIcon,
    SquaresPlusIcon,
    XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'

const products = [
    { name: 'Analytics', description: 'Get a better understanding of your traffic', href: '#', icon: ChartPieIcon },
    { name: 'Engagement', description: 'Speak directly to your customers', href: '#', icon: CursorArrowRaysIcon },
    { name: 'Security', description: 'Your customers’ data will be safe and secure', href: '#', icon: FingerPrintIcon },
    { name: 'Integrations', description: 'Connect with third-party tools', href: '#', icon: SquaresPlusIcon },
    { name: 'Automations', description: 'Build strategic funnels that will convert', href: '#', icon: ArrowPathIcon },
]
const callsToAction = [
    { name: 'Watch demo', href: '#', icon: PlayCircleIcon },
    { name: 'Contact sales', href: '#', icon: PhoneIcon },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Sidebar2() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track login status
    const [username, setUsername] = useState(""); // State to store username

    // Function to handle user login
    const handleLogin = () => {
        // Perform login actions...
        setIsLoggedIn(true); // Set login status to true
        setUsername("xyz"); // Set username (replace "JohnDoe" with actual username)
    };
    const[log,setlog] = useState("Login");
    const seting= localStorage.getItem('token');
    // Function to handle user logout
    function handlelog(){
        if(log=="Login"){
            setlog("Logout");
        }
        else setlog("Login");
    }
    const handleLogout = () => {
        // Clear the token from local storage
        localStorage.removeItem('token');
        
        // Reset the login state
        setIsLoggedIn(false);
        
        // Reset the username
        setUsername("");
    
        // Change the log state to "Login"
        setlog("Login");
    };

    useEffect(() => {
        const token = localStorage.getItem('token');

        const fetchUserDetails = async () => {
            try {
                const response = await axios.post(
                    'http://localhost:3001/api/user',
                    {},
                    {
                        headers: {
                            'Authorization': `Bearer ${token}`,
                            'Content-Type': 'application/json'
                        }
                    }
                );
                console.log('Received RRR : ', response.data.username);
                setIsLoggedIn(1);
                setUsername(response.data.username);

                return response.data;
            } catch (error) {
                console.error('Error fetching user details:', error.message);
                return { username: null };
            }
        };

        if (token) {

            fetchUserDetails();
            console.log('Hello!!!');
        } else {
            console.log('Token Not Set');
        }
    }, []);



    return (
        <header className="bg-green-600">



            <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
                <div className="flex lg:flex-1">
                    <a href="/home" className="-m-1.5 p-1.5">
                        <span className="sr-only">Your Company</span>
                        <img className="h-8 w-auto" src={logo} alt="" />
                    </a>
                </div>
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-black"
                        onClick={() => setMobileMenuOpen(true)}
                    >
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                    </button>
                </div>
                <Popover.Group className="hidden lg:flex lg:gap-x-12">
                    <Popover className="relative">
                        <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-black">
                            Product
                            <ChevronDownIcon className="h-5 w-5 flex-none text-black" aria-hidden="true" />
                        </Popover.Button>

                        <Transition
                            as={Fragment}
                            enter="transition ease-out duration-200"
                            enterFrom="opacity-0 translate-y-1"
                            enterTo="opacity-100 translate-y-0"
                            leave="transition ease-in duration-150"
                            leaveFrom="opacity-100 translate-y-0"
                            leaveTo="opacity-0 translate-y-1"
                        >
                            <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                                <div className="p-4">
                                    {products.map((item) => (
                                        <div
                                            key={item.name}
                                            className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                                        >
                                            <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                                                <item.icon className="h-6 w-6 text-stone-900 group-hover:text-indigo-600" aria-hidden="true" />
                                            </div>
                                            <div className="flex-auto">
                                                <a href={item.href} className="block font-semibold text-stone-900">
                                                    {item.name}
                                                    <span className="absolute inset-0" />
                                                </a>
                                                <p className="mt-1 text-stone-900">{item.description}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                                    {callsToAction.map((item) => (
                                        <a
                                            key={item.name}
                                            href={item.href}
                                            className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100"
                                        >
                                            <item.icon className="h-5 w-5 flex-none text-stone-900" aria-hidden="true" />
                                            {item.name}
                                        </a>
                                    ))}
                                </div>
                            </Popover.Panel>
                        </Transition>
                    </Popover>

                    
                    <a href="/appointments" className="text-sm font-semibold leading-6 text-black">
                        Appointments
                    </a>
                   
                    <a href="/vetProfile" className="text-sm font-semibold leading-6 text-black">
                                    Profile
                                </a>
                </Popover.Group>
                <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                    <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                        {isLoggedIn ? ( // If user is logged in, display profile link
                            <div className=' ml-4 mr-4'>
                                
                                <button onClick={handleLogout} className="text-white ml-4 mr-4">Logout</button>
                            </div>
                        ) : ( // Otherwise, display login link
                            <a href="/centrallogin" className="text-sm font-semibold leading-6 text-white">
                                Log in
                            </a>
                        )}
                        {isLoggedIn && ( // If user is logged in, display username
                            <span className="text-sm font-semibold leading-6 text-white ml-4">Welcome, {username}</span>
                        )}
                    </div>
                </div>
            </nav>



            <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                <div className="fixed inset-0 z-10" />
                <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between">
                        <a href="#" className="-m-1.5 p-1.5">
                            <span className="sr-only">Your Company</span>
                            <img
                                className="h-8 w-auto"
                                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                                alt=""
                            />
                        </a>
                        <button
                            type="button"
                            className="-m-2.5 rounded-md p-2.5 text-stone-900"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6">
                                <Disclosure as="div" className="-mx-3">
                                    {({ open }) => (
                                        <>
                                            <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                                                Product
                                                <ChevronDownIcon
                                                    className={classNames(open ? 'rotate-180' : '', 'h-5 w-5 flex-none')}
                                                    aria-hidden="true"
                                                />
                                            </Disclosure.Button>
                                            <Disclosure.Panel className="mt-2 space-y-2">
                                                {[...products, ...callsToAction].map((item) => (
                                                    <Disclosure.Button
                                                        key={item.name}
                                                        as="a"
                                                        href={item.href}
                                                        className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-stone-900 hover:bg-gray-50"
                                                    >
                                                        {item.name}
                                                    </Disclosure.Button>
                                                ))}
                                            </Disclosure.Panel>
                                        </>
                                    )}
                                </Disclosure>
                                <a
                                    href="#"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-black hover:bg-gray-50"
                                >
                                    Features
                                </a>
                                <a
                                    href="#"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-black hover:bg-gray-50"
                                >
                                    Marketplace
                                </a>
                                <a
                                    href="/home"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-black hover:bg-gray-50"
                                >
                                    Company
                                </a>
                            </div>
                            <div className="py-6">
                                {isLoggedIn ? ( // If user is logged in, display logout link
                                    <a
                                        href="#"
                                        className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-black hover:bg-gray-50"
                                        onClick={handleLogout}
                                    >
                                        Logout
                                    </a>
                                ) : ( // Otherwise, display login link
                                    <a
                                        href="#"
                                        className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-black hover:bg-gray-50"
                                        onClick={handleLogin}
                                    >
                                        lOGIN
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                </Dialog.Panel>
            </Dialog>
        </header>
    )
}
