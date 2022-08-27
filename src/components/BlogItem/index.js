import './index.css'

import {Link} from 'react-router-dom'

const BlogItem = props => {
  const {blogItemDetails} = props
  const {id, author, avatarUrl, imageUrl, title, topic} = blogItemDetails

  return (
    <>
      <Link to={`/blogs/${id}`} className="link">
        <li className="li">
          <img className="img" src={imageUrl} alt="img" />
          <div>
            <p className="topic">{topic}</p>
            <h1 className="title">{title}</h1>
            <div className="aut-card">
              <img className="icon-img" src={avatarUrl} alt="icon" />
              <p className="author">{author}</p>
            </div>
          </div>
        </li>
      </Link>
    </>
  )
}
export default BlogItem
