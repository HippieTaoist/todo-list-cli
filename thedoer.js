// # The To-Do List App (command line interface)
console.log("Just To-Do it!");
// In this project we'll be building a command line program that lets the user maintain and edit a list of to-do items!

// ## Requirements

// * You must make at least three commits in git while working on this project (make a commit everytime you get a new thing working)
// * The user is able to add new to-do items
// * A list of to-do items is displayed to the user
//   * The number of to-do items is displayed to the user
//   * If the user has no to-do items, this should be indicated to the user
// * The user is able to set existing to-do items as complete
// * Tell the user if they entered an invalid action
const prompt = require('prompt-sync')({ sigint: true });
let incArr = ['Seed Incomplete', 'There is Always something'];
let comArr = ['Seed Complete', 'one two Three'];
let listLocator = 0
let locator = 0;
let runProg = 1;
let counter = 0;
let selPrint = '';

let comNum = comArr.length;
let incNum = incArr.length;

while (runProg === 1) {
    while (locator === 0) {
        //////////////////////////Main Page Refresh//////////////
        console.log('Here are your abbreviated lists....')
        console.log('');
        console.log('You have ', comNum, ' completed items.   |   You have ', incNum, ' items left to complete.')
        console.log('');
        console.log('Would you like to:');
        console.log('(1) - View Your Items');
        console.log('(2) - Add New Items');
        console.log('(3) - Complete Items');
        console.log('(4) - Exit The TO-DOer');
        console.log('');
        locator = Number(prompt('Enter you numerical choice here: '));
        console.log(typeof locator)
    }

    ///////////////////////////LIST of YOUR ITEMS////////////////////////////////
    while (locator === 1) {
        console.log('Welcome to your list');
        console.log('');
        console.log('View Selection: ');
        console.log('(1) - All');
        console.log('(2) - Incomplete');
        console.log('(3) - Completed');
        console.log('(4) <===  Return to Main Menu')
        listLocator = Number(prompt('What is your numerical selection? '));
        console.log('');

        //////////LIST - All
        if (listLocator === 1) {
            console.clear();

            console.log('  _     _     _       _     _     _     _     _  ');
            console.log(' / \   / \   / \     / \   / \   / \   / \   / \ ');
            console.log('( A ) ( L ) ( L )   ( I ) ( T ) ( E ) ( M ) ( S )');
            console.log(' \_/   \_/   \_/     \_/   \_/   \_/   \_/   \_/ ');

            //List Incomplete Items
            console.log('InComplete:');
            for (let item of incArr) {
                console.log(item);
            }
            //List Complete Items
            console.log('');
            console.log('Completed:');
            for (let item of comArr) {
                console.log(item);
            }
        }
        //////////LIST - Incomplete
        if (listLocator === 2) {
            console.clear();
            console.log('Here are all of the items on your incompleted list:');
            console.log('');
            //List Incomplete Items
            console.log('InComplete:');
            for (let item of incArr) {
                console.log(item);
            }

        }
        //////////LIST - Complete
        if (listLocator === 3) {
            console.clear();
            console.log('Here are all of the items on your completed list:');
            console.log('');
            //List Incomplete Items
            console.log('Complete:');
            for (let item of comArr) {
                console.log(item);
            }

        }
        //////////LIST ==> Main Menu
        if (listLocator === 4) {
            console.clear();
            locator = 0;
        }


    }
}





//         //////////LIST - Completed
//         console.log('');
//         console.log('');
//         console.log('');
//         console.log('');
//         console.log('');
//     }

//     console.log('');
//     console.log('');
//     console.log('');
//     console.log('');
//     console.log('');
// }
// // console.clear();
// // ## An Example

// // Below is an example of what your application might look like. You're welcome to take creativity liberties with the exact user interface!

// // ```
// // Welcome to the To-Do List Manager Application! 

// // ==============================================

// // Your to-do list is empty.

// // ~ Select an action ~
// // [1] Create a to-do item
// // [2] Complete a to-do item
// // > 1

// // ~ Creating a new to-do item ~
// // What is this to-do item called?
// // > Go to the dentist

// // ==============================================

// // You have 1 to-do item(s).
// // 1. [incomplete] Go to the dentist

// // ~ Select an action ~
// // [1] Create a to-do item
// // [2] Complete a to-do item
// // > 1

// // ~ Creating a new to-do item ~
// // What is this to-do item called?
// // > Buy groceries

// // ==============================================

// // You have 2 to-do item(s).
// // 1. [incomplete] Go to the dentist
// // 2. [incomplete] Buy groceries

// // ~ Select an action ~
// // [1] Create a to-do item
// // [2] Complete a to-do item
// // > 2

// // ~ Completing a to-do item ~
// // Which to-do item would you like to complete?
// // > 2

// // ==============================================

// // You have 2 to-do item(s).
// // 1. [incomplete] Go to the dentist
// // 2. [complete]   Buy groceries

// // ~ Select an action ~
// // [1] Create a to-do item
// // [2] Complete a to-do item
// // >
// // ```

// // ## How do I build this?

// // Start off by trying this without any hints. If you find yourself stuck, check out the `HINTS.md` file.

// // ## Stretch Goals

// // * Re-organize your code to make use of functions
// // * Allow the user to both complete and uncomplete to-do items
// // * Allow the user to fully delete a to-do item from the list
// // * Allow the user to edit the text of an existing to-do item
// // * Get creative! Add a new feature that you would find useful in a to-do list