import * as admin from 'firebase-admin';

if (!admin.apps.length) {
  admin.initializeApp({
    // credential: admin.credential.cert({
    //   type: 'service_account',
    //   project_id: 'nextjs-contentful',
    //   private_key_id: '7629748141210de5d0275bfc18312f7e2e8a6591',
    //   private_key: process.env.PRIVATE_KEY,
    //   client_email: 'firebase-adminsdk-xakfw@nextjs-contentful.iam.gserviceaccount.com',
    //   client_id: '103808631905341617922',
    //   auth_uri: 'https://accounts.google.com/o/oauth2/auth',
    //   token_uri: 'https://oauth2.googleapis.com/token',
    //   auth_provider_x509_cert_url: 'https://www.googleapis.com/oauth2/v1/certs',
    //   client_x509_cert_url:
    //     'https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-xakfw%40nextjs-contentful.iam.gserviceaccount.com',
    // }),
    databaseURL: 'https://nextjs-contentful-default-rtdb.firebaseio.com',
  });
}

export default async (req, res) => {
  if (req.method !== 'POST' || !req.body) return res.status(405).end();
  const { email } = JSON.parse(req.body);
  const db = admin.database();
  const values = await db.ref('dentiste-1').once('value');

  const userExists =
    values.val().findIndex((mail) => {
      return mail === email;
    }) > -1;
  if (!userExists) return res.status(405).end();
  // Author a couple of cookies to persist a users session
  // TODO
  // console.log(user,userExists)
  res.end();
};
