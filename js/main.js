'use strict';

import App from "./class/app.js";
import UI from "./class/ui.js";

console.log('labas');

const app = new App ();

// Event Listeners

UI.addTodoBtnEl.addEventListener('click', () => {
    UI.makeNewTodo(app);
});