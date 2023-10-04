import rss from "@astrojs/rss";
import { siteConfig } from "@/site-config";
import { getAllPosts } from "@/utils";

export const GET = async () => {
	const posts = await getAllPosts();

	const items = posts.map((post) => {
		console.log(post.data.publishDate, post.slug);
		return {
			link: `posts/${post.slug}`,
			title: post.data.title,
			pubDate: post.data.publishDate,
			description: post.data.description || "",
		};
	});
	return rss({
		title: siteConfig.title,
		description: siteConfig.description,
		site: "https://abdulghofur.me",
		items,
	});
};
