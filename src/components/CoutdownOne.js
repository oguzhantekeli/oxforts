import React, { useState } from "react";

const CountdownOne = () => {
  const [homeRegisterForm, setHomeRegisterForm] = useState({
    name: "",
    email: "",
    phone: "",
    comment: "",
  });
  const { name, email, phone, comment } = homeRegisterForm;

  const onChange = (e) => {
    setHomeRegisterForm((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setHomeRegisterForm({ name: "", email: "", phone: "", comment: "" });
    console.log(homeRegisterForm);
  };
  return (
    <>
      <section className="countdown-one">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="countdown-one__content">
                <h2 className="countdown-one__title">Register now </h2>
                <p className="countdown-one__tag-line">
                  get premium online courses for free!
                </p>

                <p className="countdown-one__text">
                  Lorem ipsum gravida nibh vel velit auctor aliquetnean
                  sollicitudin, lorem quis bibendum auci elit consequat is
                  simply free text available in the psutis sem nibh id eis sed
                  odio sit amet.
                </p>
                <ul className="countdown-one__list list-unstyled"></ul>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="become-teacher__form">
                <div className="become-teacher__form-top">
                  <h2 className="become-teacher__form-title">
                    Get free courses
                  </h2>
                </div>
                <div className="become-teacher__form-content">
                  <form onSubmit={(e) => onSubmit(e)}>
                    <input
                      type="text"
                      placeholder="Your Name"
                      onChange={onChange}
                      value={name}
                      required="required"
                      name="name"
                      autoComplete="false"
                    />
                    <input
                      type="email"
                      placeholder="Email Address"
                      onChange={onChange}
                      value={email}
                      required="required"
                      name="email"
                      autoComplete="false"
                    />
                    <input
                      type="text"
                      placeholder="Phone Number"
                      onChange={onChange}
                      value={phone}
                      required="required"
                      name="phone"
                      autoComplete="false"
                    />
                    <input
                      type="text"
                      placeholder="Comment"
                      onChange={onChange}
                      value={comment}
                      required="required"
                      name="comment"
                      autoComplete="false"
                    />
                    <button
                      type="submit"
                      className="thm-btn become-teacher__form-btn"
                    >
                      Apply For It
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CountdownOne;
