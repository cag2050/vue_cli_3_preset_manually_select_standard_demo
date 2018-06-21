module.exports = {
    root: true,
    env: {
        node: true
    },
    'extends': [
        'plugin:vue/essential',
        '@vue/standard'
    ],
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        // 忽略indent；此处会使用 .editorconfig 中的4个空格，作为缩进
        'indent': 0
    },
    parserOptions: {
        parser: 'babel-eslint'
    }
}
