module.exports.eventQuery = function(body, method, headers, querys, paths) {
    return {
        "body": body,
        "method": method,
        "headers": headers,
        "query": querys,
        "path": paths
    }
}