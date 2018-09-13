//寄生组合继承:通过寄生方式，砍掉父类的实例属性，这样，在调用两次父类的构造的时候，就不会初始化两次实例方法/属性，避免的组合继承的缺点
function Cat(name) {
	Animal.call(this);
	this.name = name || 'Tom';
}

(function () {
	// 创建一个没有实例方法的类
	var Super = function () {};
	Super.prototype = Animal.prototype;
	//将实例作为子类的原型
	Cat.prototype = new Super();
	Cat.prototype.constructor = Cat; // 需要修复下构造函数
})();

// Test Code
var cat = new Cat();
console.log(cat.name);
console.log(cat.sleep());
console.log(cat instanceof Animal); // true
console.log(cat instanceof Cat); //true

// Abstract - Concrete
// this is our abstract class
var AbstractClass = function () {
	if (this.constructor === AbstractClass) {
		throw new Error('Cannot instanciate abstract class');
	}
};

// this is our abstract method
AbstractClass.prototype.someMethod = function () {
	throw new Error('Cannot call abstract method');
};

// this is our concrete class
var ConcreteClass = function () {
	AbstractClass.apply(this, arguments);
};

// let's inherit from abstract class
ConcreteClass.prototype = Object.create(AbstractClass.prototype, {
	'constructor': ConcreteClass
});

//******************
let VOLUME = 1000;

function Request(level) {
	this.level = level || 0;

	function getRequestLevel() {
		return this.level;
	}
}

Request.dicts = {}

function PriceRequest(id, key, value) {
	if (value < 0) {
		Request.apply(this, 1);
		return this;
	}
	Request.apply(this, 0);
	return this;
}

function VolumeRequest(id, key, value) {
	if (["l", "w", "h"].includes(key)) {
		if (Request.dicts.includes(id)) {
			Request.dicts[id][key] = value;
		}
		if (Request.dicts[id].includes("l") &&
			Request.dicts[id].includes("w") &&
			Request.dicts[id].includes("h")
		) {
			if (Request.dicts.id.l * Request.dicts.id.w * Request.dicts.id.h > VOLUME) {
				Request.apply(this, 1);
				return this;
			}
		}
	}
	Request.apply(this, 0);
	return this;
}

function TypeRequest() {
	Request.apply(this, 0);
	return this;
}

//***************Builder Pattern
function Builder() {
	return Request();
}

function PriceBuilder(line) {
	var fields = line.split(",");
	return PriceRequest(fields[0], fields[1], fields[2]);
}

function VolumeBuilder(line) {
	var fields = line.split(",");
	return VolumeRequest(fields[0], fields[1], fields[2]);
}

function Director(file) {
	var head = new PhoneHandle();
	head.setNext(new EmailHandle()).setNext(new MessageHandle());
	for (let line of file) {
		var fields = line.split(",");
		switch (fields[1]) {

		case "price":
			head.handleMessage(PriceBuilder(line));
			break
		case "l":
		case "w":
		case "h":
			head.handleMessage(VolumeBuilder(line));
			break;
		default:

		}
		line.includes("price")
	}
}

function Handle(level) {
	this.level = level || 0;
	var nextHandle = null;
	//每个处理者都必须对请求做出处理
	function handeMessage(request) {
		var response = null;
		//判断是否是自己的处理级别
		if (this.getHandlerLevel() == request.getRequestLevel()) {
			response = this.echo(request);
		} else { //不属于自己的处理级别
			//判断是否有下一个处理者
			if (this.nextHandler != null) {
				response = this.nextHandler.handleMessage(request);
			} else {
				//没有适当的处理者，业务自行处理
				return null;
			}
		}
		return response;
	}

	function setNext(handle) {
		nextHandle = handle;
		return nextHandle;
	}
}

Handle.prototype.getHandlerLevel = function () {
	return self.level;
};

Handle.prototype.echo = function () {
	throw new Error('Cannot call abstract method');
};

function EmailHandle(level = 1) {
	EmailHandle.apply(this, params);

	function echo(request) {
		// Send Email....
	}
}

function MessageHandle(level = 2) {
	MessageHandle.apply(this, params);

	function echo(reqeust) {
		// Send Message...
	}
}

function PhoneHandle(level = 3) {
	PhoneHandle.apply(this, params);

	function echo(request) {
		// Make call...
	}
}

function ExitHandle(level = 4) {
	ExitHandle.apply(this, params);

	function echo(request) {
		// exit.

	}
}