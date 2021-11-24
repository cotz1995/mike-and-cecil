* all one page
* landing page
    * a few messages rotating through
    * link to go fund me
    * info about funeral arrangments 
        * embed map?
            * https://developers.google.com/maps/documentation/embed/map-generator
    *  see all messages on seperate page
* priority
    1. funeral info
    2. go fund me
    3. message board
        * collapsable for long messages 
        * watch for injection 
        * sanitize
        * public website disclaimer 
    4. pictures 
        * display - slidshow, etc
        * https://github.com/neptunian/react-photo-gallery
            * row one
* hosting
    * github
        * gsuemith
        * public repo
    * aws
* naming
    * mike-and-cecil.com
## TODO
* unit tests
* message dialog styling
* message post lambda
* message db
### Message Board:
* save temp message to local storage
    * delete on successful post
* update message post disclaimer to include no edits
* make disclaimer check box text responsive

### Photo board:
* images
    * s3 storage
* api returns image metadata
* use meta data to generate html

### Other:
* api key in GitHub
    
