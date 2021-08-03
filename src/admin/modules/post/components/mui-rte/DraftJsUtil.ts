import {
    ContentState,
    convertFromHTML,
    convertToRaw,
    RawDraftContentState,
} from "draft-js";
export const htmlToJson = (html: string): string => {
    const blocksFromHTML = convertFromHTML(html);
    const state = ContentState.createFromBlockArray(
        blocksFromHTML.contentBlocks,
        blocksFromHTML.entityMap
    );
    const raw = convertToRaw(state);
    return rawToJson(raw);
};

export const rawToJson = (raw: RawDraftContentState) => {
    const { blocks, entityMap } = raw;

    const fixedBlocks = blocks.map((block) => {
        return {
            ...block,
            type: block.text === "📷" ? "atomic" : block.type,
        };
    });

    const fixedEntityMap: { [key: string]: any } = {};
    for (const [key, value] of Object.entries(entityMap)) {
        if (value.type === "IMAGE") {
            if (value.data.url) {
                value.data.src = value.data.url;
            }
            if (value.data.src) {
                value.data.url = value.data.src;
            }
        }
        fixedEntityMap[key] = value;
    }
    // console.log(fixedEntityMap);
    return JSON.stringify({
        blocks: fixedBlocks,
        entityMap: fixedEntityMap,
    });
    // return JSON.stringify(convertToRaw(state));
};

export const isJson = (str: string): boolean => {
    try {
        JSON.parse(str);
    } catch (e) {
        return false;
    }
    return true;
};