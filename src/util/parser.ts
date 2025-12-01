export function parseLines(text: string): string[] {
    return text
        .split(/\r?\n/)
        .filter(line => line.trim() !== "");
}