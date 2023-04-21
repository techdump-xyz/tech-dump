import type { CollectionEntry } from "astro:content";
import { getPublishedPosts } from "./manipulatePosts";

export const toSlug = (text: string) => text.toLowerCase().replaceAll(" ", "-");

export default function getUniqueTags(posts: CollectionEntry<"blog">[]) {
    const tags = getPublishedPosts(posts)
        .flatMap((post: CollectionEntry<"blog">) => post.data.tags);

    return tags
        .filter((tag, index) => tags.indexOf(tag) === index)
        .map(toSlug)
        .sort();
    
}
// hsl (0-360 50-100% 40-60%) ~ gruvbox color values
export const generateColorFromText = (text: string) => {
    const baseNumber = stringToCharCode(text).reduce((val, num) => val + num);
    return `hsl(${baseNumber * 10 % 360} ${(50 + 0.03 * baseNumber) % 100}% ${40 + 0.001 * baseNumber % 60 + 10}%)`;
}
    

export const pairTagsWithColor = (tags: Array<string>) => 
    tags.map(tag => ({ tag, color: generateColorFromText(tag) }))


const stringToCharCode = ([...str]: string) => 
    str.map(char => char.charCodeAt(0))

export const getPostsByTag = (posts: CollectionEntry<"blog">[], tag: string) =>
    posts.filter(post => post.data.tags.map(toSlug).includes(tag))
