
function Manager() {
    this.productControll = function(builder) {
        builder.collectIngridents();
        builder.makeProducts();
        builder.productPakaging();
    }
}

function IcecreamShef() {
    this.icecream = null;
 
    this.collectIngridents = function() {
        this.icecream = new Icecream();
        console.log("Ingridents collected for Icecream!");
    };

    this.makeProducts = function() {
        this.icecream.makeIcecream();
    };

    this.productPakaging = function(){
        this.icecream.pakaging();
    }
}

function CakeShef() {
    this.cake = null;
 
    this.collectIngridents = function() {
        this.cake = new Cake();
        console.log("Ingridents collected for Cake!");
    };

    this.makeProducts = function() {
        this.cake.makeCake();
    };

    this.productPakaging = function(){
        this.cake.pakaging();
    }
}

function Icecream(){
    this.ingredients = ["milk", "sugar", "almond", "flavour"];
    this.makeIcecream = () => {console.log("Icecream is made with: " + this.ingredients);}
    this.pakaging = () => {console.log("Icecream pakaged!\n")}

}
function Cake(){
    this.ingredients = ["Flour", "sugar", "egg", "salt"];
    this.makeCake = () => {console.log("Cake is made with: " + this.ingredients);}
    this.pakaging = () => {console.log("Cake pakaged!\n")}
}

function run(){
    let SalamVai = new Manager();
    let icecreamShef = new IcecreamShef();
    let cakeShef = new CakeShef();

    SalamVai.productControll(icecreamShef);
    SalamVai.productControll(cakeShef);
}
run();
