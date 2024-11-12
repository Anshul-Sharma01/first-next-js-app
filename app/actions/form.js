"use server"
import fs from "fs/promises"

export const submitAction = async (e) => {
    console.log(e.get("name"), e.get("address"));
    fs.writeFile("server.txt", `Name is ${e.get("name")} and Address is ${e.get("address")}`);

}


