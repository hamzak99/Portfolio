import emailjs from "emailjs-com";

export function sendEmail(e, form) {
  e.preventDefault();
  console.log(
    process.env.REACT_APP_Name,
    process.env.REACT_APP_Service_ID,
    form.current,
    process.env.REACT_APP_Public_Key
  );

  emailjs.init(process.env.REACT_APP_Public_Key);
  emailjs
    .sendForm(
      process.env.REACT_APP_Service_ID,
      process.env.REACT_APP_Template_ID,
      form.current
    )
    .then(
      () => {
        console.log("SUCCESS!");
      },
      (error) => {
        console.log("FAILED...", error.text);
      }
    );

  e.target.reset();
}
