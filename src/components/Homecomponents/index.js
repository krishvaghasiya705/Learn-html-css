import React from 'react';
import './HTMLTagsTable.scss';
import { Link, useNavigate } from 'react-router-dom';

const HTMLTagsTable = ({ searchQuery, handleSearchChange }) => {

    const navigate = useNavigate();

    const deprecatedTags = [
        { tag: '<acronym>', description: 'Defines an acronym', replacement: 'Use <abbr> instead.', work: 'The <abbr title="World Health Organization">WHO</abbr> was founded in 1948.' },
        { tag: '<applet>', description: 'Defines an embedded applet', replacement: 'Use <embed> or <object>.', work: '<object data="example_applet.class" type="application/java"></object>' },
        { tag: '<basefont>', description: 'Specifies a default font size for all text', replacement: 'Use CSS for font styling.', work: '<p style="font-size: 20px;">This is text with a larger font size.</p>' },
        { tag: '<big>', description: 'Defines bigger text', replacement: 'Use CSS (font-size).', work: '<span style="font-size: larger;">This is big text.</span>' },
        { tag: '<blink>', description: 'Makes text blink', replacement: 'Not supported. Use CSS animations if necessary.', work: '<span style="animation: blinker 1s linear infinite;">Blinking text</span>' },
        { tag: '<center>', description: 'Aligns content to the center', replacement: 'Use CSS (text-align: center).', work: '<div style="text-align: center;">Centered content</div>' },
        { tag: '<dir>', description: 'Defines a directory list', replacement: 'Use <ul> (unordered list).', work: '<ul><li>Item 1</li><li>Item 2</li></ul>' },
        { tag: '<font>', description: 'Specifies font size, face, and color', replacement: 'Use CSS for font styling.', work: '<span style="color: red; font-size: 16px;">Red text</span>' },
        { tag: '<frame>', description: 'Defines a window (frame)', replacement: 'Use <iframe>. Framesets have been deprecated.', work: '<iframe src="example.html" width="300" height="200"></iframe>' },
        { tag: '<frameset>', description: 'Defines a set of frames', replacement: 'Not supported.', work: 'Not supported in modern HTML.' },
        { tag: '<isindex>', description: 'Creates an input prompt', replacement: 'Use <form> and <input>.', work: '<form><input type="text" placeholder="Search..."></form>' },
        { tag: '<keygen>', description: 'Generates a key pair', replacement: 'Use <input type="password"> or Web Crypto API.', work: '<input type="password" placeholder="Enter password">' },
        { tag: '<marquee>', description: 'Creates scrolling text', replacement: 'Use CSS animations.', work: '<div style="overflow: hidden; white-space: nowrap;"> <div style="display: inline-block; animation: marquee 5s linear infinite;">Scrolling text</div></div>' },
        { tag: '<noframes>', description: 'Alternate content for browsers without frames support', replacement: 'Use <iframe> for embedding content.', work: '<div>Your browser does not support frames.</div>' },
        { tag: '<s>', description: 'Strikes through text', replacement: 'Use <del> or CSS (text-decoration: line-through).', work: '<span style="text-decoration: line-through;">Strikethrough text</span>' },
        { tag: '<strike>', description: 'Same as <s>', replacement: 'Use <del> or CSS (text-decoration: line-through).', work: '<span style="text-decoration: line-through;">Strikethrough text</span>' },
        { tag: '<tt>', description: 'Defines teletype text', replacement: 'Use CSS (font-family: monospace).', work: '<span style="font-family: monospace;">Monospace text</span>' },
        { tag: '<u>', description: 'Underlines text (previously)', replacement: 'Use CSS (text-decoration: underline).', work: '<span style="text-decoration: underline;">Underlined text</span>' },
        { tag: '<xmp>', description: 'Displays preformatted text', replacement: 'Use <pre> or escape characters.', work: '<pre>&lt;html&gt; &lt;/html&gt;</pre>' },
        { tag: '<menuitem>', description: 'Defines a command/menu item', replacement: 'Deprecated in HTML5.', work: 'Not supported in modern HTML.' }
    ];

    const supportedTags = [
        { tag: '<!--...-->', description: 'Defines a Comment code', replacement: '--', work: '<!-- This is a comment -->' },
        { tag: '<!DOCTYPE html>', description: 'All HTML documents must start with a <!DOCTYPE> declaration', replacement: '--', work: '<!DOCTYPE html>' },
        { tag: '<a>', description: 'Defines a hyperlink', replacement: '--', work: '<a href="https://example.com">Visit Example</a>' },
        { tag: '<abbr>', description: 'Defines an abbreviation or acronym', replacement: '--', work: '<abbr title="Hypertext Markup Language">HTML</abbr>' },
        { tag: '<address>', description: 'Defines contact information', replacement: '--', work: '<address>123 Main St, Anytown, USA</address>' },
        { tag: '<article>', description: 'Defines an article', replacement: '--', work: '<article><h1>Article Title</h1><p>Article content...</p></article>' },
        { tag: '<aside>', description: 'Defines content aside from the page content', replacement: '--', work: '<aside>Sidebar content...</aside>' },
        { tag: '<audio>', description: 'Defines embedded sound content', replacement: '--', work: '<audio controls><source src="example.mp3" type="audio/mp3"></audio>' },
        { tag: '<b>', description: 'Defines bold text', replacement: '--', work: '<b>Bold text</b>' },
        { tag: '<bdi>', description: 'Isolates a part of text to avoid bidirectional text mixing', replacement: '--', work: '<bdi>Text</bdi>' },
        { tag: '<bdo>', description: 'Overrides the current text direction', replacement: '--', work: '<bdo dir="rtl">Text</bdo>' },
        { tag: '<blockquote>', description: 'Defines a block of quoted text', replacement: '--', work: '<blockquote>Quote</blockquote>' },
        { tag: '<body>', description: 'Defines the document\'s body', replacement: '--', work: '<body>Body content...</body>' },
        { tag: '<br>', description: 'Inserts a single line break', replacement: '--', work: 'Line 1<br>Line 2' },
        { tag: '<button>', description: 'Defines a clickable button', replacement: '--', work: '<button>Click Me</button>' },
        { tag: '<canvas>', description: 'Used to draw graphics', replacement: '--', work: '<canvas id="myCanvas"></canvas>' },
        { tag: '<caption>', description: 'Defines a table caption', replacement: '--', work: '<table><caption>Table Caption</caption><tr><td>Cell</td></tr></table>' },
        { tag: '<cite>', description: 'Defines the title of a work', replacement: '--', work: '<cite>Author Name</cite>' },
        { tag: '<code>', description: 'Defines a piece of computer code', replacement: '--', work: '<code>console.log("Hello, world!");</code>' },
        { tag: '<col>', description: 'Specifies column properties for an HTML table', replacement: '--', work: '<table><colgroup><col span="1" style="background-color:red"></colgroup><tr><td>Cell</td></tr></table>' },
        { tag: '<colgroup>', description: 'Specifies a group of one or more columns in a table', replacement: '--', work: '<table><colgroup><col span="1" style="background-color:red"></colgroup><tr><td>Cell</td></tr></table>' },
        { tag: '<data>', description: 'Links a content with a machine-readable value', replacement: '--', work: '<data value="12345">Data</data>' },
        { tag: '<datalist>', description: 'Contains a list of predefined options for input controls', replacement: '--', work: '<input list="options"><datalist id="options"><option value="Option 1"></option></datalist>' },
        { tag: '<dd>', description: 'Defines a description/value of a term in a description list', replacement: '--', work: '<dl><dt>Term</dt><dd>Description</dd></dl>' },
        { tag: '<del>', description: 'Defines text that has been deleted from a document', replacement: '--', work: '<del>Deleted text</del>' },
        { tag: '<details>', description: 'Defines additional details that the user can view or hide', replacement: '--', work: '<details><summary>More info</summary>Details content...</details>' },
        { tag: '<dfn>', description: 'Represents the defining instance of a term', replacement: '--', work: '<dfn>Term</dfn>' },
        { tag: '<div>', description: 'Defines a section in a document', replacement: '--', work: '<div>Div content...</div>' },
        { tag: '<dl>', description: 'Defines a description list', replacement: '--', work: '<dl><dt>Term</dt><dd>Description</dd></dl>' },
        { tag: '<dt>', description: 'Defines a term in a description list', replacement: '--', work: '<dl><dt>Term</dt><dd>Description</dd></dl>' },
        { tag: '<em>', description: 'Defines emphasized text', replacement: '--', work: '<em>Emphasized text</em>' },
        { tag: '<embed>', description: 'Defines a container for an external application', replacement: '--', work: '<embed src="example.pdf" type="application/pdf">' },
        { tag: '<fieldset>', description: 'Groups related elements in a form', replacement: '--', work: '<fieldset><legend>Group</legend><input type="text"></fieldset>' },
        { tag: '<figcaption>', description: 'Defines a caption for a <figure> element', replacement: '--', work: '<figure><img src="example.jpg"><figcaption>Caption</figcaption></figure>' },
        { tag: '<figure>', description: 'Specifies self-contained content', replacement: '--', work: '<figure><img src="example.jpg"><figcaption>Caption</figcaption></figure>' },
        { tag: '<footer>', description: 'Defines a footer for a document or section', replacement: '--', work: '<footer>Footer content...</footer>' },
        { tag: '<form>', description: 'Defines an HTML form for user input', replacement: '--', work: '<form><input type="text"><input type="submit"></form>' },
        { tag: '<h1> to <h6>', description: 'Defines HTML headings', replacement: '--', work: '<h1>Heading 1</h1><h6>Heading 6</h6>' },
        { tag: '<head>', description: 'Defines information about the document', replacement: '--', work: '<head><title>Document</title></head>' },
        { tag: '<header>', description: 'Defines a header for a document or section', replacement: '--', work: '<header>Header content...</header>' },
        { tag: '<hr>', description: 'Defines a thematic change in the content', replacement: '--', work: '<hr>' },
        { tag: '<html>', description: 'Defines the root of an HTML document', replacement: '--', work: '<html lang="en"><head><title>Title</title></head><body>Body content...</body></html>' },
        { tag: '<i>', description: 'Defines italic text', replacement: '--', work: '<i>Italic text</i>' },
        { tag: '<iframe>', description: 'Defines an inline frame', replacement: '--', work: '<iframe src="example.html"></iframe>' },
        { tag: '<img>', description: 'Defines an image', replacement: '--', work: '<img src="example.jpg" alt="Example image">' },
        { tag: '<input>', description: 'Defines an input control', replacement: '--', work: '<input type="text" placeholder="Enter text">' },
        { tag: '<ins>', description: 'Defines a text that has been inserted into a document', replacement: '--', work: '<ins>Inserted text</ins>' },
        { tag: '<kbd>', description: 'Defines keyboard input', replacement: '--', work: '<kbd>Ctrl + C</kbd>' },
        { tag: '<label>', description: 'Defines a label for an <input> element', replacement: '--', work: '<label for="name">Name:</label><input id="name" type="text">' },
        { tag: '<legend>', description: 'Defines a caption for a <fieldset>', replacement: '--', work: '<fieldset><legend>Group</legend><input type="text"></fieldset>' },
        { tag: '<li>', description: 'Defines a list item', replacement: '--', work: '<ul><li>Item 1</li><li>Item 2</li></ul>' },
        { tag: '<link>', description: 'Defines the relationship between a document and an external resource (most used to link to stylesheets)', replacement: '--', work: '<link rel="stylesheet" href="styles.css">' },
        { tag: '<main>', description: 'Specifies the main content of a document', replacement: '--', work: '<main>Main content...</main>' },
        { tag: '<map>', description: 'Defines a client-side image map', replacement: '--', work: '<img src="example.jpg" usemap="#map"><map name="map"><area shape="rect" coords="0,0,100,100" href="example.html"></map>' },
        { tag: '<mark>', description: 'Defines marked text', replacement: '--', work: '<mark>Marked text</mark>' },
        { tag: '<meta>', description: 'Defines metadata about an HTML document', replacement: '--', work: '<meta charset="UTF-8">' },
        { tag: '<meter>', description: 'Defines a scalar measurement within a known range', replacement: '--', work: '<meter value="0.5">50%</meter>' },
        { tag: '<nav>', description: 'Defines navigation links', replacement: '--', work: '<nav><a href="example.html">Home</a></nav>' },
        { tag: '<noscript>', description: 'Defines an alternate content for users that do not support client-side scripts', replacement: '--', work: '<noscript>JavaScript is disabled.</noscript>' },
        { tag: '<object>', description: 'Defines an embedded object', replacement: '--', work: '<object data="example.pdf" type="application/pdf"></object>' },
        { tag: '<ol>', description: 'Defines an ordered list', replacement: '--', work: '<ol><li>Item 1</li><li>Item 2</li></ol>' },
        { tag: '<optgroup>', description: 'Defines a group of related options in a drop-down list', replacement: '--', work: '<select><optgroup label="Group 1"><option>Option 1</option></optgroup></select>' },
        { tag: '<option>', description: 'Defines an option in a drop-down list', replacement: '--', work: '<select><option>Option 1</option></select>' },
        { tag: '<output>', description: 'Defines the result of a calculation', replacement: '--', work: '<output name="result">42</output>' },
        { tag: '<p>', description: 'Defines a paragraph', replacement: '--', work: '<p>Paragraph content...</p>' },
        { tag: '<param>', description: 'Defines a parameter for an object', replacement: '--', work: '<object data="example.pdf"><param name="example" value="value"></object>' },
        { tag: '<picture>', description: 'Defines a container for multiple image resources', replacement: '--', work: '<picture><source srcset="example.webp" type="image/webp"><img src="example.jpg"></picture>' },
        { tag: '<pre>', description: 'Defines preformatted text', replacement: '--', work: '<pre>Preformatted text</pre>' },
        { tag: '<progress>', description: 'Represents the progress of a task', replacement: '--', work: '<progress value="70" max="100">70%</progress>' },
        { tag: '<q>', description: 'Defines a short inline quotation', replacement: '--', work: '<q>Inline quote</q>' },
        { tag: '<rp>', description: 'Defines what to show in browsers that do not support ruby annotations', replacement: '--', work: '<ruby>漢<rp>(</rp><rt>hàn</rt><rp>)</rp></ruby>' },
        { tag: '<rt>', description: 'Defines an explanation/pronunciation of characters', replacement: '--', work: '<ruby>漢<rt>hàn</rt></ruby>' },
        { tag: '<ruby>', description: 'Defines a ruby annotation', replacement: '--', work: '<ruby>漢<rt>hàn</rt></ruby>' },
        { tag: '<samp>', description: 'Defines sample output from a computer program', replacement: '--', work: '<samp>Error: File not found</samp>' },
        { tag: '<script>', description: 'Defines a client-side script', replacement: '--', work: '<script>console.log("Hello, world!");</script>' },
        { tag: '<section>', description: 'Defines a section in a document', replacement: '--', work: '<section>Section content...</section>' },
        { tag: '<select>', description: 'Defines a drop-down list', replacement: '--', work: '<select><option>Option 1</option></select>' },
        { tag: '<small>', description: 'Defines smaller text', replacement: '--', work: '<small>Small text</small>' },
        { tag: '<source>', description: 'Defines multiple media resources for media elements (<video>, <audio>)', replacement: '--', work: '<video controls><source src="example.mp4" type="video/mp4"></video>' },
        { tag: '<span>', description: 'Defines a section in a document', replacement: '--', work: '<span>Span content...</span>' },
        { tag: '<strong>', description: 'Defines important text', replacement: '--', work: '<strong>Strong text</strong>' },
        { tag: '<style>', description: 'Defines style information for a document', replacement: '--', work: '<style>body { font-family: Arial; }</style>' },
        { tag: '<sub>', description: 'Defines subscripted text', replacement: '--', work: '<sub>Subscripted text</sub>' },
        { tag: '<summary>', description: 'Defines a visible heading for a <details> element', replacement: '--', work: '<details><summary>More info</summary>Details content...</details>' },
        { tag: '<sup>', description: 'Defines superscripted text', replacement: '--', work: '<sup>Superscripted text</sup>' },
        { tag: '<svg>', description: 'Defines a container for SVG graphics', replacement: '--', work: '<svg viewBox="0 0 100 100"><circle cx="50" cy="50" r="40"></circle></svg>' },
        { tag: '<table>', description: 'Defines a table', replacement: '--', work: '<table><tr><th>Header</th></tr><tr><td>Data</td></tr></table>' },
        { tag: '<tbody>', description: 'Groups the body content in a table', replacement: '--', work: '<table><tbody><tr><td>Data</td></tr></tbody></table>' },
        { tag: '<td>', description: 'Defines a cell in a table', replacement: '--', work: '<table><tr><td>Data</td></tr></table>' },
        { tag: '<template>', description: 'Defines a template for content that can be reused', replacement: '--', work: '<template><p>Template content...</p></template>' },
        { tag: '<textarea>', description: 'Defines a multiline input control', replacement: '--', work: '<textarea>Textarea content...</textarea>' },
        { tag: '<tfoot>', description: 'Groups the footer content in a table', replacement: '--', work: '<table><tfoot><tr><td>Footer</td></tr></tfoot></table>' },
        { tag: '<th>', description: 'Defines a header cell in a table', replacement: '--', work: '<table><tr><th>Header</th></tr></table>' },
        { tag: '<thead>', description: 'Groups the header content in a table', replacement: '--', work: '<table><thead><tr><th>Header</th></tr></thead></table>' },
        { tag: '<time>', description: 'Defines a specific time', replacement: '--', work: '<time datetime="2023-09-20">September 20, 2023</time>' },
        { tag: '<title>', description: 'Defines the title of the document', replacement: '--', work: '<head><title>Document</title></head>' },
        { tag: '<tr>', description: 'Defines a row in a table', replacement: '--', work: '<table><tr><td>Data</td></tr></table>' },
        { tag: '<track>', description: 'Defines text tracks for media elements (<video>, <audio>)', replacement: '--', work: '<video controls><track src="subtitles.vtt" kind="subtitles" srclang="en"></video>' },
        { tag: '<u>', description: 'Defines text that should be stylistically different from normal text', replacement: '--', work: '<u>Underlined text</u>' },
        { tag: '<ul>', description: 'Defines an unordered list', replacement: '--', work: '<ul><li>Item 1</li><li>Item 2</li></ul>' },
        { tag: '<var>', description: 'Defines a variable', replacement: '--', work: '<var>x</var> + <var>y</var>' },
        { tag: '<video>', description: 'Defines a video or movie', replacement: '--', work: '<video controls><source src="example.mp4" type="video/mp4"></video>' },
        { tag: '<wbr>', description: 'Defines a line break opportunity', replacement: '--', work: 'Wel<wbr>come' }
    ];

    const filteredDeprecatedTags = deprecatedTags.filter(tag =>
        tag.tag.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tag.description.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const filteredSupportedTags = supportedTags.filter(tag =>
        tag.tag.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tag.description.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const handleTagClick = (tag) => {
        const code = `<!DOCTYPE html>
<html>
<head>
    <title>Example</title>
</head>
<body>
    ${tag.tag}
    <p>${tag.description}</p>
    <div>${tag.work}</div>
</body>
</html>`;
        navigate('/Editorpage', { state: { code } });
    };

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
                            <tr key={index} onClick={() => handleTagClick(tag)}>
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
                        <th>Replacement/Notes</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredSupportedTags.length > 0 ? (
                        filteredSupportedTags.map((tag, index) => (
                            <tr key={index} onClick={() => handleTagClick(tag)}>
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
        </div>
    );
};

export default HTMLTagsTable;