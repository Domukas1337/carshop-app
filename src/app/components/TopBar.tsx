import Link from "next/link"
import Image from "next/image"

export default function TopBar() {
    const topbarItems = [
        {
            name: "Shop",
            href: "/"
        },
        {
            name: "About",
            href: "/about"
        },
        {
            name: "Contacts",
            href: "/contacts"
        }
    ]
    return (
        <nav className="fixed w-full bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <div className="">
                    <Link href="/" className="flex items-center">
                        <Image
                            src="https://flowbite.com/docs/images/logo.svg"
                            className="mr-3 h-6 sm:h-9"
                            alt="Flowbite Logo"
                            width={32}
                            height={32}
                        />
                        <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">CarShop</span>
                    </Link>
                </div>
                <div>
                    <div className="hidden w-full md:block md:w-auto">
                        <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                            {topbarItems.map((item) => (
                                <li key={item.name} className="text-sm font-medium text-gray-300 hover:text-white transition-all duration-150">
                                    <Link href={item.href} className="block py-2 pl-3 pr-4 rounded md:p-0">{item.name}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </nav>

    )
}