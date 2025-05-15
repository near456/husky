module.exports = {
    // 行宽，超过此长度的行将被换行
    printWidth: 100,

    // 每个缩进级别的空格数
    tabWidth: 2,

    // 是否在行尾添加分号
    semi: false,

    // 使用单引号而不是双引号
    singleQuote: true,

    // 在 JSX 中使用单引号
    jsxSingleQuote: false,

    // 是否在对象字面量的最后一个属性后添加逗号
    trailingComma: 'es5', // 选项：none | es5 | all

    // 是否在对象字面量的括号之间添加空格
    bracketSpacing: true,

    // 在 JSX 标签的闭合标记上是否要有空格
    jsxBracketSameLine: false,

    // 是否使用缩进格式化
    arrowParens: 'avoid', // 选项：avoid | always

    // 是否将单行的代码块格式化为多行
    proseWrap: 'preserve', // 选项：always | never | preserve


    // 解析器的选项
    parser: 'typescript', // 选项：babel | flow | typescript | json | graphql | markdown | html | vue | angular | ...等
};
