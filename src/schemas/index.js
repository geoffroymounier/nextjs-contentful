// We import object and document schemas
import blockContent from './blockContent'
import page from './page'
import content from './content'
import textEnriched from './textEnriched'
import mediaEnriched from './mediaEnriched'
import button from './button'
import blog from './blog'
import blogItem from './blogItem'
import form from './form'
import input from './input'
import textarea from './textarea'
import menu from './menu'
import menuItem from './menuItem'
import accordion from './accordion'
import banner from './banner'
// Then we give our schema to the builder and provide the result to Sanity
export default {
  blockContent,
  mediaEnriched,
  textEnriched,
  content,
  page,
  button,
  blog,
  blogItem,
  menuItem,
  menu,
  accordion,
  banner,
  form,
  input,
  textarea

}