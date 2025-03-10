import React, { useContext } from 'react';
import { reactProps, reactDemo } from '../App';

const ComC = () => {
    const value = useContext(reactProps);
    const demo = useContext(reactDemo);

    return (
        <div>
            <h1>This Is Component C</h1>
            {/* New Mehod */}

            {/* <div className="btn">{value}</div>
            <div className="btn">{demo}</div> */}

            {/* Old Method */}
            <reactProps.Consumer>
                {(value) => {
                    return (

                        <div>
                            <div className='btn'>{value}</div>
                            <reactDemo.Consumer>
                                {(demo) => {
                                    return (
                                        <div>
                                            <div className="btn">{demo}</div>
                                        </div>
                                    );
                                }}
                            </reactDemo.Consumer>
                        </div>

                    )
                }}
            </reactProps.Consumer>
        </div>
    );
};

export default ComC;
