import React from 'react';
import PropTypes from 'prop-types';
import styles from './List.module.scss';
import ListItem from "../ListItem/ListItem";

const List = (props) => {
    let items = props.results;

    const onDeleteHandler = (event) => {
        props.onDelete(event)
    }

    items = items.map((item, index) => (
        <ListItem
            item={item}
            onDelete={ onDeleteHandler }
            key={index}
        />
    ));

    return  (
        <div className={styles.UserList}>
            { items }
        </div>
    );
}

List.propTypes = {};

List.defaultProps = {};

export default List;
