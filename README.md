# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: **Matthew Morena**

Time spent: **5** hours spent in total

Link to project: [Piano Memory Game](https://matthew-morena-piano-game.glitch.me/)

Link to Code: [Piano Memory Game SRC](https://glitch.com/edit/#!/matthew-morena-piano-game)

## Required Functionality

The following **required** functionality is complete:

* [X] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [X] "Start" button toggles between "Start" and "Stop" when clicked. 
* [X] Game buttons each light up and play a sound when clicked. 
* [X] Computer plays back sequence of clues including sound and visual cue for each button
* [X] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [X] User wins the game after guessing a complete pattern
* [X] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [X] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [X] Buttons use a pitch (frequency) other than the ones in the tutorial
* [X] More than 4 functional game buttons
* [X] Playback speeds up on each turn
* [X] Computer picks a different pattern each time the game is played
* [X] Player only loses after 3 mistakes (instead of on the first mistake)
* [X] Game button appearance change goes beyond color (e.g. add an image)
* [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [ ] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [ ] List anything else that you can get done to improve the app!

## Video Walkthrough

Here's a walkthrough of implemented user stories:
![](https://i.imgur.com/nu13sjN.gif)


## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 

https://www.w3schools.com/

https://stackoverflow.com/

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 

Some challenges I encountered while writing this program include learning new Javascript syntax and features as I went along, as well as trying to implement 
features of the Web Audio API. I have previously only worked with Javascript in the context of using Discord.js, so I was only familiar with some of the general rules. 
To overcome this, I mainly used my prior knowledge from other languages and applied that to this, occasionally looking up some specific syntax rules on w3schools.com 
or stackoverflow.com. I specifically had to research how to generate random numbers to fill the pattern array. I also chose to do a bit of research on the Web Audio API 
and found some interesting tutorials on using filters and other types of oscillators. I was not able to implement most of these features due to time constraints, but I 
did try out a few different waveforms. I also had to research the correct frequencies for the 9 additional notes of the scale that I used. As for HTML and CSS, those two 
languages are very different from any of the conventional languages I am proficient in. I’ve had some prior experience with them, mostly using pre-built code blocks from 
Bootstrap, so building this from scratch was a little more challenging. I had to look up how to change the background of a button to an image, and actually found that it 
was a relatively simple solution. Overall, this project was a good introduction to web development using Javascript for me, and I am excited to learn more in the future.

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 

I am curious as to how various Javascript frameworks make the development of interactive sites easier and more efficient. This is a relatively small project that still 
took a few hours to develop, so I imagine much more sophisticated sites take a lot longer to build. However, I have heard a lot about frameworks such as React and Angular, 
and I wonder what their capabilities are. I am also curious about how other languages can be used for more back end development. I have heard of languages like Python, C#, 
and even C++ being used for backend web development, but I have never encountered anything related to the web when working with Python or C++ myself. Lastly, I would like 
to learn more about database integration into web apps, as I know storing user data is important for most apps that want to create a personalized experience.

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 

The next thing I wanted to add was keyboard functionality, so that the user could trigger certain buttons by pressing certain keys on their keyboard. I also wanted
to play around with the audio synthesizer a little more, since I am a musician myself and I am somewhat familiar with audio synthesis. I wanted to try to synthsize a sound
that was more similar to the noise a piano makes. I have never programmed with it before, though, so I found it to be challenging, but still interesting.



## License

    Copyright Matthew Morena

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.