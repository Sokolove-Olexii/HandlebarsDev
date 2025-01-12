// import template from './part/template';

template;

import { users } from './data.js';

const output = template({ users });

document.getElementById('app').innerHTML = output;
