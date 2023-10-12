import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './InvestmentForm.module.scss';
import Input from '../../ui/Input/Input';

const defaultInvestment = {
  current: '',
  yearly: '',
  expected: '',
  duration: '',
};

const InvestmentForm = (props) => {
  const [investment, setInvestment] = useState(defaultInvestment);

  const onChangeHandler = (event) => {
    setInvestment((prevState) => {
      return {
        ...prevState,
        [event.target.id]: event.target.value,
      }
    })
  }

  const isValid = (investment) => {
    return investment.current !== '' && investment.yearly !== '' && investment.yearly !== '' && investment.duration !== '';
  }

  const onSubmitHandler = (event) => {
    event.preventDefault();

    if (!isValid(investment)) {
      return;
    }

    props.onSubmit(investment);
  }

  const onResetHandler = () => {
    setInvestment(defaultInvestment);
    props.onReset();
  }

  return (
    <form className={styles.InvestmentForm}
        onSubmit={ onSubmitHandler }
    >
      <div className="input-group">
        <Input 
          htmlFor='current'
          type='number'
          id='current'
          onChange={ onChangeHandler }
          labelAnnotation='$'
          label='Current Savings'
          value={ investment.current }

          />
        <Input 
          htmlFor='yearly'
          type='number'
          id='yearly'
          onChange={ onChangeHandler }
          labelAnnotation='$'
          label='Yearly Savings'
          value={ investment.yearly }

        />
      </div>
      <div className="input-group">
        <Input 
          htmlFor='expected'
          type='number'
          id='expected'
          onChange={ onChangeHandler }
          labelAnnotation='%, per year'
          label='Expected Interest'
          value={ investment.expected }
          arrow={ true }

          />
        <Input 
          htmlFor='duration'
          type='number'
          id='duration'
          onChange={ onChangeHandler }
          labelAnnotation='years'
          label='Investment Duration'
          value={ investment.duration }

        />
      </div>

      <p className="actions">
        <button type="reset" className="buttonAlt"
          onClick={ onResetHandler }
        >
          Reset
        </button>
        <button type="submit" className="button">
          Calculate
        </button>
      </p>
  </form>
  );
}

InvestmentForm.propTypes = {};

InvestmentForm.defaultProps = {};

export default InvestmentForm;
