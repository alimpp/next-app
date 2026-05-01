import "./styles/index.css";

function Topbar() {
  return (
    <div className="topbar-style flex w-full align-center">
      <div className="w-50 flex justify-start">
        <h3>REACT Framework</h3>
      </div>
      <div className="w-50 flex flex-column justify-center align-end ">
        <h3>NEXT.JS</h3>
        <span>Web Applciation</span>
      </div>
    </div>
  );
}

export default Topbar;
