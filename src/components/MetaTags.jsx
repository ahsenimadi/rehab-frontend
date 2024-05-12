import React from 'react'
import { Helmet } from 'react-helmet'

const MetaTags = ({ meta }) => {
    return (
        <>
            <Helmet>
                <title>{meta.meta_title}</title>
                <meta name='description' content={meta.meta_description} />
                <meta name='keywords' content={meta.meta_keywords} />
            </Helmet>
        </>
    )
}

export default MetaTags