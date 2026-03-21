import { CaptchaData } from "@/lib/types";

export const getCatpchaToken = () => {
  return new Promise<string | null>((resolve) => {
    grecaptcha.ready(async () => {
      const siteKey = process.env.RECAPTCHA_SITE_KEY;

      if (!siteKey) {
        resolve(null);
        return;
      }
      const token = await grecaptcha.execute(siteKey, {
        action: "contact",
      });
      resolve(token);
    });
  });
};

export const verifyCaptchaToken = async (
  token: string,
): Promise<CaptchaData | null> => {
  if (!token) {
    console.log("reCAPTCHA: no token provided to verifyCaptchaToken");
    return null;
  }

  const secretKey = process.env.RECAPTCHA_SECRET_KEY;
  if (!secretKey) {
    throw new Error("No secret key found");
  }

  const body = new URLSearchParams();
  body.append("secret", secretKey);
  body.append("response", token);

  const res = await fetch("https://www.google.com/recaptcha/api/siteverify", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: body.toString(),
  });

  const captchaData = await res.json();

  // Helpful debug logging (remove in production)
  // console.log("reCAPTCHA token:", token?.slice(0, 10) + "...", "verify response:", captchaData);

  if (!res.ok) return null;
  return captchaData;
};

export const validateCaptcha = (
  captchaData: CaptchaData | null,
): string | null => {
  if (!captchaData) {
    return "reCAPTCHA verification failed. Please try again later.";
  }
  if (!captchaData.success) {
    const errors = (captchaData["error-codes"] || []).join(", ");
    return `reCAPTCHA verification unsuccessful: ${errors || "unknown error"}`;
  }
  if (captchaData.action && captchaData.action !== "contact") {
    return `reCAPTCHA action mismatch (got "${captchaData.action}")`;
  }
  if (typeof captchaData.score === "number" && captchaData.score < 0.5) {
    return "reCAPTCHA score too low. Please try again.";
  }
  return null;
};
