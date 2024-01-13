import './Fest.css';
import Cover from "../../Shared/Cover/Cover";
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';


const Fest = () => {
    return (
        <div>
         <Cover img="https://i.ibb.co/mHG5fFn/IMG-20230825-WA0016.jpg" title="IT Fest"></Cover>
         <SectionTitle
         heading="Our IT Fest" subHeading="Most popular programme of our IT club"
         ></SectionTitle>
         <div className="fest-item bg-fixed text-white  my-20 bg-slate-500">
         <div className="md:flex justify-center  items-center bg-slate-500 bg-opacity-60 py-20 pt-12 px-36">
            <div>
                <img src="https://i.ibb.co/QCRmSTN/2-E7-A0019-Copy-Copy.jpg" alt="" />
            </div>
            <div className="md:ml-10">
                <p className=" font-bold text-4xl">IT Fest 6.0</p>
                <p>Our mission is to provide a dynamic platform that empowers students to
explore, innovate, and excel in the realm of information technology. By fostering a
culture of continuous learning and collaboration, we aim to prepare our students for
the ever-evolving technological landscape.</p>
            </div>
            </div> 
            <div className="md:flex justify-center items-center bg-slate-500 bg-opacity-60 py-20 pt-12 px-36">
            <div>
                <img src="https://i.ibb.co/Bs7tD7d/2-E7-A0653-Copy.jpg" alt="" />
            </div>
            <div className="md:ml-10">
                <p className=" font-bold text-4xl">IT Fest 5.0</p>
                <p>Our vision is to establish the IT Fest as an annual flagship event that
showcases the exceptional talents of our students while facilitating meaningful
interactions between academia and the industry. We envision a future where our
students become influential tech leaders, driving innovation and change on a global
scale</p>
            </div>
            </div>
            <div className="md:flex justify-center items-center bg-slate-500 bg-opacity-60 py-20 pt-12 px-36">
            <div>
                <img src="https://i.ibb.co/HHrQPh5/2-E7-A0577-Copy.jpg" alt="" />
            </div>
            <div className="md:ml-10">
                <p className=" font-bold text-4xl">IT Fest 4.0</p>
                <p>Our vision is to establish the IT Fest as an annual flagship event that
showcases the exceptional talents of our students while facilitating meaningful
interactions between academia and the industry. We envision a future where our
students become influential tech leaders, driving innovation and change on a global
scale</p>
            </div>
            </div>
            <div className="md:flex justify-center items-center bg-slate-500 bg-opacity-60 py-20 pt-12 px-36">
            <div>
                <img src="https://i.ibb.co/BsqW3JL/375465212-995045998415392-2013260694121602477-n.jpg"  alt="" />
            </div>
            <div className="md:ml-10">
                <p className=" font-bold text-4xl">IT Fest 3.0</p>
                <p>Our vision is to establish the IT Fest as an annual flagship event that
showcases the exceptional talents of our students while facilitating meaningful
interactions between academia and the industry. We envision a future where our
students become influential tech leaders, driving innovation and change on a global
scale</p>
            </div>
            </div>
         </div>  
        </div>
    );
};

export default Fest;