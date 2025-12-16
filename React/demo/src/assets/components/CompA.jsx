import React from 'react';
import CompB from './CompB';

function CompA({ data }) {
    return (
        <div>
            <CompB>
            <CompC data={data} />
            