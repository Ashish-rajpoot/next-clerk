import { BLOG_API, BLOG_IMAGE_PREFIX } from "@/constants/constent";

function cleanImageUrls(htmlContent) {
  return htmlContent.replace(
    /<img\s+[^>]*src=["']([^"']+)["']/gi,
    (match, url) => {
      let cleanUrl = url.split("?")[0]; // Remove query parameters
      return match.replace(url, cleanUrl);
    }
  );
}

// Example usage:

const BlogPage = async ({ params }) => {
  const { slug } = await params;

  const res = await fetch(`${BLOG_API}/${slug}`);
  const data = await res.json();
  const blog = data.blog;
  let cleanedContent = cleanImageUrls(blog.content);

  return (
    <div className="text-4xl">
      <div className="space-y-3">
        <div>
          <img
            className="max-h-screen w-full"
            src={`${BLOG_IMAGE_PREFIX}/${blog.image}`}
            alt={blog.image}
          />
        </div>
        <div className="content text max-w-[65vw] mx-auto">
          <h1 className="h1">{blog.title}</h1>
          <div
            dangerouslySetInnerHTML={{ __html: cleanedContent }}
            className="text-lg"
          />
        </div>
      </div>
    </div>
  );
};

export const generateStaticParams = async () => {
  const res = await fetch(BLOG_API);
  const data = await res.json();
  const arr = data.blogs.map((item) => item.slug);

  return arr.map((slug) => ({
    slug: slug.toString(),
  }));
};

export default BlogPage;
