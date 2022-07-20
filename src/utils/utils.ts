import type { Post } from "src/@types/main";
const monthNames = [
  "Januari",
  "Februari",
  "Maart",
  "April",
  "Mei",
  "Juni",
  "Juli",
  "Augustus",
  "September",
  "Oktober",
  "November",
  "December",
];

export function calcContentView(hd: HTMLElement, nv: HTMLElement): number {
  if (hd && nv) {
    const windowHeight =
      "innerHeight" in window
        ? window.innerHeight
        : document.documentElement.offsetHeight;
    return windowHeight - (hd.offsetHeight + nv.offsetHeight);
  } else {
    return 0;
  }
}

export function openUploadDialog(): void {
  const fileInput: HTMLInputElement = document.querySelector('[type="file"]');
  fileInput.click();
}

export function timeDiff(start: Date, end: Date): string {
  const diff = +end - +start;
  const minutes = Math.floor(diff / 1000 / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const months = Math.floor(days / 30);
  const years = Math.floor(days / 356);

  if (years >= 1) {
    return years + "j";
  } else if (months >= 1) {
    return months + "md";
  } else if (days >= 1) {
    return days + "d";
  } else if (hours >= 1) {
    return hours + "h";
  } else if (minutes >= 1) {
    return minutes + "min";
  } else {
    return "<1min";
  }
}

export function shuffle(array: Post[]): Post[] {
  let currentIndex = array.length;
  let randomIndex: number;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}

export function getDaysInMonth(month: number, year: number): Date[] {
  const date = new Date(year, month, 1);
  const days: Date[] = [];
  while (date.getMonth() === month) {
    days.push(new Date(date));
    date.setDate(date.getDate() + 1);
  }
  return days;
}

export function getLongMonthName(month: number): string {
  return monthNames[month];
}
