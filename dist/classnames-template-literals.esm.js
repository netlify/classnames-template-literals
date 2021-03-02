function ctl(template) {
  var trimmedClassnames = template.replace(/\s+/gm, " ");
  var formattedClassnames = trimmedClassnames
    .split(" ")
    .filter((c) => c !== "false" && c !== "true" && c !== "undefined")
    .join(" ")
    .trim();

  return formattedClassnames;
}

export default ctl;
