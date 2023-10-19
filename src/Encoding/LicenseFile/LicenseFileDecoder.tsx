import { useState } from "react";
import TextInput from "../../InputComponents/TextInput";
import { Col, Form, Row } from "react-bootstrap";

interface LicenseFileDecoderProps {
    uploadType: "Text" | "File";
}

function LicenseFileDecoder(props: LicenseFileDecoderProps) {
    const [output, setOutput] = useState<string>("");

    const formatJson = function (inputJson: string) {
        alert("not implemented");
    }

    return (
        <>
            <h4>License Files</h4>
            {props.uploadType === "Text" && (
                <Row>
                    <Col>
                        <p>Paste contents below:</p>
                        <TextInput className="shadow json-input-textarea" placeholder="Input" onChange={json => formatJson(json)} />
                    </Col>

                    <Col>
                        <p>Formatted:</p>
                        <Form.Control className="shadow json-input-textarea" as="textarea" placeholder="Formatted" value={output}/>
                    </Col>
                </Row>
            )}
        </>
    );
}

export default LicenseFileDecoder;
