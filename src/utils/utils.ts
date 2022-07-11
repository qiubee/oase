export function calcContentView(
  hd: HTMLElement,
  nv: HTMLElement
): number | void {
  if (hd && nv) {
    const windowHeight =
      "innerHeight" in window
        ? window.innerHeight
        : document.documentElement.offsetHeight;
    return windowHeight - (hd.offsetHeight + nv.offsetHeight);
  }
}

export function openUploadDialog(): void {
  const fileInput: HTMLInputElement = document.querySelector('[type="file"]');
  fileInput.click();
}

export function timeDiff(start: Date, end: Date): string {
  const diff = +end - +start;
  const days = Math.floor(diff / 1000 / 60 / 60 / 24);
  const hours = Math.floor(diff / 1000 / 60 / 60);
  const minutes = Math.floor(diff / 1000 / 60);

  if (days >= 1) {
    return days + "d";
  } else if (hours >= 1) {
    return hours + "h";
  } else {
    return minutes + "min";
  }
}
