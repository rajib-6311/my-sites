const About = () => {
  return (
    <div className="hero bg-base-200 min-h-screen sticky top-0 pt-5">
      <div className="hero-content flex-col lg:flex-row">
        <img
          src="https://i.ibb.co/ZmxrgrJ/ra.png"
          className="max-w-sm  shadow-2xl"
        />
        <div className="pl-6">
        <h1 className="text-xl font-bold">Hello, this is Saulin Tuhin, a Senior Software Engineer at Samsung Electronics.
        I am the current lead developer of Samsung Electronics’ internal CDN system - ADS (Artifact Delivery Service). Additionally, I am the secondary admin & product owner of the ADS service globally. 
        ADS uses a combination of proprietary network accelerators, smart caching, proxies and public cloud to provide artifacts faster and more securely to all Samsung employees & partners. 
        I also support DevOps, CI/CD, R&D and Ideation efforts at Samsung R&D Institute Bangladesh Ltd. (SRBD).</h1>
        </div>
      </div>
    </div>
  );
};

export default About;
