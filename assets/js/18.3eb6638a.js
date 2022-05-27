(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{431:function(e,t,a){"use strict";a.r(t);var n=a(18),r=Object(n.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"前端进阶算法6-一看就懂的队列及配套算法题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前端进阶算法6-一看就懂的队列及配套算法题"}},[e._v("#")]),e._v(" 前端进阶算法6：一看就懂的队列及配套算法题")]),e._v(" "),a("p",[e._v("原创 前端瓶子君 前端瓶子君 "),a("em",[e._v("2020-05-07")])]),e._v(" "),a("h3",{attrs:{id:"引言"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#引言"}},[e._v("#")]),e._v(" 引言")]),e._v(" "),a("p",[e._v("队列这种数据结构，据瓶子君了解，前端需要了解的队列结构主要有：双端队列、滑动窗口，它们都是算法中是比较常用的数据结构。")]),e._v(" "),a("p",[e._v("因此，本节主要内容为：")]),e._v(" "),a("ul",[a("li",[e._v("数据结构：队列（Queue）")]),e._v(" "),a("li",[e._v("双端队列（Deque）")]),e._v(" "),a("li",[e._v("双端队列的应用：翻转字符串中的单词")]),e._v(" "),a("li",[e._v("滑动窗口")]),e._v(" "),a("li",[e._v("滑动窗口应用：无重复字符的最长公共子串")]),e._v(" "),a("li",[e._v("最后来一道 leetcode 题目：滑动窗口最大值问题")])]),e._v(" "),a("p",[e._v("下面进入正文吧👇")]),e._v(" "),a("h3",{attrs:{id:"一、数据结构-队列"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一、数据结构-队列"}},[e._v("#")]),e._v(" 一、数据结构：队列")]),e._v(" "),a("p",[e._v("队列和栈类似，不同的是队列是先进先出 (FIFO) 原则的有序集合，它的结构类似如下：")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://mmbiz.qpic.cn/mmbiz_png/pfCCZhlbMQQYTquARVybx8MjPHdibmMQ3IuXGLOhmcmtJ200WtHn0YllOP9dP3boyZnCydoVHaO4ut0PAjFZtHQ/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1",alt:"图片"}})]),e._v(" "),a("p",[e._v("常见队列的操作有："),a("code",[e._v("enqueue(e)")]),e._v(" 进队、 "),a("code",[e._v("dequeue()")]),e._v(" 出队、 "),a("code",[e._v("isEmpty()")]),e._v(" 是否是空队、 "),a("code",[e._v("front()")]),e._v(" 获取队头元素、"),a("code",[e._v("clear()")]),e._v(" 清空队，以及 "),a("code",[e._v("size()")]),e._v(" 获取队列长度。")]),e._v(" "),a("p",[a("strong",[e._v("代码实现")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("function Queue() {\n  let items = []\n  this.enqueue = function(e) {\n    items.push(e)\n  }\n  this.dequeue = function() {\n    return items.shift()\n  }\n  this.isEmpty = function() {\n    return items.length === 0\n  }\n  this.front = function() {\n    return items[0]\n  }\n  this.clear = function() { \n    items = [] \n  }\n  this.size = function() {\n    return items.length\n  }\n}\n")])])]),a("p",[a("strong",[e._v("查找：从对头开始查找，从时间复杂度为 O(n)")])]),e._v(" "),a("p",[a("strong",[e._v("插入或删除：进栈与出栈的时间复杂度为 O(1)")])]),e._v(" "),a("h3",{attrs:{id:"二、双端队列-deque"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二、双端队列-deque"}},[e._v("#")]),e._v(" 二、双端队列（Deque）")]),e._v(" "),a("h4",{attrs:{id:"_1-什么是-deque"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-什么是-deque"}},[e._v("#")]),e._v(" 1. 什么是 Deque")]),e._v(" "),a("p",[e._v("Deque 在原有队列的基础上扩充了：队头、队尾都可以进队出队，它的数据结构如下：")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://mmbiz.qpic.cn/mmbiz_png/pfCCZhlbMQQYTquARVybx8MjPHdibmMQ3xb74S80z3om74a8kE6VicG7qYfKU5APb3DBeiblUtQfLJxick48qLFwZw/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1",alt:"图片"}})]),e._v(" "),a("p",[a("strong",[e._v("代码实现：")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("function Deque() {\n  let items = []\n  this.addFirst = function(e) {\n    items.unshift(e)\n  }\n  this.removeFirst = function() {\n    return items.shift()\n  }\n  this.addLast = function(e) {\n    items.push(e)\n  }\n  this.removeLast = function() {\n    return items.pop()\n  }\n  this.isEmpty = function() {\n    return items.length === 0\n  }\n  this.front = function() {\n    return items[0]\n  }\n  this.clear = function() { \n    items = [] \n  }\n  this.size = function() {\n    return items.length\n  }\n}\n")])])]),a("p",[e._v("下面看一道经典的双端队列问题👇")]),e._v(" "),a("h4",{attrs:{id:"_2-字节-leetcode151-翻转字符串里的单词"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-字节-leetcode151-翻转字符串里的单词"}},[e._v("#")]),e._v(" 2. 字节&leetcode151：翻转字符串里的单词")]),e._v(" "),a("p",[e._v("给定一个字符串，逐个翻转字符串中的每个单词。")]),e._v(" "),a("p",[a("strong",[e._v("示例 1：")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('输入: "the sky is blue"\n输出: "blue is sky the"\n')])])]),a("p",[a("strong",[e._v("示例 2：")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('输入: "  hello world!  "\n输出: "world! hello"\n解释: 输入字符串可以在前面或者后面包含多余的空格，但是反转后的字符不能包括。\n')])])]),a("p",[a("strong",[e._v("示例 3：")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('输入: "a good   example"\n输出: "example good a"\n解释: 如果两个单词间有多余的空格，将反转后单词间的空格减少到只含一个。\n')])])]),a("p",[a("strong",[e._v("说明：")])]),e._v(" "),a("ul",[a("li",[e._v("无空格字符构成一个单词。")]),e._v(" "),a("li",[e._v("输入字符串可以在前面或者后面包含多余的空格，但是反转后的字符不能包括。")]),e._v(" "),a("li",[e._v("如果两个单词间有多余的空格，将反转后单词间的空格减少到只含一个。")])]),e._v(" "),a("p",[a("strong",[e._v("解题思路：使用双端队列解题")])]),e._v(" "),a("ul",[a("li",[e._v("首先去除字符串左右空格")]),e._v(" "),a("li",[e._v("逐个读取字符串中的每个单词，依次放入双端队列的对头")]),e._v(" "),a("li",[e._v("再将队列转换成字符串输出（已空格为分隔符）")])]),e._v(" "),a("p",[a("strong",[e._v("画图理解：")])]),e._v(" "),a("p",[a("img",{attrs:{src:"https://mmbiz.qpic.cn/mmbiz_png/pfCCZhlbMQQYTquARVybx8MjPHdibmMQ3E3MeFSibiaA8HY4zaE4cmGo43wgQjB6VQ4eWkme1uf4w3u09X4NtSwiaA/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1",alt:"图片"}})]),e._v(" "),a("p",[a("img",{attrs:{src:"https://mmbiz.qpic.cn/mmbiz_png/pfCCZhlbMQQYTquARVybx8MjPHdibmMQ3zmsV8zYxw7Uxfm1kibib844YZda0vHMGhWrE4MmkYRVjnQzuBqgRABZQ/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1",alt:"图片"}})]),e._v(" "),a("p",[a("img",{attrs:{src:"https://mmbiz.qpic.cn/mmbiz_png/pfCCZhlbMQQYTquARVybx8MjPHdibmMQ3PwiaCqkU3LjKfHvq5HCVV1GJiclx0SzZxibmKxBH2Dt8zGb6L9kGdmia0g/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1",alt:"图片"}})]),e._v(" "),a("p",[a("strong",[e._v("代码实现：")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("var reverseWords = function(s) {\n    let left = 0\n    let right = s.length - 1\n    let queue = []\n    let word = ''\n    while (s.charAt(left) === ' ') left ++\n    while (s.charAt(right) === ' ') right --\n    while (left <= right) {\n        let char = s.charAt(left)\n        if (char === ' ' && word) {\n            queue.unshift(word)\n            word = ''\n        } else if (char !== ' '){\n            word += char\n        }\n        left++\n    }\n    queue.unshift(word)\n    return queue.join(' ')\n};\n")])])]),a("p",[e._v("更多解法详见 图解字节&leetcode151：翻转字符串里的单词")]),e._v(" "),a("h3",{attrs:{id:"三、滑动窗口"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三、滑动窗口"}},[e._v("#")]),e._v(" 三、滑动窗口")]),e._v(" "),a("h4",{attrs:{id:"_1-什么是滑动窗口"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-什么是滑动窗口"}},[e._v("#")]),e._v(" 1. 什么是滑动窗口")]),e._v(" "),a("p",[e._v("这是队列的另一个重要应用")]),e._v(" "),a("p",[e._v("顾名思义，滑动窗口就是一个运行在一个大数组上的子列表，该数组是一个底层元素集合。")]),e._v(" "),a("p",[e._v("假设有数组 [a b c d e f g h ]，一个大小为 3 的 "),a("strong",[e._v("滑动窗口")]),e._v("在其上滑动，则有：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("[a b c]\n  [b c d]\n    [c d e]\n      [d e f]\n        [e f g]\n          [f g h]\n")])])]),a("p",[e._v("一般情况下就是使用这个窗口在数组的 "),a("strong",[e._v("合法区间")]),e._v(" 内进行滑动，同时 "),a("strong",[e._v("动态地")]),e._v(" 记录一些有用的数据，很多情况下，能够极大地提高算法地效率。")]),e._v(" "),a("p",[e._v("下面看一道经典的滑动窗口问题👇")]),e._v(" "),a("h4",{attrs:{id:"_2-字节-leetcode3-无重复字符的最长子串"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-字节-leetcode3-无重复字符的最长子串"}},[e._v("#")]),e._v(" 2. 字节&Leetcode3：无重复字符的最长子串")]),e._v(" "),a("p",[e._v("给定一个字符串，请你找出其中不含有重复字符的 "),a("strong",[e._v("最长子串")]),e._v(" 的长度。")]),e._v(" "),a("p",[a("strong",[e._v("示例 1:")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('输入: "abcabcbb"\n输出: 3 \n解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。\n')])])]),a("p",[a("strong",[e._v("示例 2:")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('输入: "bbbbb"\n输出: 1\n解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。\n')])])]),a("p",[a("strong",[e._v("示例 3:")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('输入: "pwwkew"\n输出: 3\n解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。\n     请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。\n')])])]),a("p",[a("strong",[e._v("解题思路：")]),e._v(" 使用一个数组来维护滑动窗口")]),e._v(" "),a("p",[e._v("遍历字符串，判断字符是否在滑动窗口数组里")]),e._v(" "),a("ul",[a("li",[e._v("不在则 "),a("code",[e._v("push")]),e._v(" 进数组")]),e._v(" "),a("li",[e._v("在则删除滑动窗口数组里相同字符及相同字符前的字符，然后将当前字符 "),a("code",[e._v("push")]),e._v(" 进数组")]),e._v(" "),a("li",[e._v("然后将 "),a("code",[e._v("max")]),e._v(" 更新为当前最长子串的长度")])]),e._v(" "),a("p",[e._v("遍历完，返回 "),a("code",[e._v("max")]),e._v(" 即可")]),e._v(" "),a("p",[a("strong",[e._v("画图帮助理解一下：")])]),e._v(" "),a("p",[a("img",{attrs:{src:"https://mmbiz.qpic.cn/mmbiz_png/pfCCZhlbMQQYTquARVybx8MjPHdibmMQ33RHCZXCsOAibOwsqgQAtY3FGcFCXy2CuPYxFibnraAu4FnnlicfLRALHQ/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1",alt:"图片"}})]),e._v(" "),a("p",[a("strong",[e._v("代码实现：")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("var lengthOfLongestSubstring = function(s) {\n    let arr = [], max = 0\n    for(let i = 0; i < s.length; i++) {\n        let index = arr.indexOf(s[i])\n        if(index !== -1) {\n            arr.splice(0, index+1);\n        }\n        arr.push(s.charAt(i))\n        max = Math.max(arr.length, max) \n    }\n    return max\n};\n")])])]),a("p",[a("strong",[e._v("时间复杂度：O(n2)， 其中 "),a("code",[e._v("arr.indexOf()")]),e._v(" 时间复杂度为 O(n) ，"),a("code",[e._v("arr.splice(0, index+1)")]),e._v(" 的时间复杂度也为 O(n)")])]),e._v(" "),a("p",[a("strong",[e._v("空间复杂度：O(n)")])]),e._v(" "),a("p",[e._v("更多解法详见 字节&Leetcode3：无重复字符的最长子串")]),e._v(" "),a("p",[e._v("最后，来尝试一道leetcode题目吧！")]),e._v(" "),a("h3",{attrs:{id:"四、leetcode239-滑动窗口最大值问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#四、leetcode239-滑动窗口最大值问题"}},[e._v("#")]),e._v(" 四、leetcode239：滑动窗口最大值问题")]),e._v(" "),a("p",[e._v("给定一个数组 "),a("code",[e._v("nums")]),e._v(" 和滑动窗口的大小 "),a("code",[e._v("k")]),e._v("，请找出所有滑动窗口里的最大值。")]),e._v(" "),a("p",[a("strong",[e._v("示例:")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("输入: nums = [1,3,-1,-3,5,3,6,7], 和 k = 3\n输出: [3,3,5,5,6,7] \n")])])]),a("p",[a("strong",[e._v("解释:")])]),e._v(" "),a("blockquote",[a("p",[e._v("滑动窗口的位置         最大值")]),e._v(" "),a("p",[e._v("[1  3  -1] -3  5  3  6  7    3")]),e._v(" "),a("p",[e._v("1 [3  -1  -3] 5  3  6  7    3")]),e._v(" "),a("p",[e._v("1  3 [-1  -3  5] 3  6  7    5")]),e._v(" "),a("p",[e._v("1  3  -1 [-3  5  3] 6  7    5")]),e._v(" "),a("p",[e._v("1  3  -1  -3 [5  3  6] 7    6")]),e._v(" "),a("p",[e._v("1  3  -1  -3  5 [3  6  7]    7")])]),e._v(" "),a("p",[a("strong",[e._v("提示：")])]),e._v(" "),a("p",[e._v("你可以假设 "),a("code",[e._v("k")]),e._v(" 总是有效的，在输入数组不为空的情况下，1 ≤ k ≤ 输入数组的大小。")]),e._v(" "),a("p",[e._v("可以自己尝试解答一下，欢迎将答案提交到 https://github.com/sisterAn/JavaScript-Algorithms/issues/33 ，瓶子君将明日解答😊")]),e._v(" "),a("h3",{attrs:{id:"五、往期精彩"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#五、往期精彩"}},[e._v("#")]),e._v(" 五、往期精彩")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"http://mp.weixin.qq.com/s?__biz=MzUzNjk5MTE1OQ==&mid=2247484444&idx=1&sn=dba5d92f934241059b6f7a827ef212d7&chksm=faec80c4cd9b09d236f046e3a521f7aaf9897c505f818853c85071b2719f22fe89522926a6fb&scene=21#wechat_redirect",target:"_blank",rel:"noopener noreferrer"}},[e._v("前端进阶算法：常见算法题及完美题解"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"http://mp.weixin.qq.com/s?__biz=MzUzNjk5MTE1OQ==&mid=2247484391&idx=1&sn=fd828d06827160b94c69cf4c9e37f545&chksm=faec873fcd9b0e2936ef8b22d082b130605f5ee64c3999ba32121ee0e4e18b6676c44d77060c&scene=21#wechat_redirect",target:"_blank",rel:"noopener noreferrer"}},[e._v("视频面试超高频在线编程题，搞懂这些足以应对大部分公司"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"http://mp.weixin.qq.com/s?__biz=MzUzNjk5MTE1OQ==&mid=2247484417&idx=1&sn=c08cd285e412053dc2c2f1336752c5c9&chksm=faec80d9cd9b09cf266f62dbc5a1b26f5c9f897f6509ed379a20a8333a005b2d8701f6b9bb37&scene=21#wechat_redirect",target:"_blank",rel:"noopener noreferrer"}},[e._v("前端进阶算法5：全方位解读前端用到的栈结构（+leetcode刷题）"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"http://mp.weixin.qq.com/s?__biz=MzUzNjk5MTE1OQ==&mid=2247484298&idx=1&sn=846c8c4117fa0eb5f9a7e66c54b7ae5a&chksm=faec8752cd9b0e44326a3b532ec3e5f57498c83642211c68017dd212f1ddeca53b45b44fe42e&scene=21#wechat_redirect",target:"_blank",rel:"noopener noreferrer"}},[e._v("10 问 10 答，带你快速入门前端算法"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"http://mp.weixin.qq.com/s?__biz=MzUzNjk5MTE1OQ==&mid=2247484292&idx=1&sn=c2dfcccab0ed82267061340f969d5de2&chksm=faec875ccd9b0e4a4b1b015785bd439c9ec37ca6882e9b18f66c523e03110e29f1b6d4c57f62&scene=21#wechat_redirect",target:"_blank",rel:"noopener noreferrer"}},[e._v("前端进阶算法4：链表原来如此简单(+leetcode刷题）"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"http://mp.weixin.qq.com/s?__biz=MzUzNjk5MTE1OQ==&mid=2247484265&idx=1&sn=7feafe63a80ce6371a1b6834884a6d05&chksm=faec87b1cd9b0ea7ea773e24341918cefa1df7ccbc2c12c0fee679fcf62d2603f86351f732d1&scene=21#wechat_redirect",target:"_blank",rel:"noopener noreferrer"}},[e._v("前端进阶算法3：从浏览器缓存淘汰策略和Vue的keep-alive学习LRU算法"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"http://mp.weixin.qq.com/s?__biz=MzUzNjk5MTE1OQ==&mid=2247484249&idx=1&sn=0352d8071caac441ff1c5af3260fe484&chksm=faec8781cd9b0e97bfab3b48f51fc9172b2409378f890de8017d5cd2c62bb004ee58fc8d522c&scene=21#wechat_redirect",target:"_blank",rel:"noopener noreferrer"}},[e._v("瓶子君前端算法集训营第一期开营啦，免费哟"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"http://mp.weixin.qq.com/s?__biz=MzUzNjk5MTE1OQ==&mid=2247484213&idx=1&sn=6b7b9cd11b7a151b1b5396c918d7692f&chksm=faec87edcd9b0efb118b006b13b3df234aa3c8a5aa5bcd168cdf07ee3990fee28a5f039baa0f&scene=21#wechat_redirect",target:"_blank",rel:"noopener noreferrer"}},[e._v("前端进阶算法2：从Chrome  V8源码看JavaScript数组(附赠腾讯面试题)"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"http://mp.weixin.qq.com/s?__biz=MzUzNjk5MTE1OQ==&mid=2247484204&idx=1&sn=3433b9191b67ac9b09452b0d6e3a0639&chksm=faec87f4cd9b0ee213f03f451069f4c5fd352cf0c573d043c1819760ef1085a4457af99605a8&scene=21#wechat_redirect",target:"_blank",rel:"noopener noreferrer"}},[e._v("前端进阶算法1：如何分析、统计算法的执行效率和资源消耗？"),a("OutboundLink")],1)])]),e._v(" "),a("h3",{attrs:{id:"六、前端算法集训营第一期免费加入啦"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#六、前端算法集训营第一期免费加入啦"}},[e._v("#")]),e._v(" 六、前端算法集训营第一期免费加入啦")]),e._v(" "),a("p",[e._v("欢迎关注「前端瓶子君」，回复「算法」自动加入，从0到1构建完整的数据结构与算法体系！")]),e._v(" "),a("p",[e._v("在这里，瓶子君不仅介绍算法，还将算法与前端各个领域进行结合，包括浏览器、HTTP、V8、React、Vue源码等。")]),e._v(" "),a("p",[e._v("在这里，你可以每天学习一道大厂算法题（阿里、腾讯、百度、字节等等）或 leetcode，瓶子君都会在第二天解答哟！")])])}),[],!1,null,null,null);t.default=r.exports}}]);