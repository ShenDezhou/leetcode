#TITLE:AWS面试
#AUTHOR: SHEN DEZHOU
#ORG: Tsinghua University
#DATE: 2018-9-11

#0.前言
ref: https://maimai.cn/article/detail?fid=731898823
src: https://github.com/hehonghui/Java-23-Design-Patterns/tree/master/src
1.单例模式（Singleton Pattern）确保某一个类只有一个实例，而且自行实例化并向整个系统提供这个实例。  
2.工厂模式 定义一个用于创建对象的接口，让子类决定实例化哪一个类。工厂方法使一个类的实例化延迟到其子类。工厂方法则重点是创建，创建零件是它的主要职责，组装顺序则不是它关心的。   
3.抽象工厂模式  创建一组相关或相互依赖的对象提供一个接口，而且无须指定它们的具体类。  
4.模板方法模式  定义一个操作中的算法的框架，而将一些步骤延迟到子类中。使得子类可以不改变一个算法的结构即可重定义该算法的某些特定步骤。
5.建造者模式  将一个复杂对象的构建与它的表示分离，使得同样的构建过程可以创建不同的表示。 建造者模式最主要的功能是基本方法的调用顺序安排，这些基本方法已经实现了，顺序不同产生的对象也不同；  
6.代理模式  为其他对象提供一种代理以控制对这个对象的访问。  


普通代理：在该模式下，调用者只知代理而不用知道真实的角色是谁，屏蔽了真实角色的变更对高层模块的影响，真实的主题角色想怎么修改就怎么修改，对高层次的模块没有任何的影响，只要你实现了接口所对应的方法，该模式非常适合对扩展性要求较高的场合。


强制代理：强制代理的概念就是要从真实角色查找到代理角色，不允许直接访问真实角色。高层模块只要调用getProxy就可以访问真实角色的所有方法，它根本就不需要产生一个代理出来，代理的管理已经由真实角色自己完成。


7.原型模式  用原型实例指定创建对象的种类，并且通过拷贝这些原型创建新的对象。  
8.中介者模式  用一个中介对象封装一系列的对象交互，中介者使各对象不需要显示地相互作用，从而使其耦合松散，而且可以独立地改变它们之间的交互。
9.命令模式  将一个请求封装成一个对象，从而让你使用不同的请求把客户端参数化，对请求排队或者记录请求日志，可以提供命令的撤销和恢复功能。
10.责任链模式  使多个对象都有机会处理请求，从而避免了请求的发送者和接受者之间的耦合关系。将这些对象连成一条链，并沿着这条链传递该请求，直到有对象处理它为止。

11.装饰模式  动态地给一个对象添加一些额外的职责。就增加功能来说，装饰模式相比生成子类更为灵活。
12.策略模式  定义一组算法，将每个算法都封装起来，并且使它们之间可以互换
13.适配器模式  将一个类的接口变换成客户端所期待的另一种接口，从而使原本因接口不匹配而无法在一起工作的两个类能够在一起工作。

14.迭代器模式  它提供一种方法访问一个容器对象中各个元素，而又不需暴露该对象的内部细节。
15.组合模式  将对象组合成树形结构以表示“部分-整体”的层次结构，使得用户对单个对象和组合对象的使用具有一致性。
16.观察者模式  定义对象间一种一对多的依赖关系，使得每当一个对象改变状态，则所有依赖于它的对象都会得到通知并被自动更新。
17.门面模式  要求一个子系统的外部与其内部的通信必须通过一个统一的对象进行。门面模式提供一个高层次的接口，使得子系统更易于使用。
18.备忘录模式  在不破坏封装性的前提下，捕获一个对象的内部状态，并在该对象之外保存这个状态。这样以后就可将该对象恢复到原先保存的状态。
19.访问者模式  封装一些作用于某种数据结构中的各元素的操作，它可以在不改变数据结构的前提下定义作用于这些元素的新的操作。  
● 一个对象结构包含很多类对象，它们有不同的接口，而你想对这些对象实施一些依赖于其具体类的操作，也就说是用迭代器模式已经不能胜任的情景。

