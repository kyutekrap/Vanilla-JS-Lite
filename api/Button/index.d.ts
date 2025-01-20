export function Button({ variant, size, content, onClick, type }?: {
    variant?: "filled" | "outlined" | "text" | undefined;
    size?: "medium" | "big" | undefined;
    content?: string | undefined;
    onClick?: (() => void) | undefined;
    type?: "button" | "submit" | "reset" | undefined;
}): null;
