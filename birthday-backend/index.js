const express = require('express');
const nodemailer = require('nodemailer');
const admin = require('firebase-admin');

const app = express();
const PORT = process.env.PORT || 3000;

// Firebase Admin Setup using env
const serviceAccount = JSON.parse(
  Buffer.from(process.env.FIREBASE_SERVICE_ACCOUNT, 'base64').toString('utf8')
);

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

// Nodemailer setup using environment variables
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS // Use Gmail App Password
  }
});

// Firestore Listener
db.collection('birthdays')
  .orderBy('date', 'desc')
  .onSnapshot(snapshot => {
    snapshot.docChanges().forEach(change => {
      if (change.type === 'added') {
        const data = change.doc.data();
        const emailText = `You added ${data.name}'s birthday on ${data.date}`;

        const mailOptions = {
          from: `"Birthday Reminder" <${process.env.EMAIL_USER}>`,
          to: 'raghupathi1919@gmail.com', // Can be made dynamic
          subject: `🎉 New Birthday: ${data.name}`,
          text: emailText
        };

        transporter.sendMail(mailOptions, (error, info) => {
          if (error) {
            return console.error('❌ Error:', error);
          }
          console.log('📧 Email sent:', info.response);
        });
      }
    });
  });

app.listen(PORT, () => {
  console.log(`🚀 Birthday Notifier Server running on http://localhost:${PORT}`);
});
