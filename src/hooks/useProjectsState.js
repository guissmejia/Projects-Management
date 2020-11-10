import { useState, useEffect } from 'react';

const useProjectsState = (API) => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch(API)
      .then((response) => response.json())
      .then((response) => setProjects(response.data))
      .catch((error) => {
        console.log(`Failed to Fetch ${ error}`);
      });
  }, []);
  return projects;
};

export default useProjectsState;
