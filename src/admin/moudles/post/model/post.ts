export interface PostModel {
    id?: number;
    title: string;
    slug: string;
    content: string;
    description: string;
    createAt?: Date;
    updateAt?: Date;
}