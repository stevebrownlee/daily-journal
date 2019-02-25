module.exports = {
    launchAPI: {
        cmd: "json-server -H 0.0.0.0 -p 8088 -w /app/api/entries.json"
    },
    _defaults: {
        bg: true
    }
}