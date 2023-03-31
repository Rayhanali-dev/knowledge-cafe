import React from 'react';

const Faq = () => {
    return (
        <div className='max-w-7xl mx-auto mb-7 px-5 lg:px-0'>
            <div className="collapse collapse-arrow mb-5">
                <input type="checkbox" className="peer" />
                <div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                    Props vs state
                </div>
                <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                    <p>State is managed within the component. Props gets passed to the component. State can be changed(mutable). Props are read only and cannot be changed (immutable). State changes can be asynchronous. Props are read only</p>
                </div>
            </div>
            <div className="collapse collapse-arrow mb-5">
                <input type="checkbox" className="peer" />
                <div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                    How does useState work?
                </div>
                <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                    <p>useState is React Hook that allows you to add state to a functional component. It returns an array. </p>
                </div>
            </div>
            <div className="collapse collapse-arrow mb-5">
                <input type="checkbox" className="peer" />
                <div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                    Purpose of useEffect other than fetching data.
                </div>
                <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                    <p>useEffect hook is part of React’s Hooks API. The core principle of this hook is to let you perform side effects in your functional components.</p>
                </div>
            </div>
            <div className="collapse collapse-arrow mb-5">
                <input type="checkbox" className="peer" />
                <div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                    How Does React work?
                </div>
                <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                    <p>ReactJS divides the UI into isolated reusable pieces of code known as components. React components work similarly to JavaScript functions as they accept arbitrary inputs called properties or props.</p>
                </div>
            </div>
        </div>
    );
};

export default Faq;