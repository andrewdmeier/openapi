const { loadTypeDefs, loadResolvers } = require('../../utils');
const context = require('./context');
const queue = require('./queue');
const { enabled } = require('./env');

async function init() {
  await queue.init();

  return {
    typeDefs: await loadTypeDefs(__dirname, ['./tvdb.type.graphql']),
    resolvers: await loadResolvers(__dirname, ['./tvdb.resolver.js']),
    context,
  };
}

module.exports = {
  name: 'tvdb',
  enabled,
  init,
};