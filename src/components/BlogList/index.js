import './index.css'

import {Component} from 'react'
import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import BlogItem from '../BlogItem'

class BlogList extends Component {
  state = {blogItemDetails: [], loading: true}

  componentDidMount() {
    this.getBlogData()
  }

  getBlogData = async () => {
    const response = await fetch('https://apis.ccbp.in/blogs')
    const responseData = await response.json()
    const formatedData = responseData.map(each => ({
      author: each.author,
      avatarUrl: each.avatar_url,
      id: each.id,
      imageUrl: each.image_url,
      title: each.title,
      topic: each.topic,
    }))

    this.setState({blogItemDetails: formatedData, loading: false})
  }

  render() {
    const {blogItemDetails, loading} = this.state
    console.log(blogItemDetails)
    return (
      <>
        {loading === true ? (
          <div testid="loader">
            <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
          </div>
        ) : (
          <ul>
            {blogItemDetails.map(each => (
              <BlogItem blogItemDetails={each} key={each.id} />
            ))}
          </ul>
        )}
      </>
    )
  }
}

export default BlogList
