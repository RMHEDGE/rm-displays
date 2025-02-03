module.exports = {
    "site": "https://google.com",
    "reload": 600_000,
    "onLoad": () => {
        document.querySelector('textarea').value = "WOAH!";
    }
}
