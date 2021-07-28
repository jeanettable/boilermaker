import react from 'react';
import { render } from 'react-dom';

render(
    <div id="dom-injection">I'm working.</div>,
    document.getElementById('app')
);
