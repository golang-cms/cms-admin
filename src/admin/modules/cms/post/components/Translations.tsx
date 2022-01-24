import { Switch, Paper, Tabs, Tab, Box, TextField, Typography, Grid } from "@mui/material";
import pretty from "pretty";
import { Dispatch, SetStateAction, useState } from "react";
import {
  Control,
  Controller,
  UseFormRegister,
  UseFormSetValue,
} from "react-hook-form";
import { v4 as uuid } from "uuid";
import useGetLanguages from "../../../../../hooks/api/language/useGetLanguages";
import { LanguageModel } from "../model/language";
import { FileModel, PostModel, TranslationModel } from "../model/post";
import Editor from "./sun-editor/Editor";
enum EditorType {
  Html,
  Wysiwyg,
}

interface TranslationsProps {
  translations?: TranslationModel[];
  control: Control<PostModel>;
  postId?: number;
  setUploadedFiles: Dispatch<SetStateAction<Map<number, FileModel[]>>>;
  register: UseFormRegister<PostModel>;
  setValue: UseFormSetValue<PostModel>;
}

interface TranslationProps {
  translation?: TranslationModel;
  control: Control<PostModel>;
  postId?: number;
  languageId: number;
  index: number;
  setUploadedFiles: Dispatch<SetStateAction<Map<number, FileModel[]>>>;
}

const Translations = (props: TranslationsProps) => {
  const [languages, error] = useGetLanguages(true);
  if (error !== null) {
    console.log(error);
  }

  languages?.forEach((lang: LanguageModel, index: number) => {
    props.register(`translations.${index}.files` as const);
    props.register(`translations.${index}.languageId` as const);
    props.setValue(
      `translations.${index}.languageId` as "translations.0.languageId",
      lang.id
    );
  });

  const [currentTabIndex, setCurrentTabIndex] = useState(0);

  const handleTabChange = (event: React.ChangeEvent<{}>, tab: number) => {
    setCurrentTabIndex(tab);
  };

  return (
    <Paper square>
      <Tabs
        value={currentTabIndex}
        indicatorColor="primary"
        textColor="primary"
        onChange={handleTabChange}
        aria-label="disabled tabs example"
      >
        {languages?.map((lang: LanguageModel, key: number) => {
          return (
            <Tab
              key={key}
              label={lang.name}
              id={`translation-tab-${key}`}
              aria-controls={`translation-tabpanel-${key}`}
            />
          );
        })}
      </Tabs>
      {languages?.map((lang: LanguageModel, key: number) => {
        const translation = props?.translations?.find(
          (tran) => tran.languageId === lang.id
        );
        return (
          <div
            key={key}
            role="tabpanel"
            hidden={currentTabIndex !== key}
            id={`translation-tabpanel-${key}`}
            aria-labelledby={`translation-tab-${key}`}
          >
            {currentTabIndex === key && (
              <Box p={3}>
                <Translation
                  translation={translation}
                  postId={props.postId}
                  control={props.control}
                  setUploadedFiles={props.setUploadedFiles}
                  languageId={lang.id}
                  index={key}
                />
              </Box>
            )}
          </div>
        );
      })}
    </Paper>
  );
};

const Translation = (props: TranslationProps) => {
  const [editorType, setEditorType] = useState<EditorType>(EditorType.Html);
  return (
    <>
      <Controller
        render={({ field }) => (
          <TextField
            margin="dense"
            id="head"
            label="Head"
            type="text"
            fullWidth
            multiline
            rows={8}
            {...field}
          />
        )}
        control={props.control}
        name={`translations.${props.index}.head` as `translations.0.head`}
        defaultValue={props.translation?.head}
      />
      <Typography component="div">
        <Grid component="label" container alignItems="center" spacing={1}>
          <Grid item>HTML</Grid>
          <Grid item>
            <Switch
              name="editorType"
              checked={editorType === EditorType.Wysiwyg}
              onChange={() => {
                editorType === EditorType.Wysiwyg
                  ? setEditorType(EditorType.Html)
                  : setEditorType(EditorType.Wysiwyg);
              }}
            />
          </Grid>
          <Grid item>Wysiwyg</Grid>
        </Grid>
      </Typography>
      {editorType === EditorType.Wysiwyg ? (
        <Editor
          content={props.translation?.content}
          control={props.control}
          setUploadedFiles={props.setUploadedFiles}
          fileId={props.postId?.toString() ?? uuid()}
          fieldName={
            `translations.${props?.index}.content` as "translations.0.content"
          }
          languageId={props.languageId}
        />
      ) : (
        <Controller
          render={({ field }) => (
            <TextField
              margin="dense"
              id="content"
              label="Content"
              type="text"
              fullWidth
              multiline
              rows={20}
              {...field}
            />
          )}
          control={props.control}
          name={
            `translations.${props?.index}.content` as "translations.0.content"
          }
          // defaultValue={(new formatStringToHtml(post?.content ?? '')).format()}
          defaultValue={pretty(props.translation?.content)}
        />
      )}
      {/*
        <MuiEditor
          post={post}
          control={control}
          setValue={setValue}
          setUploadedFiles={setUploadedFiles}
          fileId={post?.id?.toString() ?? uuid()}
        />
        */}
      <Controller
        render={({ field }) => (
          <TextField
            margin="dense"
            id="javascript"
            label="Javascript"
            type="text"
            fullWidth
            multiline
            rows={20}
            {...field}
          />
        )}
        control={props.control}
        name={
          `translations.${props?.index}.javascript` as "translations.0.javascript"
        }
        defaultValue={props.translation?.javascript}
      />
      <Controller
        render={({ field }) => (
          <TextField
            margin="dense"
            id="title"
            label="Title"
            type="text"
            fullWidth
            multiline
            rows={8}
            {...field}
          />
        )}
        control={props.control}
        name={`translations.${props.index}.title` as `translations.0.title`}
        defaultValue={props.translation?.title}
      />
    </>
  );
};

export const isTranslationModified = (translation: TranslationModel): boolean =>
  translation.content != null ||
  translation.head != null ||
  translation.javascript != null ||
  translation.title != null;

export default Translations;
