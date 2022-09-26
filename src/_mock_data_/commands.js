const mockLogs =  [
  {
    name: 'bannedUsernames',
    permissions: 'Helper+',
    description: 'Returns a list of all banned usernames!',
    status: true,
  },
  {
    name: 'banUsernames',
    permissions: 'Moderator+',
    description: 'Takes a list of usernames and adds it to the database as banned usernames!',
    status: true,
  },
  {
    name: 'unbanUsernames',
    permissions: 'Administrator',
    description: 'Takes a list of usernames and removes them from the collection of banned usernames!',
    status: true,
  },
  {
    name: 'help',
    permissions: 'Helper+',
    description: 'Help command!',
    status: false,
  }
];

export default mockLogs;