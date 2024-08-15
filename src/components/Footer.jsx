const Footer = () => {
  return (
    <div className="flex flex-col flex-wrap justify-between w-full px-4 py-5 pt-10 text-white bg-gray-900 md:flex-row md:px-12">
      <div>
        <img
          className="w-40 h-30"
          src="https://pwskills.com/images/PWSkills-white.png"
          alt=""
        />
        <p className="my-4">Email us : Support@pwskills.com</p>
        <img
          className="h-28 w-28 rounded-[50%] object-cover"
          src="https://www.shutterstock.com/image-vector/golden-red-award-ribbon-batch-260nw-2284757365.jpg"
          alt=""
        />
      </div>
      <div>
        <h2 className="mt-4 text-xl font-bold">PW Skills</h2>
        <div className="w-20 h-1 mt-2 mb-2 border-b-4 border-yellow-300 rounded-2xl"></div>
        <div>
          <p>About Us</p>
          <p>FAQs</p>
          <p>Privacy Policy</p>
        </div>
      </div>

      <div>
        <h2 className="mt-4 text-xl font-bold">Products</h2>
        <div className="w-20 h-1 mt-2 mb-2 border-b-4 border-yellow-300 rounded-2xl"></div>
        <div>
          <p>PW Skills Lab</p>
          <p>Job Portal</p>
          <p>Experiaance Portal</p>
          <p>Become an Affiliate</p>
          <p>Hall of Fame</p>
        </div>
      </div>

      <div>
        <h2 className="mt-4 text-xl font-bold">Links</h2>
        <div className="w-20 h-1 mt-2 mb-2 border-b-4 border-yellow-300 rounded-2xl"></div>
        <div>
          <p>Discode Chancer</p>
          <p>PW Youtube</p>
          <p>Careers</p>
        </div>
      </div>
    </div>
  );
};
export default Footer;
