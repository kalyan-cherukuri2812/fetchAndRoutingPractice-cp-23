import './index.css'

import {Component} from 'react'

import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

class BlogItemDetails extends Component {
  state = {blogData: {}, loader: true}

  componentDidMount() {
    this.getData()
  }

  getData = async () => {
    console.log(this.props)
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/blogs/${id}`)
    const responseData = await response.json()
    console.log(responseData)
    const data = {
      author: responseData.author,
      avatarUrl: responseData.avatar_url,
      content: responseData.content,
      id: responseData.id,
      imageUrl: responseData.image_url,
      title: responseData.title,
      topic: responseData.topic,
    }
    this.setState({blogData: data, loader: false})
  }

  render() {
    const {blogData, loader} = this.state
    const {author, avatarUrl, content, imageUrl, title, topic} = blogData
    return (
      <>
        {loader === true ? (
          <div testid="loader">
            <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
          </div>
        ) : (
          <div className="blogs-div">
            <h1 className="blogs-h">{title}</h1>
            <div className="blogs-aut-div">
              <img className="blog-img1" src={avatarUrl} alt={author} />
              <p>{author} </p>
            </div>
            <img className="blog-img2" src={imageUrl} alt={title} />
            <p className="blogs-p">{content}</p>
          </div>
        )}
      </>
    )
  }
}

export default BlogItemDetails
