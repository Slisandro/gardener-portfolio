export default function ContactPage () {
    return (
        <div className="flex flex-col gap-4 md:gap-8 p-10 md:px-30 bg-[#F6F8F6]">
            <div className="rounded-lg flex items-center justify-center flex flex-col bg-white shadow-md p-6 gap-4">
                <div className="flex flex-col w-full gap-2">
                    <label className="font-medium text-sm sm:text-sm" htmlFor="name">Name</label>
                    <input className="w-full border-1 border-gray-100 bg-gray-50 rounded-md px-2 py-2 text-xs" name="name" />
                </div>
                <div className="flex flex-col w-full gap-2">
                    <label className="font-medium text-sm sm:text-sm" htmlFor="email">Email</label>
                    <input className="w-full border-1 border-gray-100 bg-gray-50 rounded-md px-2 py-2 text-xs" name="email" />
                </div>
                <div className="flex flex-col w-full gap-2">
                    <label className="font-medium text-sm sm:text-sm" htmlFor="message">Message</label>
                    <textarea style={{ resize: "none" }} rows={3} className="w-full border-1 border-gray-100 bg-gray-50 rounded-md px-2 py-1 text-sm" name="message" />
                </div>
                

                <button
                    className="text-xs sm:text-sm md:text-md lg:text-lg font-medium rounded-full shadow-md bg-[#13EC5B] px-4 sm:px-6 py-2"
                >
                    Send Message
                </button>
            </div>
        </div>
    )
}