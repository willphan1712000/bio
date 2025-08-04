import React from 'react'
import Layout from './Layout'
import Upload from './templateComponents/Upload'
import TemplateRecords from './templateComponents/TemplateRecords'

const Template = () => {
  return (
    <Layout heading="Template Management">
      <Upload />
      <TemplateRecords />
    </Layout>
  )
}

export default Template
