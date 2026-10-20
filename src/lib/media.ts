// Real business media served from public/media so it works on any host (Vercel, Lovable, etc.).
export const LOGO = "/media/logo.jpeg";
export const PROJETO = "/media/projeto.jpeg";

export const VIDEOS = [1, 2, 3, 4, 5].map((n) => ({
  src: `/media/video${n}.mp4`,
  webm: `/media/video${n}.webm`,
  poster: `/media/poster${n}.jpg`,
}));
