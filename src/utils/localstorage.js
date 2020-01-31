const ichingdb = {
  save(key, value) {
    localStorage.setItem(key, JSON.stringify(value))
  },
  get(key, defaultValue = {}) {
    return JSON.parse(localStorage.getItem(key)) || defaultValue
  },
  set(key, value) {
    localStorage.setItem(key, JSON.stringify(value))
  },
  remove(key) {
    localStorage.removeItem(key)
  },
  clear() {
    localStorage.clear()
  }
}

export default ichingdb
