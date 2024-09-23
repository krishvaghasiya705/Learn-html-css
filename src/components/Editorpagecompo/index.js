import React, { useState, useEffect, useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import './Editorpage.scss';

function Editorpagecompo() {
    const location = useLocation();
    const [code, setCode] = useState(location.state?.code || '');
    const [iframeSrc, setIframeSrc] = useState('');
    const [codeType, setCodeType] = useState('html');

    useEffect(() => {
        if (location.state?.code) {
            setCode(location.state.code);
        }
    }, [location.state?.code]);

    const handleRunCode = useCallback(() => {
        let htmlCode = '';
        let cssCode = '';
        let jsCode = '';

        if (codeType === 'htmlcss') {
            const [html, css] = code.split('/* CSS */');
            htmlCode = html || '';
            cssCode = css || '';
        } else if (codeType === 'htmlscss') {
            const [html, scss] = code.split('/* SCSS */');
            htmlCode = html || '';
            cssCode = convertScssToCss(scss || '');
        } else if (codeType === 'htmlcssjs') {
            const [html, css, js] = code.split('/* JS */');
            htmlCode = html || '';
            cssCode = css || '';
            jsCode = js || '';
        } else if (codeType === 'htmlscssjs') {
            const [html, scss, js] = code.split('/* JS */');
            htmlCode = html || '';
            cssCode = convertScssToCss(scss || '');
            jsCode = js || '';
        } else if (codeType === 'html') {
            htmlCode = code;
        }

        const blob = new Blob(
            [
                `<!DOCTYPE html>
                <html>
                <head>
                    <style>${cssCode}</style>
                </head>
                <body>
                    ${htmlCode}
                    <script>${jsCode}</script>
                </body>
                </html>`
            ],
            { type: 'text/html' }
        );

        const url = URL.createObjectURL(blob);
        setIframeSrc(url);
    }, [code, codeType]);

    const convertScssToCss = (scss) => {
        return scss;
    };

    const setCodeTemplate = (type) => {
        let templateCode = '';
        if (type === 'html') {
            templateCode = `<!DOCTYPE html>
            <html>
            <head>
                <title>Document</title>
            </head>
            <body>
                <h1>Hello World</h1>
            </body>
            </html>`;
        } else if (type === 'htmlcss') {
            templateCode = `<!DOCTYPE html>
            <html>
            <head>
                <style>
                    /* CSS */
                    body {
                        font-family: Arial, sans-serif;
                    }
                    h1 {
                        color: blue;
                    }
                </style>
            </head>
            <body>
                <h1>Hello World</h1>
            </body>
            </html>`;
        } else if (type === 'htmlscss') {
            templateCode = `<!DOCTYPE html>
            <html>
            <head>
                <style>
                    /* SCSS */
                    $primary-color: red;
                    body {
                        font-family: Arial, sans-serif;
                    }
                    h1 {
                        color: $primary-color;
                    }
                </style>
            </head>
            <body>
                <h1>Hello World</h1>
            </body>
            </html>`;
        } else if (type === 'htmlcssjs') {
            templateCode = `<!DOCTYPE html>
            <html>
            <head>
                <style>
                    /* CSS */
                    body {
                        font-family: Arial, sans-serif;
                    }
                    h1 {
                        color: green;
                    }
                </style>
            </head>
            <body>
                <h1>Hello World</h1>
                <script>
                    // JS
                    console.log('Hello World');
                </script>
            </body>
            </html>`;
        } else if (type === 'htmlscssjs') {
            templateCode = `<!DOCTYPE html>
            <html>
            <head>
                <style>
                    /* SCSS */
                    $primary-color: yellow;
                    body {
                        font-family: Arial, sans-serif;
                    }
                    h1 {
                        color: $primary-color;
                    }
                </style>
            </head>
            <body>
                <h1>Hello World</h1>
                <script>
                    // JS
                    console.log('Hello World');
                </script>
            </body>
            </html>`;
        }

        setCode(templateCode);
        setCodeType(type);
    };

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.ctrlKey && event.key === 'Enter') {
                event.preventDefault();
                handleRunCode();
            }
        };

        document.addEventListener('keydown', handleKeyDown);
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [handleRunCode]);

    return (
        <div className="code-runner">
            <div className="code-runners-selector-button">
                <button onClick={() => setCodeTemplate('html')}>HTML</button>
                <button onClick={() => setCodeTemplate('htmlcss')}>HTML/CSS</button>
                <button onClick={() => setCodeTemplate('htmlscss')}>HTML/SCSS</button>
                <button onClick={() => setCodeTemplate('htmlcssjs')}>HTML/CSS/JS</button>
                <button onClick={() => setCodeTemplate('htmlscssjs')}>HTML/SCSS/JS</button>
                <button onClick={handleRunCode} className="Runbutton">Run Code</button>
            </div>
            <div className="codee-runner-layout">
                <div className="editor">
                    <textarea
                        value={code}
                        onChange={(e) => setCode(e.target.value)}
                        rows="10"
                        placeholder="Type your code here"
                    />
                </div>
                <div className="output">
                    <iframe
                        title="Code Output"
                        src={iframeSrc}
                    />
                </div>
            </div>
        </div>
    );
}

export default Editorpagecompo;