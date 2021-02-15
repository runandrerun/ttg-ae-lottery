# ttg-ae-lottery

Please feel free to view the demo [here](https://runandrerun.github.io/ttg-ae-lottery/)

## Available Scripts

In the project directory, you can run:

### `npm start`

## Lottery Picker Process

In this app, I've simplified the process of picking winners for tickets:

Shows have a usersEntered key that's an array. It contains user objects who have opted into the lottery for that specific show.

When the lottery picker is run, there is a check to ensure there are enough tickets and that there are at least 1 user opted into the lottery.

From there, a user is randomly selected, and in this case 1 ticket is given to them and removed from the tickets available.

After, the winner is then filtered out of the current list of opted in users and the function is called recursively until either there are no more tickets or no more users.
