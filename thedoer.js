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
let viewListLocator = 0;
let editListLocator = 0;
let removeEditListLocator = 0;
let locator = 0;
let runProg = 1;
let counter = 0;
let edit = 0;
let completedLists = [];
let remMe = 1;

let listName = 'ENTER LIST NAME';
let currentList = [listName];
let comNum = comArr.length;
let incNum = incArr.length;

while (runProg === 1) {
    //////////////IDEA ___ USE NESTED ARRAYS TO SWITCH BETWEEN LISTS
    // Ie: A master list(array) based on the completed/incompleted condition that holds the other lists (arrays). use change list menu to show lists and view items on each list


    ////////////////////////////MAIN MENU
    while (locator === 0) {
        //////////////////////////Main Page Refresh//////////////
        //console.clear();

        console.log('Here are your abbreviated lists....')
        console.log('');
        console.log('You have ', comNum, ' completed items.   |   You have ', incNum, ' items left to complete.')
        console.log('');
        console.log('Would you like to:');
        console.log('(1) - VIEW Items');
        console.log('(2) - EDIT Items');
        console.log('(3) - COMPLETE Items');
        console.log('(4) - CHANGE/VIEW Lists');
        console.log('(5) - Exit The TO-DOer');
        console.log('');
        locator = Number(prompt('Enter you numerical choice here: '));
        console.clear();
    }

    /////////////////////////// VIEW ITEMS////////////////////////////////
    while (locator === 1) {
        ////////////VIEW - Menu
        if (viewListLocator === 0) {


            console.log('');
            console.log('Welcome to your list');
            console.log('');
            console.log('View Selection: ');
            console.log('(1) - All');
            console.log('(2) - Incomplete');
            console.log('(3) - Completed');
            console.log('(4) <===  Return to Main Menu')
            viewListLocator = Number(prompt('View Selection: '));
            if (viewListLocator === 4) {
                viewListLocator = 5;
            }
            console.clear();
        }


        //////////Menu - All
        if (viewListLocator === 1) {
            //console.clear();

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
            viewListLocator = 0;
        }
        //////////VIEW - Incomplete
        if (viewListLocator === 2) {
            //console.clear();

            console.log('   _     _     _     _     _     _     _     _     _     _       _     _     _     _     _ ');
            console.log(' / \   / \   / \   / \   / \   / \   / \   / \   / \   / \     / \   / \   / \   / \   / \ ');
            console.log('( I ) ( N ) ( C ) ( O ) ( M ) ( P ) ( L ) ( E ) ( T ) ( E )   ( I ) ( T ) ( E ) ( M ) ( S )');
            console.log(' \_/   \_/   \_/   \_/   \_/   \_/   \_/   \_/   \_/   \_/     \_/   \_/   \_/   \_/   \_/ ');
            console.log('');
            //List Incomplete Items
            console.log('InComplete:');
            for (let item of incArr) {
                console.log(item);
            }


            viewListLocator = 0;
        }
        //////////VIEW - Complete
        if (viewListLocator === 3) {
            //console.clear();

            console.log('  _     _     _     _     _     _     _     _     _       _     _     _     _     _  ');
            console.log(' / \   / \   / \   / \   / \   / \   / \   / \   / \     / \   / \   / \   / \   / \ ');
            console.log('( C ) ( O ) ( M ) ( P ) ( L ) ( E ) ( T ) ( E ) ( D )   ( I ) ( T ) ( E ) ( M ) ( S )');
            console.log(' \_/   \_/   \_/   \_/   \_/   \_/   \_/   \_/   \_/     \_/   \_/   \_/   \_/   \_/ ');
            console.log('');
            //List Incomplete Items
            console.log('Complete:');
            for (let item of comArr) {
                console.log(item);
            }

            viewListLocator = 0;
        }

        //////////VIEW ==> View Menu
        if (viewListLocator === 4) {
            //console.clear();

            locator = 1;
            viewListLocator = 0;
        }
        //////////VIEW ==> Main Menu
        if (viewListLocator === 5) {
            //console.clear();

            locator = 0;
            viewListLocator = 0;
        }


    }
    ////////////////////////// EDIT ITEMS/////////////////////////////////
    while (locator === 2) {
        // editListLocator = 0;
        counter = 0;
        //Add New Items Menu
        if (editListLocator === 0) {
            //console.clear();

            console.log('In this section we EDIT items to your list.')
            console.log('');
            console.log('Make your selection below');
            console.log('(1) - ADD to your list');
            console.log('(2) - REMOVE from your list');
            console.log('(3) - Clear list');
            // console.log('(4) - Create new list');
            editListLocator = Number(prompt('What is your numerical selection?'));
            console.clear();
        }

        //Add Items Selection
        if (editListLocator === 1) {
            // addMore = 1;
            // while (addMore === 1) {
            //console.clear();

            //Gather items in String from user
            console.log('');
            incArr.push(prompt('Please Enter Your New To-Do: '));

            //Provide update list with new item on it
            //console.clear();
            console.log('');
            console.log('Here is an updated list of your Incomplete Items:');
            console.log('');

            // List Incomplete Items
            for (let c of incArr) {
                console.log(c);
            }
            console.log('');
            editListLocator = 0;
        }

        //Remove Items Selection
        if (editListLocator === 2) {
            console.log('');
            console.log('REMOVE From: Completed | Incomplete');
            console.log('You may also CLEAR a list?');
            console.log('');
            console.log('(1) - COMPLETED List');
            console.log('(2) - INCOMPLETE List');
            console.log('(3) - CLEAR a List');
            console.log('(4) - EDIT Menu');
            console.log('(5) - MAIN Menu');
            removeEditListLocator = Number(prompt('Selection:  '));
            console.clear();
            //Display | REMOVE from list of completed items
            if (removeEditListLocator === 1) {

                //List Completed Items In Current List
                console.log('Here are your Completed Items:');
                console.log('');
                //List Completed Items
                remMe = 1;
                for (let c of comArr) {

                    console.log('(', remMe, ') - ', c)
                    remMe++
                }

                let strRem = Number(prompt('Remove Which To-Do: '));
                console.clear();

                //Give updated list of completed
                comArr.splice(strRem - 1, 1);
                console.log('')
                console.log('Updated Completed List: ')
                remMe = 1;
                for (let c of comArr) {

                    console.log(remMe, c)
                    remMe++

                }
                removeEditListLocator = 0;

            }

            //Display | REMOVE from list of incomplete items
            if (removeEditListLocator === 2) {
                remMe = 1;
                //List Completed Items In Current List
                console.log('Here are your Incomplete Items:');
                console.log('');
                //List Completed Items
                for (let c of incArr) {
                    console.log('(', remMe, ') - ', c)
                    remMe++
                }

                let strRem = Number(prompt('Remove Which To-Do: '));
                console.clear();

                //Give updated list of completed
                incArr.splice(strRem - 1, 1);
                console.log('')
                console.log('Updated Incomplete Items List: ')
                remMe = 1;
                for (let c of incArr) {
                    console.log(remMe, c)
                    remMe++

                }
                removeEditListLocator = 0;
            }

            // Clear Desired List
            //Display | REMOVE from list of incomplete items
            if (removeEditListLocator === 3) {
                remMe = 1;
                //List Completed Items In Current List
                console.log('Here is your Complete Items List:');
                console.log('');
                //List Completed Items
                for (let c of comArr) {
                    console.log('(', remMe, ') - ', c)
                    remMe++
                }
                console.log('');
                console.log('');

                //Give updated list of Incomplete
                console.log('');
                console.log('Here is your Incomplete Items List: ')
                remMe = 1;
                for (let c of incArr) {
                    console.log(remMe, c)
                    remMe++

                }
                console.log('(1) - Completed List');
                console.log('(2) - Incomplete list');
                let clear = Number(prompt('Which List Shall We Clear?'));
                console.clear();

                console.log('(y) - For Yes I am sure!, Burn it!');
                console.log('(n) - I fear I will forget something. Forget it!');
                let affirm = prompt('Are you sure you want to clear this list. The effect are unrecovealble... They will be lost in the sea of ones and zeros for ever!');
                console.clear();
                if (affirm === 'y') {
                    if (clear === 1) {
                        comArr = [];
                        console.log('Updated Completed List:');
                        console.log(comArr);
                    }
                    if (clear === 2) {
                        comArr = [];
                        console.log('Updated Incomplete List:');
                        console.log(incArr);
                    }
                }
                if (affirm = 'n') {
                    removeEditListLocator = 0;
                }


                removeEditListLocator = 0;
            }
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
// // //console.clear();
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