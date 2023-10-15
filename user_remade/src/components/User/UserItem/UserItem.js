import React from 'react';
import PropTypes from 'prop-types';
import styles from './UserItem.module.scss';

const UserItem = (props) => {

    const onClickHandler = (event) => {
        props.onRemoveUser(event);
    }

    return (
        <div className={styles.UserItem}
             onClick={ onClickHandler }
             id={props.index}>
            { props.user.username } ({props.user.age })
        </div>
    );
}

UserItem.propTypes = {};

UserItem.defaultProps = {};

export default UserItem;
