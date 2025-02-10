module.exports = {
    "site": "https://sites.apps.rmhedge.com/#app_status/pdf_view?tab=message_board",
    "reload": 600000,
    "onLoad": () => {
        document.querySelector("meta[name=viewport]").setAttribute('content', 'width=device-width, initial-scale=0.55');
    }
}
