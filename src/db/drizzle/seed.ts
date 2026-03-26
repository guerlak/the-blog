import db from "./index";
import { postsTable } from "./schema";
import { jsonPostRepo }  from "@/src/repositories/post/JsonPostRepo";

(async () => {  
    const posts = await jsonPostRepo.findAll(); 
    await db.insert(postsTable).values(posts);
    console.log(posts);
})();   