import React from 'react';
import PropTypes from 'prop-types';
import styles from './ListItem.module.scss';

const ListItem = (props) => {
    const onDeleteHandler = (event) => {
        props.onDelete(event);
    }

    return (
        <div className={styles.UserListItem}
            onClick={ onDeleteHandler }
            id={ props.item.id }
            key={ props.item.id }
        >
            {props.item.username} ({props.item.age} years old)
        </div>
    );

}
ListItem.propTypes = {};

ListItem.defaultProps = {};

export default ListItem;
