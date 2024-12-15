import Image from 'next/image'
import Link from 'next/link'

export default function NotFound() {
    return (
        <div className='my-10'>
            <div className='flex flex-col items-center'>
                <Image src={'/404.jpg'} width={900} height={900} alt="404 Not Found!"></Image>
                <div>
                    <Link href="/" className='btn bg-red-500 text-white'>
                        Return Home
                    </Link>
                </div>
            </div>
        </div>
    )
}