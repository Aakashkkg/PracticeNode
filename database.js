const mongocomposs = "mongodb+srv://Aakashkkg:Aakashkkg@learnignode.bm0yj.mongodb.net/"
// const mongoatlas = "mongodb+srv://Aakashkkg:Aakashkkg@learnignode.bm0yj.mongodb.net/?retryWrites=true&w=majority&appName=LearnigNode"

const { MongoClient } = require("mongodb");
const client = new MongoClient(mongocomposs);
const dbname = "practicenode"
const collename = "test"


async function main() {
    await client.connect()
    console.log("server connected successfullly")
    const db = client.db(dbname)
    const collection = db.collection(collename)

    const data = {
        first_name: "deep",
        last_name: "passu",
        phone: "78151511",
        city: "bsd"
    }

    // for adding mltiple doc in collection array object is necceaay
    const insertdata = await collection.insertMany([data])
    console.log("instered"+insertdata)


    // it is used for adding single doc into collection
    // const insertdata = await collection.insertOne(data)
    // console.log("instered"+insertdata)

    // it return the first doc which find according to given filter
    // const finddata = await collection.findOne({ last_name: "passu" })
    // console.log(finddata)


    // it return the mutiple doc according to filter with this method toArray() is required
    // const finddata = await collection.find({ last_name: "passu" }).toArray()
    // console.log(finddata)

    // it update the first single doc find according the given filter $set is used to add someting you want to update
    // const updatedata = await collection.updateOne({ last_name: "passu" }, { $set: { first_name: "passi" } })
    // console.log(updatedata)


    // it update the multiple doc find according the given filter $set is used to add someting you want to update
    // const updatedata = await collection.updateMany({ last_name: "passu" }, { $set: { first_name: "raju" } })
    // console.log(updatedata)

    // deleteone is used to  delete single doc according to given value
    // deletemany is used to delet multiple doc according to give filter value
    // const deletedoc = await collection.deleteMany({last_name:"passu"})
    // console.log(deletedoc)

    return "db connected"
}


main().then(console.log).catch(console.error).finally(() => client.close())