import React, { useState } from "react";

const BecomeTeacherComp = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    comment: "",
  });
  const { name, email, phone, comment } = formData;
  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const userData = { name, email, phone, comment };
    console.log(userData);
  };
  return (
    <>
      <section className="become-teacher">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="become-teacher__content">
                <h2 className="become-teacher__title">Teaching benefits</h2>
                <p className="become-teacher__text">
                  Lorem Ipsum is simply dummy text of the printing and type
                  industry. Lorem Ipsum has been the standard dummy text ever
                  since the when an unknown was popularised. It has survived not
                  only five centuries, but also the leap into electronic
                  typesetting remaining unchanged.
                </p>
                <h2 className="become-teacher__subtitle">Health and Pension</h2>
                <p className="become-teacher__text">
                  Lorem Ipsum has been the standard dummy text ever since the
                  when an unknown was popularised. It has survived not only five
                  centuries. but also the leap into electronic typesetting
                  remaining unchanged.
                </p>
                <h2 className="become-teacher__subtitle">Vacation Time</h2>
                <p className="become-teacher__text">
                  Lorem Ipsum has been the standard dummy text ever since the
                  when an unknown was popularised. It has survived not only five
                  centuries. but also the leap into electronic typesetting
                  remaining unchanged.
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="become-teacher__form">
                <div className="become-teacher__form-top">
                  <h2 className="become-teacher__form-title">
                    Apply for teaching
                  </h2>
                </div>
                <div className="become-teacher__form-content">
                  <form onSubmit={onSubmit}>
                    <input
                      type="text"
                      placeholder="Ad Soyad"
                      name="name"
                      value={name}
                      onChange={onChange}
                    />
                    <input
                      type="email"
                      placeholder="Email"
                      name="email"
                      value={email}
                      onChange={onChange}
                    />
                    <input
                      type="text"
                      placeholder="Telefon"
                      name="phone"
                      value={phone}
                      onChange={onChange}
                    />
                    <input
                      type="text"
                      placeholder="Mesaj"
                      name="comment"
                      value={comment}
                      onChange={onChange}
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

export default BecomeTeacherComp;
