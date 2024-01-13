import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import './Featured.css';

const Featured = () => {
    return (
        <div>
          <SectionTitle
          subHeading="Check it out" heading="Our Mission & Vision"
          ></SectionTitle>
         
         <div className="featured-item bg-fixed text-white  my-20 bg-slate-500">
         <div className="md:flex justify-center  items-center bg-slate-500 bg-opacity-60 py-20 pt-12 px-36">
            <div>
                <img src="https://i.ibb.co/QCRmSTN/2-E7-A0019-Copy-Copy.jpg" alt="" />
            </div>
            <div className="md:ml-10">
                <p className=" font-bold text-4xl">Our Mission</p>
                <p>Our mission is to provide a dynamic platform that empowers students to
explore, innovate, and excel in the realm of information technology. By fostering a
culture of continuous learning and collaboration, we aim to prepare our students for
the ever-evolving technological landscape.</p>
            </div>
            </div> 
            <div className="md:flex justify-center items-center bg-slate-500 bg-opacity-60 py-20 pt-12 px-36">
            <div>
                <img src="https://i.ibb.co/HHrQPh5/2-E7-A0577-Copy.jpg" alt="" />
            </div>
            <div className="md:ml-10">
                <p className=" font-bold text-4xl">Our Vision</p>
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

export default Featured;