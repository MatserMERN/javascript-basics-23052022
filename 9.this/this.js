console.log(this)

function sample(){
    console.log(this)
}

sample()

var obj = {
    name:'Scott',
    getName: function(){
        console.log(this)
        this.name ="Desatnick"
        console.log(this)

        var updateName = function(){
            this.name = "Great Scott"
            console.log(this)
        }

        updateName()
    }
}

obj.getName()

// Fix using self variable
var obj = {
    name:'Scott',
    getName: function(){
        var self  = this
        
        console.log(self)
        self.name ="Desatnick"
        console.log(self)

        var updateName = function(){
            self.name = "Great Scott"
            console.log(self)
        }

        updateName()
    }
}

obj.getName()

// Fix using bind /call/ apply

var obj = {
    name:'Scott',
    getName: function(){
        console.log(this)
        this.name ="Desatnick"
        console.log(this)

        var updateName = function(){
            this.name = "Great Scott"
            console.log(this)
        }

        updateName.bind(this)()
    }
}

obj.getName()