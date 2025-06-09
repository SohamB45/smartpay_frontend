import { useEffect } from "react";
import "./birthdayStyles.css";
// import birthdaySong from "./HappyBirthday_song.mp3"; // adjust path if needed


export default function BirthdayPage() {
  useEffect(() => {
    const confetti = document.createElement("script");
    confetti.src = "https://cdn.jsdelivr.net/npm/canvas-confetti@1.5.1/dist/confetti.browser.min.js";
    confetti.onload = () => {
      const duration = 10 * 1000;
      const end = Date.now() + duration;

      (function frame() {
        window.confetti({
          particleCount: 3,
          angle: 60,
          spread: 55,
          origin: { x: 0 },
        });
        window.confetti({
          particleCount: 3,
          angle: 120,
          spread: 55,
          origin: { x: 1 },
        });

        if (Date.now() < end) {
          requestAnimationFrame(frame);
        }
      })();
    };
    document.body.appendChild(confetti);
  }, []);

  return (
    <div className="birthday-container">
      <h1>🎉 Happy Birthday, Baba! 🎂</h1>
      <p>You are my strength, my inspiration, and my hero.</p>
      <p>Wishing you all the joy and health in the world.</p>
      <h2>❤️ From Your Loving Son</h2>
      <audio autoPlay loop hidden>
  <source src="/HappyBirthday_song.mp3" />
</audio>
    </div>
    
  );
}
