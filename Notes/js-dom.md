# JavaScript DOM

## JavaScript Events

## JavaScript Page Load Events
When you open a page:

| Sequence | Event | Notes|
|----------|-------|------|
|1. | `DOMContentLoaded` | Browser loads HTML and builds complete DOM tree. Can start to select DOM node/ initialize interface. |
|2. | `load` | Browser loads external resources like stylesheets and images. |

When you leave a page:

| Sequence | Event | Notes|
|----------|-------|------|
|1. | `beforeunload` | Fires before page and resources are unloaded. Can use this event for confirmation to leave page; e.g. to prevent user's data loss in forms. |
|2. | `unload` | Fires whenpages has completely unloaded. Can use this to send analytic data/ clean up resources. |

- To handle 

