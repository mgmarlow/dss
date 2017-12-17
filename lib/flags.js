module.exports = (rawArguments) => {
  return {
    util: {
      list: rawArguments['l'] || rawArguments['list'],
      all: rawArguments['a'] || rawArguments['all']
    },
    letter: {
      configPath: rawArguments['config'],
      text: rawArguments['_'],
      signature: getSignature(rawArguments['--']),
      template: rawArguments['tpl']
    }
  }
}

function getSignature (sigArray) {
  const flags = ['--config', '--tpl', '--list']

  if (sigArray && sigArray.length > 0) {
    // TODO: re-parse the arguments if they are found in signature to allow
    // flags to come after signature
    const argInSig = flags.findIndex(flag => sigArray.includes(flag))
    if (argInSig !== -1) {
      throw new Error('All arguments must come before signature')
    }
    return sigArray.join(' ')
  }

  return null
}
