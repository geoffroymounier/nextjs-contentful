import { createClient } from 'contentful';

export const CONTENT_TYPE_BLOGPOST = 'page';
export const CONTENT_TYPE_PERSON = 'author';
export const CONTENT_TYPE_TAGS = 'tag';

const Space:string = process.env.CONTENTFUL_SPACE!;
const Token:string = process.env.CONTENTFUL_TOKEN!;
export default class ContentfulService {
  private client = createClient({
    space: Space,
    accessToken: Token
  });

  async fetchPages(href?:string) {
    return await this.client.getEntries({
      content_type: CONTENT_TYPE_BLOGPOST,
      include:10,
      ...(href && {'fields.href': href})
    });
  }
  async fetchSpecificEntry(contentType,field,value){
    return await this.client.getEntries({
      content_type: contentType,
      [`fields.<${field}>[match]`]: value,
      include:10,
    });
    
  }
}