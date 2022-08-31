export interface DateFormatter {
  subMounths(date: string, mounths: number): string
  formatDate(date: string, formatString?: string): string
}