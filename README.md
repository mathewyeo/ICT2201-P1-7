# ICT2x01-P1-7 Project: Learning coding with a robotic car
Project: Car aims to enhance children's understanding on basic computing knowledge through a series of computational quest designed to pair along with controllong a MSP432 robotic miniature car. The movement of the car will be based on the input by user and the sensors fitted to the car. 

# 'Howto' Documentation
//install serial module 

python -m pip install pyserial


//set up flask
python -m pip install flask

python -m venv myproject

set FLASK_APP=main

python -m flask run

# BlackBox Testing
### System Test Case 1
Testing for invalid credentials. 

<img src="https://user-images.githubusercontent.com/75107062/144883930-5eeda14a-4c35-451f-bb92-00b57921f720.png" width = "500" >

### System Test Case 2
Testing for successful login and access to index page.

<img src="https://user-images.githubusercontent.com/75107062/144883973-17f9b5b6-2008-4d22-bdac-9c61785e4f7f.png" width = "500">

<img src="https://user-images.githubusercontent.com/75107062/144883982-42bc9e19-5fe2-4231-a06d-24c7a263221c.png" width = "500" >





### System Test Case 3

### System Test Case 4
![Test Case 4 - Gameover Screen](/testcases/carmove.gif)

### System Test Case 5
Tests for the score. 
https://github.com/mathewyeo/ICT2201-P1-7/blob/main/testcases/New%20vide01o.mp4
![Test Case 5 - Gameover Screen](/testcases/score.gif)

### System Test Case 6
Tests if Game Over screen is displayed once the score hits 0 before Player completes the maze.
![Test Case 7 - Gameover Screen](/testcases/gameover.gif)

### System Test Case 7
Tests if Victory screen is displayed once the player completes the maze.
![Test Case 8 - Victory Screen](/testcases/victory.gif)

# Blackbox Testing

![BB testing ](/testcases/bb_1.jpg)

![BB testing ](/testcases/bb_2.jpg)

![BB testing ](/testcases/bb_3.jpg)

https://docs.google.com/document/d/1tK3LI--h5lrHyQzFoephDCF4bykbQs2OHwLcxcNACyc/edit?usp=sharing



# WhiteBox Testing
Branch Coverage

![WhiteBox testing - Branch coverage](/testcases/branch.jpg)

# Demo of proj
![Demo](/testcases/Demo.gif)



# Development Workflow
## Roles: 
Gou Hang (Team Leader),
Levisha (Backend Developer),
Marissa (Backend Developer),
Mathew (Backend Developer)

## Master Branch:
Mainly used to merge completed and tested functions from individual feature branches.


# Reflections
Marissa: M3 helped me to better determine how my code should be optimized. Using the refactoring techniques taught in class, I was able to perform appropriate checks. In addition, I learnt various ways to utilize GitHub for easier merging and comparisons of code. I realized how important it was to manage changes and new implementations in a seperate branch before merging the completed functions into the main branch.

Mathew: Milestone 3 concludes the implementation and testing phase of SDLC, it taught me the importance of certain protocols enforced to ensure that the quality of the software be met despite being an agile approach. One of such is the usage of github, where developments can be done independently and merge when required to and also a tool for communication as it shows the progress when changes were pushed to the repository. 

Levisha: I have learnt how to apply the knowledge i learnt in class about whitebox testing, also applied the skills on how to create an cfg flow and also use the knowledge on blackbox testing, on whether the test cases are pass or fail and also provided screenshots. M3 is more about coding and lesser on writing or drawing daigrams compared to the other milestones. It was definetely challenging having to code them and make the web interact with the car , however it was done smoothly.

Gouhang: In the M3, I have learn the knowledge like how to use the technology we learn in black box and white box and use it inside our website code testing. With this two technology , we are able to detect the error inside our coding and complete the testing to validate that we are building the correct system as our final products.
