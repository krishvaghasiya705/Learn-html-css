import React, { useMemo, useState } from 'react';
import './csspage.scss';
import { Link } from 'react-router-dom';

const Csspagecompo = () => {
    // Define state for search query
    const [searchQuery, setSearchQuery] = useState('');

    // Memoize CSS properties and grouped properties
    const cssProperties = useMemo(() => [
        // Deprecated properties
        { style: '-moz-border-radius', description: 'Used to define rounded corners in Mozilla browsers.', replacement: 'Replaced by border-radius, which is now supported across all browsers.' },
        { style: '-moz-box-shadow', description: 'Adds shadow effects to elements in Mozilla browsers.', replacement: 'Replaced by box-shadow.' },
        { style: '-webkit-border-radius', description: 'Used for rounded corners in WebKit browsers (Chrome/Safari).', replacement: 'Replaced by border-radius.' },
        { style: '-webkit-box-shadow', description: 'Adds shadow effects to elements in WebKit browsers (Chrome/Safari).', replacement: 'Replaced by box-shadow.' },
        { style: '-webkit-gradient', description: 'Used to apply gradients in WebKit browsers.', replacement: 'Replaced by the standard linear-gradient and radial-gradient.' },
        { style: '-webkit-appearance', description: 'Controls appearance of UI elements in WebKit.', replacement: 'Replaced by appearance, which is supported in most modern browsers.' },
        { style: '-o-border-radius', description: 'Used for rounded corners in Opera browsers.', replacement: 'Replaced by border-radius.' },
        { style: '-ms-filter', description: 'Used to apply visual filters in old versions of IE.', replacement: 'Use filter instead.' },
        { style: '-moz-user-select', description: 'Prevents text selection in Mozilla browsers.', replacement: 'Replaced by user-select.' },
        { style: 'float', description: 'Used for positioning elements (often for layouts).', replacement: 'Replaced by modern layout techniques like Flexbox (display: flex) and Grid (display: grid).' },
        { style: 'clip', description: 'Used to clip the visible region of an element (rectangular areas).', replacement: 'Replaced by clip-path, which allows more complex clipping shapes.' },
        { style: 'zoom', description: 'Scales an element.', replacement: 'Still supported in some browsers (not standard). Use transform: scale() for cross-browser compatibility.' },
    ], []);

    const groupedProperties = useMemo(() => [
        {
            category: 'Background',
            properties: [
                { style: 'background', description: 'Shorthand for background-color, background-image, background-position, background-size, background-repeat, and background-attachment.' },
                { style: 'background-attachment', description: 'Defines whether the background image scrolls with the content or is fixed.' },
                { style: 'background-blend-mode', description: 'Defines how the background image and background color blend together.' },
                { style: 'background-color', description: 'Defines the background color of an element.' },
                { style: 'background-image', description: 'Defines one or more background images.' },
                { style: 'background-origin', description: 'Defines the background positioning area.' },
                { style: 'background-position', description: 'Defines the position of a background image.' },
                { style: 'background-repeat', description: 'Defines whether a background image should repeat.' },
                { style: 'background-size', description: 'Defines the size of the background image.' },
                { style: 'background-clip', description: 'Defines which part of the element’s background is visible.' },
            ],
        },
        {
            category: 'Border',
            properties: [
                { style: 'border', description: 'Shorthand for border-width, border-style, and border-color.' },
                { style: 'border-bottom', description: 'Defines the bottom border of an element.' },
                { style: 'border-bottom-color', description: 'Defines the color of the bottom border.' },
                { style: 'border-bottom-style', description: 'Defines the style of the bottom border.' },
                { style: 'border-bottom-width', description: 'Defines the width of the bottom border.' },
                { style: 'border-color', description: 'Defines the color of all borders.' },
                { style: 'border-image', description: 'Shorthand for border-image-source, border-image-slice, border-image-width, border-image-outset, and border-image-repeat.' },
                { style: 'border-image-outset', description: 'Defines the amount by which the border image area extends beyond the border box.' },
                { style: 'border-image-repeat', description: 'Defines how the border image should be repeated.' },
                { style: 'border-image-slice', description: 'Defines how the border image is sliced.' },
                { style: 'border-image-source', description: 'Defines the source of the border image.' },
                { style: 'border-image-width', description: 'Defines the width of the border image.' },
                { style: 'border-left', description: 'Defines the left border of an element.' },
                { style: 'border-left-color', description: 'Defines the color of the left border.' },
                { style: 'border-left-style', description: 'Defines the style of the left border.' },
                { style: 'border-left-width', description: 'Defines the width of the left border.' },
                { style: 'border-radius', description: 'Defines the radius of the element’s corners.' },
                { style: 'border-right', description: 'Defines the right border of an element.' },
                { style: 'border-right-color', description: 'Defines the color of the right border.' },
                { style: 'border-right-style', description: 'Defines the style of the right border.' },
                { style: 'border-right-width', description: 'Defines the width of the right border.' },
                { style: 'border-style', description: 'Defines the style of all borders.' },
                { style: 'border-top', description: 'Defines the top border of an element.' },
                { style: 'border-top-color', description: 'Defines the color of the top border.' },
                { style: 'border-top-style', description: 'Defines the style of the top border.' },
                { style: 'border-top-width', description: 'Defines the width of the top border.' },
                { style: 'border-width', description: 'Defines the width of all borders.' },
            ],
        },
        {
            category: 'Flexbox',
            properties: [
                { style: 'align-content', description: 'Defines the alignment of flex container lines.' },
                { style: 'align-items', description: 'Defines the alignment of flex items.' },
                { style: 'align-self', description: 'Defines the alignment of a flex item.' },
                { style: 'flex', description: 'Shorthand for flex-grow, flex-shrink, and flex-basis.' },
                { style: 'flex-basis', description: 'Defines the initial size of a flex item.' },
                { style: 'flex-direction', description: 'Defines the direction of flex items.' },
                { style: 'flex-flow', description: 'Shorthand for flex-direction and flex-wrap.' },
                { style: 'flex-grow', description: 'Defines the ability of a flex item to grow.' },
                { style: 'flex-shrink', description: 'Defines the ability of a flex item to shrink.' },
                { style: 'flex-wrap', description: 'Defines whether flex items should wrap.' },
                { style: 'justify-content', description: 'Defines the alignment of flex items along the main axis.' },
            ],
        },
        {
            category: 'Grid',
            properties: [
                { style: 'align-content', description: 'Defines the alignment of grid container lines.' },
                { style: 'align-items', description: 'Defines the alignment of grid items.' },
                { style: 'align-self', description: 'Defines the alignment of a grid item.' },
                { style: 'grid', description: 'Shorthand for grid-template-rows, grid-template-columns, grid-template-areas, grid-auto-rows, grid-auto-columns, grid-auto-flow, grid-column-gap, grid-row-gap, and grid-gap.' },
                { style: 'grid-area', description: 'Defines the area of a grid item.' },
                { style: 'grid-auto-columns', description: 'Defines the size of auto-placed columns.' },
                { style: 'grid-auto-flow', description: 'Defines how auto-placed items are inserted.' },
                { style: 'grid-auto-rows', description: 'Defines the size of auto-placed rows.' },
                { style: 'grid-column', description: 'Defines the starting and ending lines of a grid item in the column axis.' },
                { style: 'grid-column-end', description: 'Defines the ending grid line of a grid item in the column axis.' },
                { style: 'grid-column-gap', description: 'Defines the gap between grid columns.' },
                { style: 'grid-column-start', description: 'Defines the starting grid line of a grid item in the column axis.' },
                { style: 'grid-gap', description: 'Shorthand for grid-column-gap and grid-row-gap.' },
                { style: 'grid-row', description: 'Defines the starting and ending lines of a grid item in the row axis.' },
                { style: 'grid-row-end', description: 'Defines the ending grid line of a grid item in the row axis.' },
                { style: 'grid-row-gap', description: 'Defines the gap between grid rows.' },
                { style: 'grid-row-start', description: 'Defines the starting grid line of a grid item in the row axis.' },
                { style: 'grid-template', description: 'Shorthand for grid-template-rows, grid-template-columns, and grid-template-areas.' },
                { style: 'grid-template-areas', description: 'Defines the grid areas.' },
                { style: 'grid-template-columns', description: 'Defines the number and size of columns in a grid.' },
                { style: 'grid-template-rows', description: 'Defines the number and size of rows in a grid.' },
            ],
        },
    ], []);

    // Combine cssProperties and groupedProperties for search
    const combinedProperties = useMemo(() => [
        ...cssProperties.map(prop => ({ ...prop, category: 'Deprecated' })),
        ...groupedProperties.flatMap(group =>
            group.properties.map(prop => ({ ...prop, category: group.category }))
        )
    ], [cssProperties, groupedProperties]);

    // Filtered properties based on search query
    const filteredProperties = useMemo(() => {
        return combinedProperties.filter(property =>
            property.style.toLowerCase().includes(searchQuery.toLowerCase()) ||
            property.description.toLowerCase().includes(searchQuery.toLowerCase())
        );
    }, [combinedProperties, searchQuery]);

    // Group filtered properties
    const groupedFilteredProperties = useMemo(() => {
        return filteredProperties.reduce((acc, prop) => {
            const category = prop.category;
            if (!acc[category]) {
                acc[category] = [];
            }
            acc[category].push(prop);
            return acc;
        }, {});
    }, [filteredProperties]);

    return (
        <div className="css-page">
            <div className='page-top-div'>
                <div className="input-container">
                    <input
                        type="text"
                        placeholder="Search properties..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="search-input"
                    />
                    <span className="icon">
                        <svg width="19px" height="19px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14 5H20" stroke="#000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M14 8H17" stroke="#000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M21 11.5C21 16.75 16.75 21 11.5 21C6.25 21 2 16.75 2 11.5C2 6.25 6.25 2 11.5 2" stroke="#000" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M22 22L20 20" stroke="#000" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </span>
                </div>
                <div className='try-button'>
                    <Link to={"/Editorpage"}>
                        <button>Try it your self</button>
                    </Link>
                </div>
            </div>
            <div className='table-container'>
                {Object.keys(groupedFilteredProperties).map((category, index) => (
                    <div key={index} className="property-group">
                        <h2>{category}</h2>
                        <table>
                            <thead>
                                <tr>
                                    <th>Property</th>
                                    <th>Description</th>
                                    <th>Replacement</th>
                                </tr>
                            </thead>
                            <tbody>
                                {groupedFilteredProperties[category].map((prop, i) => (
                                    <tr key={i}>
                                        <td>{prop.style}</td>
                                        <td>{prop.description}</td>
                                        <td>{prop.replacement}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Csspagecompo;