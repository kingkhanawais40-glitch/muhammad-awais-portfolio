import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_5p1mq9o",
        "template_qlj0s4m",
        form.current,
        "asPdi95stnrCQU0vh"
      )
      .then(
        () => {
          alert("✅ Message sent successfully!");
          form.current.reset();
          setLoading(false);
        },
        (error) => {
          console.log(error);
          alert("❌ Failed to send message.");
          setLoading(false);
        }
      );
  };

  return (
    <section className="contact" id="contact">
      <div className="contact-header">
        <p className="section-tag">CONTACT</p>
        <h2>Let's Work Together</h2>
      </div>

      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <input
          type="text"
          name="from_name"
          placeholder="Your Name"
          required
        />

        <input
          type="email"
          name="from_email"
          placeholder="Your Email"
          required
        />

        <input
          type="text"
          name="subject"
          placeholder="Subject"
          required
        />

        <textarea
          name="message"
          placeholder="Your Message"
          rows="6"
          required
        ></textarea>

        <button type="submit">
          {loading ? "Sending..." : "Send Message"}
        </button>
      </form>
    </section>
  );
}

export default Contact;