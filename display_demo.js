module.exports = {
    site: "https://google.com",
    reload: 10 * 60 * 1000,
    onLoad: () => {
        document.querySelector('textarea').value = "WOAH!";
    }
}
