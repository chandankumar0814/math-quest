# 🎓 BOMIS Purnea - Math Quest PWA

An interactive, kid-friendly **Progressive Web App (PWA)** built specifically for the students of **Birla Open Minds International School, Purnea**. This application helps children from LKG to Grade 2 master mathematics through a fun, animated, and engaging interface.

---

## 🌟 Key Features

* **Grade-Specific Difficulty:** * **LKG:** Numbers 1–5 (Basic Foundation)
    * **UKG:** Numbers 1–10 (Early Math)
    * **Grade 1:** Numbers 1–20 (Elementary)
    * **Grade 2:** Numbers 1–100 (Advanced)
* **Smart Math Engine:** * Automatic hiding of Multiplication/Division for LKG & UKG.
    * "No-Remainder" Division logic designed for young learners.
* **Immersive Cartoon UI:** * Horizontal **Sliding Selectors** for easy touch navigation.
    * Floating animated numbers and operators background.
    * **Zoom-In solve mode** to help kids focus on one problem at a time.
* **PWA Ready:** Installable on Android and iOS devices.
* **Offline Mode:** Works perfectly without an internet connection once cached.

---

## 📁 Project Structure

Ensure all these files are in the same root folder:

| File | Description |
| :--- | :--- |
| `index.html` | Main app structure and UI elements. |
| `style.css` | Branding, animations, and cartoon background. |
| `app.js` | Math logic, grade levels, and navigation. |
| `manifest.json` | PWA configuration for app installation. |
| `sw.js` | Service Worker for offline capabilities. |
| `logo.png` | **BOMIS Purnea Logo** (Replace with your file). |
| `icon-192.png` | Small App Icon (192x192px). |
| `icon-512.png` | Large App Icon (512x512px). |

---

## 🛠️ Installation Guide

1.  **Preparation:** Place all 5 code files and 3 image files in one folder.
2.  **Branding:** * Ensure your school logo is named `logo.png`.
    * Create square icons for `icon-192.png` and `icon-512.png`.
3.  **Hosting:** * Upload to any HTTPS-enabled host (GitHub Pages, Vercel, or Netlify).
    * *Note: PWAs require HTTPS to trigger the "Install" prompt.*

---

## 📱 Mobile Installation

### **For Android (Chrome)**
1.  Open the URL in Chrome.
2.  Wait for the "Add to Home Screen" prompt, or tap the three dots (⋮) and select **Install App**.

### **For iOS/iPhone (Safari)**
1.  Open the URL in Safari.
2.  Tap the **Share** button (square with arrow).
3.  Scroll down and select **Add to Home Screen**.

---

## 🚀 How to Use
1.  **Select Level:** Use the sliding buttons to pick the Grade and Math Operation.
2.  **Start Adventure:** Click the primary button to generate 16 math cards.
3.  **Solve:** Tap a card. It will zoom in. Type the answer and hit OK.
4.  **Submit:** Once all cards are filled, click "Submit All" to see your score and the correct answers.
5.  **Home:** Use the 🏠 Home button at the top to change levels or start over.

---

## 📝 Developer Notes
This app is built using **Vanilla JavaScript, HTML5, and CSS3**. It has zero external dependencies, making it extremely lightweight and fast on older mobile devices.

**School:** Birla Open Minds International School, Purnea.