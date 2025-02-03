module.exports = {
    "site": "https://google.com",
    "reload": 600000,
    "onLoad": () => {
        document.querySelector('textarea').value = "WOAH!";
    }
}
