import React, {useState} from 'react';
import PropTypes from 'prop-types';
import styles from './UserForm.module.scss';
import Input from "../../Ui/Input/Input";
import User from "../User";
import {UserModel} from "../../../Models/UserModel";
import Button from "../../Ui/Button/Button";
import ErrorModal from "../../Ui/Modal/ErrorModal/ErrorModal";
import Card from "../../Ui/Card/Card";

const userDefault = new UserModel();

const UserForm = (props) => {
    const [user, setUser] = useState(userDefault);
    const [error, setError] = useState(null);

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
            setError({
                title: 'Error occured',
                message: 'Something went really wrong'
            })
            return;
        }

        createdUser['id'] = 'id-' + Math.random();

        props.onSubmit(createdUser);

        setUser(new UserModel());
    }

    const onDismissHandler = () => {
        setError(null);
    }

    return (
        <div>
            { error && <ErrorModal onDismiss={ onDismissHandler } error={error} /> }
            <Card className={styles.UserForm}>
                <form
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

                    <Button
                        text={'Add user'}
                        type={'submit'}
                    />
                </form>
            </Card>
        </div>
    );
}

UserForm.propTypes = {};

UserForm.defaultProps = {};

export default UserForm;
