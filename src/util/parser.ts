export function parseLines(text: string): string[] {
    return text
        .split(/\r?\n/)
        .filter(line => line.trim() !== "");
}

export function parseGrid(text: string): string[][] {
    return text
        .split(/\r?\n/)
        .map(line => line.split(""))
}