import React from 'react';
import ReactLoading from 'react-loading';

const LoadingBar = ({ type, color }) => (
    <div className="Loading__Bar">
        <ReactLoading  type={type} color={color}  />
    </div>
);

export default LoadingBar;