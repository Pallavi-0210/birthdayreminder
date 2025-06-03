  <h1>🎂 Birthday Reminder App</h1>
  <p>A simple and clean <strong>Birthday Reminder Web App</strong> built using <strong>HTML</strong>, <strong>CSS</strong>, and <strong>Firebase Cloud</strong>. Users can store birthdays and receive reminders — all stored securely using Firebase's real-time capabilities.</p>

  <h2>🚀 Features</h2>
  <ul>
    <li>🔐 Secure storage of birthday data using Firebase Firestore</li>
    <li>📅 Displays upcoming birthdays</li>
    <li>💡 Responsive, clean user interface</li>
    <li>☁️ Firebase Cloud integration for data persistence</li>
  </ul>

  <h2>🛠️ Tech Stack</h2>
  <table border="1" cellpadding="6">
    <thead>
      <tr>
        <th>Frontend</th>
        <th>Backend / DB</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>HTML5</td>
        <td>Firebase Firestore</td>
      </tr>
      <tr>
        <td>CSS3</td>
        <td>Firebase Authentication (if used)</td>
      </tr>
      <tr>
        <td>JavaScript (optional)</td>
        <td>Firebase Hosting (optional)</td>
      </tr>
    </tbody>
  </table>

  <h2>📁 Project Structure</h2>
  <pre><code>birthday-reminder-app/
│
├── index.html               # Main UI
├── style.css                # Styling
├── firebase-config.js       # Firebase config (excluded from GitHub)
├── app.js                   # Frontend logic
│
└── birthday-backend/
    ├── index.js             # Firebase backend logic
    ├── serviceAccountKey.json  # (Sensitive, excluded)
    ├── package.json / lock   # Node.js backend setup
</code></pre>

  <h2>🔒 Security Notes</h2>
  <ul>
    <li><code>firebase-config.js</code> and <code>serviceAccountKey.json</code> are <strong>not included</strong> in the repository for security reasons.</li>
    <li>Make sure to add these files to <code>.gitignore</code>.</li>
  </ul>

  <h2>📦 How to Run</h2>
  <ol>
    <li>Clone the repo:<br />
      <code>git clone https://github.com/Pallavi-0210/birthdayreminder.git</code><br />
      <code>cd birthday-reminder-app</code>
    </li>
    <li>Set up Firebase:
      <ul>
        <li>Create a Firebase project</li>
        <li>Enable Firestore Database</li>
        <li>Add your Firebase config to <code>firebase-config.js</code></li>
        <li>(Optional) Set up Firebase Admin SDK for <code>serviceAccountKey.json</code></li>
      </ul>
    </li>
    <li>Open <code>index.html</code> in your browser or deploy using Firebase Hosting:
      <pre><code>firebase deploy</code></pre>
    </li>
  </ol>

