import React, { Component } from 'react'
import { Link } from 'gatsby'

class PostListing extends Component {
  getPostList() {
    const postList = []
    this.props.postEdges.forEach(postEdge => {
      postList.push({
        path: postEdge.node.fields.slug,
        tags: postEdge.node.frontmatter.tags,
        thumbnail: postEdge.node.frontmatter.thumbnail,
        title: postEdge.node.frontmatter.title,
        date: postEdge.node.fields.date,
        excerpt: postEdge.node.excerpt,
        timeToRead: postEdge.node.timeToRead,
      })
    })
    return postList
  }

  render() {
    const postList = this.getPostList()
    return (
      <>
        {/* Your post list here. */
        postList.map(post => (
          <Link to={post.path} key={post.title}>
            <a className="post">{post.title}</a>
          </Link>
        ))}
      </>
    )
  }
}

export default PostListing
