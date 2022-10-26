import React from 'react'
import { Link } from 'react-router-dom'

const NavbarHomepage = ({ active }) => {

const classborder = "relative before:w-full before:h-1 before:rounded before:bg-blue-regular before:absolute before:-bottom-1";

  return (
    <div>
      <nav className="flex items-center justify-between  text-end flex-wrap bg-white-200 font-primary">

        <div className="block lg:hidden">
          <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
            <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
          </button>
        </div>
        <div className="flex w-full flex-grow lg:flex lg:items-center lg:w-auto  text-blue-regular ">
          <div className='pt-6 ml-8'>
            <Link to="/">

              <svg width="80" height="67" viewBox="0 0 106 92" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_d_864_227)">
                  <path d="M92.9614 4.45714H87.2705V0H81.5797V4.45714H64.5071V0H58.8163V4.45714H53.1254C49.9869 4.45714 47.4346 6.45617 47.4346 8.91429V40.1143C47.4346 42.5724 49.9869 44.5714 53.1254 44.5714H92.9614C96.0999 44.5714 98.6522 42.5724 98.6522 40.1143V8.91429C98.6522 6.45617 96.0999 4.45714 92.9614 4.45714ZM90.116 37.8857H73.0434V24.5143H90.116V37.8857ZM92.9614 15.6H53.1254V11.1429H92.9614V15.6Z" fill="#440298" />
                </g>
                <path d="M82.7544 31.6587L76.9038 26.0596L74.3916 28.4639L82.7544 36.4672L100 19.9623L97.4882 17.5581L82.7544 31.6587Z" fill="#7F39D9" />
                <g filter="url(#filter1_d_864_227)">
                  <path d="M60.9133 49.5893V37.4808C60.9133 26.6182 53.5508 17.4675 43.5768 14.7156C42.5895 12.2236 40.1769 10.4678 37.3262 10.4678C34.4756 10.4678 32.063 12.2236 31.0757 14.7156C21.1017 17.4709 13.7392 26.6182 13.7392 37.4808V49.5893L7.98729 55.3532C7.67378 55.6663 7.42514 56.0383 7.2557 56.448C7.08626 56.8578 6.99936 57.297 7 57.7405V64.4937C7 65.3893 7.35501 66.2481 7.98693 66.8814C8.61885 67.5146 9.47592 67.8704 10.3696 67.8704H64.2829C65.1766 67.8704 66.0336 67.5146 66.6656 66.8814C67.2975 66.2481 67.6525 65.3893 67.6525 64.4937V57.7405C67.6531 57.297 67.5662 56.8578 67.3968 56.448C67.2274 56.0383 66.9787 55.6663 66.6652 55.3532L60.9133 49.5893ZM60.9133 61.1171H13.7392V59.1384L19.491 53.3745C19.8046 53.0615 20.0532 52.6894 20.2226 52.2797C20.3921 51.87 20.479 51.4307 20.4783 50.9873V37.4808C20.4783 28.1714 28.0363 20.5976 37.3262 20.5976C46.6162 20.5976 54.1742 28.1714 54.1742 37.4808V50.9873C54.1742 51.8854 54.528 52.7431 55.1614 53.3745L60.9133 59.1384V61.1171ZM37.3262 78.0002C39.413 78.0029 41.4488 77.3539 43.1505 76.1436C44.8523 74.9333 46.1355 73.2218 46.8217 71.247H27.8308C28.517 73.2218 29.8002 74.9333 31.502 76.1436C33.2037 77.3539 35.2395 78.0029 37.3262 78.0002Z" fill="#440298" />
                </g>
                <defs>
                  <filter id="filter0_d_864_227" x="40.4346" y="0" width="65.2178" height="58.5713" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dy="7" />
                    <feGaussianBlur stdDeviation="3.5" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_864_227" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_864_227" result="shape" />
                  </filter>
                  <filter id="filter1_d_864_227" x="0" y="10.4678" width="74.6523" height="81.5327" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dy="7" />
                    <feGaussianBlur stdDeviation="3.5" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_864_227" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_864_227" result="shape" />
                  </filter>
                </defs>
              </svg>

              <h1 className='font-bold text-xl leading-none'>Remind <span className='block text-center'>Pay</span></h1>

            </Link>
          </div>

          <div className="text-sm lg:flex-grow self-start flex justify-end pr-6 pt-6 gap-14 items-center">
            <Link to="/" className={`lg:inline-block lg:mt-0 font-bold ${active == 'home' ? classborder : ''}`}>
              Home
            </Link>
            <Link to="/howitwork" className={`lg:inline-block lg:mt-0 font-bold ${active == 'how' ? classborder : ''}`}>
              How it Work
            </Link>
            <Link to="/about" className={`lg:inline-block lg:mt-0 font-bold ${active == 'about' ? classborder : ''}`}>
              About
            </Link>
            <Link to="/contact" className={`lg:inline-block lg:mt-0 font-bold ${active == 'contact' ? classborder : ''}`}>
              Contact
            </Link>

            <Link to="/Signin" className="font-semibold  px-8 py-1 bg-blue-regular rounded-md text-purple-half-light hover:bg-blue-regular">Sing in</Link>

            <Link to="/Login" className="font-bold text-blue-regular">Log in</Link>

            <Link>
              <div className='rounded-full w-10 h-10 bg-blue-regular flex justify-center items-center'>
                <svg width="30" height="32" viewBox="0 0 30 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15.3747 29.2559H15.2497C13.5354 29.2424 11.8409 28.8737 10.2654 28.1715C8.68999 27.4694 7.26528 26.4478 6.07473 25.1667C3.86703 22.7148 2.61208 19.5006 2.55206 16.1443C2.49204 12.788 3.63121 9.52756 5.74973 6.99223C7.11458 5.40372 8.83039 4.18309 10.7497 3.43524C10.9737 3.34574 11.2177 3.32508 11.4527 3.37572C11.6876 3.42636 11.9036 3.54617 12.0747 3.72084C12.2332 3.88872 12.3449 4.09816 12.3977 4.3268C12.4506 4.55544 12.4426 4.7947 12.3747 5.01901C11.6897 6.96748 11.5539 9.07846 11.9835 11.1042C12.413 13.13 13.39 14.9865 14.7997 16.4559C16.2226 17.9155 18.0145 18.9267 19.9679 19.3724C21.9213 19.8181 23.9562 19.6801 25.8372 18.9744C26.0611 18.8925 26.3028 18.8786 26.534 18.9341C26.7653 18.9897 26.9765 19.1125 27.143 19.2882C27.3095 19.4638 27.4245 19.6851 27.4744 19.9261C27.5242 20.1671 27.507 20.4178 27.4247 20.649C26.7862 22.4194 25.7886 24.0265 24.4997 25.3614C23.3008 26.6028 21.8774 27.586 20.3114 28.2543C18.7455 28.9227 17.0678 29.2631 15.3747 29.2559ZM9.32473 7.08311C8.69682 7.54045 8.12214 8.07193 7.61223 8.66688C5.8929 10.713 4.9665 13.3493 5.01269 16.0645C5.05889 18.7798 6.07438 21.3805 7.86223 23.3622C8.82288 24.3984 9.97381 25.2241 11.247 25.7904C12.5201 26.3568 13.8897 26.6523 15.2747 26.6596H15.3747C17.0325 26.6586 18.6661 26.2471 20.14 25.4591C21.6139 24.6712 22.8857 23.5295 23.8497 22.1289C21.8852 22.3933 19.8884 22.1865 18.0128 21.5245C16.1371 20.8625 14.4326 19.7628 13.03 18.3099C11.6274 16.857 10.5641 15.0896 9.92183 13.1434C9.27951 11.1973 9.07525 9.12406 9.32473 7.08311Z" fill="#C293FF" />
                </svg>
              </div>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default NavbarHomepage