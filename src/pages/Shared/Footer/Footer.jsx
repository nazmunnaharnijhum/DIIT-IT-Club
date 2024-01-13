/* eslint-disable react/no-unknown-property */

const Footer = () => {
  return (
      <footer className="mb-0 mt-16">
          <div className="footer p-10 font-semibold text-lg bg-green-500 text-black items-center">
              <div>
                  <img className="w-[200px] h-25" src="https://i.ibb.co/9szMTPD/IT-CLUB-LOGO-2x.png" alt="IT-CLUB-LOGO-2x" />
                  <p>Providing reliable service since 2000</p>
              </div>
              <div>
                  <span className="footer-title">Contact Us</span>
                  <a className="link link-hover">Call: +880 1713-493287</a>
                  <a className="link link-hover">Email: admission@diit.edu.bd</a>
                  <a className="link link-hover">Address: Level 6-7, Daffodil Plaza, 4/2 Sobhanbag Rd, Dhaka 1207</a>
                  
              </div>
              <div>
                  <span className="footer-title">Our Location</span>
                  
                  <iframe
                      title="Map"
                      width="500"
                      height="300"
                      style={{ border: 15, borderRadius: '10px' }}
                      src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d912.9471768680852!2d90.376263!3d23.754913!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8adf797a677%3A0x70ebff41575242f8!2sDaffodil%20Institute%20of%20IT%20(DIIT)!5e0!3m2!1sen!2sbd!4v1705127388109!5m2!1sen!2sbd"
                      allowFullScreen
                      loading="lazy"
                  ></iframe>
              </div>
          </div>
         
          <div className="footer footer-center p-4 text-base-content bg-purple-800 text-white">
              <div>
                  <p>Copyright © 2023 - All right reserved by DIIT IT Club</p>
              </div>
          </div>
      </footer>
  );
};

export default Footer;
