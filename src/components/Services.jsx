export default function Services() {
    const items = [
        {
            name: 'Certification 1',
            icon: './assets/web-icon.png',
            description: 'Description of your certification or achievement...',
            link: '#',
        },
        {
            name: 'Certification 2',
            icon: './assets/mobile-icon.png',
            description: 'Description of your certification or achievement...',
            link: '#',
        },
        {
            name: 'External Activity 1',
            icon: './assets/ui-icon.png',
            description: 'Description of your external activity...',
            link: '#',
        },
        {
            name: 'External Activity 2',
            icon: './assets/graphics-icon.png',
            description: 'Description of your external activity...',
            link: '#',
        }
    ];
    return (
        <div id="certifications" className="w-full px-[12%] py-10 scroll-mt-20">
            <h4 className="text-center mb-2 text-lg font-Ovo">My Achievements</h4>
            <h2 className="text-center text-5xl font-Ovo">Certifications & Activities</h2>
            <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">Showcasing my certifications and external activities that demonstrate my skills and involvement.</p>

            <div className="grid grid-cols-auto gap-6 my-10">
                {items.map((item) => (
                    <div key={item.name} className="border border-gray-300 dark:border-white/30 rounded-lg px-8 py-12 hover:shadow-black cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 dark:hover:bg-darkHover dark:hover:shadow-white">
                        <img src={item.icon} alt="" className="w-10" />
                        <h3 className="text-lg my-4 text-gray-700 dark:text-white">{item.name}</h3>
                        <p className="text-sm text-gray-600 leading-5 dark:text-white/80">{item.description}</p>
                        <a href={item.link} className="flex items-center gap-2 text-sm mt-5">Read more <img src="./assets/right-arrow.png" alt="" className="w-4" /></a>
                    </div>
                ))}
            </div>
        </div>
    )
}