import type { GroupOmitPost } from "../../group/model/group";

export interface PostModel {
    id?: number;
    title: string;
    slug: string;
    description: string;
    groups: GroupOmitPost[];
    translations: TranslationModel[];

}

export interface TranslationModel {
    id: number;
    languageId: number;
    title: string;
    head: string;
    javascript: string;
    content: string;
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