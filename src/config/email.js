export const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
export const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
export const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
export const EMAILJS_CONTACT_TEMPLATE_ID =
  import.meta.env.VITE_EMAILJS_CONTACT_TEMPLATE_ID || EMAILJS_TEMPLATE_ID;
export const EMAILJS_OWNER_EMAIL =
  import.meta.env.VITE_EMAILJS_OWNER_EMAIL || "hello@iwrite.com";

export const SUBSCRIPTION_TEMPLATE_PARAMS = ({ email, name }) => ({
  email, // maps to {{email}} (To Email)
  to_email: email, // lets people reply to the subscriber
  subscriber_name: name || "friend",
  subscriber_focus: "stories",
});

export const CONTACT_TEMPLATE_PARAMS = ({ name, email, subject, message }) => ({
  from_name: name,
  reply_to: email,
  contact_subject: subject,
  contact_message: message,
  to_email: EMAILJS_OWNER_EMAIL,
});
