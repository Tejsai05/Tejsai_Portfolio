export default function Footer() {
    return (
        // <div className="mt-20">
        //     <div className="text-center rounded-2xl border border-white/10 bg-black/30 backdrop-blur-md py-6 mx-[10%]">
        //         <a href="#!">
        //             <img src="/assets/Untitled (1).png" alt="" className="w-36 mx-auto mb-2" />
        //         </a>

        //         {/* <div className="w-max flex items-center gap-2 mx-auto">
        //             <img src="./assets/mail_icon.png" alt="" className="w-5 dark:hidden" />
        //             <img src="./assets/mail_icon_dark.png" alt="" className="w-5 hidden dark:block" />

        //             <a href="mailto:tejsaimylavarapu05@gmail.com">tejsaimylavarapu05@gmail.com</a>
        //         </div> */}
        //     </div>
        // </div>
        <div className="text-center border-t border-white/15 bg-black/30 backdrop-blur-md mx-[10%] mt-6 py-4 px-6 rounded-2xl">
            <h1 className="text-xl font-bold">© {new Date().getFullYear()}    <a href="tejsaimylavarapu05@gmail.com" target="_blank">Designed by Tejsai</a></h1>
        </div>
    )
}