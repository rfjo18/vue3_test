const key='vite';

export default store => {
    if (localStorage.getItem(key)) store.replaceState(JSON.parse(localStorage.getItem(key)))
    store.subscribe((mutation, state) => {
        localStorage.setItem(key,JSON.stringify(state))
    })
}
