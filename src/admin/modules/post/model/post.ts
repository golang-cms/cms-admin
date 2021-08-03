import type { GroupOmitPost } from "../../group/model/group";

export interface PostModel {
    id?: number;
    title: string;
    slug: string;
    content: string;
    description: string;
    groups: GroupOmitPost[];
    files: FileModel[];
    createAt?: Date;
    updateAt?: Date;
}

export interface FileModel {
    id?: number;
    title: string;
    location: string;
    displayUrl: string;
    sha: string;
}

export type PostOmitGroup = Omit<PostModel, "groups">