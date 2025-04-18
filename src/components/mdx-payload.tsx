'use client'

import React from 'react'
import type { SerializedEditorState } from '@payloadcms/richtext-lexical/lexical'
import { convertLexicalToHTML } from '@payloadcms/richtext-lexical/html'
import {
    PayloadLexicalReact,
    PayloadLexicalReactProps, defaultElements
} from "@zapal/payload-lexical-react";

const MdxPayload = ({ data }: { data: SerializedEditorState }) => {
    const html = convertLexicalToHTML({ data })
    return <>
        <PayloadLexicalReact content={data} elements={{
            ...defaultElements,
            heading: (props) => {
                const Component = props.tag;
                console.log(props)
                if (props.tag === 'h1') {
                    return <h1 className="text-4xl font-bold " >{props.children}</h1>;
                } else if (props.tag === 'h2') {
                    return <h2 className="text-3xl font-bold " >{props.children}</h2>;
                }
                if (props.tag === 'h3') {
                    return <h3 className="text-2xl font-bold " >{props.children}</h3>;
                }
                if (props.tag === 'h4') {
                    return <h4 className="text-xl font-bold " >{props.children}</h4>;
                }

                return <h5 >{props.children}</h5>;
            },
            paragraph: (props) => <p className="custom-paragraph">{props.children}</p>,
        }
        } />
    </>
    // return <div className='prose '  dangerouslySetInnerHTML={{ __html: html }} />

}

export default MdxPayload