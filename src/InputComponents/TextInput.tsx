import { useState } from "react";
import { Form } from "react-bootstrap";

interface TextInputProps {
    placeholder: string,
    className?: string,
    onChange: (event: any) => void
}

function TextInput(props: TextInputProps) {
    const [text, setText] = useState<string>("");

    const onChange = function(text: string) {
        setText(text);
        props.onChange(text);
    }

    return (
        <>
            <Form.Control className={props.className ?? "shadow input-textarea"} as="textarea" value={text} onChange={e => onChange(e.target.value)} placeholder={props.placeholder} />
        </>
    );
}

export default TextInput;