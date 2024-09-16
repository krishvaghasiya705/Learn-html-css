import React from 'react';
import './HTMLTagsTable.scss';
import { Link } from 'react-router-dom';

const HTMLTagsTable = ({ searchQuery, handleSearchChange }) => {
    const deprecatedTags = [
        { tag: '<acronym>', description: 'Defines an acronym', replacement: 'Use <abbr> instead.' },
        { tag: '<applet>', description: 'Defines an embedded applet', replacement: 'Use <embed> or <object>.' },
        { tag: '<basefont>', description: 'Specifies a default font size for all text', replacement: 'Use CSS for font styling.' },
        { tag: '<big>', description: 'Defines bigger text', replacement: 'Use CSS (font-size).' },
        { tag: '<blink>', description: 'Makes text blink', replacement: 'Not supported. Use CSS animations if necessary.' },
        { tag: '<center>', description: 'Aligns content to the center', replacement: 'Use CSS (text-align: center).' },
        { tag: '<dir>', description: 'Defines a directory list', replacement: 'Use <ul> (unordered list).' },
        { tag: '<font>', description: 'Specifies font size, face, and color', replacement: 'Use CSS for font styling.' },
        { tag: '<frame>', description: 'Defines a window (frame)', replacement: 'Use <iframe>. Framesets have been deprecated.' },
        { tag: '<frameset>', description: 'Defines a set of frames', replacement: 'Not supported.' },
        { tag: '<isindex>', description: 'Creates an input prompt', replacement: 'Use <form> and <input>.' },
        { tag: '<keygen>', description: 'Generates a key pair', replacement: 'Use <input type="password"> or Web Crypto API.' },
        { tag: '<marquee>', description: 'Creates scrolling text', replacement: 'Use CSS animations.' },
        { tag: '<noframes>', description: 'Alternate content for browsers without frames support', replacement: 'Use <iframe> for embedding content.' },
        { tag: '<s>', description: 'Strikes through text', replacement: 'Use <del> or CSS (text-decoration: line-through).' },
        { tag: '<strike>', description: 'Same as <s>', replacement: 'Use <del> or CSS (text-decoration: line-through).' },
        { tag: '<tt>', description: 'Defines teletype text', replacement: 'Use CSS (font-family: monospace).' },
        { tag: '<u>', description: 'Underlines text (previously)', replacement: 'Use CSS (text-decoration: underline).' },
        { tag: '<xmp>', description: 'Displays preformatted text', replacement: 'Use <pre> or escape characters.' },
        { tag: '<menuitem>', description: 'Defines a command/menu item', replacement: 'Deprecated in HTML5.' }
    ];

    const supportedTags = [
        { tag: '<a>', description: 'Defines a hyperlink' },
        { tag: '<abbr>', description: 'Defines an abbreviation or acronym' },
        { tag: '<address>', description: 'Defines contact information' },
        { tag: '<article>', description: 'Defines an article' },
        { tag: '<aside>', description: 'Defines content aside from the page content' },
        { tag: '<audio>', description: 'Defines embedded sound content' },
        { tag: '<b>', description: 'Defines bold text' },
        { tag: '<bdi>', description: 'Isolates a part of text to avoid bidirectional text mixing' },
        { tag: '<bdo>', description: 'Overrides the current text direction' },
        { tag: '<blockquote>', description: 'Defines a block of quoted text' },
        { tag: '<body>', description: 'Defines the document\'s body' },
        { tag: '<br>', description: 'Inserts a single line break' },
        { tag: '<button>', description: 'Defines a clickable button' },
        { tag: '<canvas>', description: 'Used to draw graphics' },
        { tag: '<caption>', description: 'Defines a table caption' },
        { tag: '<cite>', description: 'Defines the title of a work' },
        { tag: '<code>', description: 'Defines a piece of computer code' },
        { tag: '<col>', description: 'Specifies column properties for an HTML table' },
        { tag: '<colgroup>', description: 'Specifies a group of one or more columns in a table' },
        { tag: '<data>', description: 'Links a content with a machine-readable value' },
        { tag: '<datalist>', description: 'Contains a list of predefined options for input controls' },
        { tag: '<dd>', description: 'Defines a description/value of a term in a description list' },
        { tag: '<del>', description: 'Defines text that has been deleted from a document' },
        { tag: '<details>', description: 'Defines additional details that the user can view or hide' },
        { tag: '<dfn>', description: 'Represents the defining instance of a term' },
        { tag: '<dialog>', description: 'Defines a dialog box or other interactive component' },
        { tag: '<div>', description: 'Defines a section or a division in an HTML document' },
        { tag: '<dl>', description: 'Defines a description list' },
        { tag: '<dt>', description: 'Defines a term/name in a description list' },
        { tag: '<em>', description: 'Defines emphasized text' },
        { tag: '<embed>', description: 'Defines a container for an external application or interactive content' },
        { tag: '<fieldset>', description: 'Groups related elements in a form' },
        { tag: '<figcaption>', description: 'Defines a caption for a <figure> element' },
        { tag: '<figure>', description: 'Specifies self-contained content' },
        { tag: '<footer>', description: 'Defines a footer for a document or section' },
        { tag: '<form>', description: 'Defines an HTML form for user input' },
        { tag: '<h1> - <h6>', description: 'Defines HTML headings' },
        { tag: '<head>', description: 'Contains metadata/information for the document' },
        { tag: '<header>', description: 'Defines a header for a document or section' },
        { tag: '<hgroup>', description: 'Groups a set of <h1> - <h6> elements' },
        { tag: '<hr>', description: 'Defines a thematic change in the content' },
        { tag: '<html>', description: 'Defines the root of an HTML document' },
        { tag: '<i>', description: 'Defines a part of text in an alternate voice or mood' },
        { tag: '<iframe>', description: 'Defines an inline frame' },
        { tag: '<img>', description: 'Defines an image' },
        { tag: '<input>', description: 'Defines an input control' },
        { tag: '<ins>', description: 'Defines text that has been inserted into a document' },
        { tag: '<kbd>', description: 'Defines keyboard input' },
        { tag: '<label>', description: 'Defines a label for an <input> element' },
        { tag: '<legend>', description: 'Defines a caption for a <fieldset>' },
        { tag: '<li>', description: 'Defines a list item' },
        { tag: '<link>', description: 'Defines the relationship between a document and an external resource (most used to link to stylesheets)' },
        { tag: '<main>', description: 'Defines the main content of a document' },
        { tag: '<map>', description: 'Defines an image map' },
        { tag: '<mark>', description: 'Defines text that has been highlighted' },
        { tag: '<menu>', description: 'Defines a list/menu of commands' },
        { tag: '<meta>', description: 'Defines metadata about an HTML document' },
        { tag: '<meter>', description: 'Defines a scalar measurement within a known range' },
        { tag: '<nav>', description: 'Defines navigation links' },
        { tag: '<noscript>', description: 'Defines an alternate content for users that have disabled scripts' },
        { tag: '<object>', description: 'Defines an embedded object' },
        { tag: '<ol>', description: 'Defines an ordered list' },
        { tag: '<optgroup>', description: 'Defines a group of related options in a drop-down list' },
        { tag: '<option>', description: 'Defines an option in a drop-down list' },
        { tag: '<output>', description: 'Defines the result of a calculation' },
        { tag: '<p>', description: 'Defines a paragraph' },
        { tag: '<param>', description: 'Defines a parameter for an object' },
        { tag: '<picture>', description: 'Defines a container for multiple image resources' },
        { tag: '<pre>', description: 'Defines preformatted text' },
        { tag: '<progress>', description: 'Represents the progress of a task' },
        { tag: '<q>', description: 'Defines a short inline quotation' },
        { tag: '<rp>', description: 'Defines what to show in browsers that do not support ruby annotations' },
        { tag: '<rt>', description: 'Defines an explanation or pronunciation of characters' },
        { tag: '<ruby>', description: 'Defines a ruby annotation' },
        { tag: '<s>', description: 'Strikes through text' },
        { tag: '<samp>', description: 'Defines sample output from a computer program' },
        { tag: '<script>', description: 'Defines client-side script' },
        { tag: '<section>', description: 'Defines a section in a document' },
        { tag: '<select>', description: 'Defines a drop-down list' },
        { tag: '<small>', description: 'Defines smaller text' },
        { tag: '<source>', description: 'Defines multiple media resources for elements' },
        { tag: '<span>', description: 'Defines a section in a document' },
        { tag: '<strong>', description: 'Defines important text' },
        { tag: '<style>', description: 'Defines style information for a document' },
        { tag: '<sub>', description: 'Defines subscripted text' },
        { tag: '<summary>', description: 'Defines a visible heading for a <details> element' },
        { tag: '<sup>', description: 'Defines superscripted text' },
        { tag: '<svg>', description: 'Defines a container for SVG graphics' },
        { tag: '<table>', description: 'Defines a table' },
        { tag: '<tbody>', description: 'Groups the body content in a table' },
        { tag: '<td>', description: 'Defines a cell in a table' },
        { tag: '<template>', description: 'Defines a template' },
        { tag: '<textarea>', description: 'Defines a multiline text input control' },
        { tag: '<tfoot>', description: 'Groups the footer content in a table' },
        { tag: '<th>', description: 'Defines a header cell in a table' },
        { tag: '<thead>', description: 'Groups the header content in a table' },
        { tag: '<time>', description: 'Defines a specific time (or a range of time)' },
        { tag: '<title>', description: 'Defines the title of a document' },
        { tag: '<tr>', description: 'Defines a row in a table' },
        { tag: '<track>', description: 'Defines text tracks for <video> and <audio>' },
        { tag: '<u>', description: 'Defines text that should be stylistically different from normal text' },
        { tag: '<ul>', description: 'Defines an unordered list' },
        { tag: '<var>', description: 'Defines a variable' },
        { tag: '<video>', description: 'Defines a video or movie' },
        { tag: '<wbr>', description: 'Defines where a line break should be inserted' }
    ];

    // Filter tags based on search query
    const filteredDeprecatedTags = deprecatedTags.filter(tag =>
        tag.tag.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tag.description.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const filteredSupportedTags = supportedTags.filter(tag =>
        tag.tag.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tag.description.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="tags-container">

            <div className='page-top-div'>
                <div className="input-container">
                    <input
                        type="text"
                        placeholder="Search HTMl Tags..."
                        value={searchQuery}
                        onChange={handleSearchChange}
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

            <h1>HTML Tags: Deprecated vs Supported</h1>

            <h2>1. Deprecated (Removed) HTML Tags</h2>
            <table className="tags-table">
                <thead>
                    <tr>
                        <th>Tag</th>
                        <th>Description</th>
                        <th>Replacement/Notes</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredDeprecatedTags.length > 0 ? (
                        filteredDeprecatedTags.map((tag, index) => (
                            <tr key={index}>
                                <td>{tag.tag}</td>
                                <td>{tag.description}</td>
                                <td>{tag.replacement}</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="3">No results found</td>
                        </tr>
                    )}
                </tbody>
            </table>

            <h2>2. Not Deprecated (Still Supported) HTML Tags</h2>
            <table className="tags-table">
                <thead>
                    <tr>
                        <th>Tag</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredSupportedTags.length > 0 ? (
                        filteredSupportedTags.map((tag, index) => (
                            <tr key={index}>
                                <td>{tag.tag}</td>
                                <td>{tag.description}</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="2">No results found</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default HTMLTagsTable;