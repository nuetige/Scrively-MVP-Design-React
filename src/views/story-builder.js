import React from 'react'

import { Helmet } from 'react-helmet'

import './story-builder.css'

const STORYBUILDER = (props) => {
  return (
    <div className="storybuilder-container">
      <Helmet>
        <title>STORY-BUILDER - exported project</title>
        <meta property="og:title" content="STORY-BUILDER - exported project" />
      </Helmet>
    </div>
  )
}

export default STORYBUILDER
