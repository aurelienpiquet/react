import React, {useState} from 'react';
import PropTypes from 'prop-types';
import styles from './User.module.scss';
import Card from "../Ui/Card/Card";
import UserForm from "./UserForm/UserForm";
import List from "../Ui/List/List";

let userListing = [];

const User = () => {
    const [result, setResult] = useState(userListing);

    const show = result.length > 0;

    const onSubmitHandler = (user) => {
        userListing.push(user);
        setResult([...userListing]);
    }

    const onDeleteHandler = (event) => {
        userListing = userListing.filter(user => user.id !== event.target.id);
        setResult([...userListing]);
    }

    return (
        <div className={styles.User}>
            <Card>
                <UserForm onSubmit={ onSubmitHandler }/>
            </Card>

            <Card show={show}>
                <List
                    results={ result }
                    onDelete={ onDeleteHandler }
                />
            </Card>

        </div>
    );
}

User.propTypes = {};

User.defaultProps = {};

export default User;
