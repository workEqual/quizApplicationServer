const sendEmail = require('./sendEmail');

const sendOneTimePassword = async ({
  name,
  email,
  verificationToken,
}) => {

  return sendEmail({
    to: email,
    subject: 'Email Confirmation',
    html: `<h4> Hello, ${name}</h4>
    This is your OTP ${verificationToken} 
    `,
  });
};




module.exports ={
sendOneTimePassword,
} 