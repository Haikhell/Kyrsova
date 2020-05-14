const nodemailer = require('nodemailer');

async function sendTest(emails, id) {
  let masiv = [];
  let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: 'qrcomerce1@gmail.com',
      pass: 'danyavityavanya'
    }
  });

  for (let i = 0; i < emails.length; i++) {
    let idUser = makeid();
    masiv.push(idUser);
    let link = `http://localhost:8080/test/${idUser}/${id}/userData`;

    await transporter.sendMail({
      from: 'qrcomerce1@gmail.com',
      to: emails[i],
      subject: 'Message from Node js',
      text: link
    });
  }
  console.log(masiv);
  return masiv;
}

function makeid() {
  var text = '';
  var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  for (var i = 0; i < 10; i++) text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
}
module.exports.sendTest = sendTest;