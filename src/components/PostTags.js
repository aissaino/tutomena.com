import React, { Component } from 'react'
import { kebabCase } from '../utils/global'
import { Link } from 'gatsby'

class PostTags extends Component {
  render() {
    const { tags, size } = this.props

    return (
      <div className="tag-container">
        {tags &&
          tags.map(tag => (
            <Link key={tag} style={{ textDecoration: 'none' }} to={`/tags/${kebabCase(tag)}/`}>
              <span class={size ? size : null}>{tag}</span>
            </Link>
          ))}
      </div>
    )
  }
}

export default PostTags
