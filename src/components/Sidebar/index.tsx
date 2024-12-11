import { useEffect, useRef, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import Logo from '../../images/logo/logo.png';

interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (arg: boolean) => void;
}

const Sidebar = ({ sidebarOpen, setSidebarOpen }: SidebarProps) => {
  const location = useLocation();
  const { pathname } = location;

  const trigger = useRef<any>(null);
  const sidebar = useRef<any>(null);

  const storedSidebarExpanded = localStorage.getItem('sidebar-expanded');
  const [sidebarExpanded, setSidebarExpanded] = useState(
    storedSidebarExpanded === null ? false : storedSidebarExpanded === 'true',
  );

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }: MouseEvent) => {
      if (!sidebar.current || !trigger.current) return;
      if (
        !sidebarOpen ||
        sidebar.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setSidebarOpen(false);
    };
    document.addEventListener('click', clickHandler);
    return () => document.removeEventListener('click', clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }: KeyboardEvent) => {
      if (!sidebarOpen || keyCode !== 27) return;
      setSidebarOpen(false);
    };
    document.addEventListener('keydown', keyHandler);
    return () => document.removeEventListener('keydown', keyHandler);
  });

  useEffect(() => {
    localStorage.setItem('sidebar-expanded', sidebarExpanded.toString());
    if (sidebarExpanded) {
      document.querySelector('body')?.classList.add('sidebar-expanded');
    } else {
      document.querySelector('body')?.classList.remove('sidebar-expanded');
    }
  }, [sidebarExpanded]);

  return (
    <aside
      ref={sidebar}
      className={`absolute left-0 top-0 z-9999 flex h-screen w-72.5 flex-col overflow-y-hidden bg-white duration-300 ease-linear    lg:static lg:translate-x-0 ${
        sidebarOpen ? 'translate-x-0' : '-translate-x-full'
      }`}
    >
      {/* <!-- SIDEBAR HEADER --> */}
      <div className="flex items-center justify-between lg:mx-auto gap-2 px-6 py-5.5 lg:py-6.5">
        <NavLink to="/">
          <img src={Logo} alt="Logo" />
        </NavLink>

        <button
          ref={trigger}
          onClick={() => setSidebarOpen(!sidebarOpen)}
          aria-controls="sidebar"
          aria-expanded={sidebarOpen}
          className="block lg:hidden"
        >
          <svg
            className="fill-current"
            width="20"
            height="18"
            viewBox="0 0 20 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19 8.175H2.98748L9.36248 1.6875C9.69998 1.35 9.69998 0.825 9.36248 0.4875C9.02498 0.15 8.49998 0.15 8.16248 0.4875L0.399976 8.3625C0.0624756 8.7 0.0624756 9.225 0.399976 9.5625L8.16248 17.4375C8.31248 17.5875 8.53748 17.7 8.76248 17.7C8.98748 17.7 9.17498 17.625 9.36248 17.475C9.69998 17.1375 9.69998 16.6125 9.36248 16.275L3.02498 9.8625H19C19.45 9.8625 19.825 9.4875 19.825 9.0375C19.825 8.55 19.45 8.175 19 8.175Z"
              fill=""
            />
          </svg>
        </button>
      </div>
      {/* <!-- SIDEBAR HEADER --> */}

      <div className="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear">
        {/* <!-- Sidebar Menu --> */}
        <nav className="mt-5 py-4 px-4 lg:mt-9 lg:px-6">
          {/* <!-- Menu Group --> */}
          <div>
            <ul className="mb-6 flex flex-col gap-1.5">
              {/* <!-- Menu Item Dashboard --> */}

              {/* <!-- Menu Item Dashboard --> */}

              {/* <!-- Menu Item Extract --> */}
              <li>
                <NavLink
                  to="/extract"
                  className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark   hover:text-white ${
                    pathname.includes('extract') && 'bg-graydark   text-white'
                  }`}
                >
                  <svg
                    width="18"
                    height="19"
                    viewBox="0 0 18 18"
                    className="fill-current"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.89775 7.10225L3.02275 2.22725L2.22725 3.02275L7.10225 7.89775L7.89775 7.10225Z"
                      fill=""
                    />
                    <path d="M6 2.25H2.25V6" stroke="" stroke-width="1.125" />
                    <path d="M6 15.75H2.25V12" stroke="" stroke-width="1.125" />
                    <path d="M12 2.25H15.75V6" stroke="" stroke-width="1.125" />
                    <path
                      d="M12 15.75H15.75V12"
                      stroke=""
                      stroke-width="1.125"
                    />
                    <path
                      d="M7.10225 10.1023L2.22725 14.9773L3.02275 15.7727L7.89775 10.8977L7.10225 10.1023Z"
                      fill=""
                    />
                    <path
                      d="M10.8977 7.89775L15.7727 3.02275L14.9773 2.22725L10.1023 7.10225L10.8977 7.89775Z"
                      fill=""
                    />
                    <path
                      d="M10.1023 10.8977L14.9773 15.7727L15.7727 14.9773L10.8977 10.1023L10.1023 10.8977Z"
                      fill=""
                    />
                  </svg>
                  Extract
                </NavLink>
              </li>
              {/* <!-- Menu Item Extract --> */}

              {/* <!-- Menu Item Ideator --> */}
              <li>
                <NavLink
                  to="/ideator"
                  className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark   hover:text-white ${
                    pathname.includes('ideator') && 'bg-graydark   text-white'
                  }`}
                >
                  <svg
                    width="18"
                    height="19"
                    viewBox="0 0 18 18"
                    className="fill-current"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.37354 4.125L7.87354 6.75H10.1238L8.62354 9.375"
                      stroke=""
                      stroke-width="1.125"
                    />
                    <path
                      d="M3.85714 10.5C3.31301 9.60612 3 8.55882 3 7.43915C3 4.15905 5.68629 1.5 9 1.5C12.3137 1.5 15 4.15905 15 7.43915C15 8.55882 14.687 9.60612 14.1429 10.5"
                      stroke=""
                      stroke-width="1.125"
                    />
                    <path
                      d="M12.75 12H5.25L6 14.25H12L12.75 12Z"
                      stroke=""
                      stroke-width="1.125"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M11.25 14.25L10.5 16.5H7.5L6.75 14.25"
                      stroke=""
                      stroke-width="1.125"
                      stroke-linejoin="round"
                    />
                  </svg>
                  Ideator
                </NavLink>
              </li>
              {/* <!-- Menu Item Ideator --> */}

              {/* <!-- Menu Item Forms --> */}

              {/* <!-- Menu Item Review --> */}
              <li>
                <NavLink
                  to="/review"
                  className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark   hover:text-white ${
                    pathname.includes('review') && 'bg-graydark   text-white'
                  }`}
                >
                  <svg
                    width="18"
                    height="18"
                    className="fill-current"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_45_524)">
                      <path
                        d="M6 9.375H12M6 5.625H9"
                        stroke="fill-current"
                        stroke-width="1.125"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M1.5 1.5L1.5 0.937503L0.9375 0.937503V1.5H1.5ZM16.5 1.5H17.0625V0.9375L16.5 0.9375V1.5ZM16.5 13.5V14.0625H17.0625V13.5H16.5ZM1.5 13.5H0.9375V14.0625H1.5V13.5ZM4.5 16.5H3.9375C3.9375 16.7162 4.06144 16.9133 4.25633 17.007C4.45122 17.1006 4.68255 17.0743 4.85139 16.9392L4.5 16.5ZM4.5 13.5H5.0625V12.9375H4.5V13.5ZM8.25 13.5L8.25 12.9375H8.05269L7.89861 13.0608L8.25 13.5ZM1.5 2.0625L16.5 2.0625V0.9375L1.5 0.937503L1.5 2.0625ZM15.9375 1.5V13.5H17.0625V1.5H15.9375ZM0.9375 1.5V13.5H2.0625V1.5H0.9375ZM1.5 14.0625H4.5V12.9375H1.5V14.0625ZM5.0625 16.5V13.5H3.9375V16.5H5.0625ZM8.25 14.0625L16.5 14.0625V12.9375L8.25 12.9375L8.25 14.0625ZM4.85139 16.9392L8.60139 13.9392L7.89861 13.0608L4.14861 16.0608L4.85139 16.9392Z"
                        fill="fill-current"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_45_524">
                        <rect width="18" height="18" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  Review
                </NavLink>
              </li>
              {/* <!-- Menu Item Review --> */}

              {/* <!-- Menu Item Editor --> */}
              <li>
                <NavLink
                  to="/editor"
                  className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark   hover:text-white ${
                    pathname.includes('editor') && 'bg-graydark   text-white'
                  }`}
                >
                  <svg
                    width="18"
                    height="18"
                    className="fill-current"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.25 2.25H15.75M8.25 6.75H15.75"
                      stroke={`${
                        pathname.includes('editor') ? 'white' : 'black'
                      }`}
                      stroke-width="1.125"
                      stroke-linecap="square"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M2.25 11.25H15.75"
                      stroke={`${
                        pathname.includes('editor') ? 'white' : 'black'
                      }`}
                      stroke-width="1.125"
                      stroke-linecap="square"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M2.25 15.75H15.75"
                      stroke={`${
                        pathname.includes('editor') ? 'white' : 'black'
                      }`}
                      stroke-width="1.125"
                      stroke-linecap="square"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M2.25 2.25L4.875 4.875L2.25 7.5"
                      stroke={`${
                        pathname.includes('editor') ? 'white' : 'black'
                      }`}
                      stroke-width="1.125"
                    />
                  </svg>
                  Editor
                </NavLink>
              </li>
              {/* <!-- Menu Item Editor --> */}

              {/* <!-- Menu Item Research --> */}
              <li>
                <NavLink
                  to="/research"
                  className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark   hover:text-white ${
                    pathname.includes('research') && 'bg-graydark   text-white'
                  }`}
                >
                  <svg
                    width="18"
                    height="18"
                    className="fill-current"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_45_530)">
                      <path
                        d="M2.42611 11.5559L1.94213 11.8425L1.94213 11.8425L2.42611 11.5559ZM14.625 13.125L14.4055 12.6071L14.1024 12.7355L14.0659 13.0628L14.625 13.125ZM16.5 12.3305L16.7195 12.8484C16.8625 12.7878 16.9741 12.6708 17.0278 12.525C17.0815 12.3792 17.0726 12.2177 17.003 12.0788L16.5 12.3305ZM14.8333 9H14.2708V9.13289L14.3303 9.25173L14.8333 9ZM10.6262 16.4956L10.6398 15.9333H10.6398L10.6262 16.4956ZM12.9117 16.4987L12.9127 17.0612H12.9127L12.9117 16.4987ZM14.398 15.1654L14.957 15.2276L14.398 15.1654ZM7.13942 4.83013L6.82474 5.29638H6.82474L7.13942 4.83013ZM10.3734 5.45718L9.81139 5.43356C9.80353 5.62051 9.88915 5.79913 10.0398 5.91009C10.1905 6.02106 10.3864 6.04984 10.5627 5.98688L10.3734 5.45718ZM4.77993 7.07458L4.86333 7.63086C5.04809 7.60316 5.20703 7.48554 5.28753 7.31695C5.36803 7.14836 5.35958 6.95081 5.26497 6.78972L4.77993 7.07458ZM15.3958 8.16494C15.3958 4.1732 12.1591 0.9375 8.16667 0.9375V2.0625C11.538 2.0625 14.2708 4.79479 14.2708 8.16494H15.3958ZM8.16667 0.9375C4.17425 0.9375 0.9375 4.1732 0.9375 8.16494H2.0625C2.0625 4.79479 4.79529 2.0625 8.16667 2.0625V0.9375ZM0.9375 8.16494C0.9375 9.50674 1.30377 10.7647 1.94213 11.8425L2.91009 11.2692C2.37169 10.3602 2.0625 9.29952 2.0625 8.16494H0.9375ZM2.60417 13.8338V16.4961H3.72917V13.8338H2.60417ZM14.8445 13.6429L16.7195 12.8484L16.2805 11.8126L14.4055 12.6071L14.8445 13.6429ZM17.003 12.0788L15.3364 8.74827L14.3303 9.25173L15.997 12.5822L17.003 12.0788ZM14.2708 8.16494V9H15.3958V8.16494H14.2708ZM1.94213 11.8425C2.18795 12.2576 2.3471 12.547 2.45071 12.8372C2.5498 13.1147 2.60417 13.4119 2.60417 13.8338H3.72917C3.72917 13.3022 3.65867 12.8747 3.5102 12.4589C3.36624 12.0557 3.15511 11.6829 2.91009 11.2692L1.94213 11.8425ZM8.4375 14.7783C8.4375 15.967 9.34824 17.0272 10.6125 17.0579L10.6398 15.9333C10.0389 15.9187 9.5625 15.4106 9.5625 14.7783H8.4375ZM10.6125 17.0579C10.8441 17.0636 11.9805 17.0628 12.9127 17.0612L12.9108 15.9362C11.966 15.9378 10.8522 15.9384 10.6398 15.9333L10.6125 17.0579ZM14.0659 13.0628L13.8389 15.1032L14.957 15.2276L15.1841 13.1872L14.0659 13.0628ZM12.9127 17.0612C13.9619 17.0594 14.8411 16.2695 14.957 15.2276L13.8389 15.1032C13.7862 15.5771 13.3866 15.9354 12.9108 15.9362L12.9127 17.0612ZM8.4407 6.22297C8.4407 5.44868 8.04885 4.7653 7.45411 4.36389L6.82474 5.29638C7.12103 5.49635 7.3157 5.83616 7.3157 6.22297H8.4407ZM10.791 4.82263C10.5791 4.82263 10.3746 4.85944 10.1841 4.92748L10.5627 5.98688C10.6334 5.96161 10.71 5.94763 10.791 5.94763V4.82263ZM9.58225 7.99652C9.90207 8.28469 10.3265 8.46115 10.791 8.46115V7.33615C10.6161 7.33615 10.4572 7.27059 10.3353 7.16075L9.58225 7.99652ZM4.96537 10.1368C5.57992 10.1368 6.12161 9.8289 6.44768 9.36275L5.52582 8.71792C5.40005 8.89773 5.19524 9.01182 4.96537 9.01182V10.1368ZM9.33461 9.01182C8.67651 9.01182 8.15147 9.30014 7.80435 9.74275C7.46844 10.1711 7.3157 10.7191 7.3157 11.25H8.4407C8.4407 10.9215 8.53691 10.6317 8.68958 10.437C8.83105 10.2566 9.03422 10.1368 9.33461 10.1368V9.01182ZM10.2285 7.89865C10.2285 8.22713 10.1323 8.51697 9.97964 8.71164C9.83817 8.89202 9.635 9.01182 9.33461 9.01182V10.1368C9.99271 10.1368 10.5178 9.8485 10.8649 9.4059C11.2008 8.97759 11.3535 8.42959 11.3535 7.89865H10.2285ZM7.45411 4.36389C6.497 3.71791 5.39959 3.99795 4.72494 4.62703C4.04541 5.26066 3.69548 6.33881 4.29489 7.35944L5.26497 6.78972C4.98358 6.31059 5.11896 5.79783 5.49216 5.44983C5.87024 5.09728 6.39299 5.00497 6.82474 5.29638L7.45411 4.36389ZM10.9354 5.4808C10.9887 4.21205 10.0808 3.41408 9.12106 3.23043C8.16299 3.04709 7.02408 3.452 6.60826 4.645L7.67059 5.01527C7.86652 4.45314 8.38396 4.23479 8.90962 4.33538C9.43364 4.43565 9.83681 4.82877 9.81139 5.43356L10.9354 5.4808ZM10.791 8.46115C11.3544 8.46115 11.8143 8.23512 12.1253 7.87147C12.426 7.51975 12.5625 7.07018 12.5625 6.64189C12.5625 6.2136 12.426 5.76402 12.1253 5.4123C11.8143 5.04866 11.3544 4.82263 10.791 4.82263V5.94763C11.0336 5.94763 11.1782 6.03579 11.2702 6.14343C11.3725 6.263 11.4375 6.4418 11.4375 6.64189C11.4375 6.84198 11.3725 7.02078 11.2702 7.14034C11.1782 7.24798 11.0336 7.33615 10.791 7.33615V8.46115ZM4.69653 6.5183C3.59944 6.68277 3.1339 7.63077 3.19265 8.44789C3.25155 9.2672 3.8503 10.1368 4.96537 10.1368V9.01182C4.57482 9.01182 4.34172 8.74239 4.31475 8.36722C4.28762 7.98988 4.48219 7.688 4.86333 7.63086L4.69653 6.5183Z"
                        fill=""
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_45_530">
                        <rect width="18" height="18" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  Research
                </NavLink>
              </li>
              {/* <!-- Menu Item Research --> */}

              {/* <!-- Menu Item Inputs --> */}
              <li>
                <NavLink
                  to="/inputs"
                  className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark   hover:text-white ${
                    pathname.includes('inputs') && 'bg-graydark   text-white'
                  }`}
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    className="fill-current"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_45_534)">
                      <path
                        d="M5.9998 16.5V17.0625H6.23279L6.39754 16.8977L5.9998 16.5ZM16.4998 6L16.8975 6.39775C17.003 6.29226 17.0623 6.14918 17.0623 6C17.0623 5.85081 17.003 5.70774 16.8975 5.60225L16.4998 6ZM1.50049 12L1.10273 11.6023L0.937988 11.767V12H1.50049ZM11.9998 1.5L12.3975 1.10225C12.2921 0.996761 12.149 0.937498 11.9998 0.9375C11.8506 0.937502 11.7075 0.996771 11.602 1.10227L11.9998 1.5ZM1.50049 16.5H0.937988V17.0625H1.50049V16.5ZM6.39754 16.8977L16.8975 6.39775L16.102 5.60225L5.60205 16.1023L6.39754 16.8977ZM1.89825 12.3977L12.3976 1.89773L11.602 1.10227L1.10273 11.6023L1.89825 12.3977ZM11.602 1.89775L16.102 6.39775L16.8975 5.60225L12.3975 1.10225L11.602 1.89775ZM5.9998 15.9375H1.50049V17.0625H5.9998V15.9375ZM2.06299 16.5V12H0.937988V16.5H2.06299Z"
                        fill=""
                      />
                      <path
                        d="M9.00049 4.5L13.5005 9"
                        stroke=""
                        stroke-width="1.125"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M9.75 16.5L16.5 16.5"
                        stroke=""
                        stroke-width="1.125"
                        stroke-linejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_45_534">
                        <rect width="18" height="18" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  Inputs
                </NavLink>
              </li>
              {/* <!-- Menu Item Inputs --> */}

              {/* <!-- Menu Item Projects --> */}
              <li>
                <NavLink
                  to="/projects"
                  className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark   hover:text-white ${
                    pathname.includes('projects') && 'bg-graydark   text-white'
                  }`}
                >
                  <svg
                    width="18"
                    height="18"
                    className="fill-current"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_45_541)">
                      <path
                        d="M7.5 1.5H1.5V9H7.5V1.5Z"
                        stroke=""
                        stroke-width="1.125"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M7.5 12H1.5V16.5H7.5V12Z"
                        stroke=""
                        stroke-width="1.125"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M16.5 9H10.5V16.5H16.5V9Z"
                        stroke=""
                        stroke-width="1.125"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M16.5 1.5H10.5V6H16.5V1.5Z"
                        stroke=""
                        stroke-width="1.125"
                        stroke-linejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_45_541">
                        <rect width="18" height="18" fill="" />
                      </clipPath>
                    </defs>
                  </svg>
                  Projects
                </NavLink>
              </li>
              {/* <!-- Menu Item Projects --> */}
              {/* <!-- Menu Item Drafts --> */}
              <li>
                <NavLink
                  to="/drafts"
                  className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark   hover:text-white ${
                    pathname.includes('drafts') && 'bg-graydark   text-white'
                  }`}
                >
                  <svg
                    width="18"
                    height="18"
                    className="fill-current"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.375 16.5V17.0625C15.6857 17.0625 15.9375 16.8107 15.9375 16.5H15.375ZM2.625 16.5H2.0625C2.0625 16.8107 2.31434 17.0625 2.625 17.0625V16.5ZM15.375 1.5H15.9375C15.9375 1.18934 15.6857 0.9375 15.375 0.9375V1.5ZM7.875 1.5V0.9375H7.64201L7.47725 1.10225L7.875 1.5ZM2.625 6.75L2.22725 6.35225L2.0625 6.517V6.75H2.625ZM7.875 6.75V7.3125H8.4375V6.75H7.875ZM15.375 15.9375H2.625V17.0625H15.375V15.9375ZM14.8125 1.5V16.5H15.9375V1.5H14.8125ZM15.375 0.9375H7.875V2.0625H15.375V0.9375ZM2.0625 6.75V16.5H3.1875V6.75H2.0625ZM7.47725 1.10225L2.22725 6.35225L3.02275 7.14775L8.27275 1.89775L7.47725 1.10225ZM7.3125 1.5V6.75H8.4375V1.5H7.3125ZM7.875 6.1875H2.625V7.3125H7.875V6.1875Z"
                      fill=""
                    />
                    <path
                      d="M12 12.75H6"
                      stroke=""
                      stroke-width="1.125"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M12 9.75H9"
                      stroke=""
                      stroke-width="1.125"
                      stroke-linejoin="round"
                    />
                  </svg>
                  Drafts
                </NavLink>
              </li>
              {/* <!-- Menu Item Drafts --> */}
            </ul>
          </div>
        </nav>
        {/* <!-- Sidebar Menu --> */}
      </div>
    </aside>
  );
};

export default Sidebar;
