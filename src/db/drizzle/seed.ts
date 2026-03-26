import db from "./index";
import { postsTable } from "./schema";
import JsonPostRepo from "@/src/repositories/post/JsonPostRepo";

(async () => {  
    const jsonPostRepo = new JsonPostRepo();
    const postsData = await jsonPostRepo.findAll(); 
    await db.insert(postsTable).values(postsData);
    console.log(postsData);
})(); 