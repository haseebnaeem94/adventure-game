#! /usr/bin/env node

import inquirer from "inquirer";
import { exit } from "process";
import chalk from "chalk";
class superMan {
    name: string;
    health: number = 100;
    constructor(name: string) {
        this.name = name;
    }
    healthDecrease() {
        let health = this.health - 25
        this.health = health
    }
    healthIncrease() {
        this.health = 100
    }
}
class enemy {
    name: string;
    health: number = 100;
    constructor(name: string) {
        this.name = name;
    }
    healthDecrease() {
        let health = this.health - 25
        this.health = health
    }
}

let superMan1 = await inquirer.prompt([
    {
        name: "name",
        type: "input",
        message: "Please Enter your name",
    }

])

let enemy1 = await inquirer.prompt([
    {
        name: "select",
        type: "list",
        message: "Please select your enemy",
        choices: ["Devil" , "Witch" , "Monster"]
    }
])
console.log(chalk.bgCyan(`${superMan1.name} VS ${enemy1.select}`))
let sup1 = new superMan(superMan1.name)
let ene1 = new enemy(enemy1.select)

do{
    if(enemy1.select == "Devil") {
        let ask = await inquirer.prompt([
            {
                name: "option",
                type: "list",
                message: "What would you want to do?",
                choices: ["Attack" , "Boost energy" , "Run away to save life"]

            }
        ])
        if(ask.option == "Attack") {
            let num1 = Math.floor(Math.random() * 2)
            if(num1 >0) {
                sup1.healthDecrease() 
            console.log(chalk.bgBlueBright(`Health of ${sup1.name} is ${sup1.health}`))
            console.log(chalk.bgGreenBright(`Health of ${ene1.name} is ${ene1.health}`))
        
            }
            if(sup1.health <=0) {
                console.log(chalk.bgGreen(`${sup1.name} you loose better luck next time`))
                process.exit()
            
            }
            if(num1 <=0) {
                ene1.healthDecrease()
                console.log(chalk.bgGray(`Health of ${sup1.name} is ${sup1.health}`))
                console.log(chalk.bgGreenBright(`Health of ${ene1.name} is ${ene1.health}`))


            }
            if(ene1.health <=0) {
                console.log(chalk.bgMagenta(`${sup1.name} Congradulations you won!`))
                process.exit()
            }
        }
        if(ask.option == "Boost energy") {
            sup1.healthIncrease()
            console.log(chalk.bgBlue(`Health of ${sup1.name} is ${sup1.health}`))

        }
        if(ask.option == "Run away to save life") {
            console.log(chalk.bgCyanBright(`${sup1.name} you walked over, the game is over please start again to play`))
        }


        }

        // For Witch

        if(enemy1.select == "Witch") {
            let ask = await inquirer.prompt([
                {
                    name: "option",
                    type: "list",
                    message: "What would you want to do?",
                    choices: ["Attack" , "Boost energy" , "Run away to save life"]
    
                }
            ])
            if(ask.option == "Attack") {
                let num1 = Math.floor(Math.random() * 2)
                if(num1 >0) {
                    sup1.healthDecrease() 
                console.log(chalk.bgBlueBright(`Health of ${sup1.name} is ${sup1.health}`))
                console.log(chalk.bgBlueBright(`Health of ${ene1.name} is ${ene1.health}`))
            
                }
                if(sup1.health <=0) {
                    console.log(chalk.bgGreen(`${sup1.name} you loose better luck next time`))
                    process.exit()
                
                }
                if(num1 <=0) {
                    ene1.healthDecrease()
                    console.log(chalk.bgGreenBright(`Health of ${sup1.name} is ${sup1.health}`))
                    console.log(chalk.bgMagenta(`Health of ${ene1.name} is ${ene1.health}`))
    
    
                }
                if(ene1.health <=0) {
                    console.log(chalk.bgGreenBright(`${sup1.name} Congradulations you won!`))
                    process.exit()
                }
            }
            if(ask.option == "Boost energy") {
                sup1.healthIncrease()
                console.log(chalk.bgGrey(`Health of ${sup1.name} is ${sup1.health}`))
    
            }
            if(ask.option == "Run away to save life") {
                console.log(chalk.bgMagentaBright(`${sup1.name} you walked over, the game is over please start again to play`))
            }
    
    
            }

            // for Monster

            if(enemy1.select == "Monster") {
                let ask = await inquirer.prompt([
                    {
                        name: "option",
                        type: "list",
                        message: "What would you want to do?",
                        choices: ["Attack" , "Boost energy" , "Run away to save life"]
        
                    }
                ])
                if(ask.option == "Attack") {
                    let num1 = Math.floor(Math.random() * 2)
                    if(num1 >0) {
                        sup1.healthDecrease() 
                    console.log(chalk.bgMagenta(`Health of ${sup1.name} is ${sup1.health}`))
                    console.log(chalk.bgRed(`Health of ${ene1.name} is ${ene1.health}`))
                
                    }
                    if(sup1.health <=0) {
                        console.log(chalk.bgRedBright(`${sup1.name} you loose better luck next time`))
                        process.exit()
                    
                    }
                    if(num1 <=0) {
                        ene1.healthDecrease()
                        console.log(chalk.bgGreen(`Health of ${sup1.name} is ${sup1.health}`))
                        console.log(chalk.bgRedBright(`Health of ${ene1.name} is ${ene1.health}`))
        
        
                    }
                    if(ene1.health <=0) {
                        console.log(chalk.bgGreenBright(`${sup1.name} Congradulations you won!`))
                        process.exit()
                    }
                }
                if(ask.option == "Boost energy") {
                    sup1.healthIncrease()
                    console.log(chalk.bgMagenta(`Health of ${sup1.name} is ${sup1.health}`))
        
                }
                if(ask.option == "Run away to save life") {
                    console.log(chalk.bgMagentaBright(`${sup1.name} you walked over, the game is over please start again to play`))
                }
        
        
                }
    
    
    }


while(true)
