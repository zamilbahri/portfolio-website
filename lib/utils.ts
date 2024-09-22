import { CaptchaData } from "./types";

export const validateString = (value: unknown, maxLength: number) => {
  if (!value || typeof value !== "string" || value.length > maxLength) {
    return false;
  }
  return true;
};

export const getErrorMessage = (error: unknown): string => {
  if (error instanceof Error) return error.message;
  if (typeof error === "string") return error;
  return "An unexpected error occurred";
};

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
