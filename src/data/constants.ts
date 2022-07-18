export const baseURL =
  import.meta.env.MODE === "development"
    ? "http://localhost:5000/api"
    : "https://wirehaired-grave-crawdad.glitch.me/api";
