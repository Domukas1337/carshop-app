import Image from "next/image"

export default function About() {
    return (
        <div className="flex flex-col justify-center items-center max-w-screen-xl mx-auto h-screen">
            <div>
                <Image 
                src={"https://i.pinimg.com/originals/10/91/94/1091948c6b80b65b9eef8c163f0ae42a.jpg"}
                alt="Profile Picture"
                width={200}
                height={200}
                className="rounded-full"
                />
            </div>
            <div>
                <h1 className="text-3xl font-bold">About Us</h1>
            </div>
            <div className="w-1/2 text-xl">
                <p className="text-center">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus nisi aperiam recusandae deleniti quo sapiente error, natus beatae consectetur. Aliquam tenetur odit, sit doloribus optio cupiditate fuga odio tempore! Veritatis nostrum assumenda fugiat, numquam corrupti nisi. Dolores aliquam debitis ex eaque architecto reiciendis quibusdam neque, provident ratione ipsam numquam error?</p>
            </div>
        </div>
    )
}