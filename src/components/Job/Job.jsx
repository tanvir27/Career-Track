import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Job = () => {
    const jobData = useLoaderData();
    // const jobData = dataJ.data;
 console.log(jobData);
    return (
        <div>
            {
                jobData.map(job => console.log(job))
            }
        </div>
    );
};

export default Job;