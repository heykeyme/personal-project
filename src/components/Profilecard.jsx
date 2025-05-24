import './../Css/Profilecard.css'

export const Profilecard = () => {
  return (
    <>
      <div className="h-[700px] w-[1300px] my-auto border-8 bg-slate-300 rounded-2xl hover:shadow-slate-800 border-slate-50 flex items-center flex-row justify-center self-start ">
        <div className="h-[300px] w-[300px] flex-col flex items-center justify-center ">
          <img
            src="https://media.licdn.com/dms/image/v2/D5603AQF475GvQBSbBw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1706509427761?e=1753315200&v=beta&t=94NEDqQ2L40BWx8nVLueDDAxon_Mt8k2XcqGKnanCiM"
            alt="gambar-hakimi"
            className="object-cover rounded-full h-full w-full "
          />

          <div className="flex mt-6 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded justify-center">
            <a
              href="https://drive.google.com/file/d/1NgVdRWpDNj1q2rn6RjTQYYlKbW5MSoun/view?usp=sharing"
              className="text-center"
            >
              Resume
            </a>
          </div>
        </div>
        <div className="h-96 w-[700px] flex flex-col items-start justify-start ml-30 text-left">
          <div className="mt-5">
            <h1 className="text-3xl font-light font-Poetson">Muhammad Noor Hakimi bin Abdul Halim</h1>
          </div>
          <div className="mt-5">
            <h2 className="text-2xl font-light font-Poetson">Little bit About Me</h2>
          </div>
          <div className="mt-5">
            <p className="font-Questrial">
              I'm a Freelance Frontend Developer, currently enrolled as a part time student in Bachelor Degree in
              Information Technology from Universiti Teknologi Mara. I hold a Diploma in Digital Technology(Information
              Technology) in Information Security from Ungku Omar Polytechnic <br />
              <br />
              My Interest is in the Software Development. I create a few Project using a tech stack that are popular
              nowadays like ReactJS, Vite and TailwindCSS. I'm also have an experienced develop the web application
              using Java.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
