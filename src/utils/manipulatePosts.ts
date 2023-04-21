import type { CollectionEntry } from "astro:content"

export const getPublishedPosts = (posts: CollectionEntry<"blog">[]) =>
    posts.filter(post => post.data.published)