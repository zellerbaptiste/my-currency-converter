import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  convertCurrency,
  getRates,
  ratesSelector,
  amountConvertedSelector
} from './converterSlice';
import styles from './Converter.module.css';

export function Converter() {
  // const rates = useSelector((state) => !state.converterSlice.hasErrors && !state.converterSlice.loading && state.converterSlice.rates );
  // const { rates, loading, hasErrors } = useSelector(ratesSelector);
  const dispatch = useDispatch();
  
  const [convertingAmount, setConvertingAmount] = useState('0');
  // const [rates, setRates] = useState([]);
  
  const rates = useSelector(ratesSelector);
  const amountConverted = useSelector(amountConvertedSelector);


  const handleOnChange = (value) => {
    const convertingValue = Number(value) || 0;
    setConvertingAmount(convertingValue);
    debugger;
    dispatch(convertCurrency(convertingValue));
  }

  useEffect(() => {
    dispatch(getRates());
  }, [dispatch])

  return (
    <div>
      <div className={styles.row}>
        <input
          value={convertingAmount}
          type="text"
          onChange={(e) => handleOnChange(e.target.value)}
        />
        <p>Amount : {amountConverted}</p>
        {rates.length && rates.map((rate, id) => {
          return (
            <div key={rate.id}>{rate.title}</div>
          );
        })}
      </div>
    </div>
  );
}
