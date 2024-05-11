

const Hero = () => {
    return (
        <div className="hero h-[400px] rounded-2xl mb-[50px]" style={{backgroundImage: 'url(https://i.postimg.cc/wT7zVWzq/Untitled-design.jpg)'}}>
  <div className="hero-overlay bg-opacity-40 rounded-2xl"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Say no to hunger</h1>
      {/* <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p> */}
      {/* <button className="btn btn-primary">Get Started</button> */}
    </div>
  </div>
</div>
    );
};

export default Hero;