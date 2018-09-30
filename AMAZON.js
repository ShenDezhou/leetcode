输入有很多文件， 都是这种格式：
产品ID, 属性。
属性可能是： 价格， 体积， 类别等等， 有很多
然后这批输入会有错误， 要做的是检测出这些错误：
比如价格 < 0 的， 如果错误条数占总量的1 / 3 以上， 整个文件都不采纳
体积长 * 宽 * 高大于一定值的， 也是错误量占到文件的某个阈值就拒掉整个文件
这些条件可以随意组合， 比如找出某个类别的价格 < 0 的条数占比。
然后这些错误有不同的级别， 严重的要打电话， 或者发邮件， 后者短信等等


A： 一面是两道算法提， 一道设计题
算法1， 判断一颗二叉树是左右对称的。(考递归的写法)
算法2， 求第K大的数(解法有多种， 我用的是快排的思路)
设计题， 设计一个订单cancel后通知用户的逻辑。(我回答的是整个系统的设计， 给出了一个分布式的方案。 其实面试官期望的是用观察者模式来解决这个小问题。)

算法1， 判断一颗二叉树是左右对称的。(考递归的写法)
算法2， 求第K大的数
设计题， 设计一个订单cancel后通知用户的逻辑。


亚马逊一面题： 两个问题， 一个是生成新数组， 新的数字是原数组所有数字(除了对应数字) 的积。 还有一个是设计查询用户浏览过的页面的系统

Amazon一面结束， 3 个问题， 一个是字符串全排列， 一个是对称二叉树的判断， 设计题是： 棋盘棋子抽象属性的问题


B： 一个是判断是否平衡二叉树。
第二个是最小路径的。 等边三角形， 第一行1个数字， 第二行2个数字， 第N行n个数字， 下面一行的数字只跟上面一行相邻的两个有路径。 求从第1层到第n层路径的数字最小和。
设计一个在线订餐系统


Amazon CN Hiring Test 2013 #2Back to Question List Time Remaining: 01:52:53
 Question 1 / 2 (Question)Tom needs to finish 'n' books within time constraint given (time: 't' minutes). It takes a[i] minutes to finish i-th book. Tom needs to pick a starting book (j, 0 < j <= n) from the selection given, starting from j, j + 1, j + 2, ..., n.For example,
	if the book requires 4 minutes to read, but time remaining is at 3 minutes, Tom can 't finish reading the book). Tom is also required to take 1 minute break for every consecutive 10 minute reading. What is the maximum number of books can Tom read? For example, if there are 4 books to read, the time spent for each book is 3, 1, 2, 1 minute respectively. Given Tom 5 minutes, he could only read 3 books starting from 2nd book.

	===
	=== === === === === === === === === === === === === === === === === === === === === =

	Instruction:

	Implement a
function (getNumOfPaperToRead) to
return the result based on input parameters.

Note: based on the programming langurage, parameter "n"
may not be present or in a different form(size / length of a[]).

	===
	=== === === === === === === === === === === === === === === === === === === === === =
	Pick your language C C++Java PHP Python C# Ruby Perl 19 int getNumOfPaperToRead(vector < int > a, int t, int j) {
		20 21 22 23
	}






Amazon CN Hiring Test 2013 #2Back to Question List Time Remaining: 01:51:06
 Question 2 / 2 (How many ways?)Ming is a delivery boy. He starts from point (0, 0) and finishes at destination (n, m). He could only move one step toward one direction at a time. That is, if he is at point (x, y), he could only move to (x-1, y), or (x+1, y) or (x, y-1), or (x, y+1), where 0 <= x < height, 0 <= y < width.If there is any point(ai, bj) equal to 1, he could not go through.How many SHORTEST PATH are there from starting point ?

	For example, the map is

A[1] - > 0 0 0

A[0] - > 0 0 0

This matrix in paremeter will be[0, 0, 0, 0, 0, 0]

height = 2, width = 3, m = 1, n = 1.

The expected
return value is 2.



Another example, the map is

A[3] - > 0 0 0 1 0

A[2] - > 0 0 1 0 0

A[1] - > 1 1 0 0 0

A[0] - > 0 0 0 1 0

This matrix in paremeter will be[0, 0, 0, 1, 0, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0]

height = 4, width = 5, m = 2, n = 3

The expected
return value is 1.



Note: since interview street system only support 1 dimension array, the input parameter will be matrix_into_array_with_road_blocker[], matrix_height, matrix_width, m, n.You can cut matrix_into_array_with_road_blocker[] into 2 - dimension by yourself.

以上是Amazon的2道算法题
tom需要按顺序读书， 读完每本书的时间不同（ 1， 4， 10， 5...）tom每连续读十分钟的书就要休息一分钟， 问tom从第j本书开始读， 然后在规定的时间内最多可以读几本
会问hash 写写字符串反转的程序

hashmap 必然要问
韩利豪 - php百度 13: 50: 40
会问hash 写写字符串反转的程序

hashmap 必然要问
而且要写程序

悄悄告诉你今天的题吧： 1. 计算区间交集、 并集； 2. 赌博求收益

题目我没有记下来呢， 一个是类似按顺序输出数组， 另一个类似于爬山算最后爬的总数。


第一轮

OO Design 一个纸牌游戏管理系统。

纸牌游戏有各种属性， 比如盒子大小， 供几个人玩， 各种玩法
每个纸牌游戏放到一堆柜子的其中一个的某一层上。

要求便于按属性检索到纸牌游戏。
上面的场景会从单进程扩展到数据库系统， 会不断加新需求问如何实现。
主要考察的是设计模式

第二轮

系统设计

一个第三方系统， 用来查询汽车摇号记录（ 通过北京摇号查询系统提供的web service）， 用户上传查询文件， 文件内有批量提供的查询关键字（ 可以认为是一堆名字）， 系统返回一堆查询结果（ 是否摇中）， 给出系统设计。
会根据你的设计方案进行提问。

购物网站用户浏览记录功能的系统设计。 会根据方案进行提问

第三轮

多线程并发访问某数据， 要求写出可执行的代码（ 考察会不会加锁）
shuffle算法
lcs算法

第四轮

bar raiser

从零开始设计餐馆点餐系统， 记住这个不是面向对象设计， 也不是系统设计
要求cover系统的方法面面， 包括采购机器， 系统架构、 分工部署、 系统演化等都涉及

我开始理解的有问题， 和面试官沟通也不太明白他到底想让我说什么， 感觉像是所有东西都要考虑。

第五轮

hire manager

考了我3个算法题， 我都说之前做过了（ 逆波兰表示法求值、 最大子序列、 英文打印数字）

估算北京四环一天有多少辆车经过（ 合理假设、 思路要清晰）， 英文回答

遇到的最难解决的技术问题， 如何解决的

问简历问题