import data from "../models/cpu.js"
import os from "os"
import randomstring from "randomstring";

export const getDataCPU = async(req, res) => {
    const AllData = await data.find({})
    try {
        res.status(200).send(AllData)
    } catch (err) {
        res.status(500).send(err)
    }
}

export const insertDataCPU = async(req, res) => {
    var newData = new data({})
    
    newData._id = randomstring.generate();
    newData.cpuname = os.hostname() 
    newData.type = os.version()
    newData.platform = os.platform()
    newData.release = os.release()
    newData.remainingRam = os.freemem
    newData.totalRam = os.totalmem

    newData.save(function(err,data){
        if (err) {
            res.status(500).send(err)
            console.log(err)
        } else {
            res.status(201).send("Data Inserted")
        }
    })
}