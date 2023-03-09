/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            twitter
          }
        }
      }
    }
  `)

  // Set these values by editing "siteMetadata" in gatsby-config.js
  const author = data.site.siteMetadata?.author
  const social = data.site.siteMetadata?.social

  return (
    <div className="bio">
      
      {author?.name && (
        <p>
          The world has already witnessed the revolutionary impacts of 4G technology on communication and the internet. But as the world advances, the demand for high-speed internet, low latency, and reliable connectivity continues to grow. As a result, the development of 5G and 6G technology has gained significant attention. In this article, we will discuss the technology, differences, cost, and other factors related to 5G and 6G.
        </p>
      )}
    </div>
  )
}

export default Bio
