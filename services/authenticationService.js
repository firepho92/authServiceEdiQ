const verify = async (authData) => {
  try {
    return true
  } catch(e) {
    throw e
  }
}

module.exports = {
  verify
}