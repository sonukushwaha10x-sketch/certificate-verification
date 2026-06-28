import { db } from "./firebase-config.js";
console.log("Firebase connected:", db);result.innerHTML = `
  <h2 style="color:green;">✅ Certificate Verified</h2>
  <p><b>Name:</b> ${data.name}</p>
  <p><b>Course:</b> ${data.course}</p>
  <p><b>Issue Year:</b> ${data.year}</p>
  <p><b>Certificate No:</b> ${data.certificateNo}</p>
  <p><b>Status:</b> ${data.status}</p>
`;
