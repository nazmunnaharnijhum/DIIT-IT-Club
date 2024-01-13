
const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className="mx-auto text-center md:w-4/12 my-16">
            <h3 className=" text-4xl mb-2 text-green-400">{heading}</h3>
        <div className=" text-[#e79e37] font-extrabold">
            <p>_________ *** _________</p>
            <p>--------- *** ---------</p>
        </div>
            <p>{subHeading}</p>
        </div>
    );
};

export default SectionTitle;