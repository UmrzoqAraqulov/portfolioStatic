import { Link } from "react-router-dom";
import React, { useState } from "react";
import { toast } from "react-toastify";

const ContactPage = () => {
  const obj = {
    user: "",
    title: "",
    message: "",
  };
  const [messages, setMessage] = useState(obj);

  const { user, title, message } = messages;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setMessage({ ...messages, [name]: value });
  };

  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setMessage(obj);
    toast.success("A message has been sent");
  };

  const btnStyle =
    "bg-[#18d26e] bg-opacity-100 text-white mx-auto flex justify-center items-center gap-2 py-2 mt-6 rounded-md w-[200px]";
  return (
    <section className="containr w-full bg-black bg-opacity-60 py-4 px-6 rounded">
      <div className="startStyle">
        <h4>Contact</h4>
        <div></div>
      </div>
      <h2
        style={{ textTransform: "uppercase" }}
        className="text-[40px] font-bold max-[600px]:text-[34px] max-[400px]:text-[26px]"
      >
        Contact me
      </h2>
      <div className="pt-6 grid grid-cols-1 min-[800px]:grid-cols-2 gap-5">
        <div className="flex gap-3 items-center py-2 px-3 bg-[#151515] bg-opacity-60">
          <div className="py-3 px-4 rounded-full bg-[#2d2d2d]">
            <i className="fa-solid fa-location-dot text-[#18d16d] text-[22px]"></i>
          </div>
          <div>
            <h3 className="text-[#888888] text-2xl sm:text-3xl font-bold">
              My Address
            </h3>
            <p className="text-sm sm:text-base">Samarqand</p>
          </div>
        </div>
        <div className="flex gap-3 items-center py-2 px-3 bg-[#151515] bg-opacity-60">
          <div className="py-3 px-4 rounded-full bg-[#2d2d2d]">
            <i className="fa-solid fa-share-nodes text-[#18d16d] text-[22px]"></i>
          </div>
          <div>
            <h3 className="text-[#888888] sm:text-3xl text-2xl font-bold">
              Social Profiles
            </h3>
            <p className="flex gap-2 text-2xl text-white">
              <Link to="12">
                <i className="fa-brands hover:text-[#18d26e] fa-facebook"></i>
              </Link>
              <Link to="12">
                <i className="fa-brands hover:text-[#18d26e] fa-youtube"></i>
              </Link>
              <Link to="12">
                <i className="fa-brands hover:text-[#18d26e] fa-instagram"></i>
              </Link>
              <Link to="12">
                <i className="fa-brands hover:text-[#18d26e] fa-linkedin"></i>
              </Link>
            </p>
          </div>
        </div>
        <div className="flex gap-3 items-center py-2 px-3 bg-[#151515] bg-opacity-60">
          <div className="py-3 px-4 rounded-full bg-[#2d2d2d]">
            <i className="fa-regular fa-envelope text-[#18d16d] text-[22px]"></i>
          </div>
          <div>
            <h3 className="text-[#888888] sm:text-3xl text-2xl font-bold">
              Email Me
            </h3>
            <p>mrumrzoqaraqulov@gmail.com</p>
          </div>
        </div>
        <div className="flex gap-3 items-center py-2 px-3 bg-[#151515] bg-opacity-60">
          <div className="py-3 px-4 rounded-full bg-[#2d2d2d]">
            <i className="fa-solid fa-phone-volume text-[#18d16d] text-[22px]"></i>
          </div>
          <div>
            <h3 className="text-[#888888] sm:text-3xl text-2xl font-bold">
              Call Me
            </h3>
            <p>+998 91 779 69 23</p>
          </div>
        </div>
      </div>
      <form
        className="px-5 py-8 mt-5 message-form flex gap-4 flex-col"
        onSubmit={submit}
      >
        <div className="grid grid-cols-1 bg-opacity-60 sm:grid-cols-2 gap-4">
          <input
            className="message-input"
            onChange={handleChange}
            type="text"
            name="user"
            required
            value={user}
            placeholder="Email or Phone Number"
          />
          <input
            className="message-input"
            onChange={handleChange}
            type="text"
            required
            name="title"
            value={title}
            placeholder="What is your purpose"
          />
        </div>
        <input
          className="message-input "
          onChange={handleChange}
          type="text"
          name="message"
          value={message}
          placeholder="Message"
          required
        />
        <button type="submit" className={btnStyle}>Send Message</button>
      </form>
    </section>
  );
};

export default ContactPage;
