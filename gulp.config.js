module.exports = function() {

    var serverRootPath = 'src/server/';
    var clientRootPath = 'src/client/'

    var serverJsFiles = [serverRootPath + '**/*.js'];
    return {

        /**
         * File Paths
         */
        serverRootPath: serverRootPath,
        clientRootPath: clientRootPath,
        serverJsFiles: serverJsFiles
    };
}();