import React, { useState } from 'react';

const NavBar = () => {
    const [activeMenu, setActiveMenu] = useState(null);
    const [activeTab, setActiveTab] = useState(null);
    const [activeDeveloper, setActiveDeveloper] = useState(null);
    const [activeResource, setActiveResource] = useState(null);
    const [activePricing, setActivePricing] = useState(null);

    // Function to toggle the active menu and dropdown
    const toggleMenu = (menu) => {
        setActiveMenu(activeMenu === menu ? null : menu);
    };

    // Function to toggle the active tab
    const toggleTab = (tab) => {
        setActiveTab(tab === activeTab ? null : tab);
    };
    const toggleTabDevelopers = (developers) => {
        setActiveDeveloper(developers === activeDeveloper ? null : developers);
    };
    const toggleTabResource = (resource) => {
        setActiveResource(resource === activeResource ? null : resource);
    };
    const toggleTabPricing = (Pricing) => {
        setActivePricing(Pricing === activePricing ? null : Pricing);
    };

    // Function to close the dropdown when leaving the menu item
    const closeMenu = () => {
        setActiveMenu(null);
    };
    const closeMenuDevelopers = () => {
        setActiveDeveloper(null);
    };
    const closeMenuResource = () => {
        setActiveResource(null);
    };
    const closeMenuPricing = () => {
        setActivePricing(null);
    };

    return (
        <>
            <nav className="bg-gray-200">
                <div className='flex flex-row justify-around items-center py-6'>
                    {/* <div>
                        <p>
                            Logo
                        </p>
                    </div> */}
                    <div>
                        <div className="flex relative">
                            {/* Main Menu Items */}
                            <a href="/" className="menu-link text-gray-600 px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700 hover:text-white" onMouseEnter={() => toggleMenu('home')} onMouseLeave={closeMenu}>
                                Product
                                {/* Dropdown Content */}
                                {activeMenu === 'home' && (
                                    <div className="absolute left-0 mt-2 py-2 w-auto-custom bg-white shadow-xl rounded-md z-10 duration-500 flex">
                                        <div className="flex border-b border-gray-200 flex-col">
                                            <button className={`py-2 text-sm text-black border-b-2 ${activeTab === 'tab1' ? 'border-blue-500' : 'border-transparent'} focus:outline-none`} onMouseEnter={() => toggleTab('tab1')}>

                                                <div className='flex flex-col justify-start items-start'>
                                                    <p className='text-black pl-4'>Global Payments</p> <p className=' text-gray-400 text-start pl-4'>
                                                        Accept payments online, In person, or through your platform</p>
                                                </div>                                                 </button>
                                            <button className={` py-2 text-sm text-black border-b-2 ${activeTab === 'tab2' ? 'border-blue-500' : 'border-transparent'} focus:outline-none`} onMouseEnter={() => toggleTab('tab2')}><div className='flex flex-col justify-start items-start'>
                                                <p className='text-black pl-4'>Revenu and finance automation</p> <p className=' text-gray-400 text-start pl-4'>
                                                    Accept payments online, In person, or through your platform</p>
                                            </div></button>
                                            <button className={` py-2 text-sm text-black border-b-2 ${activeTab === 'tab3' ? 'border-blue-500' : 'border-transparent'} focus:outline-none`} onMouseEnter={() => toggleTab('tab3')}>
                                                <div className='flex flex-col justify-start items-start'>
                                                    <p className='text-black pl-4'>Banking-as-a-service</p> <p className=' text-gray-400 text-start pl-4'>
                                                        Accept payments online, In person, or through your platform</p>
                                                </div>
                                            </button>
                                        </div>
                                        <div className="mt-2">
                                            {/* Content for Tab 1 */}
                                            <div className={`py-2 px-4 ${activeTab === 'tab1' ? '' : 'hidden'}`}>
                                                <div className='flex flex-col gap-y-4'>
                                                    <div className='flex items-center justify-around w-96'>
                                                        <div className='flex items-baseline'>
                                                            <div>
                                                                <i class="fa fa-rocket text-blue-300 text-lg" aria-hidden="true"></i>
                                                            </div>
                                                            <div className='pl-4'>
                                                                <p className=' text-gray-900 text-base'>Payments</p>
                                                                <p className=' text-gray-500'>Online Payments</p>
                                                            </div>
                                                        </div>
                                                        <div className='flex items-baseline'>
                                                            <div>
                                                                <i class="fa fa-rocket text-blue-300 text-lg" aria-hidden="true"></i>
                                                            </div>
                                                            <div className='pl-4'>
                                                                <p className=' text-gray-900 text-base'>Payments</p>
                                                                <p className=' text-gray-500'>Online Payments</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className='flex items-center justify-around w-96'>
                                                        <div className='flex items-baseline'>
                                                            <div>
                                                                <i class="fa fa-rocket text-blue-300 text-lg" aria-hidden="true"></i>
                                                            </div>
                                                            <div className='pl-4'>
                                                                <p className=' text-gray-900 text-base'>Payments</p>
                                                                <p className=' text-gray-500'>Online Payments</p>
                                                            </div>
                                                        </div>
                                                        <div className='flex items-baseline'>
                                                            <div>
                                                                <i class="fa fa-rocket text-blue-300 text-lg" aria-hidden="true"></i>
                                                            </div>
                                                            <div className='pl-4'>
                                                                <p className=' text-gray-900 text-base'>Payments</p>
                                                                <p className=' text-gray-500'>Online Payments</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className='flex items-center justify-around w-96'>
                                                        <div className='flex items-baseline'>
                                                            <div>
                                                                <i class="fa fa-rocket text-blue-300 text-lg" aria-hidden="true"></i>
                                                            </div>
                                                            <div className='pl-4'>
                                                                <p className=' text-gray-900 text-base'>Payments</p>
                                                                <p className=' text-gray-500'>Online Payments</p>
                                                            </div>
                                                        </div>
                                                        <div className='flex items-baseline'>
                                                            <div>
                                                                <i class="fa fa-rocket text-blue-300 text-lg" aria-hidden="true"></i>
                                                            </div>
                                                            <div className='pl-4'>
                                                                <p className=' text-gray-900 text-base'>Payments</p>
                                                                <p className=' text-gray-500'>Online Payments</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className='flex items-center justify-around w-96'>
                                                        <div className='flex items-baseline'>
                                                            <div>
                                                                <i class="fa fa-rocket text-blue-300 text-lg" aria-hidden="true"></i>
                                                            </div>
                                                            <div className='pl-4'>
                                                                <p className=' text-gray-900 text-base'>Payments</p>
                                                                <p className=' text-gray-500'>Online Payments</p>
                                                            </div>
                                                        </div>
                                                        <div className='flex items-baseline'>
                                                            <div>
                                                                <i class="fa fa-rocket text-blue-300 text-lg" aria-hidden="true"></i>
                                                            </div>
                                                            <div className='pl-4'>
                                                                <p className=' text-gray-900 text-base'>Payments</p>
                                                                <p className=' text-gray-500'>Online Payments</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className='flex items-center justify-around w-96'>
                                                        <div className='flex items-baseline'>
                                                            <div>
                                                                <i class="fa fa-rocket text-blue-300 text-lg" aria-hidden="true"></i>
                                                            </div>
                                                            <div className='pl-4'>
                                                                <p className=' text-gray-900 text-base'>Payments</p>
                                                                <p className=' text-gray-500'>Online Payments</p>
                                                            </div>
                                                        </div>
                                                        <div className='flex items-baseline'>
                                                            <div>
                                                                <i class="fa fa-rocket text-blue-300 text-lg" aria-hidden="true"></i>
                                                            </div>
                                                            <div className='pl-4'>
                                                                <p className=' text-gray-900 text-base'>Payments</p>
                                                                <p className=' text-gray-500'>Online Payments</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className='flex items-center justify-around w-96'>
                                                        <div className='flex items-baseline'>
                                                            <div>
                                                                <i class="fa fa-rocket text-blue-300 text-lg" aria-hidden="true"></i>
                                                            </div>
                                                            <div className='pl-4'>
                                                                <p className=' text-gray-900 text-base'>Payments</p>
                                                                <p className=' text-gray-500'>Online Payments</p>
                                                            </div>
                                                        </div>
                                                        <div className='flex items-baseline'>
                                                            <div>
                                                                <i class="fa fa-rocket text-blue-300 text-lg" aria-hidden="true"></i>
                                                            </div>
                                                            <div className='pl-4'>
                                                                <p className=' text-gray-900 text-base'>Payments</p>
                                                                <p className=' text-gray-500'>Online Payments</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* Content for Tab 2 */}
                                            <div className={`py-2 px-4 ${activeTab === 'tab2' ? '' : 'hidden'}`}>
                                                <div className='flex flex-col gap-y-4'>

                                                    <div className='flex items-center justify-around w-96'>

                                                        <div className='flex items-baseline'>
                                                            <div>
                                                                <i class="fa fa-rocket text-blue-300 text-lg" aria-hidden="true"></i>
                                                            </div>
                                                            <div className='pl-4'>
                                                                <p className=' text-gray-900 text-base'>Payments</p>
                                                                <p className=' text-gray-500'>Online Payments</p>
                                                            </div>
                                                        </div>
                                                        <div className='flex items-baseline'>
                                                            <div>
                                                                <i class="fa fa-rocket text-blue-300 text-lg" aria-hidden="true"></i>
                                                            </div>
                                                            <div className='pl-4'>
                                                                <p className=' text-gray-900 text-base'>Payments</p>
                                                                <p className=' text-gray-500'>Online Payments</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className='flex items-center justify-around w-96'>
                                                        <div className='flex items-baseline'>
                                                            <div>
                                                                <i class="fa fa-rocket text-blue-300 text-lg" aria-hidden="true"></i>
                                                            </div>
                                                            <div className='pl-4'>
                                                                <p className=' text-gray-900 text-base'>Payments</p>
                                                                <p className=' text-gray-500'>Online Payments</p>
                                                            </div>
                                                        </div>
                                                        <div className='flex items-baseline'>
                                                            <div>
                                                                <i class="fa fa-rocket text-blue-300 text-lg" aria-hidden="true"></i>
                                                            </div>
                                                            <div className='pl-4'>
                                                                <p className=' text-gray-900 text-base'>Payments</p>
                                                                <p className=' text-gray-500'>Online Payments</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className='flex items-center justify-around w-96'>
                                                        <div className='flex items-baseline'>
                                                            <div>
                                                                <i class="fa fa-rocket text-blue-300 text-lg" aria-hidden="true"></i>
                                                            </div>
                                                            <div className='pl-4'>
                                                                <p className=' text-gray-900 text-base'>Payments</p>
                                                                <p className=' text-gray-500'>Online Payments</p>
                                                            </div>
                                                        </div>
                                                        <div className='flex items-baseline'>
                                                            <div>
                                                                <i class="fa fa-rocket text-blue-300 text-lg" aria-hidden="true"></i>
                                                            </div>
                                                            <div className='pl-4'>
                                                                <p className=' text-gray-900 text-base'>Payments</p>
                                                                <p className=' text-gray-500'>Online Payments</p>
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                            {/* Content for Tab 3 */}
                                            <div className={`py-2 px-4 ${activeTab === 'tab3' ? '' : 'hidden'}`}>
                                                <div className='flex flex-col gap-y-4'>

                                                    <div className='flex items-center justify-around w-96'>
                                                        <div className='flex items-baseline'>
                                                            <div>
                                                                <i class="fa fa-rocket text-blue-300 text-lg" aria-hidden="true"></i>
                                                            </div>
                                                            <div className='pl-4'>
                                                                <p className=' text-gray-900 text-base'>Payments</p>
                                                                <p className=' text-gray-500'>Online Payments</p>
                                                            </div>
                                                        </div>
                                                        <div className='flex items-baseline'>
                                                            <div>
                                                                <i class="fa fa-rocket text-blue-300 text-lg" aria-hidden="true"></i>
                                                            </div>
                                                            <div className='pl-4'>
                                                                <p className=' text-gray-900 text-base'>Payments</p>
                                                                <p className=' text-gray-500'>Online Payments</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className='flex items-center justify-around w-96'>
                                                        <div className='flex items-baseline'>
                                                            <div>
                                                                <i class="fa fa-rocket text-blue-300 text-lg" aria-hidden="true"></i>
                                                            </div>
                                                            <div className='pl-4'>
                                                                <p className=' text-gray-900 text-base'>Payments</p>
                                                                <p className=' text-gray-500'>Online Payments</p>
                                                            </div>
                                                        </div>
                                                        <div className='flex items-baseline'>
                                                            <div>
                                                                <i class="fa fa-rocket text-blue-300 text-lg" aria-hidden="true"></i>
                                                            </div>
                                                            <div className='pl-4'>
                                                                <p className=' text-gray-900 text-base'>Payments</p>
                                                                <p className=' text-gray-500'>Online Payments</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className='flex items-center justify-around w-96'>
                                                        <div className='flex items-baseline'>
                                                            <div>
                                                                <i class="fa fa-rocket text-blue-300 text-lg" aria-hidden="true"></i>
                                                            </div>
                                                            <div className='pl-4'>
                                                                <p className=' text-gray-900 text-base'>Payments</p>
                                                                <p className=' text-gray-500'>Online Payments</p>
                                                            </div>
                                                        </div>
                                                        <div className='flex items-baseline'>
                                                            <div>
                                                                <i class="fa fa-rocket text-blue-300 text-lg" aria-hidden="true"></i>
                                                            </div>
                                                            <div className='pl-4'>
                                                                <p className=' text-gray-900 text-base'>Payments</p>
                                                                <p className=' text-gray-500'>Online Payments</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className='flex items-center justify-around w-96'>
                                                        <div className='flex items-baseline'>
                                                            <div>
                                                                <i class="fa fa-rocket text-blue-300 text-lg" aria-hidden="true"></i>
                                                            </div>
                                                            <div className='pl-4'>
                                                                <p className=' text-gray-900 text-base'>Payments</p>
                                                                <p className=' text-gray-500'>Online Payments</p>
                                                            </div>
                                                        </div>
                                                        <div className='flex items-baseline'>
                                                            <div>
                                                                <i class="fa fa-rocket text-blue-300 text-lg" aria-hidden="true"></i>
                                                            </div>
                                                            <div className='pl-4'>
                                                                <p className=' text-gray-900 text-base'>Payments</p>
                                                                <p className=' text-gray-500'>Online Payments</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className='flex items-center justify-around w-96'>
                                                        <div className='flex items-baseline'>
                                                            <div>
                                                                <i class="fa fa-rocket text-blue-300 text-lg" aria-hidden="true"></i>
                                                            </div>
                                                            <div className='pl-4'>
                                                                <p className=' text-gray-900 text-base'>Payments</p>
                                                                <p className=' text-gray-500'>Online Payments</p>
                                                            </div>
                                                        </div>
                                                        <div className='flex items-baseline'>
                                                            <div>
                                                                <i class="fa fa-rocket text-blue-300 text-lg" aria-hidden="true"></i>
                                                            </div>
                                                            <div className='pl-4'>
                                                                <p className=' text-gray-900 text-base'>Payments</p>
                                                                <p className=' text-gray-500'>Online Payments</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className='flex items-center justify-around w-96'>
                                                        <div className='flex items-baseline'>
                                                            <div>
                                                                <i class="fa fa-rocket text-blue-300 text-lg" aria-hidden="true"></i>
                                                            </div>
                                                            <div className='pl-4'>
                                                                <p className=' text-gray-900 text-base'>Payments</p>
                                                                <p className=' text-gray-500'>Online Payments</p>
                                                            </div>
                                                        </div>
                                                        <div className='flex items-baseline'>
                                                            <div>
                                                                <i class="fa fa-rocket text-blue-300 text-lg" aria-hidden="true"></i>
                                                            </div>
                                                            <div className='pl-4'>
                                                                <p className=' text-gray-900 text-base'>Payments</p>
                                                                <p className=' text-gray-500'>Online Payments</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </a>
                            <a href="/" className="menu-link text-gray-600 px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700 hover:text-white" onMouseEnter={() => toggleMenu('about')} onMouseLeave={closeMenu}>
                                Solutions
                                {/* Dropdown Content */}
                                {activeMenu === 'about' && (
                                    <div className="absolute left-0 mt-2 py-2 w-auto-custom-two bg-white shadow-xl rounded-md z-10 duration-500 flex justify-center items-center">
                                        <div className="mt-2">
                                            <div className='flex flex-col gap-y-4'>

                                                <div className='flex flex-col items-baseline justify-around w-96'>
                                                    <div>
                                                        <p className=' text-gray-500'>
                                                            BY STAGE
                                                        </p>
                                                    </div>
                                                    <div className='flex items-center justify-between w-96 mt-3'>
                                                        <div className='flex items-baseline'>
                                                            <div>
                                                                <i class="fa fa-rocket text-blue-300 text-lg" aria-hidden="true"></i>
                                                            </div>
                                                            <div className='pl-4'>
                                                                <p className=' text-gray-700 text-base'>Start-ups</p>
                                                            </div>
                                                        </div>
                                                        <div className='flex items-baseline'>
                                                            <div>
                                                                <i class="fa fa-rocket text-blue-300 text-lg" aria-hidden="true"></i>
                                                            </div>
                                                            <div className='pl-4'>
                                                                <p className=' text-gray-700 text-base'>Enterprise</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className='flex flex-col items-baseline justify-around w-96'>
                                                    <div>
                                                        <p className=' text-gray-500'>
                                                            BY USE CASE
                                                        </p>
                                                    </div>
                                                    <div className='flex items-center justify-between w-96 mt-3'>
                                                        <div className='flex items-baseline'>
                                                            <div>
                                                                <i class="fa fa-rocket text-blue-300 text-lg" aria-hidden="true"></i>
                                                            </div>
                                                            <div className='pl-4'>
                                                                <p className=' text-gray-700 text-base'>SaaS</p>
                                                            </div>
                                                        </div>
                                                        <div className='flex items-baseline'>
                                                            <div>
                                                                <i class="fa fa-rocket text-blue-300 text-lg" aria-hidden="true"></i>
                                                            </div>
                                                            <div className='pl-4'>
                                                                <p className=' text-gray-700 text-base'>Economy</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className='flex items-center justify-between w-96 mt-2'>
                                                        <div className='flex items-baseline'>
                                                            <div>
                                                                <i class="fa fa-rocket text-blue-300 text-lg" aria-hidden="true"></i>
                                                            </div>
                                                            <div className='pl-4'>
                                                                <p className=' text-gray-700 text-base'>Economy</p>
                                                            </div>
                                                        </div>
                                                        <div className='flex items-baseline'>
                                                            <div>
                                                                <i class="fa fa-rocket text-blue-300 text-lg" aria-hidden="true"></i>
                                                            </div>
                                                            <div className='pl-4'>
                                                                <p className=' text-gray-700 text-base'>Economy</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className='flex items-center justify-between w-96 mt-2'>
                                                        <div className='flex items-baseline'>
                                                            <div>
                                                                <i class="fa fa-rocket text-blue-300 text-lg" aria-hidden="true"></i>
                                                            </div>
                                                            <div className='pl-4'>
                                                                <p className=' text-gray-700 text-base'>Economy</p>
                                                            </div>
                                                        </div>
                                                        <div className='flex items-baseline'>
                                                            <div>
                                                                <i class="fa fa-rocket text-blue-300 text-lg" aria-hidden="true"></i>
                                                            </div>
                                                            <div className='pl-4'>
                                                                <p className=' text-gray-700 text-base'>Economy</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className='flex items-center justify-between w-96 mt-2'>
                                                        <div className='flex items-baseline'>
                                                            <div>
                                                                <i class="fa fa-rocket text-blue-300 text-lg" aria-hidden="true"></i>
                                                            </div>
                                                            <div className='pl-4'>
                                                                <p className=' text-gray-700 text-base'>Economy</p>
                                                            </div>
                                                        </div>
                                                        <div className='flex items-baseline'>
                                                            <div>
                                                                <i class="fa fa-rocket text-blue-300 text-lg" aria-hidden="true"></i>
                                                            </div>
                                                            <div className='pl-4'>
                                                                <p className=' text-gray-700 text-base'>Economy</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className='flex items-center justify-between w-96 mt-2'>
                                                        <div className='flex items-baseline'>
                                                            <div>
                                                                <i class="fa fa-rocket text-blue-300 text-lg" aria-hidden="true"></i>
                                                            </div>
                                                            <div className='pl-4'>
                                                                <p className=' text-gray-700 text-base'>Economy</p>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>

                                                <div className='flex flex-col items-baseline justify-around w-96'>
                                                    <div>
                                                        <p className=' text-gray-500'>
                                                            INTEGRATIONS & CUSTOM SOLUTIONS
                                                        </p>
                                                    </div>
                                                    <div className='flex items-center justify-between w-96 mt-3'>
                                                        <div className='flex items-baseline'>
                                                            <div>
                                                                <i class="fa fa-rocket text-blue-300 text-lg" aria-hidden="true"></i>
                                                            </div>
                                                            <div className='pl-4'>
                                                                <p className=' text-gray-700 text-base'>SaaS</p>
                                                            </div>
                                                        </div>
                                                        <div className='flex items-baseline'>
                                                            <div>
                                                                <i class="fa fa-rocket text-blue-300 text-lg" aria-hidden="true"></i>
                                                            </div>
                                                            <div className='pl-4'>
                                                                <p className=' text-gray-700 text-base'>Economy</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className='flex items-center justify-between w-96 mt-2'>
                                                        <div className='flex items-baseline'>
                                                            <div>
                                                                <i class="fa fa-rocket text-blue-300 text-lg" aria-hidden="true"></i>
                                                            </div>
                                                            <div className='pl-4'>
                                                                <p className=' text-gray-700 text-base'>Economy</p>
                                                            </div>
                                                        </div>
                                                        <div className='flex items-baseline'>
                                                            <div>
                                                                <i class="fa fa-rocket text-blue-300 text-lg" aria-hidden="true"></i>
                                                            </div>
                                                            <div className='pl-4'>
                                                                <p className=' text-gray-700 text-base'>Economy</p>
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                )}
                            </a>

                            {/* .........Developer....... */}

                            <a href="/" className="menu-link text-gray-600 px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700 hover:text-white" onMouseEnter={() => toggleTabDevelopers('developers')} onMouseLeave={closeMenuDevelopers}>
                                Developers
                                {/* Dropdown Content */}
                                {activeDeveloper === 'developers' && (
                                    <div className="absolute left-0 mt-2 py-2 w-auto-custom-two bg-white shadow-xl rounded-md z-10 duration-500 flex justify-center items-center">
                                        <div className="mt-2">
                                            <div className='flex flex-col gap-y-4'>

                                                <div className='flex flex-col items-baseline justify-around w-96'>
                                                    <div>
                                                        <p className=' text-gray-500'>
                                                            Developers
                                                        </p>
                                                    </div>
                                                    <div className='flex items-center justify-between w-96 mt-3'>
                                                        <div className='flex items-baseline'>
                                                            <div>
                                                                <i class="fa fa-rocket text-blue-300 text-lg" aria-hidden="true"></i>
                                                            </div>
                                                            <div className='pl-4'>
                                                                <p className=' text-gray-700 text-base'>Start-ups</p>
                                                            </div>
                                                        </div>
                                                        <div className='flex items-baseline'>
                                                            <div>
                                                                <i class="fa fa-rocket text-blue-300 text-lg" aria-hidden="true"></i>
                                                            </div>
                                                            <div className='pl-4'>
                                                                <p className=' text-gray-700 text-base'>Enterprise</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className='flex flex-col items-baseline justify-around w-96'>
                                                    <div>
                                                        <p className=' text-gray-500'>
                                                            BY USE CASE
                                                        </p>
                                                    </div>
                                                    <div className='flex items-center justify-between w-96 mt-3'>
                                                        <div className='flex items-baseline'>
                                                            <div>
                                                                <i class="fa fa-rocket text-blue-300 text-lg" aria-hidden="true"></i>
                                                            </div>
                                                            <div className='pl-4'>
                                                                <p className=' text-gray-700 text-base'>SaaS</p>
                                                            </div>
                                                        </div>
                                                        <div className='flex items-baseline'>
                                                            <div>
                                                                <i class="fa fa-rocket text-blue-300 text-lg" aria-hidden="true"></i>
                                                            </div>
                                                            <div className='pl-4'>
                                                                <p className=' text-gray-700 text-base'>Economy</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className='flex items-center justify-between w-96 mt-2'>
                                                        <div className='flex items-baseline'>
                                                            <div>
                                                                <i class="fa fa-rocket text-blue-300 text-lg" aria-hidden="true"></i>
                                                            </div>
                                                            <div className='pl-4'>
                                                                <p className=' text-gray-700 text-base'>Economy</p>
                                                            </div>
                                                        </div>
                                                        <div className='flex items-baseline'>
                                                            <div>
                                                                <i class="fa fa-rocket text-blue-300 text-lg" aria-hidden="true"></i>
                                                            </div>
                                                            <div className='pl-4'>
                                                                <p className=' text-gray-700 text-base'>Economy</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className='flex items-center justify-between w-96 mt-2'>
                                                        <div className='flex items-baseline'>
                                                            <div>
                                                                <i class="fa fa-rocket text-blue-300 text-lg" aria-hidden="true"></i>
                                                            </div>
                                                            <div className='pl-4'>
                                                                <p className=' text-gray-700 text-base'>Economy</p>
                                                            </div>
                                                        </div>
                                                        <div className='flex items-baseline'>
                                                            <div>
                                                                <i class="fa fa-rocket text-blue-300 text-lg" aria-hidden="true"></i>
                                                            </div>
                                                            <div className='pl-4'>
                                                                <p className=' text-gray-700 text-base'>Economy</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className='flex items-center justify-between w-96 mt-2'>
                                                        <div className='flex items-baseline'>
                                                            <div>
                                                                <i class="fa fa-rocket text-blue-300 text-lg" aria-hidden="true"></i>
                                                            </div>
                                                            <div className='pl-4'>
                                                                <p className=' text-gray-700 text-base'>Economy</p>
                                                            </div>
                                                        </div>
                                                        <div className='flex items-baseline'>
                                                            <div>
                                                                <i class="fa fa-rocket text-blue-300 text-lg" aria-hidden="true"></i>
                                                            </div>
                                                            <div className='pl-4'>
                                                                <p className=' text-gray-700 text-base'>Economy</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className='flex items-center justify-between w-96 mt-2'>
                                                        <div className='flex items-baseline'>
                                                            <div>
                                                                <i class="fa fa-rocket text-blue-300 text-lg" aria-hidden="true"></i>
                                                            </div>
                                                            <div className='pl-4'>
                                                                <p className=' text-gray-700 text-base'>Economy</p>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </a>

                            {/* .........Resource....... */}

                            <a href="/" className="menu-link text-gray-600 px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700 hover:text-white" onMouseEnter={() => toggleTabResource('resource')} onMouseLeave={closeMenuResource}>
                                Resources
                                {/* Dropdown Content */}
                                {activeResource === 'resource' && (
                                    <div className="absolute left-0 mt-2 py-2 w-auto-custom-two bg-white shadow-xl rounded-md z-10 duration-500 flex justify-center items-center">
                                        <div className="mt-2">
                                            <div className='flex flex-col gap-y-4'>

                                                <div className='flex flex-col items-baseline justify-around w-96'>
                                                    <div>
                                                        <p className=' text-gray-500'>
                                                            Resource
                                                        </p>
                                                    </div>
                                                    <div className='flex items-center justify-between w-96 mt-3'>
                                                        <div className='flex items-baseline'>
                                                            <div>
                                                                <i class="fa fa-rocket text-blue-300 text-lg" aria-hidden="true"></i>
                                                            </div>
                                                            <div className='pl-4'>
                                                                <p className=' text-gray-700 text-base'>Start-ups</p>
                                                            </div>
                                                        </div>
                                                        <div className='flex items-baseline'>
                                                            <div>
                                                                <i class="fa fa-rocket text-blue-300 text-lg" aria-hidden="true"></i>
                                                            </div>
                                                            <div className='pl-4'>
                                                                <p className=' text-gray-700 text-base'>Enterprise</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className='flex flex-col items-baseline justify-around w-96'>
                                                    <div>
                                                        <p className=' text-gray-500'>
                                                            Resource
                                                        </p>
                                                    </div>
                                                    <div className='flex items-center justify-between w-96 mt-3'>
                                                        <div className='flex items-baseline'>
                                                            <div>
                                                                <i class="fa fa-rocket text-blue-300 text-lg" aria-hidden="true"></i>
                                                            </div>
                                                            <div className='pl-4'>
                                                                <p className=' text-gray-700 text-base'>Resource</p>
                                                            </div>
                                                        </div>
                                                        <div className='flex items-baseline'>
                                                            <div>
                                                                <i class="fa fa-rocket text-blue-300 text-lg" aria-hidden="true"></i>
                                                            </div>
                                                            <div className='pl-4'>
                                                                <p className=' text-gray-700 text-base'>Resource</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className='flex items-center justify-between w-96 mt-2'>
                                                        <div className='flex items-baseline'>
                                                            <div>
                                                                <i class="fa fa-rocket text-blue-300 text-lg" aria-hidden="true"></i>
                                                            </div>
                                                            <div className='pl-4'>
                                                                <p className=' text-gray-700 text-base'>Resource</p>
                                                            </div>
                                                        </div>
                                                        <div className='flex items-baseline'>
                                                            <div>
                                                                <i class="fa fa-rocket text-blue-300 text-lg" aria-hidden="true"></i>
                                                            </div>
                                                            <div className='pl-4'>
                                                                <p className=' text-gray-700 text-base'>Resource</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className='flex items-center justify-between w-96 mt-2'>
                                                        <div className='flex items-baseline'>
                                                            <div>
                                                                <i class="fa fa-rocket text-blue-300 text-lg" aria-hidden="true"></i>
                                                            </div>
                                                            <div className='pl-4'>
                                                                <p className=' text-gray-700 text-base'>Economy</p>
                                                            </div>
                                                        </div>
                                                        <div className='flex items-baseline'>
                                                            <div>
                                                                <i class="fa fa-rocket text-blue-300 text-lg" aria-hidden="true"></i>
                                                            </div>
                                                            <div className='pl-4'>
                                                                <p className=' text-gray-700 text-base'>Economy</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className='flex items-center justify-between w-96 mt-2'>
                                                        <div className='flex items-baseline'>
                                                            <div>
                                                                <i class="fa fa-rocket text-blue-300 text-lg" aria-hidden="true"></i>
                                                            </div>
                                                            <div className='pl-4'>
                                                                <p className=' text-gray-700 text-base'>Economy</p>
                                                            </div>
                                                        </div>
                                                        <div className='flex items-baseline'>
                                                            <div>
                                                                <i class="fa fa-rocket text-blue-300 text-lg" aria-hidden="true"></i>
                                                            </div>
                                                            <div className='pl-4'>
                                                                <p className=' text-gray-700 text-base'>Economy</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className='flex items-center justify-between w-96 mt-2'>
                                                        <div className='flex items-baseline'>
                                                            <div>
                                                                <i class="fa fa-rocket text-blue-300 text-lg" aria-hidden="true"></i>
                                                            </div>
                                                            <div className='pl-4'>
                                                                <p className=' text-gray-700 text-base'>Economy</p>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </a>

                            {/* .........Pricing....... */}

                            <a href="/" className="menu-link text-gray-600 px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700 hover:text-white" onMouseEnter={() => toggleTabPricing('Pricing')} onMouseLeave={closeMenuPricing}>
                                Pricing
                                {/* Dropdown Content */}
                                {activePricing === 'Pricing' && (
                                    <div className="absolute left-0 mt-2 py-2 w-auto-custom-two bg-white shadow-xl rounded-md z-10 duration-500 flex justify-center items-center">
                                        <div className="mt-2">
                                            <div className='flex flex-col gap-y-4'>

                                                <div className='flex flex-col items-baseline justify-around w-96'>
                                                    <div>
                                                        <p className=' text-gray-500'>
                                                            Pricing
                                                        </p>
                                                    </div>
                                                    <div className='flex items-center justify-between w-96 mt-3'>
                                                        <div className='flex items-baseline'>
                                                            <div>
                                                                <i class="fa fa-rocket text-blue-300 text-lg" aria-hidden="true"></i>
                                                            </div>
                                                            <div className='pl-4'>
                                                                <p className=' text-gray-700 text-base'>Start-ups</p>
                                                            </div>
                                                        </div>
                                                        <div className='flex items-baseline'>
                                                            <div>
                                                                <i class="fa fa-rocket text-blue-300 text-lg" aria-hidden="true"></i>
                                                            </div>
                                                            <div className='pl-4'>
                                                                <p className=' text-gray-700 text-base'>Enterprise</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className='flex flex-col items-baseline justify-around w-96'>
                                                    <div>
                                                        <p className=' text-gray-500'>
                                                            Pricing
                                                        </p>
                                                    </div>
                                                    <div className='flex items-center justify-between w-96 mt-3'>
                                                        <div className='flex items-baseline'>
                                                            <div>
                                                                <i class="fa fa-rocket text-blue-300 text-lg" aria-hidden="true"></i>
                                                            </div>
                                                            <div className='pl-4'>
                                                                <p className=' text-gray-700 text-base'>Start-ups</p>
                                                            </div>
                                                        </div>
                                                        <div className='flex items-baseline'>
                                                            <div>
                                                                <i class="fa fa-rocket text-blue-300 text-lg" aria-hidden="true"></i>
                                                            </div>
                                                            <div className='pl-4'>
                                                                <p className=' text-gray-700 text-base'>Enterprise</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </a>
                        </div>
                    </div>
                    <div>
                        <button className="bg-blue-600 text-white px-4 py-1 rounded-md border-white">
                            Sign in
                        </button>
                    </div>
                </div>
            </nav>
            {/* .......section......... */}
            <section className='new_section'>
                <div className='w-full h-96 bg-white'>
                    <p className='flex h-96 justify-center items-center'>
                        Show hover effect
                    </p>
                </div>
            </section>
        </>
    );
};

export default NavBar;
