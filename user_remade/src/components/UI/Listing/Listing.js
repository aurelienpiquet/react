import React from 'react';
import PropTypes from 'prop-types';
import styles from './Listing.module.scss';
import Card from "../Card/Card";
import UserItem from "../../User/UserItem/UserItem";

const Listing = (props) => {
    const onRemoveUserHandler = (event) => {
        props.onRemoveUser(event);
    }

    const items = props.items.map((item, index) => {
        return <UserItem
            onRemoveUser={ onRemoveUserHandler }
            user={item}
            index={index}
            key={index}
        />;
    })

    return (
        <Card className={styles.Listing}>
            { items }
        </Card>
    );
}

Listing.propTypes = {};

Listing.defaultProps = {};

export default Listing;
