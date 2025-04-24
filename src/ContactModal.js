import React, { useState, useRef, useEffect } from 'react';
import './ContactModal.css'; // Make sure this path is correct

const ContactModal = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const modalContentRef = useRef(null);

  useEffect(() => {
    if (modalContentRef.current) {
      modalContentRef.current.style.maxHeight = isOpen
        ? `${modalContentRef.current.scrollHeight}px`
        : '0px';
      modalContentRef.current.style.opacity = isOpen ? '1' : '0';
    }
  }, [isOpen]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    const formData = new FormData(e.target);

    try {
      const response = await fetch("https://formspree.io/f/mnndqykd", {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: formData,
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        alert("Oops! Something went wrong. Please try again.");
      }
    } catch (err) {
      console.error(err);
      alert("Network error. Please try again later.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="contact-inline-form">
      <div className="form-content" ref={modalContentRef}>
        {submitted ? (
          <>
            <h2>Thank you!</h2>
            <p>We've received your message. We'll be in touch shortly.</p>
            <button onClick={onClose}>Close</button>
          </>
        ) : (
          <>
            <h2>Contact Our MSP Team</h2>
            <p>We specialize in supporting nonprofits with reliable IT services.</p>
            <form onSubmit={handleSubmit}>
              <input type="text" name="name" placeholder="Your Full Name" required />
              <input type="email" name="email" placeholder="Your Email" required />
              <input type="text" name="organization" placeholder="Organization Name" />
              <input type="text" name="subject" placeholder="Subject" required />
              <textarea name="message" placeholder="How can we help your nonprofit?" required></textarea>
              <button type="submit" disabled={submitting}>
                {submitting ? "Sending..." : "Send Message"}
              </button>
              <button type="button" onClick={onClose}>Cancel</button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default ContactModal;