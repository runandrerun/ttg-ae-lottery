const users = [
  {
    name: "Andy",
    tickets: 2
  },
  {
    name: "Charlie",
    tickets: 1
  },
  {
    name: "Kevin",
    tickets: 2
  }
];

let ticketsAvailable = 100;

const filterWinner = (usersList, winner) => {
  return usersList.filter((user) => {
    if (user.name !== winner) {
      return user;
    }
  });
};

const lotteryPicker = (usersList, tickets) => {
  console.log(tickets)
  while (tickets >= 1 && usersList.length >= 1) {
    let selectedUser = usersList[Math.floor(Math.random() * usersList.length)];
    tickets -= selectedUser.tickets;
    let filteredWinners = filterWinner(usersList, selectedUser.name);
    return lotteryPicker(filteredWinners, tickets);
  };
};

lotteryPicker(users, ticketsAvailable);
