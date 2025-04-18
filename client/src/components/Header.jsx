'use client'
import { usePathname, useRouter } from 'next/navigation'
import { IoIosNotificationsOutline, IoMdSearch } from 'react-icons/io'

const Header = () => {
    const path = usePathname().split('/')
    const location = path[path.length - 1]
    const router = useRouter()

    const formatPath = (path) => {
        if (path === '') return 'Home'

        return path
    }

    return (
        <div className="w-full h-fit flex relative z-10 justify-center items-center bg-white px-[1rem]">
            <div className="max-container flex flex-col gap-[1rem] bg-primary py-[1rem]">
                <div className="flex justify-between items-center py-[1rem]">
                    <h1 className="text-green capitalize">
                        {formatPath(location)}
                    </h1>
                    {location !== 'profile' && (
                        <div className="flex items-center bg-green-200 p-[1rem] rounded-full">
                            <IoIosNotificationsOutline
                                strokeWidth={5}
                                size={20}
                                alt="hero"
                                className="text-green"
                            />
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Header
