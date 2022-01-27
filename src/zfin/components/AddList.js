import React from 'react';
import PropTypes from 'prop-types';


const AddList = ({ setModalItem, newItem,title}) => {


    const handleAddClick = () => {
        setModalItem(newItem, false);
    };

    return (
        <React.Fragment>




            <button type='button' className='btn btn-link px-0' onClick={handleAddClick}>Add {title}</button>
        </React.Fragment>
    );
};

AddList.propTypes = {

    newItem: PropTypes.any,
    setModalItem: PropTypes.func,
    title:PropTypes.string,
};

export default AddList;
