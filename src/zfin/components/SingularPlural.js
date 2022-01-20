import React from 'react';

const SingularPlural = ({singular, plural, value}) => {
    if (value === 1) {
        return <span>{value} {singular}</span>;
    } else {
        {
            return <React.Fragment>{value} {plural}</React.Fragment>
        }
    }

};

export default SingularPlural;

