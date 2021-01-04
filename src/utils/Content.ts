import { createClient } from 'contentful';

export const CONTENT_TYPE_PAGE = 'page';
export const CONTENT_TYPE_BLOG = 'blogItem';
export const CONTENT_TYPE_TAGS = 'tag';

const Space: string = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE!;
const Token: string = process.env.NEXT_PUBLIC_CONTENTFUL_TOKEN!;

const client = createClient({
  space: Space,
  accessToken: Token,
});

const fetchPages = async (href?: string) => {
  return await client.getEntries({
    content_type: CONTENT_TYPE_PAGE,
    include: 10,
    ...(href && { 'fields.href': href }),
  });
};
const fetchBlogs = async (href?: string) => {
  return await client.getEntries({
    content_type: CONTENT_TYPE_BLOG,
    include: 10,
    ...(href && { 'fields.href': href }),
  });
};
const fetchBlogArticles = async (limit?: number, skip?: number, href?: string) => {
  return await client.getEntries({
    content_type: CONTENT_TYPE_BLOG,
    include: 10,
    limit,
    skip,
    ...(href && { 'fields.href[nin]': href }),
  });
};
const fetchSpecificEntry = async (contentType, field, value) => {
  return await client.getEntries({
    content_type: contentType,
    [`fields.<${field}>[match]`]: value,
    include: 10,
  });
};
export { fetchSpecificEntry, fetchBlogs, fetchPages,fetchBlogArticles };
