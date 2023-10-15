import React, {useState} from 'react';
import PropTypes from 'prop-types';
import styles from './UserForm.module.scss';
import Card from "../../UI/Card/Card";
import Input from "../../UI/Input/Input";
import Button from "../../UI/Button/Button";
import Modal from "../../UI/Modal/Modal";

const defaultUser = {
    username : '',
    age : '',
}

const UserForm = (props) => {
    const [user, setUser] = useState(defaultUser)
    const [error, setError] = useState(false);

    const onChangeHandler = (event) => {
        setUser((prevState) => {
            return {
                ...prevState,
                [event.target.id] : event.target.value
            }
        })
    }

    const onCloseHandler = () => {
        setError(false);
    }

    const onSubmitHandler = (event) => {
        event.preventDefault();

        if (!user.username || Number(user.age) < 1) {
            setError({
                title : 'Something wrong appened',
                message : 'We dont know what happened!',
                text: 'Close'
            });
            return;
        }

        setUser(defaultUser);
        props.onCreateUser(user);
    }

    return (
        <Card className={styles.UserForm}>
            { error && <Modal
                onClose={ onCloseHandler }
                error={error}

            /> }
            <form
                onSubmit={ onSubmitHandler }>
                <Input
                    id='username'
                    value={user.username}
                    type='text'
                    label='Username'
                    onChange={ onChangeHandler }
                />
                <Input
                    id='age'
                    value={user.age}
                    type='number'
                    label='Age (in years)'
                    onChange={ onChangeHandler }
                />
                <Button
                    text='Add User'
                    type='submit'
                />
            </form>
        </Card>
    );
}

UserForm.propTypes = {};

UserForm.defaultProps = {};

export default UserForm;
