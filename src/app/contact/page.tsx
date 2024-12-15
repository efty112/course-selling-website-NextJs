import Banner from "@/components/Banner/Banner";
import { FaHome } from "react-icons/fa";
import { IoIosMailOpen } from "react-icons/io";
import { LuPhoneCall } from "react-icons/lu";

const Contact = () => {
    return (
        <div>
            <Banner name="Contact Us"></Banner>
            <div className="max-w-7xl mx-auto my-16">

                <div className="hero">
                    <div className="flex flex-col-reverse gap-10 lg:flex-row-reverse justify-center items-start w-full mx-auto">

                        <div className="text-left">
                            <h1 className="text-4xl font-semibold">Office Address</h1>
                            <div className="space-y-5 my-5">
                                <div className="flex items-center gap-3">
                                    <FaHome className='text-4xl' />
                                    <p>571, Adept Moitri Complex (Lift-08), ECB Chattar Bus Stand, Dhaka Cantonment, Dhaka - 1206, Bangladesh</p>
                                </div>

                                <div className="flex items-center gap-3">
                                    <IoIosMailOpen className='text-3xl' />
                                    <p>info@careerbuilder.com.bd</p>
                                </div>

                                <div className="flex items-center gap-3">
                                    <LuPhoneCall className='text-3xl' />
                                    <p>01766461773 / 01719925400</p>
                                </div>
                            </div>

                            <div>
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14599.500215335016!2d90.38712048971036!3d23.823041694484413!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c6c2ab936b87%3A0xcaa915c4069493be!2sECB%20Chattar%2C%20Dhaka%2C%20Bangladesh!5e0!3m2!1sen!2sus!4v1734070209044!5m2!1sen!2sus" width="600" height="350" className="lg:w-full w-fit" loading="lazy"></iframe>
                            </div>
                        </div>

                        <div className="lg:w-2/3 w-4/5 mx-auto lg:px-10">
                            <div className="card bg-base-100 lg:w-3/4 shrink-0 shadow-2xl">
                                <p className="text-3xl text-center pt-5 font-semibold">Message Us</p>

                                <form className="card-body">
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Full Name<span className="text-red-500">*</span></span>
                                        </label>
                                        <input type="text" placeholder="Full Name" className="input input-bordered" required />
                                    </div>

                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Email Address<span className="text-red-500">*</span></span>
                                        </label>
                                        <input type="email" placeholder="Email Address" className="input input-bordered" required />
                                    </div>

                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Phone Number<span className="text-red-500">*</span></span>
                                        </label>
                                        <input type="text" placeholder="Phone Number" className="input input-bordered" required />
                                    </div>

                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Message<span className="text-red-500">*</span></span>
                                        </label>
                                        <textarea className="textarea textarea-bordered" placeholder="Enter Your Message" required></textarea>
                                    </div>

                                    <div className="form-control mt-6">
                                        <button className="btn btn-primary">Send Message</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;