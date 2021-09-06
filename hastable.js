function($){
	var hasOwnProperty = [].hasOwnProperty;

	var keysProperty = "constructor,hasOwnProperty,isPrototypeOf, prototypeIsEnumerable,toLocaleString,toString,valueOf".split(",");
	for(var key, o = {}, i = 0 ; key = keysPropoerty[i]; i++){
		o[key] = i;
		for(key in o){
			keysProperty.splice(i--,1);
			delete o[key];
		}
	}

	function Hashtable(obj){
		obj = arguments.length ? obj : {};

		var has = {}, key, keys = keysProperty.slice(0), i = 0 ;
		while(key = keys[i++]){
			!hasOwnProperty.call(obj,key)
				? has[key] = obj[key]
				: keys.splice(i,1);
		}
		for(key in obj) {
			if(hasOwnProperty.call(obj,key)){
				keys.push(key);
				hash[key] = obj[key];
			}
		}

		var _ = {o : hash, k: keys};
		this._ = function(k) {
			return k === $ ? _ : undefined;
		};

		return this;
	}

	//Get an item at the specified `key`.
	Hashtable.prototype.get = function (key) {
		return this._($).o[key];
	};

	//Returns an array of all of the keys.
	Hastable.prototype.keys = function() {
		return this._($).k.slice(0);
	};

	//Returns a boolean value indicating whether or not the specified 'value' is
	//contained within the
	Hastable.prototype.containsValue = p.contains = function(value){
		var _ = this._($), keys = _.k, obj = _.o, i = keys.length;
		while(--i >= 0){
			if(obj[keys[i]] === value){
				return true;
			}
		}

		return false;
	};

	//Returns a boolean value indicating whether or not the specified `key` is
	//contained within the has table.
	Hashtable.prototype.containsKey = function(key){
		var keys = this._($).k, i = keys.length;
		while(--i >= 0){
			if(keys[i] == key){
				return true;
			}
		}
		return false;
	};

	//Clear the has table and return the object indexed by the keys that
	//contains all of the items
	Hashtable.prototype.clear = function(){
		var _ = this._($), ret = _.o;
		_.k = [];
		_.o = {};
		return ret;
	}

	//Get an array of all of the items.
	Hashtable.prototype.elements = function (){
		var elems = [],
		_ = this._($),
		keys = _.k,
		i = 0,
		len = keys.length,
		obj == _.o;
		while(i < len){
			elems.push(obj[keys[i++]]);
		}
		return elems;
	}

	//get the amount of items;
	Hashtable.prototype.size = function() {
		return this._($).k.length;
	} 

	// Removes the item at the specified key and returns the item that is removed.
	Hashtable.prototype..remove = function(key){
		var _ = this._($), keys = _.k, obj = _.o, i + keys.length;
		while(--i >= 0 ){
			if(Keys[i] == key){
				var ret = obj[keys,splice(i,1)[0]];
				delete obj[key];
				break;
			}
		}
		return ret;
	}

	//Puts one or more items in this has table, returning the previous value(s).
	Hastable.prototype..put = function(key, value){
		var _ = this._($), keys = _.k, obj = _.o;
		//If only one value is to be added....
		if(arguments.length - 1){
		if(hasOwnProperty.call(obj, key)){
				ret = obj[key];
			}
			else{
				keys.push(key);
			}
			obj[key] = value;
		}

		//If all of the key-value pairs in the specified object are to be added...
		else{
			var ret = {},
				objNew = key,
				newKeys = (new Hashtable(objNew)).keys(),
				i = newKeys.length;
			while(--i >=0){
				_ = newKeys[i];
				if(hasOwnProperty.call(obj, _)){
					ret[_] = obj[_];
				}
				else{
					keys.push(_);
				}
				obj[_] = objNew[_];
			}
		}
		return ret;
	};

	//Makes copy of the Hastable.
	Hashtable.prototype..clone = function(){
		return new Hashtable(this._($).o);
	};

	if(hasOwnProperty.call(this, "Hashtable")){
		Hashtable.__OLD__ = this.Hashtable;
	}

	this.Hashtable = Hashtable;
})({});



