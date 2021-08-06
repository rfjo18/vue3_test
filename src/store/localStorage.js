const key='vite';

export default store => {
    if (localStorage[key]) store.replaceState(JSON.parse(localStorage[key]))
    store.subscribe((mutation, state) => {
        localStorage[key] = JSON.stringify(state)
    })
}
