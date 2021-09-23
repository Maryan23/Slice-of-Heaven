
// create object constructor for pizza orders
    class orderPizza {
    constructor(size, crust, toppings, numberOfPizza, delivery) {
        this.size = size;
        this.crust = crust;
        this.toppings = toppings;
        this.numberOfPizza = numberOfPizza;
        this.delivery = delivery;
        this.sizePrice = 0;
        this.crustPrice = 0;
        this.toppingsPrice = 0;
        this.deliveryPrice = 0;
        this.totalPrice = 0;
    }
    };
    // create prototypes that calculates prices
    orderPizza.prototype.itemsPrice = function(){
    if(this.size === "small"){
        this.sizePrice = 500;
    } else if (this.size === "medium"){
        this.sizePrice = 900;
    }else if(this.size === "large"){
        this.sizePrice = 1200;
    };
    if(this.crust=== "Wheat thin crust"){
        this.crustPrice = 150;
    }else if (this.crust === "Classic Hand Tossed crust"){
        this.crustPrice = 120;
    }else if (this.crust === "Cheese Burst crust"){
        this.crustPrice = 250;
    }else if(this.crust === "Thin crust"){
        this.crustPrice = 100;
    };
    if (this.toppings === "Pepperoni"){
        this.toppingsPrice = 150;
    }else if (this.toppings === "Mushroom"){
        this.toppingsPrice = 100;
    }else if (this.toppings === "Extra Cheese"){
        this.toppingsPrice = 120;
    }else if(this.toppings === "Sausage"){
        this.toppingsPrice = 150;
    }else if(this.toppings === "Extra Onions"){
        this.toppingsPrice = 50;
    }else if(this.toppings === "Black olives"){
        this.toppingsPrice = 80;
    }else if (this.toppings === "Green Pepper"){
        this.toppingsPrice= 50;
    }else if(this.toppings === "Fresh garlic"){
        this.toppingsPrice = 50;
    };
    this.totalPrice = ((this.crustPrice*this.numberOfPizza) + (this.toppingsPrice*this.numberOfPizza) + (this.sizePrice*this.numberOfPizza))
    };
    orderPizza.prototype.priceOfDelivery = function(){
    if (this.delivery === "Hand-picked"){
        this.deliveryPrice = 0;
    }else if (this.delivery === "Remote delivery"){
        this.deliveryPrice = 300;
    }
    };
    // get user values
    $(document).ready(function(){
        $(".custom").submit(function(event){
            event.preventDefault();
            var size = $("#size").val();
            var crust = $("#crust").val();
            var toppings = $("#toppings").val();
            var numberOfPizza = parseInt($("#number").val());
            var delivery = $("#delivery").val();
            var totalPrice = this.totalPrice

            var newOrderPizza = new orderPizza(size, crust, toppings, numberOfPizza, delivery);
            newOrderPizza.parseInt(itemsPrice());
            newOrderPizza.parseInt(priceOfDelivery());
            
            window.alert("Hi! You have ordered " + numberOfPizza + " " + size + " pizzas, with a " + crust + " and " + toppings + " toppings!");
            window.alert("The total cost is  " + newOrderPizza.price + " /= " +  " For Delivery services kindly fill the form below");
        });
            $("#submit").click(function(event) {
                event.preventDefault();
                var keyedName = $("#inputName").val();
                var keyedAddress =$("#inputAddress").val();
                window.alert("Hey" + " " + keyedName + " " + " Your order will be ready in 25 mins and will be delivered to" + " " + keyedAddress + " " + "in the next 45 mins.")
                window.alert("Your total order will be" + newOrderPizza.price + delivery);
                resetFieldValues();
            }); 
    });
