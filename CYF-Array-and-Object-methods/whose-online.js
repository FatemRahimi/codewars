/*
Who's Online?
You have a group chat application, but who is online!?

You want to show your users which of their friends are online and available to chat!

Given an input of an array of objects containing usernames, status and time since last activity (in mins), create a function to work out who is online, offline and away.

If someone is online but their lastActivity was more than 10 minutes ago they are to be considered away.

The input data has the following structure:

[{
  username: 'David',
  status: 'online',
  lastActivity: 10
}, {
  username: 'Lucy',
  status: 'offline',
  lastActivity: 22
}, {
  username: 'Bob',
  status: 'online',
  lastActivity: 104
}]
The corresponding output should look as follows:

{
  online: ['David'],
  offline: ['Lucy'],
  away: ['Bob']
}
If for example, no users are online the output should look as follows:

{
  offline: ['Lucy'],
  away: ['Bob']
}
username will always be a string, status will always be either 'online' or 'offline' (UserStatus enum in C#) and lastActivity will always be number >= 0.

Finally, if you have no friends in your chat application, the input will be an empty array []. In this case you should return an empty object {} (empty Dictionary in C#).
*/

const whosOnline = (friends) => {
    const answer = {};
    friends.forEach((e) => {
      if (e.status === 'offline') {
        if (answer.offline) {
          answer.offline.push(e.username);
        } else answer.offline = [e.username];
      } else if (e.lastActivity > 10) {
        if (answer.away) {
          answer.away.push(e.username);
        } else answer.away = [e.username];
      } else if (answer.online) {
        answer.online.push(e.username);
      } else answer.online = [e.username];
    });
    return answer;
  };
  
  // TESTS - run the following command to test this file:
  // npm run test -- JS2-Week1/Whos_Online.js
  
  test('Who\'s Online?', () => {
    const friends = [{
      username: 'David',
      status: 'online',
      lastActivity: 10,
    }, {
      username: 'Lucy',
      status: 'offline',
      lastActivity: 22,
    }, {
      username: 'Bob',
      status: 'online',
      lastActivity: 104,
    }];
    expect(whosOnline(friends)).toStrictEqual({
      online: ['David'],
      offline: ['Lucy'],
      away: ['Bob'],
    });
  });