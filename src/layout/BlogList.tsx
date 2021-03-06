import React from 'react'
import styled from 'styled-components';
// import { useRouter } from 'next/router'
// import { fetchBlogArticles } from '../utils/Content';
// import { parseData } from '../utils/Parser';

const WrappedList = styled.div`
${props => props.styled}`

// const WrappedArticle = styled.article`
// ${props => props.styled}`

const WrappedPagination = styled.ul`
${props => props.styled}`

const BlogList = ({
  // items,
   nbArticles, nbPagination, classes, style, 
  // itemStyle,
  //  itemClasses, 
   paginationStyle, paginationClasses }) => {
  // const { query : {id} } = useRouter()
  const totalItems = React.useRef<number>(0)
  const [pagination, setPagination] = React.useState<number>(0)
  // const [articles, setArticles] = React.useState([])

  const startIndex = Math.trunc(pagination / nbPagination) * nbPagination
  const paginationArray = [...Array(Math.min(nbPagination, Math.ceil(totalItems.current / parseInt(nbArticles)) - startIndex)).keys()];

  // React.useEffect(() => {
  //   const getSimilarArticles = async () => {
  //     const rawArticlesData = await (fetchBlogArticles(nbArticles, pagination * nbArticles,id));
  //     const fetchedArticles = parseData(rawArticlesData)
  //     totalItems.current = rawArticlesData.total
  //     setArticles(fetchedArticles.map(({ name, href, description }) => ({ name, href, description })))
  //   }
  //   getSimilarArticles()
  // }, [pagination])
  // const [showImg, showTitle, showDescription] = items

  const nextDisabled = nbArticles * (startIndex + paginationArray.length) >= totalItems.current
  const prevDisabled = startIndex === 0

  return (
    <>
      <WrappedList className={classes} styled={style} >

        {/* {articles.map((article, idx) => {
          const { name, href, description } = article

          return (
            <WrappedArticle key={idx.toString()} className={itemClasses} styled={itemStyle}>
              {showImg && <a href={`./${href}`}>
                <img alt="Placeholder" className="article_img" src="https://picsum.photos/600/400/?random" />
              </a>}
              <div className="article_container">
                <header className="article_header">
                  {showTitle && name && <h1 className="article_header--title">
                    <a className="article_header--a" href={`./${href}`}>
                      {name}
                    </a>
                  </h1>}
                </header>
                {showDescription && description && <p className='article_description'>{description}</p>}
              </div>
            </WrappedArticle>
          )
        })} */}

      </WrappedList>
      <WrappedPagination className={paginationClasses} styled={paginationStyle}>
        <li
          onClick={() => !prevDisabled && setPagination(startIndex - (paginationArray.length))}
          className={`before ${prevDisabled ? 'disabled' : ''}`}>
          <img
            src={"https://images.ctfassets.net/gi4lwhuzsskr/2evpHjbboPdsZnVfAZFJbV/860cfc3e25f29ee7319861cb7ecca05e/left-arrow.svg"}
          />
        </li>
        {paginationArray.map(index => <li key={(index + startIndex).toString()} className={index + startIndex === pagination ? 'active' : ''} onClick={() => setPagination(index + startIndex)}>{index + startIndex + 1}</li>
        )}
        <li
          onClick={() => !nextDisabled && setPagination(startIndex + (paginationArray.length))}
          className={`after ${nextDisabled ? 'disabled' : ''}`} >
          <img
            src={"https://images.ctfassets.net/gi4lwhuzsskr/7f03CWUEwoX0Dd79qei3xX/8be3914ed0199436132058807ce59630/right-arrow.svg"}
          />
        </li>
      </WrappedPagination>
    </>
  );
}

export default BlogList