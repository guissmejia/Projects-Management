import { useState, useEffect } from 'react';

const useEmployeesState = (API) => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    fetch(API)
      .then((response) => response.json())
      .then((response) => setEmployees(response.data))
      .catch((error) => {
        console.log(`Failed to Fetch ${ error}`);
      });
  }, []);
  return employees;
};

export default useEmployeesState;
