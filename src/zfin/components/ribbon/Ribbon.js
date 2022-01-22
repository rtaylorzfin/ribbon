import React, { useEffect, useRef, useState } from 'react';
import { applyPolyfills, defineCustomElements } from '@geneontology/wc-ribbon-strips/loader';

import style from './style.scss';

applyPolyfills().then(() => {
    defineCustomElements(window);
});

const Ribbon = ({subjects, categories, itemClick, selected}) => {
    const props = {subjects, categories, selected};
    const ribbonRef = useRef(null);
    const ribbonStripsRef = useRef();
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
        });
    }, [subjects]);

    useEffect(() => {
        console.log('ribbonStripsRef.current', ribbonStripsRef.current);
        ribbonStripsRef.current.addEventListener('cellClick', (event) => {
            try {
                console.log('itemClick', itemClick);

                const subject = event.detail.subjects[0];
                const group = event.detail.group;
                if (subject && group) {
                    itemClick(subject, group);
                }
            } catch (e) {
                //in case event.detail.subjects[0] chaining fails.
            }
        });
    },[]);

    return (
        <div className='ontology-ribbon-container horizontal-scroll-container' ref={ribbonRef}>
            <wc-ribbon-strips
                color-by='1' // annotations
                binary-color
                max-color={[style.primaryR, style.primaryG, style.primaryB]}
                subject-position='0'
                update-on-subject-change={false}
                ref={ribbonStripsRef}
                data={JSON.stringify(props)}
            />
            <small className='text-muted'>
                Click a filled square to see annotations
            </small>
        </div>
    );
}

export default Ribbon;
