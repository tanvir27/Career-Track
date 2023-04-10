import React from 'react';
import { useLoaderData } from 'react-router-dom';


const Statistics = () => {
    const statisticsData = useLoaderData();
    return (
        <div>
            <div className='container text-center'>
                {statisticsData.length}
            </div>
            
        </div>
    );
};

export default Statistics;