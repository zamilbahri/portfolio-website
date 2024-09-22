import React from "react";

export default function Footer() {
  return (
    <footer className="mb-10 px-4 text-center text-gray-500">
      <small className="mb-2 block text-xs">
        &copy; 2024 Zamil. All rights reserved.
      </small>
      <p className="text-xs">
        <span className="font-semibold"></span>Built with React & Next.js (App
        Router & Server Actions), TypeScript, Tailwind CSS, Framer Motion, React
        Email, and Resend. Hosted on a Raspberry Pi.
      </p>
      <p className="text-xs">
        This site is protected by reCAPTCHA and the Google{" "}
        <a className="underline" href="https://policies.google.com/privacy">
          Privacy Policy
        </a>{" "}
        and{" "}
        <a className="underline" href="https://policies.google.com/terms">
          Terms of Service
        </a>{" "}
        apply.
      </p>
    </footer>
  );
}
