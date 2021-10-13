export default function ctl(template) {
  return template
    .replace(/(undefined|false|true)/g, '')
    .replace(/\s+/g, ' ')
    .trim()
}