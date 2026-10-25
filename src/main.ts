// Each archive boots its own frozen application and router. A document load is
// required when entering or leaving an archive; links within it use Vue Router.
const archive = window.location.pathname.match(
  /^\/archive\/(2023|2025)(?:\/|$)/
);

if (archive?.[1] === "2023") {
  import(/* webpackChunkName: "archive-2023" */ "./archive/2023/main");
} else if (archive?.[1] === "2025") {
  import(/* webpackChunkName: "archive-2025" */ "./archive/2025/main");
} else {
  import(/* webpackChunkName: "current-seminar" */ "./bootstrap");
}
