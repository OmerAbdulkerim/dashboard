import { v4 as uuid } from 'uuid';

const mockLogs =  [
  {
    id: uuid(),
    avatarUrl: '/static/images/avatars/avatar_3.png',
    createdAt: 1555016400000,
    action: 'Updated Command getBannedUsernames',
    name: 'SalkoBrat',
  },
  {
    id: uuid(),
    avatarUrl: '/static/images/avatars/avatar_4.png',
    createdAt: 1555016400000,
    action: 'Updated prefix from \'!\' to \'?\'',
    name: 'Sara (sghope25)',
  },
  {
    id: uuid(),
    avatarUrl: '/static/images/avatars/avatar_2.png',
    createdAt: 1555016400000,
    action: 'Used command banUsernames',
    name: 'Takma',
  },
  {
    id: uuid(),
    avatarUrl: '/static/images/avatars/avatar_5.png',
    createdAt: 1554930000000,
    action: 'Used command getBannedUsernames',
    name: 'Jordysure',
  },
  {
    id: uuid(),
    avatarUrl: '/static/images/avatars/avatar_6.png',
    createdAt: 1554757200000,
    action: 'Used command unBanUsernames',
    name: 'Salkobrat',
  },
  {
    id: uuid(),
    avatarUrl: '/static/images/avatars/avatar_1.png',
    createdAt: 1554670800000,
    action: 'Used command banUsernames',
    name: 'MikezGaming',
  },
  {
    id: uuid(),
    avatarUrl: '/static/images/avatars/avatar_7.png',
    createdAt: 1554325200000,
    action: 'Updated Bot Avatar',
    name: 'Sara (sghope25)',
  },
  {
    id: uuid(),
    avatarUrl: '/static/images/avatars/avatar_8.png',
    createdAt: 1523048400000,
    action: 'Updated prefix from \'?\' to \'!\'',
    name: 'SalkoBrat',
  },
  {
    id: uuid(),
    avatarUrl: '/static/images/avatars/avatar_9.png',
    createdAt: 1554702800000,
    action: 'Used command getBannedUsernames',
    name: 'Takma',
  },
  {
    id: uuid(),
    avatarUrl: '/static/images/avatars/avatar_10.png',
    createdAt: 1522702800000,
    action: 'Used  command banUsernames',
    name: 'Jordysure',
  }
];

export default mockLogs;