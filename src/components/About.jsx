import { useMemo, useState } from 'react'

export default function About() {
    const socialLinks = [
        { name: 'GitHub', icon: './assets/Github_Logo.png', url: 'https://github.com/tejsai05' },
        { name: 'LinkedIn', icon: './assets/Linkedin_Logo.png', url: 'https://www.linkedin.com/in/tejsai-mylavarapu-84a460303/' },
    ];

    const data = [
        {
            name: 'Proficency in Programming Languages',
            icon1: './assets/code-icon.png',
            icon2: './assets/code-icon-dark.png',
            description: 'Java,Python,Javascript',
        },
        {
            name: 'Education',
            icon1: './assets/edu-icon.png',
            icon2: './assets/edu-icon-dark.png',
            description: 'B.Tech in Computer Science Specalizing in Artificial Intelligence  Machine Learning at Mallareddy University',
        },
        {
            name: 'Projects',
            icon1: './assets/project-icon.png',
            icon2: './assets/project-icon-dark.png',
            description: 'Worked on various domains ',
        },
    ];
    const [bgPos, setBgPos] = useState({ x: 50, y: 50 })

    const handleMouseMove = (event) => {
        const rect = event.currentTarget.getBoundingClientRect()
        const x = ((event.clientX - rect.left) / rect.width) * 100
        const y = ((event.clientY - rect.top) / rect.height) * 100
        setBgPos({ x, y })
    }

    const handleMouseLeave = () => setBgPos({ x: 50, y: 50 })

    const backgroundStyle = useMemo(() => ({
        backgroundImage: "linear-gradient(rgba(5, 6, 12, 0.35), rgba(5, 6, 12, 0.55)), url('/assets/pexels-jaymantri-5439.jpg')",
        backgroundSize: '130% 130%',
        backgroundPosition: `${bgPos.x}% ${bgPos.y}%`,
        filter: 'saturate(1.1)',
    }), [bgPos])

    return (
        <div
            id="about"
            className="w-full px-[12%] py-20 scroll-mt-20 rounded-3xl bg-no-repeat bg-cover bg-center bg-fixed transition-[background-position] duration-300"
            style={backgroundStyle}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            <h4 className="text-center mb-2 text-lg font-Ovo">Introduction</h4>
            <h2 className="text-center text-5xl font-Ovo">About me</h2>

            <div className="flex w-full flex-col lg:flex-row items-center gap-20 my-20">
                <div className="flex-1 order-2 lg:order-1">
                    <p className="mb-10 max-w-4xl font-Ovo text-lg leading-relaxed">
                        Project-driven <span className="font-bold text-purple-400">AI and Software Engineering</span> student with hands-on experience in building <span className="font-bold text-purple-400">AI-powered and backend-driven applications</span>. Strong foundation in <span className="font-bold text-purple-400">Data Structures & Algorithms (DSA), Object-Oriented Programming (OOP)</span>, backend development, machine learning, Large Language Models, REST APIs. Experienced in integrating third-party APIs and developing production-ready solutions.
                        <br /><br />
                        Currently a pre-final year <span className="font-bold text-purple-400">B.Tech student</span>, eager to contribute to real-world industry <a href="#work" className="font-bold text-purple-400 hover:text-purple-300 cursor-pointer underline">projects</a> and ready to work as a Software Engineering or AI Intern.
                    </p>

                    <ul className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-5xl">
                        {data.map((data) => (
                            <li key={data.name} className="border border-gray-300 dark:border-white/30 rounded-xl p-8 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black dark:hover:shadow-white/80 dark:hover:bg-darkHover/50 h-full flex flex-col" onClick={() => data.name === 'Projects' && document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })}>
                                <img src={data.icon1} alt="" className="w-12 dark:hidden" />
                                <img src={data.icon2} alt="" className="w-12 hidden dark:block" />
                                <h3 className="my-4 font-semibold text-xl text-gray-700 dark:text-white">{data.name}</h3>
                                <p className="text-gray-600 text-lg dark:text-white/80 leading-relaxed">{data.description}</p>
                            </li>
                        ))}
                    </ul>
                    <h4 className="my-6 text-center text-gray-700 font-Ovo dark:text-white/80">Connect with me</h4>

                    <ul className="flex items-center justify-center gap-4">
                        {socialLinks.map((social) => (
                            <li key={social.name}>
                                <a 
                                    href={social.url} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center w-16 sm:w-20 aspect-square border border-gray-300 dark:border-white/30 rounded-lg cursor-pointer hover:-translate-y-1 hover:bg-lightHover dark:hover:bg-darkHover/50 duration-500"
                                >
                                    <img src={social.icon} alt={social.name} className="w-10 sm:w-12" />
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="max-w-max mx-auto order-1 lg:order-2">
                    <div className="rounded-3xl overflow-hidden border border-white/10 bg-black/20 shadow-[0_20px_60px_rgba(0,0,0,0.45)]">
                        <img src="/assets/Tejsai2.png" alt="" className="w-80 sm:w-[28rem] object-cover" />
                    </div>
                </div>
            </div>
        </div>
    )
}