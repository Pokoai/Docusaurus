---
sidebar_position: 4
---

> 全文摘自：[zhuanlan.zhihu.com](https://zhuanlan.zhihu.com/p/195535424)

最近尝试回去使用 C 语言练练手感，但在做项目的时候就发现，我所理解的 C 语言跟真实的 C 语言差了十万八千里。

不得不说，C 使用习惯了，就混淆了其和 C 语言的 static 关键字。再加上在 C 中从来没有使用过 extern，所以也更加不会去正确使用。

问题就出在这里，C 语言的项目，大部分全局变量都由他们构成，所以你不能搞懂它俩，也就意味着你肯定不能够用 C 构建大项目的。

在知道这两关键字的根本的使用方式前，我们先来搞清楚下面几项，你会选择什么放在头文件(.h)中？

1. #define 宏定义
2. 全局变量
3. 函数声明
4. 函数定义

如果是几天前的我，除了 4 全部都放在头文件(.h)中。但是如果你是这样子做的话，那么你肯定会遇到一个坑，那就是 2 全局变量，你可以会遇到各种各样的错误。先看情况 1，编译报错。

```c
/* val.h */
#ifndef _VAL_H
#define _VAL_H

int a;

void func1();
void func2();

#endif

/* func1.c */
#include<stdio.h>
#include"val.h"

void func1(){
    a = 1;
    printf("func1, %d\n", a);
}

/* func2.c */
#include<stdio.h>
#include"val.h"

void func2(){
    a = 2;
    printf("func2, %d\n", a);
}

/* main.c */
#include<stdio.h>
#include"val.h"

int main(){
    func1();
    printf("main, %d\n", a);
    func2();
    printf("main, %d\n", a);
    return 0;
}

// 我们进行编译，会发现其编译会发生错误
gcc func1.c func2.c main.c -o main
/usr/bin/ld: /tmp/cc7eH8rb.o:(.bss+0x0): multiple definition of `a'; /tmp/ccAkzSnc.o:(.bss+0x0): first defined here
/usr/bin/ld: /tmp/cccCqCSc.o:(.bss+0x0): multiple definition of `a'; /tmp/ccAkzSnc.o:(.bss+0x0): first defined here
collect2: error: ld returned 1 exit status

```

这明摆着就是 a 被重定义了，那static的第一个作用就开始展示出来了，如果我们在上面 val.h 的 a 定义前加入 static 变量，他就能编译通过了。

```c
/* val.h */
static int a;
```

如果你学过c++那你一定和当时我想的一样，static 关键字可以让 a 重定义覆盖旧的 a。其实这样子说并不严谨，应该说 static 他可以做到限制变量，让他只能在当前文件可以读到。比如我们运行编译后的结果，你就能明白了。

```c
func1, 1
main, 0
func2, 2
main, 0
```

你可能马上恍然大悟，其实a他加上 static 变量之后，他不仅只有一个了，他分裂成三个了，每一个源文件(.c)都有一个自己的 a 变量，他看似是全局变量，却又不是全局变量，这就是 static 关键字的神奇之处。所以准确来说 static 变量如果你要放在头文件中，你就要做好出现每 include 一次，就多一个变量的情况。那如果 static 函数呢？效果跟变量一样。

```c
/* val.h */
/* 加入 void func3(){} 声明加定义然后编译 */
void func3(){}
/* 编译报错 */
/usr/bin/ld: /tmp/ccnx5kJX.o: in function `func3':
func2.c:(.text+0x0): multiple definition of `func3'; /tmp/ccPXbC3V.o:func1.c:(.text+0x0): first defined here
/usr/bin/ld: /tmp/cc3uhHcX.o: in function `func3':
main.c:(.text+0x0): multiple definition of `func3'; /tmp/ccPXbC3V.o:func1.c:(.text+0x0): first defined here
collect2: error: ld returned 1 exit status

/* 加入 static 关键字 */
static void func3(){}
/* 成功编译 */
```

如果看到这你肯定很兴奋，那如果是 static 关键字定义的呢？然后再其他源文件中实现呢?那恭喜你，你获得进阶了。这种时候，没有定义实现的源代码文件(.c)是不可能使用的。

```c
/* val.h */
/* 仅仅声明不定义 */
static void func3();

/* func1.c */
/* 加入 func3 的定义且 func1 调用 func3 */
void func1(){
    a = 1;
    printf("func1, %d\n", a);
   func3();
}

void func3(){
    printf("func3\n");
}

/* main.c */
int main(){
    func1();
    printf("main, %d\n", a);
    func2();
    printf("main, %d\n", a);
    func3();
    return 0;
}
/* 编译失败 */
In file included from main.c:2:
val.h:8:13: warning: ‘func3’ used but never defined
    8 | static void func3();
      |             ^~~~~
/usr/bin/ld: /tmp/ccCoTxSb.o: in function `main':
main.c:(.text+0x50): undefined reference to `func3'
collect2: error: ld returned 1 exit status
```

因为我们在 func1.c 中定义了 func3 所以调用的时候没有任何毛病，但是如果你想在 main.c 中调用的话，他也只能去找自己的 func3 却不会去寻找 func1.c 的func3，因为 static 关键字限定了其查找的范围只能在自己的源文件中，定义了就有，没有定义就没有。

所以如果你想要使用全局变量的话，我个人建议是在源文件(.c)中定义，这样子能够保证其在整个项目中只存在一个。所以这就引出另外一个问题，你说函数它能够声明，变量他又声明不了，其他源代码又怎么读取其他源代码的全局变量，所以这就是 extern 关键字要做的，我觉得他真的有点像让变量声明的意味在里面。我们可以回到第一个例子中，在a声明前加入 extern 关键字。

```c
/* val.h */
extern int a;
/* 编译报错 */
/usr/bin/ld: /tmp/ccHw2DQw.o: in function `func1':
func1.c:(.text+0x6): undefined reference to `a'
/usr/bin/ld: func1.c:(.text+0x10): undefined reference to `a'
/usr/bin/ld: /tmp/cc2nRCtv.o: in function `func2':
func2.c:(.text+0x6): undefined reference to `a'
/usr/bin/ld: func2.c:(.text+0x10): undefined reference to `a'
/usr/bin/ld: /tmp/cc8ryJwx.o: in function `main':
main.c:(.text+0x10): undefined reference to `a'
/usr/bin/ld: /tmp/cc8ryJwx.o:main.c:(.text+0x33): more undefined references to `a' follow
collect2: error: ld returned 1 exit status
```

其实明摆着，他跟 static 不同，他是不会定义变量的，他也只是声明某处有一个 a，如果你没有在某一个源文件(.c)中定义的话，就会出现链接错误。所以你要做的很简单，在某个源文件中定义 a 就行了。

```c
/* main.c */
int a;
/* 结果 */
func1, 1
main, 1
func2, 2
main, 2
```

看到这里，其实你也明白了 C 语言其实他并不是以整体编译作为目标的，而是以源文件(.c)作为单位，然后后面将所获得的信息进行统一整合。一旦他在某处寻找到了结果，他就不会去其他地方寻找，包括后续 include 却找不到头文件也是一个道理，他都是以当前源文件所在位置进行判断和查找的，所以你这样子思考 static 和 extern 关键字的作用也是很简单明了的。

回到一开始的选择题中，你会选择什么放在头文件(.h)中?

End...
