import React from 'react';
import ReactDOM from 'react-dom';
import { configureUrlQuery } from 'react-url-query';

import Demo from './Demo';
import Demo2 from './Demo2';
import history from './history';

// import GeneOntologyRibbon from "../../src/zfin/containers/GeneOntologyRibbon";
import GeneExpressionRibbon from "../../src/zfin/containers/GeneExpressionRibbon";

// link the history used in our app to url-query so it can update the URL with it.
configureUrlQuery({ history });

ReactDOM.render(
    <div className="body data-page">
    <GeneExpressionRibbon geneId={"ZDB-GENE-990415-8"} />
    </div>,
    document.getElementById('demo'));
