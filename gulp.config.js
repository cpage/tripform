module.exports = function () {

    var tmpPath = '.tmp/';
    var srcPath = 'src';
    var serverRootPath = 'src/server/';
    var clientRootPath = 'src/client/';
    var clientAppPath = clientRootPath + 'app/';
    var indexHtml = clientRootPath + 'index.html';
    var clientHtmlFiles = clientRootPath + '**/*.html';
    var lessFiles = clientRootPath + '**/*.less';
    var mainLessFile = clientRootPath + 'styles/styles.less';
    var serverJsFiles = [serverRootPath + '**/*.js'];
    var clientJsFiles = [
        clientAppPath + 'app.module.js',
        clientAppPath + '**/*.module.js',
        clientAppPath + '**/*.js'
    ];

    var node = {
        defaultPort: 8080,
        serverScript: serverRootPath + 'server.js'
    };

    return {

        /**
         * File Paths
         */
        tmpPath: tmpPath,
        srcPath: srcPath,
        serverRootPath: serverRootPath,
        clientRootPath: clientRootPath,
        clientAppPath: clientAppPath,
        serverJsFiles: serverJsFiles,
        clientJsFiles: clientJsFiles,
        clientHtmlFiles: clientHtmlFiles,
        lessFiles: lessFiles,
        mainLessFile: mainLessFile,
        indexHtml: indexHtml,

        /**Node settings */
        node: node
    };
}();