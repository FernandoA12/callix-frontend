import { DateFormatter } from "./DateFormatter";
import { format, parseISO, subMonths } from "date-fns"

export class DateFNSFormatter implements DateFormatter {
  private formatString: string = "yyyy-MM-dd HH:mm:ss"

  subMounths(date: string, mounths: number): string {
    return format(subMonths(parseISO(date), mounths), this.formatString)
  }
  
  formatDate(date: string, formatString?: string): string {
    return format(parseISO(date), formatString || this.formatString)
  }

}