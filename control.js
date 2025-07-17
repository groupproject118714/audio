import { initializeApp } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-app.js";
import { getFirestore, doc, updateDoc } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBBRDtXAMisstSdJB_atcdcpieGU1IhiKw",
  authDomain: "ai-test-74be7.firebaseapp.com",
  projectId: "ai-test-74be7",
  storageBucket: "ai-test-74be7.firebasestorage.app",
  messagingSenderId: "496360587770",
  appId: "1:496360587770:web:28408006d5e3bdd9fa2443"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const docRef = doc(db, "audioControl", "currentStatus");

// 🔊 Local relative paths to your audio clips
const audioUrls = [
  "audio/voice1.mp3",
  "audio/voice2.mp3",
"audio/voice3.mp3",
"audio/voice4.mp3",
 "audio/voice5.mp3",
  "audio/voice6.mp3",
"audio/voice7.mp3",
"audio/voice8.mp3",
"audio/voice9.mp3",
 "audio/voice10.mp3",
  "audio/voice11.mp3",
"audio/voice12.mp3",
"audio/voice13.mp3",

];

// Generate buttons
const buttonContainer = document.getElementById("buttons");

audioUrls.forEach((url, i) => {
  const btn = document.createElement("button");
  btn.textContent = `▶️ Play Audio ${i + 1}`;
  btn.onclick = async () => {
    await updateDoc(docRef, {
      trackUrl: url,
      action: "play",
      seekTo: 0,
      volume: 1
    });
  };
  buttonContainer.appendChild(btn);
  buttonContainer.appendChild(document.createElement("br"));
});
