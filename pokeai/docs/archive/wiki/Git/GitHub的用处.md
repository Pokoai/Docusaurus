---
slug: /github
sidebar_position: 10
---

:::note

待修改

:::

> 参考：[怎样使用 GitHub？文科妹子写的 Github 入门教程](https://juejin.cn/post/6844903428053811208)

## 1 寻找资料
## 
### - 搜索技巧


在name中搜索
```
in:name stars:>5000 forks:>3000

如：in:name 仿微信 stars:>5000 forks:>3000
```


按照README来搜索
```
in:readme 微信 stars:>3000 forks:>3000
```


按照descriptin搜索
```
in:description 微服务 language:python pushed:>2020-01-01
```


**总结**
我们想要进行精准搜索，无非就是增加筛选条件。
> in:name xxx // 按照项目名搜索

> in:readme xxx // 按照README搜索

> in:description xxx // 按照description搜索

那么在这里面呢，我们又可以增加筛选条件
> stars:>xxx // stars数大于

> xxxforks:>3000 // forks数大于

> xxxlanguage:xxx // 编程语言是

> xxxpushed:>YYYY-MM-DD // 最后更新时间大于YYYY-MM-DD



### - awesome-xxx：探索可能性
在Github上，有一些**前人总结整理好的宝库，比如Awesome-xxx 系列**。
**只要有一定知识广度的领域、语言、框架等，都有自己的 awesome-xxx 系列的项目**，如 awesome-python, awesome-iot, awesome-react 等等。在这样的项目里，都以一定的知识体系整理出来的，从索引和查阅上也相应的更为方便。如果你想学习一些新的东西，进入一个新的领域，那就搜索 awesome xxx 吧。


awesome这个单词表示的棒极了一类意思，如果你在Github中搜索awesome + xxxg关键词，你就能搜索这个关键词的资源大全，比方说：
awesome python
awesome go
awesome linux
你就会发现关于这些东西的学习资料真的是一大堆一大堆的。无论是书籍资源，库资源，还是学习视频、学习笔记，应有尽有。**会了这个技能你再也不用到处求学习资源了**。


比如说如果你还不够了解github如何使用，你可以搜索awesome github
![](https://cdn.nlark.com/yuque/0/2020/jpeg/1730795/1597559911831-92cf7ec1-b322-409d-8d0e-8c421fe9d65d.jpeg#height=824&id=BL8Nd&originHeight=309&originWidth=720&originalType=binary&ratio=1&size=0&status=done&style=none&width=1920)
### 
### - 学习资源
**GitHub 上拥有大量的学习资源**，从**各类文章到各种笔记，**还有各**式各样的电子书**。如：

- 搜索： 类型 + 笔记，如 操作系统 笔记 就能找到一些操作系统相关的笔记。
- 搜索： 书名， 就能找到一些和这本书相关的资源，如 重构 改善既有代码的设计。

​

GitHub 上还可以搜索到各种 **未经授权 的英文书籍的翻译**，或是**各种电子书的 PDF 版**。还有一些库，可以提供相应的学习资源，如 free-programming-books-zh_CN，即免费的编程中文书籍索引。
与此同时，Github上不乏简单的新手项目，实践练手再好不过。
​

[ZKEACMS](https://github.com/SeriaWei/ZKEACMS)：一个可视化设计的CMS系统（内容管理系统）。页面布局是可以直接在线设计，页面也是可以在线设计，编辑的，模板是可以直接在线编辑的，样式还可以可视化直接编辑，内容板块可以直接从现有板块中快速添加。是一个非常适合新手跟进的优质项目。
​

[ textgenrnn](https://github.com/minimaxir/textgenrnn)：一款基于 Keras/TensorFlow 的 Python 3 模块，可以用来创建字符级的循环神经网络。
​

[JEESNS](https://github.com/zchuanzhao/jeesns/)：一款基于JAVA企业级平台研发的社交管理系统，依托企业级JAVA的高效、安全、稳定等优势，开创国内JAVA版开源SNS先河。数据库使用MYSQL，全部源代码开放。


## 2 找轮子
比方说当你想采集某个网站的时候，你可以在Github里面搜「网站名称 +Scrapy」，如果搜不到可以搜「网站名称+采集」，还可以搜「网站名称+Python」等等。
如果你想做一个仿大众点评的App，那么你在Github上搜「仿大众点评」，你就能快速找到别人做的一个大众点评项目，拿来几乎可以直接用了，想一想这节省了你多少时间？
有时候你找不到，可能仅仅是你关键词弄得不对，记得换一换关键词，比如说英文搜索，拼音搜索，大多时候就能搜到了
## 
## 写文档神器
身为科研狗、产品狗、射鸡湿的你，是不是经常写文档？一个成熟的文档可能会有好几个版本，需要不断地迭代，然后不断提交给老板看哪里需要修改。在不同版本间自如切换就要用到git branch和git rebase了。
想想看，用 git 的分支管理不比拷贝粘贴更方便吗？


## 科研项目及数据
较早的arXiv、PLoS之外，较有气象的可以推荐mendeley、开放期刊目录
教育方面：
OpenStudy：一个社会性学习网络，通过互助来更好地学习，主题涉及到计算机、数学、写作等。
openhatch: 通过练习、任务等帮助新手更好地进入开源社区
​

## 3 学习编程
用github来学习编程,这个我确实还没有发现应该怎么好好利用,我觉得最主要的原因就是这里面所有的代码都是可以直接获取到的,而且**带有代码作者的提交记录**,**如果感兴趣的话,你可以一个commit一个commit的查看作者写成整个项目的过程,这个应该会对初学者有很大的帮助吧**,可能会对为什么整个项目是现在这个架构或形式有一定的了解.
我用github的时间也不是很长,大约一年. 对github的认识就是, 它就是一个大宝库,想要的任何东西几乎都可以在github上找到.
​

## 4 关注牛人 了解科技动态
我使用github是从关注一些人开始的.通过这些人的 star fork follow 活动,我就可以知道一些我没有follow过的人,然后我再去看这些我没有看过的人的项目,然后我又发现了一些有趣的项目,我觉得这个作者 对我很有帮助,所以我follow一下,不断的通过这种 follow项目作者的行为,我知道了非常多的人.同时也找到了非常多有意思的项目.
每天看这些人的star fork follow活动,你真的可以知道现在的技术趋势是朝向什么方向发展的,或者这一段时间什么项目最火.
如果对某个项目有兴趣的话,可以直接clone下来,看一看代码的整体是什么样的,不一定完全看懂,但是看多了,就知道大牛们大体都是怎么写代码的.对自己的好处不言而谕.


## 5 存储配置文件 助力系统重装
我使用github和别人协作的机会没有多少,基本都是我自己在用,存放自己的一些项目.
再一个作用就是存放自己的配置文件了,到重装系统或者到其它的机器上,直接clone一下,自己的配置就全部回来了.
​

## 6 托管博客
还有一个作用就是托管博客了, github的 jekyll 很好用,也很省心.


## 7 提交request
每个项目作者一般都会在README文档中有一项 `contribute`,这里面会说明你应该怎样贡献代码或者其它东西. 另外,为一个项目做贡献不一定要直接贡献代码才算,可以检查项目的文档错误,或者在对整个项目有了解的情况下,给项目作者提 `feature request`







