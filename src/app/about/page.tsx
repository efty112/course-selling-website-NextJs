import Banner from "@/components/Banner/Banner";
import FromFounders from "./FromFounders";

const About = () => {
    return (
        <div>
            <Banner name={'About Us'}></Banner>
            <div className='max-w-7xl mx-auto lg:text-lg text-justify'>
                <p>Founded in January 2020, Career Builder Institute is a pioneering IT firm in Bangladesh dedicated to eradicating unemployment and poverty by transforming unskilled individuals into skilled professionals. We offer a range of unique services that blend practical training, paid internships, and employment services, ensuring comprehensive career development for our students. Under the visionary leadership and guidance of Mr. Md Muhibbullah Shiddique and Lt. Col. Mohammad Moniruzzamn (Retd), our institute has quickly become a beacon of hope for many aspiring professionals across Bangladesh.</p>

                <div className="my-7">
                    <h1 className="text-3xl pb-3 font-medium">Our Mission</h1>
                    <p>Our unique program is designed to empower individuals with the skills and knowledge required to thrive in the digital economy, thereby reducing unemployment and poverty in Bangladesh. We stand out by providing 100% practical training, skill development, and guaranteed employment, ensuring our students’ success.</p>
                </div>

                <div className="my-7">
                    <h1 className="text-3xl pb-3 font-medium">Our Vision</h1>
                    <p>To be the leading IT training institute in Bangladesh, recognized for our innovative approach to career development and our commitment to creating a skilled workforce that can compete globally.</p>
                </div>

                <div className="my-7">
                    <h1 className="text-3xl pb-3 font-medium">Objectives</h1>
                    <div className="ml-10">
                        <ol className="list-decimal">
                            <li><span className="font-semibold">Provide High-Quality Training:</span> Deliver 100% practical training programs that equip students with the latest industry skills and knowledge.</li>

                            <li><span className="font-semibold">Ensure Skill Development:</span> Offer paid internships with real-world experience and skill enhancement.</li>

                            <li><span className="font-semibold">Guarantee Employment:</span>  Facilitate job placements for our graduates, ensuring they secure meaningful employment in the IT sector.</li>

                            <li><span className="font-semibold">Support Career Growth:</span> Offer comprehensive career development packages that include training, internships, and job placement.</li>

                            <li><span className="font-semibold">Promote Online Business Development:</span> Equip aspiring entrepreneurs with the skills to succeed in online business ventures.</li>
                        </ol>
                    </div>


                </div>

                <div className="my-7">
                    <h1 className="text-3xl pb-3 font-medium">Our Services</h1>
                    <div className="ml-10">
                        <ol className="list-decimal space-y-7">
                            <li><span className="font-semibold">100% Practical Training and Certification</span>
                                <ol className="list-disc ml-7 mt-3">
                                    <li><span className="font-semibold">Duration:</span> 3 Months</li>
                                    <li><span className="font-semibold">Purpose:</span> Education and Knowledge</li>
                                    <li><span className="font-semibold">Description:</span> Intensive hands-on training programs designed to provide practical skills and certifications in various IT disciplines.</li>
                                </ol>
                            </li>

                            <li><span className="font-semibold">100% Paid Internship and Certification</span>
                                <ol className="list-disc ml-7 mt-3">
                                    <li><span className="font-semibold">Duration:</span> 3 Months</li>
                                    <li><span className="font-semibold">Purpose:</span> Skill Development</li>
                                    <li><span className="font-semibold">Description:</span> Paid internships that offer real-world experience and skill enhancement, culminating in certification.</li>
                                </ol>
                            </li>

                            <li><span className="font-semibold">100% Employment Service and Certification</span>
                                <ol className="list-disc ml-7 mt-3">
                                    <li><span className="font-semibold">Duration:</span> 6 Months</li>
                                    <li><span className="font-semibold">Purpose:</span> Job Experience</li>
                                    <li><span className="font-semibold">Description:</span> Employment services that ensure job placement and provide certifications to validate work experience.</li>
                                </ol>
                            </li>
                        </ol>
                    </div>


                </div>

                <div className="my-7">
                    <h1 className="text-3xl pb-3 font-medium">Comprehensive Course Offerings</h1>
                    <div className="ml-10">
                        <ol className="list-disc font-semibold">
                            <li>Graphic Design</li>
                            <li>Motion Graphics & Video Editing</li>
                            <li>Digital Marketing (SEO, SEM, SMM)</li>
                            <li>Web Development</li>
                            <li>Affiliate Marketing</li>
                            <li>Online Business Development</li>
                        </ol>
                    </div>
                </div>

                <div className="my-7">
                    <h1 className="text-3xl pb-3 font-medium">Our Target Clients</h1>
                    <div className="ml-10">
                        <ol className="list-disc font-semibold">
                            <li>University Students</li>
                            <li>Graduated but Unemployed Individuals</li>
                            <li>Educated Housewives</li>
                            <li>Job Holders Seeking Extra Income</li>
                            <li>Aspiring Online Business Owners</li>
                        </ol>
                    </div>
                </div>

                <div className="my-7">
                    <h1 className="text-3xl pb-3 font-medium">Meet Our Founders</h1>
                    <FromFounders></FromFounders>
                </div>

                <div className="mt-7 mb-16">
                    <h1 className="text-3xl pb-3 font-medium">Join Us</h1>
                    <p>Embark on a journey to a successful career with Career Builder Institute. Our comprehensive programs are designed to equip you with the skills and experience needed to thrive in the digital economy. Enroll today and take the first step towards a brighter future!</p>
                </div>
            </div>
        </div>
    );
};

export default About;