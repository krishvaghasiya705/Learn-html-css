import React from 'react';
import './Homepagecontenttogglesection.scss';

function Homepagecontenttogglesection({ activeToggle, handleToggleClick }) {
    return (
        <div className='Homepage-content-toggle-section'>
            <button>
                <div
                    className={`html-toggle ${activeToggle === 'html' ? 'active' : ''}`}
                    onClick={() => handleToggleClick('html')}
                >
                    <span>html</span>
                </div>
                <div
                    className={`css-toggle ${activeToggle === 'css' ? 'active' : ''}`}
                    onClick={() => handleToggleClick('css')}
                >
                    <span>css</span>
                </div>
            </button>
        </div>
    );
}

export default Homepagecontenttogglesection;
