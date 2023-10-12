import { useState } from "react";
import TextInput from "../../InputComponents/TextInput";
import { Form } from "react-bootstrap";

interface Base64EncodingProps {
    uploadType: "Text" | "File";
}

function Base64Encoding(props: Base64EncodingProps) {
    const [direction, setDirection] = useState<"Encode" | "Decode">("Encode");
    const [output, setOutput] = useState<string>("");

    const flipDirection = function (direction: ("Encode" | "Decode")) {
        setDirection(direction);
        setOutput("");
    }

    const decodeBase64 = function(base64: string) {
        try {
            setOutput(atob(base64));
        }
        catch (error: any) {
            console.error(error);
            setOutput("Error decoding base64");
        }
    }

    return (
        <>
            <h4>Base64</h4>
            {props.uploadType === "Text" && (
                <>
                    {direction === "Encode" && (
                        <>
                            <p>
                                ENCODING plaintext to base64: <br/>
                                <button type="button" onClick={() => flipDirection("Decode")}>Flip</button>
                            </p>
                            <TextInput placeholder="Encode text" onChange={text => setOutput(btoa(text))} />
                            <hr/>
                            <Form.Control className="shadow output-textarea" as="textarea" value={output} placeholder="Base64" />
                        </>
                    )}

                    {direction === "Decode" && (
                        <>
                            <p>
                                Decoding base64 to plaintext: <br/>
                                <button type="button" onClick={() => flipDirection("Encode")}>Flip</button>
                            </p>
                            <TextInput placeholder="Decode base64" onChange={base64 => decodeBase64(base64)} />
                            <hr/>
                            <Form.Control className="shadow output-textarea" as="textarea" value={output} placeholder="Text" />
                        </>
                    )}
                </>
            )}
        </>
    );
}

export default Base64Encoding;
