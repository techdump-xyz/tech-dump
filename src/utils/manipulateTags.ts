import type { CollectionEntry } from "astro:content";

export const toSlug = (text: string) => text.toLowerCase().replaceAll(" ", "-");

export default function getUniqueTags(posts: CollectionEntry<"blog">[]) {
    const tags = posts.flatMap(post => post.data.tags);
    return tags
        .filter((tag, index) => tags.indexOf(tag) === index)
        .map(toSlug)
        .sort();
    
}

// hsl (0-360 50-100% 40-60%) roughly
export const pairTagsWithColor = (tags: Array<string>) => 
    tags
        .map(tag => ({
            tag,
            color: stringToCharCode(tag).reduce((val, num) => val + num)}))
        .map(items => ({
            tag: items.tag,
            color: `hsl(${items.color * 10 % 360} `  +
                `${(50 + 0.03 * items.color) % 100}% ` + 
                `${(40 + 0.001 * items.color) % 60 + 10}%)`
        }))


const stringToCharCode = ([...str]: string) => 
    str.map(char => char.charCodeAt(0))

export const getPostsByTag = (posts: CollectionEntry<"blog">[], tag: string) =>
    posts.filter(post => post.data.tags.map(toSlug).includes(tag))
