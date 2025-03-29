'use client'

import React from 'react'
import type { SerializedEditorState } from '@payloadcms/richtext-lexical/lexical'
import { convertLexicalToHTML } from '@payloadcms/richtext-lexical/html'


const MdxPayload = ({ data }: { data: SerializedEditorState }) => {
    const html = convertLexicalToHTML({ data })

    return <div dangerouslySetInnerHTML={{ __html: html }} />

}

export default MdxPayload