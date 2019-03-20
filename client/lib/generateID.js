const randomize = () => Math.ceil(Math.random() * Math.pow(2, 40)) + Date.now();
const generateID = prefix => `${prefix}${randomize().toString(16)}`;

module.exports = {
  generateID
};
