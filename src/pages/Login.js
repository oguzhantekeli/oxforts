import React, { useState } from "react";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { email, password } = formData;
  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const userData = { email, password };
    console.log(userData);
  };

  return (
    <>
      <section className="contact-one">
        <div className="container">
          <h2 className="contact-one__title text-center">Login</h2>
          <form
            onSubmit={(e) => {
              onSubmit(e);
            }}
            className="contact-one__form"
          >
            <div className="row low-gutters">
              <div className="col-lg-4">
                <input
                  type="email"
                  placeholder="Email"
                  required="required"
                  value={email}
                  onChange={onChange}
                  name="email"
                />
              </div>
              <div className="col-lg-4">
                <input
                  type="password"
                  placeholder="Password"
                  required="required"
                  value={password}
                  onChange={onChange}
                  name="password"
                />
              </div>
              <div className="col-lg-4">
                <button type="submit" className="contact-one__btn thm-btn">
                  Submit
                </button>
              </div>
            </div>
          </form>
          <span>
            Not a member? <a href="/register">Register Here</a>
          </span>
        </div>
      </section>
    </>
  );
};

export default Login;
