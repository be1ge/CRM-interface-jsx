import React, { useState, useEffect } from 'react';
import Header from '../Header/Header';
import styles from './Client.module.css';
import axios from 'axios';

function Client() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    fetchData();
  }, []);
  let i = 0;
  i++;
  const fetchData = async () => {
    if (data.length === 0) {
      setIsLoading(true);
      try {
        const response = await axios.get('http://localhost:3000/api/client');
        setData(response.data);
        console.log(response.data);
      } catch (error) {
        setErrorMessage('Failed to fetch data');
      }
      setIsLoading(false);
    }
  };

  return (
    <div className={styles.content}>
      <Header />
      <div className={styles.content_container}>
        <div className={styles.topbar}></div>
        <div className={styles.main}>
          {isLoading ? (
            <div>Loading...</div>
          ) : errorMessage ? (
            <div>{errorMessage}</div>
          ) : (
            data.map((item) => (
              <div key={item.id}>
                <h3>{item.title}</h3>
                <p>{item.content}</p>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default Client;
