import ContactAbout from "./ContactAbout";


const Contact = () => {
    return (
        <div className="relative ">
            <img className="h-[370px] w-full object-cover" src="https://i.ibb.co/6sBGWcF/bg16.jpg" alt="" />
            <div className="absolute inset-0 rounded-md">

            </div>
            <div className="absolute inset-0 flex items-center justify-center">
           <h2 data-aos="zoom-in" data-aos-duration="2000" className="text-white text-6xl font-bold pb-[300px]">Contact</h2>
            </div>
            <ContactAbout></ContactAbout>
      </div>
    );
};

export default Contact;