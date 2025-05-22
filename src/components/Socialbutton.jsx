export const Socialbutton = props => {
  return (
    <>
      <div>
        <a
          href={props.url}
          target="_blank"
          className="w-9 h-9 flex items-center justify-center rounded-full bg-white text-black hover:bg-amber-500 transition"
        >
          {props.label}
        </a>
      </div>
    </>
  );
};
