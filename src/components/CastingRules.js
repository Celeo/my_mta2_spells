import React from 'react'
import ReactMarkdown from 'react-markdown'

import rules from './casting_rules.md'

const CastingRules = (props) => {
  return <ReactMarkdown source={rules} className="markdown" />
}

export default CastingRules
