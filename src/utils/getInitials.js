/**
 * 
 * @param {string} name
 * @returns {string} 
 */
const initials = (name = '') => name
  .replace(/\s+/, ' ')
  .split(' ')
  .slice(0, 2)
  .map((v) => v && v[0].toUpperCase())
  .join('');

  export default initials;