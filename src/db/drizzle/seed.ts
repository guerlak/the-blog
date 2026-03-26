import db from "./index";
import { postsTable } from "./schema";
import { jsonPostRepo }  from "@/src/repositories/post/JsonPostRepo";

(async () => {  
    const postsData = await jsonPostRepo.findAll(); 
    await db.insert(postsTable).values(postsData);
    console.log(postsData);
})(); 