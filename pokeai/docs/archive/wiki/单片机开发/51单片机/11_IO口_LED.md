---
position: 1
---

```c

// 头文件
#include <reg52.h>
#include <intrins.h>

// 类型重定义
typedef unsigned char u8;
typedef unsigned int u16;

// 管脚定义
#define LED P0

void main()
{
    u8 temp;
    temp = 0x01;  // led 高电平亮

    while (1) {
        LED = temp;
        delay_ms(500);
        temp = _crol_(temp, 1);
    }
}

```