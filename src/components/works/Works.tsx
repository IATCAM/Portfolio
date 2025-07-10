import NavigationBar from "../navigationBar/NavigationBar";


function Works() {

    const background = "https://umpxyqynyvkgcsphpthq.supabase.co/storage/v1/object/public/articles-image//bgWorks.png";

  return (
    <div className='relative' id="Works">
        <div className="absolute inset-0 bg-bg1 bg-[200%] bg-repeat filter brightness-30" style={{ backgroundImage: `url(${background})`}}></div>
        <div className="relative z-10">
            <NavigationBar title="Works" description="I had the pleasure of working with these awesome projects" icon={<svg xmlns="http://www.w3.org/2000/svg" width="194" height="12" viewBox="0 0 194 12" fill="none">
                    <path d="M0.166667 6C0.166667 8.94552 2.55448 11.3333 5.5 11.3333C8.44552 11.3333 10.8333 8.94552 10.8333 6C10.8333 3.05448 8.44552 0.666667 5.5 0.666667C2.55448 0.666667 0.166667 3.05448 0.166667 6ZM183.167 6C183.167 8.94552 185.554 11.3333 188.5 11.3333C191.446 11.3333 193.833 8.94552 193.833 6C193.833 3.05448 191.446 0.666667 188.5 0.666667C185.554 0.666667 183.167 3.05448 183.167 6ZM5.5 6V7H188.5V6V5H5.5V6Z" fill="#12F7D6"/>
                </svg>} />

                <div className="relative flex justify-center items-center mt-20 pb-16 xl:mt-[13rem] xl:pb-32">
                    <div className="">
                        <img className="w-[18.59rem] h-[12.37rem] xl:w-[40.56rem] xl:h-[27rem] " src="https://umpxyqynyvkgcsphpthq.supabase.co/storage/v1/object/public/articles-image//dualscreen.png" alt="" />
                    </div>
                    <div>
                        <img className="w-[6.07rem] h-[7.96rem] absolute left-[5.72rem] top-[1.6rem] xl:w-[13.25rem] xl:h-[17.37rem] xl:top-[3.5rem] xl:left-[30.67rem]  " src="https://umpxyqynyvkgcsphpthq.supabase.co/storage/v1/object/public/articles-image//desk1.jpg" alt="" />
                        <img className="w-[8.50rem] h-[4.89rem] absolute left-[12.79rem] top-[3.78rem] xl:w-[18.56rem] xl:h-[10.68rem] xl:top-[8.25rem] xl:left-[46.20rem]  " src="https://umpxyqynyvkgcsphpthq.supabase.co/storage/v1/object/public/articles-image//desk2.png" alt="" />
                    </div>
                    
                    <div>
                        <a className="absolute Media-M Menu-M text-brand1 IBM top-[1.22rem] left-[13.17rem] xl:top-[3.9rem] xl:left-[50rem] " href="#####">View Website</a>
                        <span className="absolute top-[2.72rem] left-[13.17rem] xl:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" width="117" height="3" viewBox="0 0 117 3" fill="none">
                                <path d="M0.928223 1.54346H116.928" stroke="white" strokeWidth="2"/>
                            </svg>
                        </span>
                        <span className="absolute hidden xl:block top-[6.15rem] left-[50rem] ">
                            <svg xmlns="http://www.w3.org/2000/svg" width="174" height="3" viewBox="0 0 174 3" fill="none">
                                <path d="M0.746582 1.43652H173.747" stroke="white" strokeWidth="2"/>
                            </svg>
                        </span>
                        <span className="absolute top-[1.72rem] left-[20.90rem] xl:top-[5.15rem] xl:left-[61.5rem] ">
                            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                                <path fillRule="evenodd" clipRule="evenodd" d="M3.18479 1.92824C2.93543 1.82435 2.64802 1.88122 2.457 2.07223C2.26598 2.26325 2.20912 2.55066 2.31301 2.80002L7.02634 14.1134C7.133 14.3694 7.387 14.5326 7.66418 14.5233C7.94135 14.5139 8.1838 14.334 8.27299 14.0714L9.6016 10.1596L13.1237 13.6817C13.384 13.9421 13.8061 13.9421 14.0665 13.6817C14.3268 13.4214 14.3268 12.9993 14.0665 12.7389L10.5444 9.21683L14.4561 7.88822C14.7187 7.79903 14.8987 7.55658 14.908 7.27941C14.9174 7.00224 14.7541 6.74823 14.4981 6.64158L3.18479 1.92824ZM7.57823 11.971L4.16637 3.78161L12.3558 7.19346L9.10067 8.29906C8.9045 8.36569 8.75045 8.51973 8.68382 8.7159L7.57823 11.971Z" fill="#12F7D6"/>
                            </svg>
                        </span>
                    </div>
                </div>
        </div>
    </div>
  )
}


export default Works;
