db.createUser({
    user: 'Felipe',
    pwd: '123',
    roles: ['readWrite', 'dbAdmin']
});


db.clientes.insert({

    firstName: 'Isaac',
    lastName: 'Asimov'
});


db.clientes.insert ([
    {   firstName: 'Jose',
        lastName: 'Perez'
    },
    {
        firstName: 'Felipe',
        lastName: 'Palma'
    },
    {
         firstName: 'Andres',
         lastName: 'Gonzalez'
    }
]);

// Busca clientes con el nombre Jose //
db.clientes.find({firstName: 'Jose'});

//Actualizar un Dato

db.clientes.update(
    {
        lastName: 'Gonzalez'
    },
    {
        firstName: 'Andres',
        lastName: 'Andrade',
        gender: 'Masculino'
    }
);

//BUSCAR UN CLIENTE POR EL OBJECT ID 
db.clientes.find({_id:  ObjectId("5db721b5cc193c655815a2db")});



//Agregar un dato a una consulta //

db.clientes.update(
    {
        lastName: 'Gonzalez'
    },
    {
    $set: {age: 45}
    }
);

// INCREMENTAR UN DATO, en este caso la edad de Gonzalez en 5 años más

db.clientes.update(
    {
        lastName: 'Gonzalez'
    },
    {
    $inc: {age: 5}
    }
);

// DECREMENTAR UN DATO EN ESTE CASO LA EDAD

db.clientes.update(
    {
        lastName: 'Gonzalez'
    },
    {
    $inc: {age: -1}
    }
);

// QUITARLE EL DATO UNSET, 1 TRUE 0 FALSE

db.clientes.update(
    {
        lastName: 'Gonzalez'
    },
    {
    $unset: {age: 1}
    }
);

// Actualizar un dato aunque este no exista,
// con upsert true se agrega como un nuevo campo a la base de datos

db.clientes.update(
    {
        firstName: 'Aaron'
    },
    {
        firstName: 'Carol',
        lastName: 'Delahaye'
    }
    ,
    {
        upsert: true
    }

);

// cambiar el campo firstName por primerNombre

db.clientes.update(
    {firstName: "Carol"},
    {
    $rename: {"firstName" : "primerNombre"}
    });


// Eliminar un dato 

db.clientes.remove(
    {
        primerNombre: 'Carol'
    }
);

// CUIDADO AL ELIMINAR DATOS CON EL MISMO NOMBRE, SE ELIMINARAN AMBOS DE LA BASE DE DATOS.

db.clientes.remove (
    {
        firstName: 'Andres'
    },
    {
        justOne : true 
    }
);


//BUSCAR UN CLIENTE QUE CUMPLA CON UN ATRIBUTO EN ESPECIFICO CON $OR 

db.clientes.find({
    $or: [{firstName: 'Andres'}, {firstName: 'Jose'}]
});


db.clientes.insert(
    [   {
        name: 'Felipe',
        age: 20
        },
        {
        name: 'Gonzalo',
        age: 20
        },
        {
        name: 'Antonio',
        age: 25
        }
    ]
);

// CLIENTES MAYORES DE 30 gt: MAYOR QUE grater than

db.clientes.find(
    {
      age: {$gt: 19}
    }
);

// CLIENTES MENORES QUE $lt -> less than 

db.clientes.find(
    {
        age: {$lt: 30}
    }
);

// ENTRE mayores que 19 y menos de 30

db.clientes.find(
    {
        age: {$gt: 19, $lt:30}
    }
);


// ENTRAR A UNA PROPIEDAD DE UN OBJETO Y BUSCAR

db.clientes.insert(
    {
        firstName: 'Zack',
        address: {
            city: 'London'
        }
    }
);

db.clientes.find(
    {
        "address.city" : "London"
    }
);

// BUSCAR DATOS QUE COINCIDAN CON UNA PALABRA O FRASE 

db.clientes.find(
{
    name: {$regex: 'ipe'}
}
);


//ORDENAR DATOS -- 1 = ASC  -1 = DESC

db.clientes.find().sort({lastName: -1});

// CONTAR DATOS 
db.clientes.count();

//CONTAR LOS CLIENTES MAYORES DE 18

db.clientes.find({age: {$gt: 18}}).count();

// limitar los resultados de busqueda y ordenarlos ASC o DESC


db.clientes.find().limit(4).sort({name: 1})


// recorrer datos con funciones de Java

db.clientes.find().forEach(function(doc) {print(doc.name)});