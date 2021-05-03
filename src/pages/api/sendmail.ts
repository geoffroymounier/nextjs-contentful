import { error } from 'console';

const mailgun = require('mailgun-js');

const mg = mailgun({
  apiKey: process.env.MAILGUN_API_KEY,
  domain: process.env.MAILGUN_DOMAIN,
});

export default async (req, res) => {
  try {
    if (req.method !== 'POST' || !req.body) return res.status(405).end();
    const { body } = req;

    var source = '<p>You just received an email </p>';
    var data =
      source +
      '<ul>' +
      Object.keys(body).reduce((acc, key) => acc + `<li>${key} : ${body[key]}</li>`, '') +
      '</ul>';

    const mail = {
      from: 'email@email.com',
      to: 'geoffroymounier@gmail.com',
      subject: 'EMAIL SUBJECT LINE',
      html: data,
    };
    
    return mg
      .messages()
      .send(mail)
      .then(() => {
        res.status(200).end();
      })
      .catch((error) => {
        res.status(405).end(error);
      });
  } catch (e) {
    return res.status(405).end(error);
  }
};
