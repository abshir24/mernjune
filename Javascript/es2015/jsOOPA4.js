class BigCat{
    constructor(){
        this.speed = 5
        this.strength = 5
        this.intelligence = 5
        this.health = 5
        this.durability = 5
    }
}

class Lion extends BigCat{
    constructor(){
        super()
        this.strength = 50
        this.health = 50
    }

    king(bigcat){
        let randomNumber = Math.floor(Math.random() * 11);

        if(bigcat instanceof Cheetah){
            if(randomNumber <= 6){
                return
            }
        }

        bigcat.speed = 0
        bigcat.health = 0
        bigcat.strength = 0
        bigcat.durability = 0
    }
}

class Leopard extends BigCat{
    constructor(){
        super()
        this.strength = 30
        this.health = 30
        this.intelligence = 30
    }

    attack(bigcat){
        let randomNumber = Math.floor(Math.random() * 11);

        if(bigcat instanceof Cheetah){
            if(randomNumber <= 6){
                return
            }
        }

        if(bigcat instanceof Lion){
            bigcat.king(this)
            return 
        }

        bigcat.health -= 15
    }
}


class Cheetah extends BigCat{
    constructor(){
        super()
        this.speed = 75
        this.health = 25
        this.intelligence = 25
        this.durability = 25
    }

    run(bigcat){
        if(bigcat instanceof Leopard){
            bigcat.attack(this)
        }

        if(bigcat instanceof Lion){
            bigcat.king(this)
        }
    }
}

let lion  = new Lion()
let leopard = new Leopard()
let cheetah = new Cheetah()

lion.king(leopard)