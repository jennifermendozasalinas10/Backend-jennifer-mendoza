const fs = require ("fs");

class Contenedor {
    constructor(name) {
        this.name = name;
    }

    async getInfo() {}

    async save(information){
        try{
            let content = await fs.promises.readFile(`./${this.name}`, "utf-8");
            let contentParsed = JSON.parse(content);
            let lastIndex = contentParsed.length - 1;
            let lastId = contentParsed[lastIndex].id;
            information.id = lastId + 1;
            let id = information.id;
            contentParsed.push(information);
            await fs.promises.writeFile(`./${this.name}`,JSON.stringify(contentParsed)
            );
            return id;
        } catch (error){
            console.log(error);
        }
    }

    async getById(id){
        try {
            let content = await fs.promises.readFile(`./${this.name}`, "utf-8");
            let contentParsed = JSON.parse(content);
            let contentArray;
            contentParsed.forEach((element) => {
                if (element.id === id) {
                    contentArray = element;
                }
            });
            return contentArray;
        } catch (error) {
            console.log(error);
        }
    }

    async getAll(){
        try {
            let content = await fs.promises.readFile(`./${this.name}`, "utf-8");
            let contentParsed = JSON.parse(content);
            return contentParsed;
        } catch (error){
            console.log(error);
        }
    }

    async deleteById(id) {
        try {
            let content = await fs.promises.readFile(`./${this.name}`, "utf-8");
            let contentParsed = JSON.parse(content);
            let newContent = contentParsed.filter(
                (element) => element.id !== id
            );

            await fs.promises.writeFile(
                `./${this.name}`, JSON.stringify(newContent)
            );
            return newContent;
        } catch (error){
            console.log(error);
        }
    }

    async deleteAll(){
        try{
            let content = await fs.promises.readFile(`./${this.name}`, "utf-8");
            let contentParsed = JSON.parse(content);
            await fs.promises.writeFile(`./${this.name}`, JSON.stringify([{}]));
            return console.log("files deleted");
        } catch (error) {
            console.log(error);
        }
    }
}

let contenedor = new Contenedor ("products.json");

let informationNew = {
    id: "5",
    name: "Amarula",
    price: 600,
};

module.exports = Contenedor;

/*contenedor.save(informationNew).then((res) => console.log(res));
contenedor.getById(2).then((res) => console.log(res));
contenedor.getAll().then((res) => console.log(res));
contenedor.deleteById(4).then((res) => console.log(res));
contenedor.deleteAll().then((res) => console.log(res));*/