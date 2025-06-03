const express = require('express');
const nodemailer = require('nodemailer');
const admin = require('firebase-admin');
const fs = require('fs');

const app = express();
const PORT = 3000;

// Firebase Admin Setup
const serviceAccount = require('./serviceAccountKey.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

// Nodemailer setup (use Gmail App Password!)
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'pallavitejaswi596@gmail.com',
    pass: 'ujgb kqys tohu vitm' // Create from https://myaccount.google.com/apppasswords
  }
});

// Listen to new documents in "birthdays"
db.collection('birthdays')
  .orderBy('date', 'desc')
  .onSnapshot(snapshot => {
    snapshot.docChanges().forEach(change => {
      if (change.type === 'added') {
        const data = change.doc.data();
        const emailText = `You added ${data.name}'s birthday on ${data.date}`;

        const mailOptions = {
          from: '"Birthday Reminder" <pallavitejaswi596@gmail.com>',
          to: 'raghupathi1919@gmail.com', // Replace with your email or dynamic user
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
