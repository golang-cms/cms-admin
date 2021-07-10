import type { GroupOmitPost } from "../../group/model/group";

export interface PostModel {
    id?: number;
    title: string;
    slug: string;
    content: string;
    description: string;
    groups: GroupOmitPost[];
    createAt?: Date;
    updateAt?: Date;
}

export type PostOmitGroup = Omit<PostModel, "groups">