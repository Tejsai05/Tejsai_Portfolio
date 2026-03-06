import { useEffect, useRef } from 'react'

export default function Navbar() {
    const sideMenuRef = useRef();
    const navRef = useRef();
    const navLinkRef = useRef();

    const openMenu = () => {
        sideMenuRef.current.style.transform = 'translateX(-16rem)';
    }
    const closeMenu = () => {
        sideMenuRef.current.style.transform = 'translateX(16rem)';
    }

    useEffect(() => {

        // Keep a consistent navbar style across all sections.
    }, [])

    return (
        <>
            <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] dark:hidden">
                <img src="./assets/header-bg-color.png" alt="" className="w-full" />
            </div>

            <nav ref={navRef} className="w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 bg-black/30 backdrop-blur-md border-b border-white/10">

                <a href="#!">
                    <img src="/assets/Untitled (1).png" alt="Logo" className="w-28 cursor-pointer mr-14" />
                </a>

                <ul ref={navLinkRef} className="hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 font-Ovo border border-white/10 bg-black/30 backdrop-blur-md shadow-[0_8px_30px_rgba(0,0,0,0.25)]">
                    <li><a className='hover:text-gray-500 dark:hover:text-gray-300 transition' href="#top">Home</a></li>
                    <li><a className='hover:text-gray-500 dark:hover:text-gray-300 transition' href="#about">About me</a></li>
                    <li><a className='hover:text-gray-500 dark:hover:text-gray-300 transition' href="#work">My Work</a></li>
                    <li><a className='hover:text-gray-500 dark:hover:text-gray-300 transition' href="#profiles">Profiles</a></li>
                    <li><a className='hover:text-gray-500 dark:hover:text-gray-300 transition' href="#certifications">Certifications</a></li>
                    <li><a className='hover:text-gray-500 dark:hover:text-gray-300 transition' href="#contact">Contact me</a></li>
                </ul>

                <div className="flex items-center gap-4">
                    <a href="#contact" className="hidden lg:flex items-center gap-3 px-8 py-1.5 border border-white/15 bg-black/30 backdrop-blur-md hover:bg-black/40 rounded-full ml-4 font-Ovo">
                        Contact
                        <img src="./assets/arrow-icon.png" alt="" className="w-3 dark:hidden" />
                        <img src="./assets/arrow-icon-dark.png" alt="" className="w-3 hidden dark:block" />
                    </a>

                    <button className="block md:hidden ml-3" onClick={openMenu}>
                        <img src="./assets/menu-black.png" alt="" className="w-6 dark:hidden" />
                        <img src="./assets/menu-white.png" alt="" className="w-6 hidden dark:block" />
                    </button>

                </div>
                {/* -- ----- mobile menu ------  -- */}
                <ul ref={sideMenuRef} className="flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500 font-Ovo dark:bg-darkHover dark:text-white">

                    <div className="absolute right-6 top-6" onClick={closeMenu}>
                        <img src="./assets/close-black.png" alt="" className="w-5 cursor-pointer dark:hidden" />
                        <img src="./assets/close-white.png" alt="" className="w-5 cursor-pointer hidden dark:block" />
                    </div>

                    <li><a href="#top" onClick={closeMenu}>Home</a></li>
                    <li><a href="#about" onClick={closeMenu}>About me</a></li>
                    <li><a href="#work" onClick={closeMenu}>My Work</a></li>
                    <li><a href="#profiles" onClick={closeMenu}>Profiles</a></li>
                    <li><a href="#certifications" onClick={closeMenu}>Certifications</a></li>
                    <li><a href="#contact" onClick={closeMenu}>Contact me</a></li>
                </ul>
            </nav>
        </>
    )
}