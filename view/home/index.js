import { Modal, Drawer, Snackbar, Select, VBox, SubHeader, AppBar, BgButton, Grid, FileInput, Textarea, Table, FlexBox, Input, Footer, Small, Section, Accordion, HBox, Span, Form, Button } from "/api/index.js";
import { openDrawer, openSnackbar, openModal, toggleDarkMode } from "/code/index.js";

export class Home {
    constructor() {
        toggleDarkMode();

        Drawer(
            SubHeader("My Drawer")
        );

        Snackbar();

        Modal();

        AppBar(
            BgButton({
                src: "/asset/menu.svg",
                rounded: true,
                width: "25px",
                height: "25px",
                onClick: () => openDrawer()
            }),
            SubHeader("My App"),
            FlexBox({
                flexGrow: 1
            }),
            BgButton({
                src: "/asset/profile.svg",
                rounded: true,
                width: "27px",
                height: "27px"
            })
        );

        Section(
            Accordion({
                title: "Test",
                body: [
                    Form({
                        layout: "vertical",
                        fieldsets: [
                            Grid({
                                columns: 3,
                                items: [
                                    VBox(
                                        Span("My Input-Checkbox"),
                                        Input({
                                            variant: "checkbox"
                                        })
                                    ),
                                    VBox(
                                        Span("My Textarea"),
                                        Textarea({
                                            resize: "vertical"
                                        })
                                    ),
                                    VBox(
                                        Span("My File"),
                                        FileInput()
                                    ),
                                    VBox(
                                        Span("My Select"),
                                        Select({
                                            options: ["Option 1", "Option 2", "Option 3"]
                                        })
                                    )
                                ]
                            }),
                            FlexBox({
                                alignSelf: "flex-end",
                                children: [
                                    HBox(
                                        Button({
                                            content: "Open Modal",
                                            width: "120px",
                                            variant: "outlined",
                                            onClick: () => openModal()
                                        }),
                                        Button({
                                            content: "Open Snackbar",
                                            width: "120px",
                                            variant: "outlined",
                                            onClick: () => openSnackbar("Hello!")
                                        })
                                    )
                                ]
                            })
                        ]
                    })
                ]
            })
        );

        Section(
            Table({
                columns: ["Column 1", "Column 2", "Column 3"],
                data: [
                    {
                        "Column 1": "Value 1", 
                        "Column 2": "Value 2",
                        "Column 3": "Value 2"
                    },
                    {
                        "Column 1": "Value 1", 
                        "Column 2": "Value 2",
                        "Column 3": "Value 2"
                    },
                    {
                        "Column 1": "Value 1", 
                        "Column 2": "Value 2",
                        "Column 3": "Value 2"
                    }
                ],
                checkbox: true,
                useAutoSort: true
            })
        );
        
        Footer(Small("Created by Kyutekrap"));
    }
}