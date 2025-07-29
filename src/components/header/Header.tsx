import Specifications from "../specifications/Specifications";


function Header() {
  return (
    <div className="bg-bg1 relative pb-16 xl:pb-32" id="Header">
      <hr className="w-auto h-[0.0625rem] text-grey mx-6 xl:mx-32 xl:mb-16" />
      <h1 className="hidden xl:block text-brand2 BG-text-U text-center">
        Developer
      </h1>
      <Specifications />

      <div className="mx-6 xl:mx-32 xl:flex xl:justify-around items-center">
        <div>
          <div className="mb-8">
            <span className="Code-M text-brand2 IBM">&lt;h1&gt;</span>
            <h1 className="pl-4 H2-U H1-U text-white flex flex-col xl:gap-11 xl:mt-4">
              <p>Hey</p>
              <p>
                Im <span className="text-brand1">Sajjad</span>,
              </p>
              <p className="hidden xl:block">
                Front-End Developer
                <span className="Code-M text-brand2 ml-4 IBM">&lt;/h1&gt;</span>
              </p>
              <p className="xl:hidden block">Front-End Developer</p>
            </h1>
            <span className="Code-M text-brand2 xl:hidden block IBM">
              &lt;/h1&gt;
            </span>
          </div>

          <div>
            <span className="Code-M text-brand2 IBM">&lt;p&gt;</span>
            <h5 className="pl-6 Para-M text-white my-4 xl:hidden IBM">
              <p>I help business grow by</p>
              <p>crafting amazing web </p>
              <p>experiences. If youre </p>
              <p>looking for a developer that </p>
              <p>likes to get stuff done,</p>
            </h5>
            <h5 className="pl-6 Para-M text-white tracking-widest my-4 hidden xl:flex flex-col">
              <p>
                I help business grow by crafting amazing web experiences. If
                youre{" "}
              </p>
              <p>looking for a developer that likes to get stuff done,</p>
            </h5>
            <span className="Code-M text-brand2 IBM">&lt;/p&gt;</span>
          </div>

          <div className="flex items-center justify-center xl:justify-start mt-4 xl:pl-6">
            <a className="H2-M text-brand1 mr-4 IBM" href="mailto:sajjadaskaridev@gmail.com">Lets Talk</a>
            <span className="bg-grey p-2 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M1.00014 5.98266C0.999973 5.99253 0.999957 6.00239 1.00009 6.01225V18C1.00009 19.6523 2.3478 21 4.00009 21H20.0001C21.6524 21 23.0001 19.6523 23.0001 18V6.01236C23.0002 6.00242 23.0002 5.99247 23 5.98251C22.9906 4.33822 21.6465 3 20.0001 3H4.00009C2.35359 3 1.00953 4.3383 1.00014 5.98266ZM3.10666 5.55395C3.27204 5.22692 3.61212 5 4.00009 5H20.0001C20.3881 5 20.7281 5.22692 20.8935 5.55395L12.0001 11.7793L3.10666 5.55395ZM21.0001 7.92066V18C21.0001 18.5477 20.5478 19 20.0001 19H4.00009C3.45237 19 3.00009 18.5477 3.00009 18V7.92066L11.4266 13.8192C11.7709 14.0603 12.2292 14.0603 12.5735 13.8192L21.0001 7.92066Z"
                  fill="#12F7D6"
                />
              </svg>
            </span>
          </div>
        </div>

        <div className="w-[13.43rem] h-[23.62rem] rounded-[5rem] bg-bg2 flex flex-col py-12 px-8 gap-12 mt-16 xl:my-4 mx-auto xl:mx-0 IBM">
          <div className="flex items-center">
            <h1 className="Number-M text-brand1 mr-4">2</h1>
            <h2 className="Para-M text-white">Programming Language</h2>
          </div>

          <div className="flex items-center">
            <h1 className="Number-M text-brand1 mr-4">8</h1>
            <h2 className="Para-M text-white">Development Tools</h2>
          </div>

          <div className="flex items-center">
            <h1 className="Number-M text-brand1 mr-4">1</h1>
            <h2 className="Para-M text-white">Years of Experience</h2>
          </div>
        </div>
      </div>
    </div>
  );
}


export default Header;