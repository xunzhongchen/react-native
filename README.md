# react-native
- 学习[资料]
- [官网]地址

## 移动端应用
### Native APP
    平台／系统       原生语言                   开发IDE
    IOS            Objective-C/Swift         Xcode
    Android        Java                      Android Studio
- 优势：
    1. 性能好 
    1. 体验佳
- 劣势：
    1. 学习成本
    1. 开发成本
    1. 维护成本

### Hybrid APP(混合开发)
    html+js      
    webView ->PhoneGap/Apache Cordova

- 优势：
    1. html+css+js开发成本低  
        比起原生语言，这三门的学习难度要低很多，各类资源极为丰富
    1. 天然跨平台  
    任何平台都离不开浏览器，也就少不了webview组建。在w3c标准日趋同意（HTML5）的今天，网页应用真正实现了“一次编写，随处执行”
    1. 无审核热更新  
    js作为动态解释运行的脚本语言，可以直接通过服务器下发后执行，从而实现绕过审核的热更新
    1. 可扩展  
    虽然js本身不具备硬件能力，但可以通过原生桥接的方式扩展，且这些扩展大多免费开源
- 劣势：
    1. 性能
    1. 性能
    1. 性能
### react-native | weex


#### [weex]
- 阿里巴巴公司与2016年6月开源的一种用于构建移动跨平台的UI框架
- 基于JS开发框架
- weex基于Vue.js
- slogan:Write Once Run Everywhere
#### [React Native]
- Facebook在2015年3月在F8开发者大会上开源的跨平台UI框架
- 基于JS开发框架
- 基于React.js 
- slogan:learn once write  anywhere

## 搭建开发环境

### mac OS

    需要安装                目的
        HomeBrew            macOS下的软件管理器，用它安装node
        Node/NPM            Node，用来在浏览器以外运行javascript，NPM是node的模块光利器，我们用它安装和管理node模块安装node时，npm被同时安装
        watchman            自动检测硬盘上文件的变化，从而实现自动重新打包app并运行的机制   
        RN CLI              React Native 的命令行工具，用来创建和管理React Native 项目
#### Ios
        需要安装                目的
        xcode               将我们自己写的代码和React Native库打包成一个app安装文件，并用ios模拟器安和运行这个文件

#### Android
        需要安装                目的
        JDK                 Java代码运行环境
        Android Studio      将我们自己写的代码和React Native库打包成一个app安装文件，并用Android模拟器安和运行这个文件    

### windows


## [样式]

### 常用样式
- ios 布局从顶部开始 android布局从状态栏之下开始布局
- 可以随意给一个组件任意的样式,使用jsx语法
- 组件的style属性不仅可以是对象,还可以是数组,数组元素是对象,权重向后递增
- 大多数我们不会在行内写样式，我们需要把样式抽离出来，可以使用StyleSheet接口，也是react-native推荐的方式,在react-native 底层优化过 会得到比较好的性能
- react-native 样式跟css很像,但还是有[区别]
- 介绍 padding border属性, 不支持组合写法  平台兼容属性
- 介绍 position display 属性
- 文字必须放在 [Text]组件中,介绍文字的样式,介绍[shadow]属性应用

### flex布局
[Flex布局教程]  
[css Flex]


## 屏幕和单位

    DPI         Dots Per Inch           每一英寸可以放置多少个点    android
    PPI         Pixels Per Inch         每一英寸存在多少个像素      ios

- 分辨率  
![分辨率]
- 尺寸  
![尺寸]
- ppi/dpi  
![ppi]
- 各种屏幕尺寸的设备
![phone]
- [设备像素比]

    同尺寸设备  
    同尺寸设备放置相同大小的图片  
    设备像素比  
    位图/矢量图  
    PixelRatio 接口  
- PT DP SP 

    设备在160dpi的时候,一个物理像素显示一个像素信息,(android开发者规范里面规定的) 

        160dpi，320*480的设备，横向显示320个像素信息，1dp=1px
        320dpi，720*1280的设备，横向显示360个像素信息，1dp=2px

        正常情况 PT=DP=SP

                ios     android
        长度    PT       DP
        字体    PT       SP

        备注:开发android应用 字体为大号字体 SP>DP

![sb]

### 一个卡片实例  
![card]

    




[weex]:https://weex.incubator.apache.org/cn/
[React Native]:https://facebook.github.io/react-native/
[样式]:https://facebook.github.io/react-native/docs/view-style-props.html#style
[Text]:https://facebook.github.io/react-native/docs/text.html
[shadow]:https://facebook.github.io/react-native/docs/shadow-props.html
[Flex布局教程]:http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html
[资料]:https://github.com/jondot/awesome-react-native
[官网]:https://facebook.github.io/react-native/
[css Flex]:./docs/css_flex.md
[分辨率]:./docs/image/fbl.png "分辨率"
[尺寸]:./docs/image/cc.png "尺寸"
[ppi]:./docs/image/ppi.png "ppi/dpi"
[phone]:./docs/image/phone.png "phone"
[设备像素比]:./docs/sbxsb.md
[sb]:./docs/image/sb.png "设备" 
[card]:./docs/image/card.png "卡片"
