import { initializeApp } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-app.js";
import { getFirestore, doc, onSnapshot } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-firestore.js";

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

const audio = document.getElementById("audioPlayer");

const docRef = doc(db, "audioControl", "currentStatus");

onSnapshot(docRef, (doc) => {
  const data = doc.data();
  if (!data) return;

  if (audio.src !== data.trackUrl && data.trackUrl) {
    audio.src = data.trackUrl;
  }

  if (data.action === "play") {
    audio.play();
  } else if (data.action === "pause" || data.action === "stop") {
    audio.pause();
    if (data.action === "stop") audio.currentTime = 0;
  }

  audio.volume = data.volume ?? 1;

  if (!audio.paused && typeof data.seekTo === "number") {
    audio.currentTime = data.seekTo;
  }
});
