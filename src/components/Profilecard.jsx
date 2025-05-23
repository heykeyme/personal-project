export const Profilecard = () => {
  return (
    <>
      <div className="h-96 w-96 my-auto border-8 bg-slate-300 rounded-2xl hover:shadow-slate-800 border-slate-50 max-w-xl flex items-center flex-col justify-center">
        <div className="h-32 w-32 flex justify-center items-center">
          <img
            src="https://media.licdn.com/dms/image/v2/D5603AQF475GvQBSbBw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1706509427761?e=1753315200&v=beta&t=94NEDqQ2L40BWx8nVLueDDAxon_Mt8k2XcqGKnanCiM"
            alt="gambar-hakimi"
            className="object-cover rounded-full h-full w-full"
          />
        </div>

        <div className="flex mt-6">
          <a href="https://drive.google.com/file/d/1NgVdRWpDNj1q2rn6RjTQYYlKbW5MSoun/view?usp=sharing">Resume</a>
        </div>
      </div>
    </>
  );
};
