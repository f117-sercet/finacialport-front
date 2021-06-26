// 1.声明一个字符串
let str = '字符串1'
let str1 = "字符串2"

console.log(str + str1)

// 2、原样输出
let htmlStr = `<ul>
<li>沈腾</li>
<li>玛丽</li>
</ul>`

console.log(htmlStr)

// 3、变量拼接（插值表达式）
let star = '你好未来'
let out  = `再见过去，${star}`
console.log(out)