# FriendFinder

## Customer Interface

#### This application replicates a `Matching Service` website. Npm express, body-parser and path packages are used to gather, route and display user data. After selecting the initial `Go to Survey` button, the user is asked for a name and photo URL, followed by 10 personality question. All fields are required.

## Logic

#### Each of the ten questions asks for a response ranging from 1 to 5. Each user response is compared wih all friends data that already exists. New user entries are added to that friend list and is included in future comparisons by the next user.

#### For each question, the difference is calculated against the values for each other friend. Negative numbers are reversed, so the difference between 5 and 3, or 3 and 5, is always 2. The difference for each of the ten questions is added together, and the closest match (i.e. lowest number) yields the best matching friend.

## Getting Started

#### The application can be accessed at https://blooming-forest-93979.herokuapp.com/. Good luck, and enjoy!