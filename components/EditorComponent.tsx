import dynamic from "next/dynamic";
import React from "react";
import { Button, Col } from "react-bootstrap";
const SunEditor = dynamic(() => import("suneditor-react"), {
  ssr: false,
});
import "suneditor/dist/css/suneditor.min.css";

const EditorComponent = () => {
  const sortedFontOptions = [
    "Arial",
    "Logical",
    "Salesforce Sans",
    "Garamond",
    "Sans-Serif",
    "Serif",
    "Times New Roman",
    "Helvetica",
    "Comic Sans MS",
    "Courier New",
    "Impact",
    "Georgia",
    "Tahoma",
    "Trebuchet MS",
    "Verdana",
  ].sort();

  return (
    <>
      <SunEditor
        height="200px"
        setOptions={{
          buttonList: [
            ["undo", "redo"],
            ["font", "fontSize"],
            [
              "bold",
              "underline",
              "italic",
              "strike",
              "subscript",
              "superscript",
            ],
            ["fontColor", "hiliteColor"],
            ["align", "list", "lineHeight"],
            ["outdent", "indent"],
          ],
          defaultTag: "div",
          minHeight: "300px",
          showPathLabel: false,
          font: sortedFontOptions,
          defaultStyle: "font-family: Arial; font-size: 16px;",
        }}
      />
      <Col lg="12">
        <Button className="mt-2 col-md-12" variant="outline-primary">Save</Button>
      </Col>
    </>
  );
};

export default EditorComponent;
