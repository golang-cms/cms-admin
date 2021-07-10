import type { PostModel, PostOmitGroup } from "../../post/model/post";

export interface GroupModel {
    id?: number;
    typeId: number;
    title: string;
    posts: PostOmitGroup[];
    description: string;
    createAt?: Date;
    updateAt?: Date;
}

export type GroupOmitPost = Omit<GroupModel, "posts">