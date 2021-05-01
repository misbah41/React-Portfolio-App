import React from "react";
import "./Contact.css";
import { useForm } from "react-hook-form";
import Phone from "./SocialIcon/phone-call.png";
import Placeholder from "./SocialIcon/placeholder.png";
import Email from "./SocialIcon/email.png";
import SocialIcon from "./SocialIcon/SocialIcon";
import emailjs from 'emailjs-com';

const socialData = [
  {
    socialTitle: "Email Address",
    socialInfo: "tahermisbah41@gmail.com",
    socialIcon: Email,
  },
  {
    socialTitle: "Phone Number",
    socialInfo: "01779791362",
    socialIcon: Phone,
  },
  {
    socialTitle: "Location",
    socialInfo: "Gulshan Baridhara DOHS",
    socialIcon: Placeholder,
  },
];

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);


  // function sendEmail(e) {
  //   e.preventDefault();

  //   emailjs.sendForm('gmail', 'templates_49172jt', e.target, 'YOUR_USER_ID')
  //     .then((result) => {
  //         console.log(result.text);
  //     }, (error) => {
  //         console.log(error.text);
  //     });
  // }




  return (
    <section id="contact" className="pb-5 pt-5 mb-5">
      <div className="container">
        <h3 className="text-center">Send Me Message</h3>
        <div className="row">
          <div className="col-sm-7">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="row">
                <div className="col-sm-6">
                  <input
                    className="form-control msgInput my-4"
                    placeholder="Enter Name"
                    {...register("name", { required: true })}
                  />
                  {errors.name && <span>Please Enter Your Name</span>}
                </div>
                <div className="col-sm-6">
                  <input
                    className="form-control msgInput my-4"
                    placeholder="Enter Phone Number"
                    {...register("phone", { required: true })}
                  />
                  {errors.phone && <span>Please Enter Your Phone Number</span>}
                </div>
              </div>
              <input
                className="form-control msgInput my-4"
                placeholder="Enter Email"
                {...register("email", { required: true })}
              />
              {errors.email && <span>Please Enter Your Email</span>}

              <textarea
                className="form-control msgInput my-4"
                placeholder="Type Your Thinking Message"
                {...register("message", { required: true })}
                cols="30"
                rows="5"
              ></textarea>
              {errors.message && <span>Please Enter Your Subject</span>}
              <input
                style={{ width: "100%" }}
                className="resumeBtn msgBtn"
                type="submit"
                value="Send Your Message"
              />
            </form>
          </div>
          <div className="col-sm-5">
            {socialData.map((data) => (
              <SocialIcon data={data} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
