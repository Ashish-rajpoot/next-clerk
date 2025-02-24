export let ID = Math.ceil(Math.random() * 100);
export const WEBSITENAME = "Alex Blog's ";
export const RANDOM_IMG_1200_600 = `https://picsum.photos/id/${ID}/1200/600`;
export const RANDOM_IMG_1200_400 = `https://picsum.photos/id/${ID}/1200/400`;
export const RANDOM_IMG_400_200 = `https://picsum.photos/id/${ID}/400/200`;
const HOME_API="https://americans-yours-debian-cell.trycloudflare.com";
export const SALES_POST_API = `${HOME_API}/api/inquiries`;

export const random_img = (width = 1200, height = 500, id = ID) => {
  return `https://picsum.photos/id/${id}/${width}/${height}`;
};



export const BLOG_API = process.env.NEXT_PUBLIC_BLOG_API;
export const BLOG_IMAGE_PREFIX = process.env.NEXT_PUBLIC_BLOG_IMAGE_PREFIX;
