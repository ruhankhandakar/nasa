const NavBar = () => {
  return (
    <div className="navbar bg-base-100 d-flex justify-between items-center flex-col md:flex-row">
      <div className="d-flex flex-col">
        <div className="avatar">
          <div className="w-24 rounded-full">
            <img src="/nasa-logo.svg" alt="nasa" />
          </div>
        </div>
        <p className="mt-1 md:text-lg md:mt-3">Ruhan Khandakar</p>
      </div>
      <h2 className="text-center mt-3 md:mt-0 md:text-3xl md:text-right">
        Astronomy Picture <br /> of the Day
      </h2>
    </div>
  );
};

export default NavBar;
