export const Students = () => {
  return (
    <div className="flex flex-col flex-wrap items-center h-auto p-10 text-center w-100">
      <div className="flex flex-col flex-wrap items-center h-auto w-100">
        <p className="text-3xl font-bold text-center text-indigo-300 md:text-4xl">
          Pure HardWork, No ShoetCuts!
        </p>
        <div className="h-1 mt-4 border-b-4 border-yellow-300 md:w-96 w-52 rounded-2xl"></div>
      </div>
      <div className="flex flex-wrap w-full justify-evenly">
        <div className="flex flex-col items-center mt-12 mb-12 text-center w-46 ">
          <img
            className="rounded-[50%] w-28 h-28"
            src="https://static.vecteezy.com/system/resources/previews/006/711/092/original/graduation-hat-with-book-cartoon-icon-illustration-education-object-icon-concept-isolated-premium-flat-cartoon-style-vector.jpg"
            alt=""
          />
          <p className="text-3xl font-bold text-white">600+</p>
          <p className="text-3xl font-bold text-gray-500">Different Courses</p>
        </div>

        <div className="flex flex-col items-center mt-12 mb-12 text-center w-46 ">
          <img
            className="rounded-[50%] w-28 h-28"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG-Qe8cyADF4x2In1eKIkiuqaP09LrXa1Q-w&s"
            alt=""
          />
          <p className="text-3xl font-bold text-white">700,000+</p>
          <p className="text-3xl font-bold text-gray-500">Students Enrolled</p>
        </div>

        <div className="flex flex-col items-center mt-12 mb-12 text-center w-46 ">
          <img
            className="rounded-[50%] w-28 h-28"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVCazpK6uF4GWpZm7NQZ9La1nV6AP0_0EOjQ&s"
            alt=""
          />
          <p className="text-3xl font-bold text-white">10,000+</p>
          <p className="text-3xl font-bold text-gray-500">Successful Transition</p>
        </div>
      </div>
    </div>
  );
};
export default Students;
