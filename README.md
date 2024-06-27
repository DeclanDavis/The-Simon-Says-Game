# **The Simon Says Game**

![ssgScreengrab](https://github.com/DeclanDavis/TheSimonSaysGame/blob/main/code/images/ssg.png?raw=true)
## **Overview**

The Simon Says Game is an app developed as part of my module, **Web Information Processing**, in Maynooth University, National University of Ireland Maynooth. 
This module is worth 5 credits. 

Programmed using *JavaScript, HTML* and  *CSS*.

This readme will provide an overview of the app. 


## **The Simon Memory Game**

The Simon electronic memory skill game, invented in 1978 by Ralph H. Baer and Howard J. Morrison,
creates a series of tones and lights and requires a user to repeat the sequence. If the user succeeds,
the series becomes progressively longer and more complex. Once the user fails or the time limit runs
out, the game is over. Simon is named after the simple children's game of Simon Says, but the
gameplay is based on Atari's unpopular Touch Me arcade game from 1974.

The device has four coloured buttons, each producing a particular tone when it is pressed or
activated by the device. A round in the game consists of the device lighting up one or more buttons
in a random order, after which the player must reproduce that order by pressing the buttons. As the
game progresses, the number of buttons to be pressed increases.

## **Brief**

Re-create a version of the Simon game as a (HTML/CSS/JS) web app. Implement the following: 

1. Click the start button to begin, the game status indicator ( the red/green light below the START button) 
switched from RED to GREEN. The game will begin 3s after the light turns GREEN.

2. Simon will give the first signal (randomly flash a coloured button). Repeat the signal by clicking the same coloured button.

3. Simon will duplicate the first signal and add one. Repeat these two signals by clicking the same colour buttons, in order.

4. Simon will duplicate these first two signals and add one.

5. Continue playing as long as you can repeat each sequence of signals correctly. After the 5th, 9th and 13th signals in
a sequence, Simon automatically speeds up the interval between signals.

6. If you fail to repeat a sequence exactly, or if you take more than 5 seconds to repeat a signal, Simon responds by flashing
all four buttons simultaneously five times. This means you have lost, and the sequence of signals ends. The game status indicator
switches from GREEN to RED and you will have to click START button to begin a new game.

7. Your progress (the number of correctly repeated signals) for the game just completed (last game) is shown in the display to the 
right of the START button. The all-time highest score is shown in the display to the left of the START button. 


## **Requirements:** 

1. All game interface elements must be generated using HTML elements together with appropriate
CSS styling. You may not use pre-constructed images for any of the game elements.

2. The font family used is “Orbitron” and you may load it from hGps://fonts.googleapis.com/. You
may not use any other font as part of the display.

3. You may not use a CSS framework, such as Bootstrap, for this assignment. You may, if you wish,
use the jQuery Javascript framework. If you use TypeScript, or similar, and transpire to JavaScript,
you need to provide all sources. Your app only needs to run on a desktop browser such as Chrome.

## **Browser and OS:**

Browser: Google Chrome Version 122.0.6261.112 (Official Build) (64-bit)

Operating System: Windows


## **References:** 

For this project I referenced:

**Youtube tutorials:**

*Simon Game JavaScript Tutorial for Beginners* by freeCodeCamp.org - [https://www.youtube.com/watch?v=n_ec3eowFLQ] 

*CSS Positioning: Position absolute and relative explained* by Kevin Powell - [https://www.youtube.com/watch?v=P6UgYq3J3Qs&t=345s]

*Learn CSS Positioning Quickly with A Real World Example* by Slaying The Dragon - [https://www.youtube.com/watch?v=MxEtxo_AaZ4&t=149s]

**Websites:**

*W3 Schools*: [https://www.w3schools.com/js/js_timing.asp] 

*GeeksforGeeks*: [https://www.geeksforgeeks.org/create-a-simon-game-using-html-css-javascript/]