● 需要对一个对象结构中的对象进行很多不同并且不相关的操作，而你想避免让这些操作“污染”这些对象的类。
20.状态模式  当一个对象内在状态改变时允许其改变行为，这个对象看起来像改变了其类。
21.解释器模式  给定一门语言，定义它的文法的一种表示，并定义一个解释器，该解释器使用该表示来解释语言中的句子。
22.享元模式  使用共享对象可有效地支持大量的细粒度的对象。
23.桥梁模式  将抽象和实现解耦，使得两者可以独立地变化。


#0.1 按类型划分
ref: https://en.wikipedia.org/wiki/Design_Patterns
##0.1.1 Creational
Creational patterns are ones that create objects for you, rather than having you instantiate objects directly. This gives your program more flexibility in deciding which objects need to be created for a given case.  

Abstract factory pattern groups object factories that have a common theme.
Builder pattern constructs complex objects by separating construction and representation.
Factory method pattern creates objects without specifying the exact class to create.
Prototype pattern creates objects by cloning an existing object.
Singleton pattern restricts object creation for a class to only one instance.

##0.1.2 Structural
These concern class and object composition. They use inheritance to compose interfaces and define ways to compose objects to obtain new functionality.

Adapter allows classes with incompatible interfaces to work together by wrapping its own interface around that of an already existing class.
Bridge decouples an abstraction from its implementation so that the two can vary independently.
Composite composes zero-or-more similar objects so that they can be manipulated as one object.
Decorator dynamically adds/overrides behaviour in an existing method of an object.
Facade provides a simplified interface to a large body of code.
Flyweight reduces the cost of creating and manipulating a large number of similar objects.
Proxy provides a placeholder for another object to control access, reduce cost, and reduce complexity.

##0.1.3 Behavioral
Most of these design patterns are specifically concerned with communication between objects.

Chain of responsibility delegates commands to a chain of processing objects.
Command creates objects which encapsulate actions and parameters.
Interpreter implements a specialized language.
Iterator accesses the elements of an object sequentially without exposing its underlying representation.
Mediator allows loose coupling between classes by being the only class that has detailed knowledge of their methods.
Memento provides the ability to restore an object to its previous state (undo).
Observer is a publish/subscribe pattern which allows a number of observer objects to see an event.
State allows an object to alter its behavior when its internal state changes.
Strategy allows one of a family of algorithms to be selected on-the-fly at runtime.
Template method defines the skeleton of an algorithm as an abstract class, allowing its subclasses to provide concrete behavior.
Visitor separates an algorithm from an object structure by moving the hierarchy of methods into one object.


#1.Question
输入有很多文件，都是这种格式：
产品ID, 属性。
属性可能是：价格，体积，类别等等，有很多
然后这批输入会有错误，要做的是检测出这些错误：
    比如价格<0的， 如果错误条数占总量的1/3以上，整个文件都不采纳
    体积长*宽*高大于一定值的，也是错误量占到文件的某个阈值就拒掉整个文件
    这些条件可以随意组合，比如找出某个类别的价格<0的条数占比。
然后这些错误有不同的级别，严重的要打电话，或者发邮件，后者短信等等
#1.Answer
看了一下午设计模式，可以考虑使用责任链模式来解。

一是定义一个请求的处理方法handleMessage，唯一对外开放的方法；

二是定义一个链的编排方法setNext，设置下一个处理者；

三是定义了具体的请求者必须实现的两个方法：定义自己能够处理的级别getHandlerLevel和具体的处理任务echo。

链中节点数量需要控制，避免出现超长链的情况，一般的做法是在Handler中设置一个最大节点数量，在setNext方法中判断是否已经是超过其阈值，超过则不允许该链建立，避免无意识地破坏系统性能。
