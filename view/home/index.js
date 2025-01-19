import { Modal, Drawer, Snackbar, SubHeader, AppBar, Header, FileInput, Textarea, Background, Input, Footer, Small, Section, Accordion, HBox, Span, Form, Button } from "/api/index.js";
import { openDrawer, openSnackbar, openModal, toggleDarkMode } from "/code/index.js";

export class Home {
    constructor() {
        toggleDarkMode();

        Drawer(
            SubHeader("My Drawer")
        );

        Snackbar();

        Modal();

        AppBar({
            L: [
                Background({
                    width: "30px",
                    height: "30px",
                    src: "/asset/menu.svg",
                    onClick: openDrawer
                }),
                Header("My AppBar")
            ],
            R: [
                Background({
                    width: "30px",
                    height: "30px",
                    src: "/asset/profile.svg",
                })
            ]
        });

        Section(
            Accordion({
                title: "My Accordion",
                body: [
                    Form({
                        layout: "vertical",
                        fieldsets: [
                            HBox(
                                Span("My Input-Checkbox"),
                                Input({
                                    variant: "checkbox"
                                })
                            ),
                            HBox(
                                Span("My Textarea"),
                                Textarea()
                            ),
                            HBox(
                                Span("My File"),
                                FileInput()
                            ),
                            HBox(
                                Button({
                                    content: "Test Snackbar",
                                    onClick: () => openSnackbar("Hellow!")
                                }),
                                Button({
                                    content: "Test Modal",
                                    onClick: () => openModal(
                                        SubHeader("My Modal")
                                    )
                                })
                            )
                        ]
                    }),
                ]
            })
        );
        
        Footer({
            C: [
                Small("Created by Kyutekrap")
            ]
        });
    }
}