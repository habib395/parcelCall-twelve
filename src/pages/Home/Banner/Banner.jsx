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
          {/* <h1 className="mb-5 text-5xl font-bold">Fast Delivery</h1> */}
          <SectionTitle heading={"Fast Delivery"}></SectionTitle>
          <div className="join">
            <input
              type="text"
              placeholder="username@site.com"
              className="input input-bordered join-item"
            />
            <button className="btn btn-primary join-item">Subscribe</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