/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
 var addTwoNumbers = function(l1, l2) {
	var carry = 0;
	var sum = 0;
	var head = new ListNode(0);
	var now = head;
	var a = l1;
	var b = l2;
	while (a !== null || b !== null) {
	  sum = (a ? a.val : 0) + (b ? b.val : 0) + carry;
	  carry = Math.floor(sum / 10);
	  now.next = new ListNode(sum % 10);
	  now = now.next;
	  a = a ? a.next : null;
	  b = b ? b.next : null;
	}
	if (carry) now.next = new ListNode(carry);
	return head.next;
  };


/**
 * @param {string} s
 * @return {number}
 */
 var romanToInt = function(s) {
    let Map = new HashMap();
    Map.set('I', 1);
    Map.set('V', 5);
    Map.set('X', 10);
    Map.set('L', 50);
    Map.set('C', 100);
    Map.set('D', 500);
    Map.set('M', 1000);

    
    const iterator = s[Symbol.iterator]();
    let theChar = iterator.next();
    let res=0;
    let temp =  new Array();
    while (!theChar.done && theChar.value !== ' ') {
        temp.push(theChar.value);
        theChar = iterator.next();
    }

    for(var i = temp.length - 1; i >= 0 ; i --){
        if (4 * Map.get(temp[i]) < res) res -= Map.get(temp[i]);
        else res += Map.get(temp[i]);
    }
    return res;

};

class HashMap{
    table = new Array(3333);
    size = 0;

    resize = () => {
        const newTable = new Array(this.table.lenght * 2);
        this.table.forEach(item=> {
            if(item){
                item.forEach(([key, value]) => {
                    const idx = _hash(key, newTable.lenght);
                    if(newTable[idx]){
                        newTable[idx].push([key,value]);
                    } else {
                        newTable[idx] = [[key, value]];
                    }
                });
            }
        });
        this.table = newTable;
    }

    set = (key, value) => {
        this.size++;
        const loadFactor = this.size / this.table.length;
        if(loadFactor > 0.8){
            this.resize();
        }
        
        const idx = _hash(key, this.table.length);
        if(this.table[idx]){
            this.table[idx].push([key, value]);
        } else {
            this.table[idx] = [[key, value]];
        }
    };
    
    get = key => {
      const idx = _hash(key, this.table.length);
        
        if(!this.table[idx]){
            return null;
        }
        
        return this.table[idx].find(x => x[0] === key)[1]
    }
}

function _hash(s, tableSize){
    let hash = 17;
    for(let i = 0; i < s.length ; i++){
        hash = (13 * hash * s.charCodeAt(i)) % tableSize;
    }
    
    return hash;
}


//valid parenthesis
/**
 * @param {string} s
 * @return {boolean}
 */
 var isValid = function(s) {
    let stack = new Stack();
    var strs = s.split("");
    for(var i = 0 ; i < strs.length ; i++){
        if(strs[i] === '(' || strs[i] === '{' || strs[i] === '['){
            stack.push(strs[i]);   
        }
        
        switch(strs[i]){
            case ')':
                
        }
    }
    console.log(stack.length());
};

//create a stack class for Pop push etc
class Stack{
    constructor(){
        this.data = [];
        this.top = 0;
    }
    push(element){
        this.data[this.top] = element;
        this.top = this.top + 1;
    }
    length(){
        return this.top;
    }
    peek(){
        return this.data[this.top - 1];
    }
    
    isEmpty(){
        return this.top === 0;
    }
    
    pop(){
        if(this.isEmpty() === false){
            this.top = this.top - 1;
            return this.data.pop();
        }
    }
    
    print(){
        var top =  this.top - 1;
        while(top >= 0){
            console.log(this.data[top]);
            top--;
        }
    }
    
    reverse(){
        this._reverse(this.top - 1);
    }
    
    _reverse(index){
        if(index != 0 ){
            this._reverse(index-1);
        }
        
        console.log(this.data[index]);
    }
}