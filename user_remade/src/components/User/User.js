import React, {useState} from 'react';
import PropTypes from 'prop-types';
import styles from './User.module.scss';
import UserForm from "./UserForm/UserForm";
import Listing from "../UI/Listing/Listing";

const User = () => {
    const [users, setUsers] = useState([]);

    const onCreateUserHandler = (user) => {
        setUsers((prevState) => {
            return [...prevState, user];
        })
    }

    const onRemoveUserHandler = (event) => {
        users.splice(event.target.id, 1)
        setUsers((prevState) => {
            return [...prevState];
        });
    }

    return (
        <React.Fragment>
            <UserForm onCreateUser={ onCreateUserHandler }/>
            { users.length > 0 && <Listing items={users} onRemoveUser={ onRemoveUserHandler }/> }
        </React.Fragment>
    );
}

User.propTypes = {};
User.defaultProps = {};

export default User;
