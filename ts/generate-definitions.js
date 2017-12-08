'use strict';

var types = module.exports = require('../fork')([
    require("../def/core")
]);


var Ast = require('ts-simple-ast').default;
var ast = new Ast();

var file = ast.getOrAddSourceFile("./ts/ast-types.d.ts");

Object.keys(types.namedTypes).forEach(function(typeName) {
    var interfaze = file.addInterface({name: typeName});
    interfaze.setIsExported(true);

    interfaze.addExtends(types.getSupertypeNames(typeName));
});

var buildersStatement = file.addVariableStatement({
    declarationType: 'const',
    declarations: [{
        name: "builders",
        initializer: "{}"
    }]
});
buildersStatement.setIsExported(true);

var buildersDeclaration = buildersStatement.getDeclarations()[0];

/** @type {ObjectLiteralExpression} */
var buildersObj = buildersDeclaration.getInitializer();

Object.keys(types.builders).forEach(function(builderName) {
    var builder = types.builders[builderName];
    if (!builder.type) {
        return;
    }

    try {
        var builderFunction = buildersObj.addPropertyAssignment({
            name: builderName,
            initializer: 'function()'
        }).getInitializer();


        builderFunction.setReturnType(builder.type);

        builder.params.forEach(function(param, index, params) {
            var markOptional = param.optional &&
                               params.slice(index).every(function(param) { return param.optional });

            builderFunction.addParameter({
                name: param.name + (markOptional ? '?' : ''),
                type: param.type
            })
        });
    } catch (e) {
        console.log('builderName:' + builderName + ' builder.params:' + JSON.stringify(builder.params));
        throw e;
    }
});

file.emit({emitOnlyDtsFiles: true});
file.saveSync();