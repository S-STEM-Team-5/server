var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'graberjoseph@gmail.com',
    pass: 'jogr5726'
  }
});

var mailOptions = {
  from: 'graberjoseph@gmail.com',
  to: 'hillbj1@appstate.edu',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
