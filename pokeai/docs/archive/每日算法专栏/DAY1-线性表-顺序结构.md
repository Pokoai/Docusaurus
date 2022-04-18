---
sidebar_position: 1
---

> C 语言实现

1. 定义数据结构

因为是顺序结构，所以用数组来装值。另外再设置一个元素个数变量，记录数组里装了多少个值，也为部分函数的实现提供方便。

两个变量可以通过 c 的结构体包装起来。

```C

#define MAXSIZE 100 // 数组最大容量
typedef int ElemType; // 定义元素类型

// 构建顺序结构线性表的存储结构
typedef struct {
    ElemType arry[MAXSIZE]; // 数组
    int length; // 元素个数
} SqList;

```

2. 初始化

实现自定义的结构前，需要初始化。数组没有东西需要一开始设定的，而元素个数 length 需要设为 0。

```C

//初始化时要改变外面送进来的 L 的值 length, 在函数内部修改后，要让外部的值随之改变，就需要将外部 L 的地址送进来，而非 L 值本身。L 的地址即指向 L 的指针。

void Init(SqList * L)
{
    L->length = 0;
}

```

3. 判空、判满、元素个数

这三个部分是为了后续重要的函数打辅助用的，后续直接调用。

很简单，「空、满」直接比较 length 与 0 和 MAXSIZE 的关系即可；个数就更直观了。

```C

bool IsEmpty(SqList L) // 注意这里没有加 *，因为函数不改变外部的 L
{
    return (L.length == 0);
}

bool IsFull(SqList L)
{
    return (L.length == MAXSIZE);
}

int Length(SqList L)
{
    return L.length;
}

```

4. 增删改查

这四步是定义一个新数据结构最基本的构成部分，有了这四个地基，就很容易将自定义的数据结构用起来了。

后续我们要讲述的其他数据结构类型，都是按照这个模式来，我总结了一个口诀送给大家**「初空满个，增删改查，取遍清」**。

- 增加元素

```C

bool insert(SqList * L, int pos, ElemType e)
{
    // 数组已满
    if (isFull(*L)) {
        printf("数组已满！");
        return false;
    }
        
    // pos 异常检查
    if (pos < 0 || pos > MAXSIZE-1) {
        printf("插入位置异常！");
        return false;
    }

    // 首先将后部分元素均往后移动一位
    if (pos < L->length) { // 不包含最后一个位置
        for (int i = L->length-1; i >= pos; i--) {
            L->array[i+1] = L->array[i];
        }
    }
    L->array[pos] = e; // 插入
    
    // 更新 length
    L->length++;

    return true;
        
}

```

- 删除

```c

// 删除指定位置的元素，存入 e 中
bool delete(SqList * L, int pos, ElemType * e) 
{
    //数组为空异常
    if( isEmpty(*L) ) {
        puts( "数组为空！" );
        return false;
    }

    //pos 异常处理
    if( pos < 0 || pos >= L->length) {
        puts("删除位置错误！");
        return false;
    }

    //取出要删除的值
    *e = L->array[pos];

    //如果删除的是最后一个元素，就不用移动覆盖，直接 length 减一即可
    if( pos != L->length - 1 ) {
        for( int i = pos + 1; i < L->length; i++ ) {
            L->array[i-1] = L->array[i];
        }
    }

    L->length--;

    return true;
}

```

- 修改

```

1. 取、遍、清



2. main 函数测试


