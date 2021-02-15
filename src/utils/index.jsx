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

let ticketsAvailable = 3;

export const filterWinner = (usersList, winner) => {
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

export const runLotteryPicker = (usersList, show) => {
  while (show.tickets >= 1 && usersList.length >= 1) {
    let selectedUser = usersList[Math.floor(Math.random() * usersList.length)];
    show.tickets -= selectedUser.tickets;
    let filteredWinners = filterWinner(usersList, selectedUser.name);
    return lotteryPicker(filteredWinners, show.tickets);
  };
}

export const updateUserLotteryEntry = async (user, showId) => {
  if (doesEntryExist(user, showId)) {
    return false;
  } else {
    return user.lotteryEntry.push(showId);
  };
};

// does the entry already exist?
export const doesEntryExist = (user, showId) => {
  return user.lotteryEntry.find(entry => {
    if (entry === showId) {
      return true;
    };
  });
};
