import { Collapse, Grow, TextField } from "@mui/material";
import { EditorState } from "draft-js";
import { stateToHTML } from "draft-js-export-html";
import htmlBeautify from "js-beautify";
import { Dispatch, SetStateAction } from "react";
import { htmlToJson } from "./DraftJsUtil";
import { MuiEditorType } from "./MuiEditorModel";

interface HtmlEditorProps {
  htmlContent: string | null;
  type: MuiEditorType;
  setHtmlContent: Dispatch<SetStateAction<string | null>>;
  setJsonContent: Dispatch<SetStateAction<string | null>>;
}

const HtmlEditor = (props: HtmlEditorProps) => {
  const show = props.type === MuiEditorType.HtmlEditor;
  return (
    <Collapse in={show}>
      <Grow in={show}>
        <TextField
          margin="dense"
          id="html"
          label="Html"
          type="text"
          fullWidth
          multiline
          maxRows={Infinity}
          value={props.htmlContent || ""}
          onChange={(e) => {
            props.setHtmlContent(e.target.value);
            props.setJsonContent(htmlToJson(e.target.value));
          }}
        />
      </Grow>
    </Collapse>
  );
};

export const htmlEditorHandler = (
  editorState: EditorState,
  htmlContent: string | null,
  editorType: MuiEditorType,
  setEditorType: Dispatch<SetStateAction<MuiEditorType>>,
  setHtmlContent: Dispatch<SetStateAction<string | null>>,
  setJsonContent: Dispatch<SetStateAction<string | null>>
): void => {
  switch (editorType) {
    case MuiEditorType.RichEditor: {
      const html = stateToHTML(editorState.getCurrentContent(), options);
      setEditorType(MuiEditorType.HtmlEditor);
      setHtmlContent(htmlBeautify.html_beautify(html));
      console.log(htmlBeautify.html_beautify(html), html);
      break;
    }
    case MuiEditorType.HtmlEditor: {
      setEditorType(MuiEditorType.RichEditor);
      setJsonContent(htmlToJson(htmlContent!));
      break;
    }
  }
};

const options = {
  /*
  entityStyleFn: (entity: EntityInstance) => {
    const entityType = entity.getType().toLowerCase();
    if (entityType === "image") {
      const data = entity.getData();
      return {
        element: "img",
        attributes: {
          src: data.url,
          width: data.width,
          height: data.height,
        },
        style: {
          // Put styles here...
        },
      };
    }
  },
  */
};
export default HtmlEditor;
