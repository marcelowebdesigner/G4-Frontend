export default function IconHamburguerMenu() {

  return (
    <>
      <button
        
        className=" flex px-3 py-2 border-2 rounded text-purple-dark border-purple-dark  hover:text-white hover:border-purple-half-dark"
      >
        <svg
          className="fill-current h-3 w-3"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
      </button>
    </>
  );
}
