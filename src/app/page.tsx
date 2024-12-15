import Banner from "@/components/Banner/Banner";
import CourseCard from "@/components/Cards/CourseCard";
import { FaArrowRight } from "react-icons/fa6";

export default function Home() {
  return (
    <div>
      <Banner name="Home"></Banner>

      <div className="max-w-7xl mx-auto space-y-16 my-10">

        <div className="text-center">
          <h1 className="text-5xl font-semibold">Welcome to Career Builder!</h1>
        </div>

        <div className="text-center flex flex-col items-center space-y-5">
          <h1 className="text-2xl font-medium">Why Choosing Career Builder!</h1>

          <ul className="space-y-2 text-lg">
            <li className="flex items-center gap-3"><FaArrowRight />Hands-on training + video tutorials + class projects</li>
            <li className="flex items-center gap-3"><FaArrowRight />3 months internship opportunity for skill enhancement [Salary BDT.8000 per month]</li>
            <li className="flex items-center gap-3"><FaArrowRight />Full time job opportunity for 6 months to gain experience [Salary BDT.12000 per month]</li>
            <li className="flex items-center gap-3"><FaArrowRight />Training Certificate + Internship Certificate + Job Experience Certificate</li>
            <li className="flex items-center gap-3"><FaArrowRight />Work Portfolio + Freelancing + Outsourcing + Job Reference</li>
            <li className="flex items-center gap-3"><FaArrowRight />New Job Updates + Career Guide</li>
          </ul>
        </div>

        <div>
          <p className="text-2xl text-center text-red-700">Admission Going On! [50% Discount]</p>
        </div>

        <div className="text-center space-y-16">
          <h1 className="text-5xl font-semibold">Courses</h1>

          <div>
            <CourseCard></CourseCard>    
          </div>
        
        </div>
      </div>
    </div>
  );
}
