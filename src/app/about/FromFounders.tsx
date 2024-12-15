import Image from "next/image";
import Link from "next/link";

const FromFounders = () => {
    return (
        <div className="space-y-10">
            <div className="hero bg-white rounded-md">
                <div className="hero-content flex-col lg:flex-row">
                    <Image src="/founder1.png" width={300} height={300} alt="Founder1" priority={true} className="max-w-sm rounded-lg shadow-2xl"></Image>
                    {/* className="max-w-sm rounded-lg shadow-2xl" */}
                    <div>
                        <h1 className="text-5xl font-bold">Lt. Col. Mohammad Moniruzzamn (Retd)</h1>
                        <p>Founder & Chairman</p>
                        <p className="py-4">
                            Lt. Col. Mohammad Moniruzzamn with 31 years of military experience and exceptional organizational skills is recently retired. He is very much enthusiastic to contribute in the improvement of the socioeconomic condition (insufficient income and unemployment problem) of the society and adament to alleviate poverty through goal oriented advanced training and skill development. Integration of our trained persons with the global market and earning foreign currency may be one of the solution to our economical crisis. With this mission and vison he takes over as the Chief Administrator of the Career Builder Institute. His mentorship, motivation and most importantly his leadership qualities dedicated to the institute excel the skill development and ensure employment facilities. His commitment, time and men management ensures the over all institute&apos;s smooth operation.
                        </p>
                        <div>
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

                    </div>
                </div>
            </div>

            <div className="hero bg-white rounded-md">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <Image src="/founder2.jpg" width={300} height={300} alt="Founder1" priority={true} className="max-w-sm rounded-lg shadow-2xl"></Image>
                    {/* className="max-w-sm rounded-lg shadow-2xl" */}
                    <div>
                        <h1 className="text-5xl font-bold">Md. Muhibbullah Shiddique</h1>
                        <p>Founder and CEO</p>
                        <p className="py-4">
                            Mr. Md. Muhibbullah Shiddique, an IT professional with a career spanning over a decade since 2009, specializes in programming, web development, graphic design, creative content writing, digital marketing, affiliate marketing, eCommerce development, business consultancy, and mentoring. His extensive experience is a testament to his expertise and the trust he has earned in the industry. He aims to eradicate unemployment and poverty in Bangladesh by transforming unskilled individuals into skilled professionals and ensuring their local and global employment.
                        </p>
                        <div>
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

                    </div>
                </div>
            </div>
        </div>
    );
};

export default FromFounders;