import React, {useState} from 'react';
import PropTypes from 'prop-types';
import styles from './UserForm.module.scss';
import Input from "../../Ui/Input/Input";
import User from "../User";
import {UserModel} from "../../../Models/UserModel";

const userDefault = new UserModel();

const UserForm = (props) => {
    const [user, setUser] = useState(userDefault);

    const onChangeHandler = (event) => {
        setUser((prevState) => {
            return {
                ...prevState,
                [event.target.id] : event.target.value,
            }
        })
    };

    const onSubmitHandler = (event) => {
        event.preventDefault();

        const createdUser = new UserModel(user.username, user.age, user.id);

        if (!createdUser.getIsValid()) {
            return;
        }

        createdUser['id'] = 'id-' + Math.random();

        props.onSubmit(createdUser);

        setUser(new UserModel());
    }

    return (
        <form className={styles.UserForm}
            onSubmit={ onSubmitHandler }
        >
            <Input
                label='Username'
                id='username'
                type='text'
                onChange={ onChangeHandler }
                value={user.username}
            />
            <Input
                label='Age (Years)'
                id='age'
                type='number'
                onChange={ onChangeHandler }
                value={user.age}
            />
            <button type='submit'>Add User</button>
        </form>
    );
}

UserForm.propTypes = {};

UserForm.defaultProps = {};

export default UserForm;
