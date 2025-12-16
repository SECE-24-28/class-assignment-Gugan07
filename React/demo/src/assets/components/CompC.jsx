import React from 'react';
import useCounter from '../hooks/useCounter';

function CompC({ data }) {
    return (
        <div>
            Comp C<h2>Data from props drilling</h2>
            <Consumer>
                {(data) => (
                   return <h3>Data from context API: {data}</h3>

                )}
            </Consumer>
        </div>
    );
}

export default CompC;