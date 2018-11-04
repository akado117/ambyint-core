# Lost R2D2 Project thoughts

### Preproject problem break down
Two characters placed randomly in a grid and only one can move forward and turn. The movable character needs to find another character.

##### Core Object break down
Characters should know where they are and where they're facing. They will need to be able to move rotationally, and forward by dynamic amount.
The play grid defines a play area, and should notify whenever a character within tries to move outside of legal bounds.

- Character 
-- Location, direction - getters and setters
-- Rotation functions
-- Movement functions
- Grid
-- Play space
-- Boundary detection


### Initialize project 
Node: Engine, Webpack: packing util, Jest: testing framework, ESLint: code quality
Build out a node package and then consume with a command line utility, and later frontend app. 
Build out class structer -> Build out unit tests -> Fill out functionality


