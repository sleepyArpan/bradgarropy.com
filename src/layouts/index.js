import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"

// components
import Navigation from "../components/Navigation"

// favicon
import favicon from "../icons/favicon.ico"


const Layout = ({ children, data }) => {

    return (

        <div>

            <Helmet
                title={data.site.siteMetadata.title}
                meta={[
                    {name: "description", content: "Sample"},
                    {name: "keywords", content: "sample, something"},
                ]}
                link={[
                    {rel: "icon", type: "image/png", href: favicon},
                ]}
            />

            {children()}

        </div>

    )
}

Layout.propTypes = {
    children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
