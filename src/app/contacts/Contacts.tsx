export default function Contacts() {
    return (
        <div className="flex flex-col justify-center items-center h-screen">
                <h1 className="text-6xl font-bold">Contact Us</h1>
                <p className="text-3xl mt-5">If you have any questions.</p>
            <div className="w-screen flex justify-center">
                <form className="border-2 p-10 rounded-md shadow-lg" action="">
                    <div className="flex flex-col justify-center">
                        <input type="text" id="name" className="border-2" placeholder="Name" required/>
                        <input type="email" id="email" className="border-2" placeholder="test@email.com" required/>
                        <input type="message" id="message" className="border-2" placeholder="Message" required/>
                        <input type="submit" value="Submit" className="w-full mt-5 border-2 rounded-md bg-blue-500 text-white transition-all duration-150 hover:bg-blue-600"/>
                    </div>
                </form>
            </div>
        </div>
    )
}