const linkedList = (function () {
    let startNode = null;

    function setStartNode(node) {
        startNode = node;
    }


    function append(value) {
        let node = new Node(value);
        console.log("Appending " + value);
        if (size()===0) {
            setStartNode(node);
        }
        else
            tail().setNextNode(node);
    }

    function prepend(value) {
        console.log("Prepending " + value);
        let node = new Node(value);
        if (size()===0) {
            setStartNode(node);
        }
        else {
            node.setNextNode(startNode);
            setStartNode(node);
        }
    }

    function head() {
        return startNode;
    }

    function tail() {
        let currentNode = startNode;
        while (currentNode.getNextNode() !== null) {
            currentNode = currentNode.getNextNode();
        }
        return currentNode;
    }

    function size() {
        let currentNode = startNode;
        let counter = 0;
        if (currentNode == null)
            return counter;
        else
            counter++;
            
        while (currentNode.getNextNode() !== null) {
            currentNode = currentNode.getNextNode();
            counter++;
        }
        return counter;
    }

    function atIndex(index) {
        let currentNode = startNode;
        if (size()===0) {
            return "List is empty";
        }
        if (index === 0) {
            return currentNode;
        }
        let counter = 0;
        if (index > size()) {
            return "Given index out of range";
        }
        while (currentNode.getNextNode() !== null) {
            if (index === counter)
                return currentNode;
            currentNode = currentNode.getNextNode();
            counter++;
        }
        
    }

    function pop() {
        if (size() === 0)
            return "List is empty";

        if (size() === 1) {
            setStartNode(null);
        }
        else {
            let lastNode = tail();
            let currentNode = startNode;
            while (currentNode.getNextNode() !== lastNode) {
                currentNode = currentNode.getNextNode();
            }
            currentNode.setNextNode(null);
        }
        console.log("Popping");
   }

    function toString() {
        let currentNode = startNode;
        let outputString = "";
        while (currentNode !== null) {
            outputString += `(${currentNode.getValue()}) -> `;
            currentNode = currentNode.getNextNode();
        }
        return "List "+ outputString + "null";
    }
    
    function find(value) {
        let currentNode = startNode;
        let count = null;
        while (currentNode !== null) {
            if (currentNode.getValue() === value)
                return count;
            count++;
            currentNode = currentNode.getNextNode();
        }
        return null;
    }
    
    function contains(value) {
        let currentNode = startNode;
        while (currentNode !== null) {
            if (currentNode.getValue() === value)
                return true;
            currentNode = currentNode.getNextNode();
        }
        return false;
    }

    function insertAt(value, index) {
        if (index === 0) {
            prepend(value);
        }
        else if (index === size()) {
            append(value);
        }
        else {
            let nodeAtIndex = atIndex(index);
            let previousNode = atIndex(index - 1);
            let newNode = new Node(value, nodeAtIndex);
            previousNode.setNextNode(newNode);
        }
        console.log("Inserting at index " + index + " value " + value);
    }
    
    function removeAt(index) {
        if (index === 0) {
            startNode = startNode.getNextNode();
        }
        else if (index === size() - 1) {
            pop();
        }
        else {
            let previousNode = atIndex(index - 1);
            let nextNode = atIndex(index + 1);
            previousNode.setNextNode(nextNode);
        }
        console.log("Removing from index " + index );
    }



    return { append,prepend,size,tail,head,atIndex,pop,toString,contains,find,insertAt,removeAt };
})();

class Node {
    constructor(value, nextNode = null) {
        this.value = value;
        this.nextNode = nextNode;
    }

    getNextNode() {
        return this.nextNode;
    }

    setNextNode(nextNode) {
        this.nextNode = nextNode;
    }

    getValue() {
        return this.value;
    }
}


linkedList.append(5);
linkedList.prepend(25);
linkedList.append(7);
linkedList.append(9);
linkedList.prepend(15);
linkedList.append(8);
linkedList.append(3);
linkedList.append(6);
linkedList.append(9);
console.log(linkedList.toString());
linkedList.insertAt(125, 3);
console.log(linkedList.toString());
linkedList.removeAt(0);
console.log(linkedList.toString());
console.log("Size of list: " + linkedList.size());
console.log("Tail of list: ");
console.log(linkedList.tail());
console.log("Head of list: ")
console.log(linkedList.head());
console.log("At index 5 of list is: ");
console.log(linkedList.atIndex(5));
linkedList.pop();
console.log(linkedList.toString());
console.log("List contains 9: " + linkedList.contains(9));
console.log("List contains 233: " + linkedList.contains(233));
console.log("Finding 7 in the list: " + linkedList.find(7));
console.log("Finding 569 in the list: " + linkedList.find(569));


