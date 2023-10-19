import { useState } from "react";
import "./App.css";
import { Container, Nav, Navbar, Tab, Tabs } from "react-bootstrap";
import Base64Encoding from "./Encoding/Base64/Base64Encoding";
import JsonFormatting from "./Encoding/Json/JsonFormatting";
import Md5Hashing from "./Hashing/MD5/Md5Hashing";
import LicenseFileDecoder from "./Encoding/LicenseFile/LicenseFileDecoder";

function App() {
    const [currentPage, setCurrentPage] = useState<"Text" | "File">("Text");

    return (
        <>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand>Text Utilities</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link onClick={() => setCurrentPage("Text")}>
                                Input Text
                            </Nav.Link>
                            <Nav.Link onClick={() => setCurrentPage("File")} disabled>
                                Input a File
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <Container>
                {currentPage === "Text" && (
                    <>
                        <h1>Text Input</h1>
						<p>Any issues, feel free to submit a ticket on <a href="https://github.com/werzl/text-utilities" target="_blank" rel="noreferrer">https://github.com/werzl/text-utilities</a></p>

                        <Tabs
                            defaultActiveKey="base64"
                            id="uncontrolled-tab-example"
                            className="mb-3"
                        >
                            <Tab eventKey="base64" title="Base64">
                                <Base64Encoding uploadType="Text" />
                            </Tab>
                            <Tab eventKey="license" title=".lic (WIP)">
                                <LicenseFileDecoder uploadType="Text" />
                            </Tab>
                            <Tab eventKey="json" title="JSON">
                                <JsonFormatting uploadType="Text" />
                            </Tab>
							<Tab eventKey="md5" title="MD5 Hash">
								<Md5Hashing uploadType="Text"/>
							</Tab>
                        </Tabs>
                    </>
                )}

                {currentPage === "File" && (
                    <>
                        <h1>File</h1>
                    </>
                )}
            </Container>
        </>
    );
}

export default App;
