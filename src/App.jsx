import "./Base.css";
import "./App.css";
import logo from "/src/assets/New Logo Black.png";
import React, { useState } from "react";

export default function Form() {
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSubmitting(true);

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycby5SCNDRlQPlYOhahzsTPWMHVFg11q1sVRE-9Z2RbcYIXhQEWmH_DYTpWebRutk_0NA/exec",
        {
          method: "POST",
          body: new FormData(event.target),
        }
      );

      const data = await response.json();

      console.log("Data from server:", data);

      if (data.result === "success") {
        alert("Form submitted successfully!");

        setTimeout(() => {
          window.location.href = "https://github.com/Thili-126";
        }, 500);
      } else {
        alert("Form submission failed. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An unexpected error occurred. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="container align-items-center">
      <form className="sign-up m-auto" onSubmit={handleSubmit}>
        <img className="mb-3" src={logo} />
        <h1 className="heading h2 mb-3 fw-100">Let's Talk</h1>

        <div className="row g-3">
          <div class="form-floating col-sm-6">
            <input
              class="form-control"
              id="floatingInput1"
              placeholder="name"
              type="text"
              name="FirstName"
            />
            <label for="floatingInput1" className="float-lable">
              First Name
            </label>
          </div>

          <div class="form-floating col-sm-6">
            <input
              class="form-control"
              id="floatingInput2"
              placeholder="name"
              type="text"
              name="LastName"
            />
            <label for="floatingInput2" className="float-lable">
              Last Name
            </label>
          </div>

          <div class="form-floating col-12">
            <input
              class="form-control"
              id="floatingInput3"
              placeholder="name"
              type="email"
              name="Email"
            />
            <label for="floatingInput3" className="float-lable">
              Your Email
            </label>
          </div>

          <div class="form-floating col-12">
            <textarea
              class="form-control"
              id="floatingInput4"
              placeholder="name"
              name="Feedback"
              cols="30"
              rows="4"
              type="text"
            ></textarea>
            <label for="floatingInput4" className="float-lable">
              Message
            </label>
          </div>

          <hr className="my-4" />
          <button
            className="btn w-100 abc-button"
            type="submit"
            disabled={submitting}
          >
            {submitting ? "Submitting..." : "Submit"}
          </button>
        </div>
        <p className="mt-5 mb-3 text-body-secondary">
          © 2023 - Made by&nbsp;
          <a href="https://github.com/Thili-126">
            <span>T</span>-126
          </a>
        </p>
      </form>
    </div>
  );
}
