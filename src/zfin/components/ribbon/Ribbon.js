import React, { useEffect, useRef, useState } from 'react';
import { applyPolyfills, defineCustomElements } from '@geneontology/wc-ribbon-strips/loader';

import style from './style.scss';

applyPolyfills().then(() => {
    defineCustomElements(window);
});

const Ribbon = (props) => {
    const ribbonRef = useRef(null);
    useEffect(() => {
        if (!ribbonRef.current) {
            return;
        }
        ribbonRef.current.querySelectorAll('.ontology-ribbon__item').forEach(item => {
            // warning! changing the 'No annotations' text here may break a style selector in datapage.scss
            const title = item.getAttribute('title')
                .replace(/class(e?)/, 'term')
                .replace(/^0 term, 0 annotation$/, 'No annotations');
            item.setAttribute('title', title);
        })
    }, [props.subjects]);
    console.log("rendering ribbon");
    console.log(
        props
    );
    return (
        <div className='ontology-ribbon-container horizontal-scroll-container' ref={ribbonRef}>
            <wc-ribbon-strips
                hide-first-subject-label
                color-by='1' // annotations
                binary-color
                max-color={[style.primaryR, style.primaryG, style.primaryB]}
                update-on-subject-change={false}
                subject-position='0'
                data={JSON.stringify(props)}
            />
            <small className='text-muted'>
                Click a filled square to see annotations
            </small>
        </div>
    );
}

export default Ribbon;
