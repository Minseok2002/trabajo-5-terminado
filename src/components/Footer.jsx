const Footer = () => {
    return (
        <footer className="relative">
        <div className="h-10 bg-red-500"></div>
        <div className="h-10 bg-black"></div>
        <div className="absolute left-1/2 -translate-x-1/2 bottom-0 z-20 h-[70%]">
           <img className="h-full"   src="public/images/pokeball-btn.png" alt="" />
        </div>
       </footer>
    );
};

export default Footer;