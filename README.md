offline-html5-kindle-maps
=========================

Offline maps for Kindle device, based on GMapCatcher code and cache. Uses W3C localStorage to persist location between page loads.

Preface
-------

These offline maps are based on a piece of HTML/JavaScript code from here: https://code.google.com/p/gmapcatcher/source/browse/trunk/wmap/?r=1174. The idea is that you populate local image cache by viewing map in GMapCatcher on your desktop/laptop machine and then copy the image cache and HTML/JS files to the device and launch map.html there (should work on every device supporting HTML5).

Installation
-------

1. Install a copy of GMapCatcher from here: https://code.google.com/p/gmapcatcher/ (it will generate cached maps which will be used)
2. Run it and go to settings by clicking 'Settings' icon next to the location line
3. On Settings tab under 'Custom Maps Directory' select 'OSM' (OpenStreetMap) in the combo box of map storage type (by default this combo should have something like 'Files'). Note the path, you will need it later
4. (optionally) On the 'Change Theme' tab you can see your favourite map provider (the more contrast the better)
5. Save settings and close dialog. 
6. Navigate over the map in the GMapCatcher near the necessary location (this will cache the map)
7. Download this repository (https://github.com/eixin/offline-html5-kindle-maps/archive/master.zip) and unzip it somewhere
8. Go to the path from pt.3 (on Windows machine it looks like C:\\Users\\\<username\>\\.googlemaps) and find OSM_tiles folder in that folder
9. Copy OSM_tiles folder from the folder from pt.8 to the OSM_tiles in an unzipped folder in pt.7 (replacing files/folders if necessary).
10. Put the unzipped data from pt.7 with the overriden OSM_tiles folder to the Kindle device (e.g. to 'documents' folder).

Run
---
1. Go to file:///mnt/us/documents/maps/map.html on your Kindle device in an Experimental Browser (on the Home page it is available in the Settings menu).
2. Controls should be pretty explanatory. "Save location" button persists the current location so it will open the map on the same position next time you open the page (you may add it to Bookmarks).

Tested on
---------
* Kindle Paperwhite 2013 (2nd revision)
* iPod touch (using iFile software)
