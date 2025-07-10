// import NavigationBar from "../navigationBar/NavigationBar";


// function Contact() {
//   return (
//     <div className="bg-bg2 pb-16" id="Contact">
//       <NavigationBar title="Contact" description="I’m currently available for freelance work" icon={<svg xmlns="http://www.w3.org/2000/svg" width="240" height="12" viewBox="0 0 240 12" fill="none">
//             <path d="M0.666667 6C0.666667 8.94552 3.05448 11.3333 6 11.3333C8.94552 11.3333 11.3333 8.94552 11.3333 6C11.3333 3.05448 8.94552 0.666667 6 0.666667C3.05448 0.666667 0.666667 3.05448 0.666667 6ZM228.667 6C228.667 8.94552 231.054 11.3333 234 11.3333C236.946 11.3333 239.333 8.94552 239.333 6C239.333 3.05448 236.946 0.666667 234 0.666667C231.054 0.666667 228.667 3.05448 228.667 6ZM6 7H234V5H6V7Z" fill="#12F7D6"/>
//         </svg>} />

//         <div className="mx-auto">
//             <div className="mb-16 mt-[6rem] xl:mt-[14rem] flex justify-center ">
//                 <h1 className="capitalize text-brand1 Menu-MM IBM contact-radius border-2 border-brand1 py-4 px-10">
//                     Send me a message
//                 </h1>
//             </div>

//             <div className="w-[18.35rem] flex flex-col mx-auto xl:w-[30rem]">
//                 <div className="flex justify-between gap-6 Para-U">
//                     <div className="flex flex-col w-1/2">
//                         <label className="text-brand1">Your name *</label>
//                         <input className="text-white mt-6 border-b border-brand2 pb-2 outline-0" type="text" placeholder="Enter your name" />
//                     </div>
//                     <div className="flex flex-col w-1/2">
//                         <label className="text-brand1">Your email *</label>
//                         <input className="text-white mt-6 border-b border-brand2 pb-2 outline-0" type="text" placeholder="Enter your email" />
//                     </div>
//                 </div>
//                 <div className="flex flex-col my-16">
//                     <label className="text-brand1">Your message *</label>
//                     <input className="text-white mt-6 border-b border-brand2 pb-2 outline-0"  type="text" placeholder="Enter your needs" />
//                 </div>

//                 <button className="bg-brand1 py-4 px-8 flex items-center justify-between Button-U rounded-4xl cursor-pointer text-bg1 xl:w-[14.62rem] xl:mx-auto">
//                     Send Message
//                     <span>
//                         <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
//                             <path fillRule="evenodd" clipRule="evenodd" d="M22.7071 1.29292C22.9306 1.5164 23.0262 1.81935 22.9939 2.11081C22.9848 2.19252 22.9657 2.27332 22.9366 2.35121L15.9439 22.3304C15.8084 22.7174 15.4504 22.9825 15.0408 22.9992C14.6311 23.0159 14.2527 22.7808 14.0862 22.4062L10.2424 13.7576L1.59387 9.91384C1.21919 9.74731 0.984122 9.36894 1.00084 8.95926C1.01755 8.54959 1.28265 8.19162 1.66965 8.05617L21.6488 1.06348C21.7272 1.03414 21.8085 1.01497 21.8907 1.00598C21.9511 0.999338 22.0117 0.998262 22.0717 1.00259C22.3032 1.01913 22.5301 1.11591 22.7071 1.29292ZM18.1943 4.3915L4.71108 9.11063L10.7785 11.8073L18.1943 4.3915ZM12.1928 13.2215L19.6085 5.80571L14.8894 19.289L12.1928 13.2215Z" fill="#292F36"/>
//                         </svg>
//                     </span>
//                 </button>
//             </div>
//         </div>
//     </div>
//   )
// }


// export default Contact;




import { useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import NavigationBar from "../navigationBar/NavigationBar";


function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess(false);

   
    if (!formData.name || !formData.email || !formData.message) {
      setError("Please fill in all the fields");
      return;
    }

    const { error } = await supabase.from("messages").insert([formData]);

    if (error) {
      console.error("Message sending failed", error.message);
      setError("Message sending failed");
    } else {
      setSuccess(true);
      setFormData({ name: "", email: "", message: "" });
    }
  };

  return (
    <div className="bg-bg2 pb-16" id="Contact">
      <NavigationBar
        title="Contact"
        description="I’m currently available for freelance work"
        icon={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="240"
            height="12"
            viewBox="0 0 240 12"
            fill="none"
          >
            <path
              d="M0.666667 6C0.666667 8.94552 3.05448 11.3333 6 11.3333C8.94552 11.3333 11.3333 8.94552 11.3333 6C11.3333 3.05448 8.94552 0.666667 6 0.666667C3.05448 0.666667 0.666667 3.05448 0.666667 6ZM228.667 6C228.667 8.94552 231.054 11.3333 234 11.3333C236.946 11.3333 239.333 8.94552 239.333 6C239.333 3.05448 236.946 0.666667 234 0.666667C231.054 0.666667 228.667 3.05448 228.667 6ZM6 7H234V5H6V7Z"
              fill="#12F7D6"
            />
          </svg>
        }
      />

      <form onSubmit={handleSubmit}>
        <div className="mx-auto">
          <div className="mb-16 mt-[6rem] xl:mt-[14rem] flex justify-center ">
            <h1 className="capitalize text-brand1 Menu-MM IBM contact-radius border-2 border-brand1 py-4 px-10">
              Send me a message
            </h1>
          </div>

          <div className="w-[18.35rem] flex flex-col mx-auto xl:w-[30rem]">
            <div className="flex justify-between gap-6 Para-U">
              <div className="flex flex-col w-1/2">
                <label className="text-brand1">Your name *</label>
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="text-white mt-6 border-b border-brand2 pb-2 outline-0"
                  type="text"
                  placeholder="Enter your name"
                />
              </div>
              <div className="flex flex-col w-1/2">
                <label className="text-brand1">Your email *</label>
                <input
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="text-white mt-6 border-b border-brand2 pb-2 outline-0"
                  type="email"
                  placeholder="Enter your email"
                />
              </div>
            </div>

            <div className="flex flex-col my-16">
              <label className="text-brand1">Your message *</label>
              <input
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="text-white mt-6 border-b border-brand2 pb-2 outline-0"
                type="text"
                placeholder="Enter your needs"
              />
            </div>

            {error && <p className="text-red-500 mt-2">{error}</p>}
            {success && <p className="text-green-400 mt-2">Message sent successfully✅</p>}

            <button
              type="submit"
              className="bg-brand1 py-4 px-8 flex items-center justify-between Button-U rounded-4xl cursor-pointer text-bg1 xl:w-[14.62rem] xl:mx-auto"
            >
              Send Message
              <span>
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
                    d="M22.7071 1.29292C22.9306 1.5164 23.0262 1.81935 22.9939 2.11081C22.9848 2.19252 22.9657 2.27332 22.9366 2.35121L15.9439 22.3304C15.8084 22.7174 15.4504 22.9825 15.0408 22.9992C14.6311 23.0159 14.2527 22.7808 14.0862 22.4062L10.2424 13.7576L1.59387 9.91384C1.21919 9.74731 0.984122 9.36894 1.00084 8.95926C1.01755 8.54959 1.28265 8.19162 1.66965 8.05617L21.6488 1.06348C21.7272 1.03414 21.8085 1.01497 21.8907 1.00598C21.9511 0.999338 22.0117 0.998262 22.0717 1.00259C22.3032 1.01913 22.5301 1.11591 22.7071 1.29292ZM18.1943 4.3915L4.71108 9.11063L10.7785 11.8073L18.1943 4.3915ZM12.1928 13.2215L19.6085 5.80571L14.8894 19.289L12.1928 13.2215Z"
                    fill="#292F36"
                  />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Contact;
