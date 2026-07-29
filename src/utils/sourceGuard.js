// sourceGuard — a light deterrent layer that blocks the *casual* ways
// people right-click/inspect a page: context menu, common devtools
// shortcuts, and text selection/drag on the page chrome.
//
// Be honest about what this is and isn't: it does not, and cannot,
// stop someone determined to read the page. Anyone can open devtools
// through the browser menu, use a proxy, curl the URL, or read the
// bundled JS directly — HTML/CSS/JS sent to a browser is always
// visible to that browser. This only removes the one-click shortcuts
// so a casual visitor can't lift the page in ten seconds.

export function installSourceGuard({ blockSelection = false } = {}) {
  const blockContextMenu = (e) => e.preventDefault();

  const blockKeys = (e) => {
    const key = e.key?.toLowerCase();
    const combo =
      key === 'f12' ||
      (e.ctrlKey && e.shiftKey && (key === 'i' || key === 'j' || key === 'c')) ||
      (e.metaKey && e.altKey && (key === 'i' || key === 'j' || key === 'c')) || // macOS
      (e.ctrlKey && key === 'u') ||
      (e.metaKey && key === 'u');
    if (combo) e.preventDefault();
  };

  document.addEventListener('contextmenu', blockContextMenu);
  document.addEventListener('keydown', blockKeys);

  let cleanupSelection = () => {};
  if (blockSelection) {
    const blockDrag = (e) => e.preventDefault();
    document.addEventListener('dragstart', blockDrag);
    document.body.style.userSelect = 'none';
    cleanupSelection = () => {
      document.removeEventListener('dragstart', blockDrag);
      document.body.style.userSelect = '';
    };
  }

  return function uninstall() {
    document.removeEventListener('contextmenu', blockContextMenu);
    document.removeEventListener('keydown', blockKeys);
    cleanupSelection();
  };
}
