import React, { useState } from 'react';
import useFetchJobs from './useFetchJobs';
import { Container } from 'react-bootstrap';
import Job from './Job';

function App() {
  // const [params,setParams] = useState({});
  // const [page,setPage] = useState(1);
  const {jobs,loading,error } = useFetchJobs();
  console.log(jobs);
  return (
    <Container>
      {loading && <h1>Loading</h1>}
      {error && <h1>Error</h1>}
     {/* <h1> {(jobs.length!==0)?jobs.data.length:'getting data'}</h1> */}
      {(jobs.length!==0)?jobs.data.map(job => <Job key={job.id} job={job}/>):'getting data'}
    </Container>
  );
}

export default App;
