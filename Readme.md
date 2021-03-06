# HOW TO R2D2
Clone this repo:
```sh
$ git clone https://github.com/akado117/ambyint-core.git
```
Navigate to your newly cloned directory

Run the CLI program
```sh
$ npm start
```
If you would like to recompile the core code:
```sh
$ npm run build //prod
$ npm run develop //develop -- not minified
```


# Lost R2D2 Project thoughts

### Preproject problem break down
Two characters placed randomly in a grid and only one can move forward and turn. The movable character needs to find another character.

##### Core object break down
Characters should know where they are and where they're facing. They will need to be able to move rotationally, and forward by dynamic amount.
The play grid defines a play area, and should notify whenever a character within tries to move outside of legal bounds.

- Character 
-- Location, direction - getters and setters
-- Rotation functions
-- Movement functions
- Tatooine
-- Play space
-- Boundary detection
-- Add/Remove from grid (found during implementation)
- Run Class
-- Construtor to initilize locations of Characters
-- Report functionality
-- Reset functionality
-- Expose move functions and check for valid move and win condition


### Initialize project 
Node: Env, Webpack: packaging util, Jest: testing framework, ESLint: code quality
Build out a node package and then consume with a command line utility, and later frontend app. 
Build out class structer -> Build out unit tests -> Fill out functionality
Future: Consume package with frontend app for a cleaner ui

### Updates to plan during implementation
- Added in undueMove function to undue moves that are invalid
- Added const to Character class for mapping directions 
- Added in ability to add and remove from grid as well as exposing grid (for consuming frameworks to use)
- Moved building grid into its own internal function within Tatooine
- Added in ability for character class to house a user defined feature. such as a name or url to an image
- Added in return true/false for main depending on if move is successful 
