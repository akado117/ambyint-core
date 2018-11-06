const vorpal = require('vorpal')()
const chalk = vorpal.chalk;
const Main = require('../dist/ambyint').default;

const characterObj = { characters: ['R2-D2', 'Obi Wan Kenobi'] }
const planet = new Main(characterObj);

const commands = ['LAND', 'REPORT', 'RIGHT', 'LEFT', 'MOVE']

function report(characters) {
    const [ r2d2, obiWan ] = characters
    console.log(chalk.cyan(r2d2.getCharacter()), 'is at', chalk.magenta(r2d2.getPosition()), 'facing', chalk.green(r2d2.getDirection()))
    console.log(chalk.yellow(obiWan.getCharacter()), 'is at', chalk.magenta(obiWan.getPosition()))
}

function checkWin(characters) {
    const [ r2d2, obiWan ] = characters;

    const r2Loc = r2d2.getPosition()
    const ObiLoc = obiWan.getPosition()

    if (r2Loc[0] === ObiLoc[0] && r2Loc[1] === ObiLoc[1]) {
        console.log(chalk.bgBlue("Congratulations, you've saved the Rebellion!"))
        return true
    }
    return false
}

vorpal
    .command('LAND', 'Will reset the game and randomly place R2-D2 and Obi Wan')
    .action(function(args, callback) {
        planet.reset(characterObj)
        report(planet.report())
        callback();
    });

vorpal
    .command('MOVE <spaces>', 'Will move R2-D2 x number of spaces forward')
    .action(function(args, callback) {
        const spaces = parseInt(args.spaces);
        
        const wasMoveSuccessful = planet.moveForward(spaces)
        if(!wasMoveSuccessful) console.log(chalk.bgRed('Please select a move that\'s within bounds'))

        checkWin(planet.report())
        callback();
    });

vorpal
    .command('RIGHT', 'Will Turn R2-D2 90 degrees clockwise')
    .action(function(args, callback) {
        planet.turnRight()
        callback();
    });

vorpal
    .command('LEFT', 'Will Turn R2-D2 90 degrees counter clockwise')
    .action(function(args, callback) {
        planet.turnLeft()
        callback();
    });

vorpal
    .command('REPORT', 'Will report current state of Obi and his lost mechanized conscious')
    .action(function(args, callback) {
        report(planet.report())
        callback();
    });

vorpal
  .delimiter(chalk.cyan('Ambyint$'))
  .show();

console.log(`You arrive on scene to see a lost artificial intelligence.
Your goal is to guide this lost artificial soul to his Jedi Master!
Type in "help" for an overview of the commands available to you. CASESenSiTive!
Current locations seen below:`)
report(planet.report())