import { useState } from "react";
import TextInput from "../../InputComponents/TextInput";
import { Col, Form, Row } from "react-bootstrap";
import cryptoJs from "crypto-js";

interface Md5HashingProps {
    uploadType: "Text" | "File";
}

function Md5Hashing(props: Md5HashingProps) {
    const [output, setOutput] = useState<string>("");

    const hashText = function (text: string) {
        try {
            if (text === null || text === "") {
                setOutput("");
                return;
            }

            var hash = cryptoJs.MD5(text).toString();
            setOutput(hash);
        }
        catch (error) {
            console.error(error);
            setOutput("Error calculating hash...");
        }
    }

    return (
        <>
            <h4>MD5 - Hashing Algorithm</h4>

            {props.uploadType === "Text" && (
                <Row>
                    <Col>
                        <p>Paste text below:</p>
                        <TextInput className="shadow hash-input-textarea" placeholder="Input" onChange={text => hashText(text)} />
                    </Col>

                    <Col>
                        <p>MD5 Hash</p>
                        <Form.Control className="shadow hash-input-textarea" as="textarea" placeholder="hash" value={output}/>
                    </Col>
                </Row>
            )}
        </>
    );
}

export default Md5Hashing;
