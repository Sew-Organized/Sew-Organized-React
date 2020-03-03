# Sew Organized: Plan

## MD Requirements
* The name of the project
* Names of the team members
* A description of the project
* The overall problem domain and how the project solves those problems
* Semantic versioning, beginning with version 1.0.0 and incremented as changes are made
* A list of any libraries, frameworks, or packages that your application requires in order to properly function
* Instructions that the user may need to follow in order to get your application up and running on their own computer
* Clearly defined API endpoints with sample responses
* Clearly defined database schemas


## Project: Sew Organized
## Team
* Chelsea
* Janelle 
* Dakota
* Jenna 
* Dannie

## User Stories/Problem Domain
* As a crafter who likes to have all the supplies on hand when beginnning a project, I get overwhelmed by disorganized options at craft stores. 
  * I never have a good sense for what I already own, so I often purchase duplicates. 
  * The DMC color numbers do not consistently correspond to color families. Every time colors are added, it becomes more confusing. 
  * Even if you put in the work to organize your stash carefully, the DMC color numbers are not easily accessible. 

## Conflict Plan
- Safe goat/button
- Everyone stops and comes together
- Feelings check (red, yellow, green)

## Communication Plan
* Daily (at minimum) check-ins regarding project progress and individual's comfort level and engagement 
  * Morning and afternoon as needed
* After hours communication is fine but not required
* All planning phases will involve entire team; jointly decide what tasks can be done solo
* Collective decision-making
* Group merging: no one merges own PR

**Biggest Group Strength**
- communication
- collective involvement
  
**Holes & Risks**
- different work styles
  - (solving with safe word )
- Use communication and organization to address Holes
- play to strengths

**Individual strengths/ weaknesses:**
- to dos
* Kanban board
* Diagram (make tickets)
Mobster (app to tell you)

## MVP
* User/Auth
* Color API
  * Save palettes
* User's stash
  * Update and delete
* About page

**Stretch**
* Suggest similar colors
* Search
* Shopping list (button on color card)
* Link to purchase (ecommerce website)
* Upload profile photo on login page
  

## Front End
* User login page
  * Get token
  * Authorization
  * Conditionally routes to next page depending on first time or return user
* First time user
  * Header
    * Instructions
  * Search bar (stretch)
    * Search by:
      * DMC #
      * Color name
      * Color family
    * Sort
  * List page
    * Color cards (all)
    * Pagination
* Return user
  * User's inventory page
    * Color cards (owned)
  * Search bar for adding new colors  
* Nav links (sidebar for desktop?)
  * Favorites
  * Search
* Detail page when user clicks card
  * Card for color selected
  * Cards for similar colors
* Render a card for each color
  * Color name
  * DMC #
  * Image
  * Status (properties stored in state)
    * Checkbox for partial skein
    * Number owned
* About us

## Back End
CrossStitchCreator table: https://github.com/adrianj/CrossStitchCreator/blob/master/CrossStitchCreator/Resources/DMC%20Cotton%20Floss%20converted%20to%20RGB%20Values.csv

* Create DMC API
  * Create database using CrossStitchCreator table:
    * Find library that scrapes from CSV and converts to JSON
    * Columns needed:
      * id (Floss# in CrossStitchCreator table)
      * color name (Description in CrossStitchCreator table)
      * RGB code (use for connecting to color API)
* Data folder
  * create-tables
  * drop-tables
  * load-seed-data
* Get route for color API
* Auth routes
  * User in local storage?
  * Post, Put and Delete routes for modifying user's inventory
  * Get route for detail page