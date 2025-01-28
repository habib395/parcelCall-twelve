import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const Banner = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage:
          "url(https://i.ibb.co.com/FqBTmxy/man.png)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md">
          <SectionTitle heading={"Fast Delivery"}></SectionTitle>
          <div className="join">
            <input
              type="text"
              placeholder="Search for Services..."
              className="input input-bordered join-item"
            />
            <button className="btn bg-blue-400 join-item">Search</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
