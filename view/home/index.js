import { Modal, Drawer, Snackbar, SubHeader, AppBar, Header, Background, Footer, Small, Section, Accordion, HBox, Span, CheckBox, Form, Button } from "/api/index.js";
import { openDrawer, openSnackbar, openModal } from "/code/index.js";

export class Home {
    constructor() {
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
                                Span("My Checkbox"),
                                CheckBox()
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