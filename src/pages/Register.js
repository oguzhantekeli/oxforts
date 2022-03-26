import React, { useState } from "react";

const Register = () => {
  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    password: "",
    password2: "",
  });
  const { userName, email, password, password2 } = formData;
  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    //check password validation
    e.preventDefault();
    const userData = { userName, email, password, password2 };
    console.log(userData);
  };

  return (
    <>
      <section className="contact-one">
        <div className="container">
          <h2 className="contact-one__title text-center">Register</h2>
          <form
            onSubmit={(e) => {
              onSubmit(e);
            }}
            className="contact-one__form"
          >
            <div className="row low-gutters">
              <div className="col-lg-6">
                <input
                  type="text"
                  placeholder="User Name"
                  required="required"
                  value={userName}
                  onChange={onChange}
                  name="userName"
                />
              </div>
              <div className="col-lg-6">
                <input
                  type="email"
                  placeholder="Email"
                  required="required"
                  value={email}
                  onChange={onChange}
                  name="email"
                />
              </div>
            </div>
            <div className="row low-gutters">
              <div className="col-lg-6">
                <input
                  type="password"
                  placeholder="Password"
                  required="required"
                  value={password}
                  onChange={onChange}
                  name="password"
                />
              </div>
              <div className="col-lg-6">
                <input
                  type="password"
                  placeholder="Password Again"
                  required="required"
                  value={password2}
                  onChange={onChange}
                  name="password2"
                />
              </div>
              <div className="col-lg-12">
                <div className="text-center flex-grow">
                  <button type="submit" className="contact-one__btn thm-btn">
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </form>
          <span>
            Already Registered? <a href="/login">Login Here</a>
          </span>
        </div>
      </section>
    </>
  );
};

export default Register;
