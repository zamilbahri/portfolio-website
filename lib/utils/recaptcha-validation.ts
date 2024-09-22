import { CaptchaData } from "@/lib/types";

export const getCatpchaToken = () => {
  return new Promise<string | null>((resolve) => {
    grecaptcha.ready(async () => {
      const siteKey = process.env.NEXT_PUBLIC_RECPATCHA_SITE_KEY;

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
  const secretKey = process.env.RECPATCHA_SECRET_KEY;

  if (!secretKey) {
    throw new Error("No secret key found");
  }

  const url = new URL("https://www.google.com/recaptcha/api/siteverify");
  url.searchParams.append("secret", secretKey);
  url.searchParams.append("response", token);

  const res = await fetch(url, {
    method: "POST",
  });

  const captchaData = await res.json();

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
    return "reCAPTCHA verification unsuccessful. Please try again.";
  }
  if (captchaData.score < 0.5) {
    return "reCAPTCHA score too low. Please try again or contact support.";
  }
  return null;
};
