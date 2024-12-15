import Image from "next/image";
import Link from "next/link";
import { CiLocationOn } from "react-icons/ci";
import { LuPhoneCall } from "react-icons/lu";
import { MdOutlineRadioButtonChecked } from "react-icons/md";

const Footer = () => {
    return (
        <div className="w-full bg-[#3205a9]">
            <footer className="text-white max-w-7xl mx-auto py-14 text-base flex lg:flex-row flex-col items-start lg:space-y-0 space-y-10">
                <aside className="lg:w-1/2 space-y-5">
                    <div>
                        <Link href={'/'}>
                            <Image src={'/logo.png'} width={220} height={220} alt="Career Builder" priority={true} className="lg:w-fit lg:mx-0 w-2/3 mx-auto"></Image>
                        </Link>
                    </div>
                    <div className="lg:w-2/3 lg:text-justify text-center">
                        <p>There is no substitute for up-skilling yourself with internships alongside hands-on training for quick success in freelancing and outsourcing. Along with conducting the course by the experienced faculty considering the career of the student, we also provide 100% internship opportunities.</p>
                    </div>
                </aside>

                <div className="lg:w-1/2 mx-auto text-lg lg:text-left text-center">
                    <h6 className="text-lg uppercase mb-3 font-semibold">Our Services</h6>
                    <nav className="flex flex-col gap-1">
                        <div className='flex items-center gap-2'>
                            <MdOutlineRadioButtonChecked />
                            <p>Graphic Designing</p>
                        </div>
                        <div className='flex items-center gap-2'>
                            <MdOutlineRadioButtonChecked />
                            <p>Video Editing</p>
                        </div>
                        <div className='flex items-center gap-2'>
                            <MdOutlineRadioButtonChecked />
                            <p>Web Development</p>
                        </div>
                        <div className='flex items-center gap-2'>
                            <MdOutlineRadioButtonChecked />
                            <p>Digital Marketing</p>
                        </div>
                        <div className='flex items-center gap-2'>
                            <MdOutlineRadioButtonChecked />
                            <p>Affiliate Marketing</p>
                        </div>
                        <div className='flex items-center gap-2'>
                            <MdOutlineRadioButtonChecked />
                            <p>Business Development</p>
                        </div>
                    </nav>
                </div>

                <nav className="lg:w-1/2 mx-auto text-lg lg:text-left text-center space-y-5">
                    <h6 className="text-lg uppercase font-semibold">Address of our office</h6>
                    <div className="flex flex-col space-y-5">
                        <div className="flex items-start">
                            <div className="text-5xl">
                                <CiLocationOn />
                            </div>
                            <p> <span className="font-bold">Address:</span> 571, Adept Moitri Complex (Lift-08), ECB Chattar Bus Stand, Dhaka Cantonment, Dhaka - 1206, Bangladesh</p>
                        </div>

                        <div className="flex items-start gap-3 ml-2">
                            <div className="text-3xl" >
                                <LuPhoneCall />
                            </div>
                            <p> <span className="font-bold">Call Us:</span> 09644222111</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-5 font-semibold">
                        <p className="text-lg uppercase">Follow Us</p>
                        <nav>
                            <div className="flex gap-5">
                                <Link href={'https://x.com/'} target="_blank" className="bg-white rounded-full p-2 shadow-xl hover:bg-blue-100">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        className="fill-current text-blue-400">
                                        <path
                                            d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                                    </svg>
                                </Link>

                                <Link href={'https://www.youtube.com/'} target="_blank" className="bg-white rounded-full p-2 shadow-xl hover:bg-red-100">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        className="fill-current text-red-500">
                                        <path
                                            d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                                    </svg>
                                </Link>

                                <Link href={'https://www.facebook.com/'} target="_blank" className="bg-white rounded-full p-2 shadow-xl hover:bg-blue-100">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        className="fill-current text-blue-600">
                                        <path
                                            d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                                    </svg>
                                </Link>
                            </div>
                        </nav>
                    </div>
                </nav>
            </footer>

            <div className="footer footer-center bg-gradient-to-tr from-[#3205a9] to-[#040404] text-white p-3 text-base">
                <aside>
                    <p>Copyright © Mohtasim Ahmed. All rights reserved.</p>
                </aside>
            </div>

        </div>
    );
};

export default Footer;