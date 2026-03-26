import DrizzlePostRepo from './DrizzlePostRepo';
import JsonPostRepo from './JsonPostRepo';
import { PostRepository } from './IPostRepo';

export const postRepository: PostRepository = new DrizzlePostRepo();