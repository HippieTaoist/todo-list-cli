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
let locator = 0;
let runProg = 1;
let counter = 0;
let edit = 0;
let completedLists = [];

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
        console.log(typeof locator)
    }

    /////////////////////////// VIEW ITEMS////////////////////////////////
    while (locator === 1) {
        //console.clear();
        console.log('');
        console.log('Welcome to your list');
        console.log('');
        console.log('View Selection: ');
        console.log('(1) - All');
        console.log('(2) - Incomplete');
        console.log('(3) - Completed');
        console.log('(4) <===  Return to Main Menu')
        viewListLocator = Number(prompt('View Selection: '));


        //////////LIST - All
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

        }

        //////////VIEW ==> View Menu
        if (viewListLocator === 4) {
            //console.clear();

            locator = 1;
            listLocator = 0;
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
        listLocator = 0;
        counter = 0;
        //Add New Items Menu
        if (listLocator === 0) {
            //console.clear();

            console.log('In this section we EDIT items to your list.')
            console.log('');
            console.log('Make your selection below');
            console.log('(1) - ADD to your list');
            console.log('(2) - REMOVE from your list');
            console.log('(3) - Clear list');
            // console.log('(4) - Create new list');
            listLocator = Number(prompt('What is your numerical selection?'));
        }

        //Add Items Selection
        if (listLocator === 1) {
            addMore = 1;
            while (addMore === 1) {
                //console.clear();

                //Gather items in String from user
                console.log('');
                incArr.push(prompt('What is the new items you would like to add?'));

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

                // Menu
                console.log('(1) - ADD Menu');
                console.log('(2) - REMOVE Menu');
                console.log('(3) - MAIN Menu');
                console.log('');
                counter = Number(prompt('Add | Remove | Main'));
                if (counter === 1) {
                    listLocator = 1;
                    addMore = 1;
                }
                if (counter === 2) {
                    listLocator = 2;
                    addMore = -1;
                }
                if (counter === 3) {

                    locator = 0;
                    listLocator = 0;
                    addMore = 0;
                }
            }
        }

        //Remove Items Selection
        if (listLocator === 2)
            while (addMore === -1) {
                //console.clear();

                //Remove | Clear items menu
                console.log('');
                console.log('REMOVE items from Completed Lists, Incomplete Lists or Clear A List Entirely?');
                console.log('(1) - Completed Lists');
                console.log('(2) - Incomplete Lists');
                console.log('(3) - Clear A List');
                counter = Number(prompt('Remove Item Selection:  '));

                //Display list of completed items
                if (counter === 1) {
                    //console.clear();

                    //List Completed Items In Current List
                    console.log('Here are your Completed Items on CURRENT (', listName, ') :');
                    for (let c of comArr) {
                        let remMe = 1;
                        console.log(remMe, c)
                        remMe++
                    }

                    // User Options
                    console.log('');
                    console.log('REMOVE from CURRENT (', listName, ') or alternate list');
                    console.log('(1) - CURRENT');
                    console.log('(2) - ALTERNATE');
                    console.log('(3) - REMOVE Menu');
                    console.log('(4) - MAIN Menu');

                    // Ternary Menu Option 'else' end at Remove Menu
                    counter = Number(prompt('Selection: ')) === 1 ? listLocator = 21 :
                        2 ? listLocator = 22 :
                        3 ? listLocator = 2 :
                        4 ? listLocator = 0 :
                        listLocator = 2;

                    //Proceed to remove from current list
                    if (counter === 21) {
                        console.clear

                        console.log('');
                        //List Completed Items In Current List
                        console.log('Here are your Completed Items on CURRENT (', listName, ') List: ');
                        let tempRemArr = [];
                        for (let c of comArr) {
                            let remMe = 1;
                            console.log(remMe, c)
                            tempRemArr.push(remMe, c)
                            remMe++

                        }
                        console.log(tempRemArr)



                    }




                    console.log('');
                    console.log('Here is an updated list of your Incomplete Items:');
                    console.log('');
                    // List Incomplete Items
                    for (let c of incArr) {
                        console.log(c);
                    }
                    console.log('');

                    //Setup Menu
                    console.log('(1) - Add Some....?');
                    console.log('(2) - Remove Some....?');
                    console.log('(3) - Main Menu');
                    console.log('');
                    counter = Number(prompt('Would you like to add more'));
                    if (counter === 1) {
                        listLocator = 1;
                        addMore = 1;
                    }
                    if (counter === 2) {
                        listLocator = 2;
                        addMore = -1;
                    }
                    if (counter === 3) {

                        locator = 0;
                        listLocator = 0;
                        addMore = 0;
                    }

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