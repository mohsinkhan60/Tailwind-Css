export const Product = () => {
  return (
    <div className="flex flex-col flex-wrap items-center h-auto p-10 text-center w-100">
      <div className="flex flex-col flex-wrap items-center w-full h-auto">
        <p className="text-3xl font-bold text-center text-indigo-300 md:text-4xl">
          Our Products
        </p>
        <div className="w-32 h-1 mt-4 border-b-4 border-yellow-300 md:w-40 rounded-2xl"></div>
      </div>
      <div className="flex flex-wrap w-[90%] h-auto justify-around">
        <div className="flex flex-col items-center w-64 p-2 mt-12 mb-12 border-4 border-white rounded-xl">
          <img
            className="rounded-[50%] w-28 h-28 mb-10"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRymnCSMg0nqbaNPxxsFYWUXBjYNLQRXnUBHQ&s"
            alt=""
          />
          <p className="text-3xl font-bold text-white">PW Skills Lab</p>
          <p className="mt-5 text-xl font-bold text-gray-500">
            Supercharge your project development with our robust lab.
          </p>
        </div>

        <div className="flex flex-col items-center w-64 p-2 mt-12 mb-12 border-4 border-white rounded-xl">
          <img
            className="rounded-[50%] w-28 h-28 mb-10 object-cover "
            src="https://static.vecteezy.com/system/resources/thumbnails/034/956/340/small/people-seeking-job-opportunities-job-search-recruitment-hr-hiring-employees-flat-illustrations-for-landing-page-web-banner-social-media-infographic-mobile-apps-vector.jpg"
            alt=""
          />
          <p className="text-3xl font-bold text-white">Job Portal</p>
          <p className="mt-5 text-xl font-bold text-gray-500">
            Supercharge your project development with our robust lab.
          </p>
        </div>

        <div className="flex flex-col items-center w-64 p-2 mt-12 mb-12 border-4 border-white rounded-xl">
          <img
            className="rounded-[50%] w-28 h-28 mb-10 object-cover"
            src="https://img.freepik.com/free-vector/suitcase-bag-floating-cartoon-vector-icon-illustration-business-object-icon-concept-isolated-flat_138676-7455.jpg"
            alt=""
          />
          <p className="text-3xl font-bold text-white">Experiance</p>
          <p className="mt-5 text-xl font-bold text-gray-500">
            Supercharge your project development with our robust lab.
          </p>
        </div>

        <div className="flex flex-col items-center w-64 p-2 mt-12 mb-12 border-4 border-white rounded-xl">
          <img
            className="rounded-[50%] w-28 h-28 mb-10 object-cover"
            src="https://st2.depositphotos.com/7865540/10656/v/450/depositphotos_106568438-stock-illustration-gears-and-mechanisms-with-text.jpg"
            alt=""
          />
          <p className="text-3xl font-bold text-white">Affiliate </p>
          <p className="mt-5 text-xl font-bold text-gray-500">
            Supercharge your project development with our robust lab.
          </p>
        </div>

        <div className="flex flex-col items-center w-64 p-2 mt-12 mb-12 border-4 border-white rounded-xl">
          <img
            className="rounded-[50%] w-28 h-28 mb-10"
            src="https://static.vecteezy.com/system/resources/thumbnails/008/008/091/small/cartoon-batch-certificate-ribbon-isolated-object-illustration-vector.jpg"
            alt=""
          />
          <p className="text-3xl font-bold text-white">Hall of Fame</p>
          <p className="mt-5 text-xl font-bold text-gray-500">
            Supercharge your project development with our robust lab.
          </p>
        </div>
      </div>
    </div>
  );
};
export default Product;
