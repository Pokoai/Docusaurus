---  
position: 10
---

> 文字介绍部分摘自：http://c.biancheng.net/cpp/html/1946.html

SPI: Serial Peripheral Interface，串行外围设备接口。

SPI 是一种高速的、全双工、同步通信总线，标准的 SPI 也仅仅使用 4 个引脚，常用于单片机和 EEPROM、FLASH、实时时钟、数字信号处理器等器件的通信。

SPI 通信原理比 I2C 要简单，它主要是主从方式通信，这种模式通常只有一个主机和一个或者多个从机，标准的 SPI 是 4 根线，分别是 SSEL（片选，也写作 SCS）、SCLK（时钟，也写作 SCK）、MOSI（主机输出从机输入Master Output/Slave Input）和 MISO（主机输入从机输出 Master Input/Slave Output）。

SSEL：从设备片选使能信号。如果从设备是低电平使能的话，当拉低这个引脚后，从设备就会被选中，主机和这个被选中的从机进行通信。

SCLK：时钟信号，由主机产生，和 I2C通信的 SCL 有点类似。

MOSI：主机给从机发送指令或者数据的通道。

MISO：主机读取从机的状态或者数据的通道。

在某些情况下，我们也可以用 3 根线的 SPI 或者 2 根线的 SPI 进行通信。比如主机只给从机发送命令，从机不需要回复数据的时候，那么 MISO 就可以不要；而在主机只读取从机的数据，不需要给从机发送指令的时候，那 MOSI 就可以不要；当一个主机一个从机的时候，从机的片选有时可以固定为有效电平而一直处于使能状态，那么 SSEL 就可以不要；此时如果再加上主机只给从机发送数据，那么 SSEL 和 MISO 都可以不要；如果主机只读取从机送来的数据，SSEL 和 MOSI 都可以不要。

在时序上，SPI 是不是比 I2C要简单的多？没有了起始、停止和应答，UART 和 SPI 在通信的时候，只负责通信，不管是否通信成功，而 I2C却要通过应答信息来获取通信成功失败的信息，所以相对来说，UART 和 SPI 的时序都要比 I2C简单一些。

```c

// 头文件
#include <reg52.h>
#include <intrins.h>

// 类型重定义
typedef unsigned char u8;
typedef unsigned int u16;

// 管脚定义
#define LED P0  

// 全局变量
bit flag; 





void main()
{
    timer1_init();
    uart_init();

    send_string("Hello, PC");
    while (1);
        
}

```
