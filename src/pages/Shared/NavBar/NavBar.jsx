import { Link } from "react-router-dom";

const NavBar = () => {

    const navOptions = <>
    <li><Link to="/">Home</Link></li>
        <li>
          <Link to="activity">Activity</Link>
          
        </li>
        <li><Link to="/">About</Link></li>
    </>

    return (
        <>
           <div className="navbar fixed z-10 bg-opacity-25 text-white font-bold max-w-screen-xl mx-auto bg-black ">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        {navOptions}
      </ul>
    </div>
    <img className="w-[150px] h-15" src="https://i.ibb.co/9szMTPD/IT-CLUB-LOGO-2x.png" alt="IT-CLUB-LOGO-2x"   />
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {navOptions}
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn">Button</a>
  </div>
</div> 
        </>
    );
};

export default NavBar;