import { useState } from "react";
import TextInput from "../../InputComponents/TextInput";
import { Col, Form, Row } from "react-bootstrap";

interface JsonFormattingProps {
    uploadType: "Text" | "File";
}

function JsonFormatting(props: JsonFormattingProps) {
    const [output, setOutput] = useState<string>("");

    const formatJson = function (inputJson: string) {
        if (inputJson === null || inputJson === "") {
            setOutput("");
            return;
        }

        try {
            var json = JSON.parse(inputJson);
            setOutput(JSON.stringify(json, null, 4));
        }
        catch (error) {
            console.error(error);
            setOutput("Invalid JSON...");
        }
    }

    return (
        <>
            <h4>JSON</h4>
            {props.uploadType === "Text" && (
                <>
                    <Row>
                        <Col>
                            <p>Paste JSON below:</p>
                            <TextInput className="shadow json-input-textarea" placeholder="Input" onChange={json => formatJson(json)} />
                            
                            <hr/>

                            <Form.Control className="shadow json-input-textarea" as="textarea" placeholder="Formatted JSON" value={output}/>
                        </Col>
                    </Row>
                </>
            )}
        </>
    );
}

export default JsonFormatting;
