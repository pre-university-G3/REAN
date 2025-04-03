import React, { useEffect, useState } from "react";
import { useForm, ValidationError } from "@formspree/react";

export default function FeedbackForm() {
  const [state, handleSubmit, reset] = useForm("xldjpbqa");
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (state.succeeded) {
      setShowModal(true);
    }
  }, [state.succeeded]);
  const closeModal = () => {
    setShowModal(false);
    reset();
  };

  //   const [lastName, setLastName] = useState("");
  //   const [message, setMessage] = useState("");
  //   const [status, setStatus] = useState("");

  //   useEffect(() => {
  //     EmailJSResponseStatus.init("aF1mOn6-GFJMUes_K");
  //   }, []);

  //   const handleSubmit = (e) => {
  //     e.preventDefault();
  //     EmailJSResponseStatus.send("service_xmefzi4", "template_thhcu0b", {
  //       title: "Feedback",
  //       name: lastName,
  //       message: message,
  //     }).then(
  //       (response) => {
  //         setStatus("Message sent successfully");
  //         console.log("email", response);
  //       },
  //       (error) => {
  //         setStatus("There is an error");
  //         console.log("Error :", error);
  //       }
  //     );
  //   };

  return (
    <>
      <section className="flex flex-col gap-4 md:flex-row text-center p-10 md:text-start bg-accent mx-5 md:mx-[60px] lg:mx-[120px] rounded-2xl">
        <article className="md:w-[100%] md:flex flex-col justify-center items-start gap-4">
          <h2 className="text-h2-small md:text-h2-medium lg:text-h2-large text-white font-bold ">
            Share Your Feedback
          </h2>
          <p className="text-body-small md:text-body-medium lg:text-body-large text-white/80">
            We value your input! Let us know how we can improve Rean and enhance
            your learning experience. Your suggestions help us create better
            courses and features tailored to your needs.
          </p>
        </article>
        <form
          id="form"
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 w-full "
          action={"https://formspree.io/f/xldjpbqa"}
          method={"Post"}
        >
          <input
            className="h-[52px] px-4 rounded-small w-full bg-white focus:outline-2 focus:outline-secondary"
            type="text"
            placeholder="Last name"
            id="username"
            name="username"
            //   value={lastName}
            //   onChange={(e) => setLastName(e.target.value)}
          />
          <textarea
            className="h-32 p-4 bg-white resize-none w-full rounded-small focus:outline-2 focus:outline-secondary "
            placeholder="Message"
            required
            id="message"
            name="message"

            //   value={message}
            //   onChange={(e) => setMessage(e.target.value)}
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />

          <button
            type="submit"
            className="bg-secondary flex justify-center items-center h-[52px] rounded-small text-detail-medium font-bold text-accent hover:bg-yellow-500 transition-colors ease-in-out duration-300"
            disabled={state.submitting}
          >
            Submit
          </button>
        </form>
      </section>

      <div
        id="container"
        className={`fixed z-200 inset-0 overflow-y-auto ${
          showModal ? "" : "hidden"
        }`}
      >
        <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
          <div className="fixed inset-0 transition-opacity">
            <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
          </div>
          <span className="hidden sm:inline-block sm:align-middle sm:h-screen"></span>
          <div className="inline-block align-bottom w-fit bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
            <div className="sm:flex items-center justify-center">
              <div className="mt-3 text-center flex flex-col items-center gap-2 sm:mt-0 sm:ml-4 ">
                <div
                  className="h-20 w-20 rounded-full bg-accent mb-4 flex justify-center items-center
                "
                >
                  <img src="/icons/check.svg" className="h-14 w-14" alt="" />
                </div>
                <article>
                  <h3 className="text-lg text-center leading-6 font-medium text-gray-900">
                    Thank You for Your Feedback!
                  </h3>
                  <div className="mt-2">
                    <p className="text-sm leading-5 text-gray-500">
                      We’ve received your message and will review it shortly.
                    </p>
                  </div>
                </article>
              </div>
            </div>
            <div className="mt-5 sm:mt-4 sm:flex justify-center items-center">
              <span className="flex w-full rounded-md shadow-sm sm:ml-3 sm:w-auto">
                <button
                  type="button"
                  className="inline-flex justify-center w-full rounded-md border border-transparent px-4 py-2 small-button"
                  onClick={closeModal}
                >
                  Accept
                </button>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
