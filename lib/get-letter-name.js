module.exports = (title) => {
  title = title.replace(/\s/g, '-')
  const now = new Date().toLocaleDateString().replace('/', '-')
  return `${title}-${now}.txt`
}
