
function navbar() {
  return (
    <div>
      <nav className="flex flex-col w-full px-6 py-4 bg-white shadow sm:flex-row sm:text-left sm:justify-between sm:items-baseline">
        <div className="mb-2 sm:mb-0">
          <a href="/" className="text-xl no-underline duration-300 text-grey-darkest hover:text-blue-dark hover:font-bold">Instructors Home Page</a>
        </div>
        <div className='text-lg font-light hover:text-blue-dark'>
          <a href="/instructor" className="m-2 text-black no-underline duration-300 hover:text-blue-800 hover:font-normal">Instructor</a>
          {/* Navigation links for Payment and Feedbacks removed */}
        </div>
        {/* Additional commented code and elements can also be reviewed for potential removal or activation */}
      </nav>
    </div>
  );
}

export default navbar;
