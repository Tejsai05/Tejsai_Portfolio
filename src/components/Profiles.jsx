export default function Profiles() {
    const profiles = [
        {
            name: 'GitHub',
            icon: './assets/Github_Logo.png',
            url: 'https://github.com/tejsai05',
            color: 'hover:bg-gray-800'
        },
        {
            name: 'LinkedIn',
            icon: './assets/Linkedin_Logo.png',
            url: 'https://www.linkedin.com/in/tejsai-mylavarapu-84a460303/',
            color: 'hover:bg-blue-600'
        },
        {
            name: 'LeetCode',
            icon: './assets/Leetcode_Logo.png',
            url: 'https://leetcode.com/tejsai05',
            color: 'hover:bg-orange-500'
        },
        {
            name: 'HackerRank',
            icon: './assets/Hackerrank_Logo.png',
            url: 'https://www.hackerrank.com/profile/tejsaimylavarap1',
            color: 'hover:bg-green-600'
        },
        {
            name: 'CodeChef',
            icon: './assets/Codechef_Logo.png',
            url: 'https://www.codechef.com/users/tejsai05',
            color: 'hover:bg-amber-700'
        },
        {
            name: 'GeeksforGeeks',
            icon: './assets/GFG_Logo.png',
            url: 'https://www.geeksforgeeks.org/profile/tejsaimyla93ls',
            color: 'hover:bg-emerald-600'
        }
    ];

    return (
        <div id="profiles" className="w-full px-[12%] py-20 scroll-mt-20">
            <h4 className="text-center mb-2 text-lg font-Ovo">Connect With Me</h4>
            <h2 className="text-center text-5xl font-Ovo">My Profiles</h2>
            <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
                Find me on various platforms where I code, collaborate, and share my work.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 max-w-5xl mx-auto">
                {profiles.map((profile) => (
                    <a
                        key={profile.name}
                        href={profile.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex flex-col items-center justify-center p-6 border border-gray-300 dark:border-white/30 rounded-xl cursor-pointer hover:-translate-y-2 duration-500 transition-all ${profile.color} hover:text-white dark:hover:shadow-white/40 hover:shadow-xl`}
                    >
                        <img src={profile.icon} alt={profile.name} className="w-12 h-12 mb-3 object-contain" />
                        <h3 className="text-sm font-semibold text-center">{profile.name}</h3>
                    </a>
                ))}
            </div>
        </div>
    );
}
