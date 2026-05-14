export function formatDate(): string | undefined {
    return new Date().toISOString().split('T')[0];
}