 static Node reverse(Node head) {
        if(head == null) {
            return head;
        }
  
        // last node or only one node
        if(head.next == null) {
            return head;
        }
  
        Node newHeadNode = reverse(head.next);
  
        // change references for middle chain
        head.next.next = head;
        head.next = null;
  
        // send back new head node in every recursion
        return newHeadNode;
    }

function reverse(head) {
  let node = head,
      previous,
      tmp;

  while (node) {
    // save next before we overwrite node.next!
    tmp = node.next;

    // reverse pointer
    node.next = previous;

    // step forward in the list
    previous = node;
    node = tmp;
  }

  return previous;
}


// Java program to find n'th node in linked list

class Node {
	int data;
	Node next;
	Node(int d)
	{
		data = d;
		next = null;
	}
}

class LinkedList {
	Node head; // the head of list

	/* Takes index as argument and return data at index*/
	public int GetNth(int index)
	{
		Node current = head;
		int count = 0; /* index of Node we are
						currently looking at */
		while (current != null)
		{
			if (count == index)
				return current.data;
			count++;
			current = current.next;
		}

		/* if we get to this line, the caller was asking
		for a non-existent element so we assert fail */
		assert (false);
		return 0;
	}

	/* Given a reference to the head of a list and an int,
	inserts a new Node on the front of the list. */
	public void push(int new_data)
	{

		/* 1. alloc the Node and put data*/
		Node new_Node = new Node(new_data);

		/* 2. Make next of new Node as head */
		new_Node.next = head;

		/* 3. Move the head to point to new Node */
		head = new_Node;
	}

	/* Driver code*/
	public static void main(String[] args)
	{
		/* Start with empty list */
		LinkedList llist = new LinkedList();

		/* Use push() to construct below list
		1->12->1->4->1 */
		llist.push(1);
		llist.push(4);
		llist.push(1);
		llist.push(12);
		llist.push(1);

		/* Check the count function */
		System.out.println("Element at index 3 is "
						+ llist.GetNth(3));
	}
}


/**
 * @param {string[]} strs
 * @return {string}
 */
 var longestCommonPrefix = function(strs) {
    var res='';
    var content;
    const iterator = content[Symbol.iterator]();
    let theChar = iterator.next();
    theChar = iterator.next();
    var word = content.split("");
    for(var i = 0 ; i < strs.length ; i++){
        content = strs[i];
        for(var j = 0 ; j < word.length ; j++){
            // console.log(word[j]);
            res += word[j];
            // if(j==1){
            //     break;
            // }
        }
    }
    console.log(res);
    
};


/**
 * @param {string[]} strs
 * @return {string}
 */
 var longestCommonPrefix = function(strs) {
    let res = '';
    for(var i = 0 ; i < strs.length ; i++)
    {
        var content = strs[i];
        var temp = content.split("");
        console.log(temp);
        if(strs.length == 1){
          return strs[i];   
        }else if(strs.length > 2 && strs[i] !==""){
            for(var j = 0 ; j < temp.length ; j++){
                if(j==2){
                    break;
                }else{
                    res += temp[j];
                }
            }
        }else{
            return "";
        }
    }

    var i = 0;
    var j = 2;
    while(i<res.length/2){
        var con = res.slice(i, j);
        if(con.startsWith('fl'))
            {
                return con;
            }
        else{
            return "";
        }
        j+=2;
        i++;
    }
};



// javascript stack
// Push => Add an element to the stack
// Pop => Delete an Element from the stack
// Peek => Get the tp element of the stack
// Length => Return the length of the stack
// Search => Search for the element in the stack
// IsEmpty => Check if the stack is empty
// Print => Print the elements of the stack

class Stack{
    constructor(){
        this.data = [];
        this.top = 0;
    }

    //Push
    push(element){
        this.data[this.top] = element;
        this.top = this.top + 1;
    }

    length(){
        return this.top;
    }

    peek(){
        return this.data[this.top -1];
    }

    isEmpty(){
        return this.top === 0;
    }

    pop(){
        if(this.isEmpty() === false){
            this.top = this.top -1;
            return this.data.pop(); //removes the last element
        }
    }

    print(){
        var top = this.top -1;
        while(top >= 0){ //print upto 0th index
            console.log(this.data[top]);
            top--;
        }
    }

    reverse(){
        this._reverse(this.top - 1);    
    }

    _revers(index){
        if(index != 0){
            this._reverse(index-1);
        }

        console.log(this.data[index]);
    }
}