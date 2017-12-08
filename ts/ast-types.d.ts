export interface Printable {
}

export interface SourceLocation {
}

export interface Node extends Printable {
}

export interface Comment extends Printable {
}

export interface Position {
}

export interface File extends Node, Printable {
}

export interface Program extends Node, Printable {
}

export interface Statement extends Node, Printable {
}

export interface Function extends Node, Printable {
}

export interface Pattern extends Node, Printable {
}

export interface Expression extends Pattern, Node, Printable {
}

export interface Identifier extends Expression, Pattern, Node, Printable {
}

export interface BlockStatement extends Statement, Node, Printable {
}

export interface EmptyStatement extends Statement, Node, Printable {
}

export interface ExpressionStatement extends Statement, Node, Printable {
}

export interface IfStatement extends Statement, Node, Printable {
}

export interface LabeledStatement extends Statement, Node, Printable {
}

export interface BreakStatement extends Statement, Node, Printable {
}

export interface ContinueStatement extends Statement, Node, Printable {
}

export interface WithStatement extends Statement, Node, Printable {
}

export interface SwitchStatement extends Statement, Node, Printable {
}

export interface SwitchCase extends Node, Printable {
}

export interface ReturnStatement extends Statement, Node, Printable {
}

export interface ThrowStatement extends Statement, Node, Printable {
}

export interface TryStatement extends Statement, Node, Printable {
}

export interface CatchClause extends Node, Printable {
}

export interface WhileStatement extends Statement, Node, Printable {
}

export interface DoWhileStatement extends Statement, Node, Printable {
}

export interface ForStatement extends Statement, Node, Printable {
}

export interface Declaration extends Statement, Node, Printable {
}

export interface VariableDeclaration extends Declaration, Statement, Node, Printable {
}

export interface ForInStatement extends Statement, Node, Printable {
}

export interface DebuggerStatement extends Statement, Node, Printable {
}

export interface FunctionDeclaration extends Function, Declaration, Statement, Node, Printable {
}

export interface FunctionExpression extends Function, Expression, Pattern, Node, Printable {
}

export interface VariableDeclarator extends Node, Printable {
}

export interface ThisExpression extends Expression, Pattern, Node, Printable {
}

export interface ArrayExpression extends Expression, Pattern, Node, Printable {
}

export interface ObjectExpression extends Expression, Pattern, Node, Printable {
}

export interface Property extends Node, Printable {
}

export interface Literal extends Expression, Pattern, Node, Printable {
}

export interface SequenceExpression extends Expression, Pattern, Node, Printable {
}

export interface UnaryExpression extends Expression, Pattern, Node, Printable {
}

export interface BinaryExpression extends Expression, Pattern, Node, Printable {
}

export interface AssignmentExpression extends Expression, Pattern, Node, Printable {
}

export interface UpdateExpression extends Expression, Pattern, Node, Printable {
}

export interface LogicalExpression extends Expression, Pattern, Node, Printable {
}

export interface ConditionalExpression extends Expression, Pattern, Node, Printable {
}

export interface NewExpression extends Expression, Pattern, Node, Printable {
}

export interface CallExpression extends Expression, Pattern, Node, Printable {
}

export interface MemberExpression extends Expression, Pattern, Node, Printable {
}

export const builders = {
    sourceLocation: function(start: Position, end: Position, source?: string | null): SourceLocation,
    position: function(line: number, column: number): Position,
    file: function(program: Program, name?: string | null): File,
    program: function(body: [Statement]): Program,
    emptyStatement: function(): EmptyStatement,
    blockStatement: function(body: [Statement]): BlockStatement,
    expressionStatement: function(expression: Expression): ExpressionStatement,
    ifStatement: function(test: Expression, consequent: Statement, alternate?: Statement | null): IfStatement,
    labeledStatement: function(label: Identifier, body: Statement): LabeledStatement,
    breakStatement: function(label?: Identifier | null): BreakStatement,
    continueStatement: function(label?: Identifier | null): ContinueStatement,
    withStatement: function(object: Expression, body: Statement): WithStatement,
    switchStatement: function(discriminant: Expression, cases: [SwitchCase], lexical?: boolean): SwitchStatement,
    returnStatement: function(argument: Expression | null): ReturnStatement,
    throwStatement: function(argument: Expression): ThrowStatement,
    tryStatement: function(block: BlockStatement, handler?: CatchClause | null, finalizer?: BlockStatement | null): TryStatement,
    catchClause: function(param: Pattern, guard: Expression | null, body: BlockStatement): CatchClause,
    whileStatement: function(test: Expression, body: Statement): WhileStatement,
    doWhileStatement: function(body: Statement, test: Expression): DoWhileStatement,
    forStatement: function(init: VariableDeclaration | Expression | null, test: Expression | null, update: Expression | null, body: Statement): ForStatement,
    forInStatement: function(left: VariableDeclaration | Expression, right: Expression, body: Statement): ForInStatement,
    debuggerStatement: function(): DebuggerStatement,
    functionDeclaration: function(id: Identifier, params: [Pattern], body: BlockStatement): FunctionDeclaration,
    functionExpression: function(id: Identifier | null, params: [Pattern], body: BlockStatement): FunctionExpression,
    variableDeclaration: function(kind: "var" | "let" | "const", declarations: [VariableDeclarator]): VariableDeclaration,
    variableDeclarator: function(id: Pattern, init: Expression | null): VariableDeclarator,
    thisExpression: function(): ThisExpression,
    arrayExpression: function(elements: [Expression | null]): ArrayExpression,
    objectExpression: function(properties: [Property]): ObjectExpression,
    property: function(kind: "init" | "get" | "set", key: Literal | Identifier, value: Expression): Property,
    sequenceExpression: function(expressions: [Expression]): SequenceExpression,
    unaryExpression: function(operator: "-" | "+" | "!" | "~" | "typeof" | "void" | "delete", argument: Expression, prefix?: boolean): UnaryExpression,
    binaryExpression: function(operator: "==" | "!=" | "===" | "!==" | "<" | "<=" | ">" | ">=" | "<<" | ">>" | ">>>" | "+" | "-" | "*" | "/" | "%" | "&" | "|" | "^" | "in" | "instanceof" | "..", left: Expression, right: Expression): BinaryExpression,
    assignmentExpression: function(operator: "=" | "+=" | "-=" | "*=" | "/=" | "%=" | "<<=" | ">>=" | ">>>=" | "|=" | "^=" | "&=", left: Pattern, right: Expression): AssignmentExpression,
    updateExpression: function(operator: "++" | "--", argument: Expression, prefix: boolean): UpdateExpression,
    logicalExpression: function(operator: "||" | "&&", left: Expression, right: Expression): LogicalExpression,
    conditionalExpression: function(test: Expression, consequent: Expression, alternate: Expression): ConditionalExpression,
    newExpression: function(callee: Expression, arguments: [Expression]): NewExpression,
    callExpression: function(callee: Expression, arguments: [Expression]): CallExpression,
    memberExpression: function(object: Expression, property: Identifier | Expression, computed?: boolean): MemberExpression,
    switchCase: function(test: Expression | null, consequent: [Statement]): SwitchCase,
    identifier: function(name: string): Identifier,
    literal: function(value: string | boolean | null | number | RegExp): Literal
};
