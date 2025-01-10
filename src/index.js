import template from './part/template';

import { users } from './data.js';

const output = template({ users });

document.getElementById('app').innerHTML = output;
