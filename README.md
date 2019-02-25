# Daily Journal Walkthrough

This repo has several tagged releases that any instructor can use as a boilerplate for walking students through the various stages of the application's development.

> **Tip:** Use `git checkout {_tag_}` to switch between stages. For part 8 - which involves using Browserify - you can look at the `browserify` branch.

It is built elaborately so as to be something that students can continue to apply new concepts to without the need for any major refactoring. It ends after the Nutshell group project is completed, and before their React education begins. If it continued to React, then it would be a complete rewrite from the ground up, which is not necessary.

## Browserify Version

1. Switch to `dockerized` branch
1. Make sure Docker is running on your machine
1. In the root directory run `./build.sh`
1. Once that is complete, run `./run.sh`

That will fire up

## Prerequisites

1. The third stage requires each to install `json-server`, and then `grunt` so the student can launch both `http-server` and `json-server` simultaneously. Therefore Node.js is required on the student's machine as early as possible.
1. Visual Studio Code must be installed.
