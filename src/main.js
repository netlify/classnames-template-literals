export default function ctl(template) {
  return template
    .replace(/\s(undefined|false|true)\s/g, '')
    .replace(/\s+/g, ' ')
    .trim()
}