class Node{
    constructor(name){
        this.children = [];
        this.name = name;
    }
    addChild(child){
        this.children.push(child);
    }
    removeChild(child){
        this.children = this.children.filter(c => c.name != child.name)
    }
    getChild(index){
        let child;
        index < this.children.length 
        ? child =  this.children[index]
        : child = "Element not found"
        return child;
    }
}

function traverse(index, node) {
    console.log(Array(index++).join("   ") + node.name);

    for(let i=0; i<node.children.length; i++){
        traverse(index, node.getChild(i));
    }
}

(function run(){
    var tree = new Node("root");
    var left = new Node("left")
    var right = new Node("right");
    var leftleft = new Node("leftleft");
    var leftright = new Node("leftright");
    var rightleft = new Node("rightleft");
    var rightright = new Node("rightright");
 
    tree.addChild(left);
    tree.addChild(right);
    tree.removeChild(right);  // note: remove
    tree.addChild(right);
 
    left.addChild(leftleft);
    left.addChild(leftright);
 
    right.addChild(rightleft);
    right.addChild(rightright);
 
    traverse(1, tree);
})();