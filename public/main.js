import UnicornsRepo from './unicorns-repo.js';
import UnicornsRender from './unicorns-render.js';
import EventsHandler from './event-handler.js'; 

let unicornsRepo = new UnicornsRepo();
let unicornsRender = new UnicornsRender();
let eventsHandler = new EventsHandler(unicornsRepo, unicornsRender);

eventsHandler.handleAddUnicorn()
eventsHandler.handleRemoveUnicorn()
eventsHandler.getAllUnicornsFromDB()