import type { CollectionEntry } from "astro:content";

export const toSlug = (text: string) => text.toLowerCase().replaceAll(" ", "-");

export default function getUniqueTags(posts: CollectionEntry<"blog">[], generateSlug?: boolean) {
    const tags = posts.flatMap(post => post.data.tags);
    const filteredTags = tags.filter((tag, index) => tags.indexOf(tag) === index);
    return generateSlug ? filteredTags.map(toSlug) : filteredTags;
}

export const getPostsByTag = (posts: CollectionEntry<"blog">[], tag: string) =>
    posts.filter(post => post.data.tags.includes(tag))
