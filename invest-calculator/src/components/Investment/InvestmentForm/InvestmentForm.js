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
    console.log(event.target.id, event.target.value);

    setInvestment((prevState) => {
      if (event.target.id === 'current') {
        return {
          ...prevState,
          current: event.target.value,
        }
      }
  
      if (event.target.id === 'yearly') {
        return {
          ...prevState,
          yearly: event.target.value,
        }
      }
  
      if (event.target.id === 'expected') {
        return {
          ...prevState,
          expected: event.target.value,
        }
      }
  
      if (event.target.id === 'duration') {
        return {
          ...prevState,
          duration: event.target.value,
        }
      }
    })
  }

  const isValid = (investment) => {
    return   investment.current !== '' && investment.yearly !== '' && investment.yearly !== '' && investment.duration !== '';
  }

  // console.log(investment);

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
          type='text'
          id='current'
          onChange={ onChangeHandler }
          labelAnnotation='$'
          label='Current Savings'
          arrow={ false }
          value={ investment.current }

          />
        <Input 
          htmlFor='yearly'
          type='text'
          id='yearly'
          onChange={ onChangeHandler }
          labelAnnotation='$'
          label='Yearly Savings'
          arrow={ false }
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

          />
        <Input 
          htmlFor='duration'
          type='text'
          id='duration'
          onChange={ onChangeHandler }
          labelAnnotation='years'
          label='Investment Duration'
          arrow={ false }
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
