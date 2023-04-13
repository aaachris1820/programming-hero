import React from 'react';
import { useLoaderData } from 'react-router-dom';

const App = () => {
  const loaderData=useLoaderData();

  return (
    <div>
      <h1 style={{textAlign:'center'}}>react router dom and local server</h1>
      <div>
        {loaderData.map(job=><p key={job.id}>{job.name}</p>)}
      </div>
    </div>
  );
};

export default App;