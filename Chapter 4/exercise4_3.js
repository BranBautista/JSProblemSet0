class ObjectCreator {
    #_prop
    constructor(number) {
        this.#_prop = number;
        this.prop = number;
    }

    get prop() {
        return this.#_prop;
    }
    
    set prop(number) {
        if (typeof number == 'number'){
            this.#_prop = number;
        }
        else {
            throw new Error('Whops, is not a number')
        }
    }
}


let customObject = new ObjectCreator(3);

console.log(customObject.prop);