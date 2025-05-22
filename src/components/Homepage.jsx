import './../Css/Homepage.css';


export const Homepage = () => {
  return (
    <>
      <header className="w-full fixed top-0 left-0 bg-amber-600 shadow-md flex items-center h-16 justify-between-px-4">
        <div className="text-container">
          <p className="py-4 px-4 font-text text-lg font-extrabold m-auto">Hakimi Halim | Bachelor in IT | Freelance Software Developer</p>
        </div>
        <div className="social-container ml-auto pr-2">
          <p>Social Media Section</p>
        </div>
      </header>
    </>
  );
};
