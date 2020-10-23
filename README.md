To run the code:        npm install      
Install jest:   
npm i jest --save-dev
npm i jest-cli -g   
 

In order to run code, you need to enter the command in the following form:   node index.js <inputfile.txt>     
Run jest:   
jest <fileName>.test.js   
 
To check extreme situations, use the following inputs:
Original input: sample.input.txt
Empty table: sample.input.2.txt
One team wins all the games:  sample.input.3.txt
One team loses all the games: sample.input.4.txt
All the teams have equal points: sample.input.5.txt

Explanation: In this solution, the teams are sorted using mergeSort, because it's a very fast sorting algorithm that gives us O(n logn) time complexity.
Team name, number of goals scored, number of goals received, and the number of games played are calculated in "calculateTeamPoints", in case we need them in future while expanding the app.  
===========
We want you to create a command-line application that will calculate the
ranking table for a hockey league.

Input/output
------------
The input and output will be text. Your solution should parse the provided
sample-input.txt file via stdin (pipe or redirect) or by parsing a file passed
by name on the command line. Your solution should output the correct result via
stdout to the console.

The input contains results of games, one per line. See sample-input.txt for
details. The output should be ordered from most to least points, following
(exactly) the format specified in expected-output.txt.

You can expect that the input will be well-formed. There is no need to add
special handling for malformed input files.

The rules
---------
In this league, a draw (tie) is worth 1 point and a win is worth 3 points. A
loss is worth 0 points. If two or more teams have the same number of points,
they should have the same rank and be printed in alphabetical order (as in the
tie for 3rd place in the sample data).

Guidelines
-----------
We’ve been on the implementing side of coding tests in many interviews where the
problem is meant to be unexpectedly complex or full of “gotchas”. Those are bullshit
and this isn’t meant to be one of those.

This should be implemented in a language with which you are familiar. We would
prefer that you use ruby or javascript, if you are comfortable doing so, but if
you can best shine in another language, go for it!

Your solution should be able to be run (and if applicable, built) from the
command line. Please include appropriate scripts and instructions for
running your application and your tests.

If you use other libraries installed by a common package manager
(rubygems/bundler, npm, etc), it is not necessary to commit the
installed packages.

We write automated tests and we would like you to do so as well.

We appreciate well factored, object-oriented or functional code.

Please document any steps necessary to run your solution and your tests.

Platform support
----------------
This will be run in a unix-ish environment (OS X). If you choose to use a
compiled language, please keep this in mind. (Dependency on Xcode is acceptable
for objective-c solutions) Please use platform-agnostic constructs where
possible (line-endings and file-path-separators are two problematic areas).

Submission
----------
Please submit your solution by pushing up a branch to your Github repo and open a PR. Add Github users `amay`, `jessecurry`, and `eagsalazar` as reviewers.
