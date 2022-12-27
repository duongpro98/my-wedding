/**
 * Allows us to detect whether focus related styles can be removed safely
 *
 * see http://a11yproject.com/posts/never-remove-css-outlines
 *
 * Example usage:
 * const focusStylesObserver = createFocusStylesObserver(document.body)
 * focusStylesObserver.start()
 *
 */

function setFocusStylesSafeRemoval(elem, className) {
  if (elem.classList.contains(className)) {
    return;
  }

  elem.classList.add(className);
}

function unsetFocusStylesSafeRemoval(elem, className) {
  if (!elem.classList.contains(className)) {
    return;
  }

  elem.classList.remove(className);
}

function startObserving(elem, className) {
  elem.addEventListener('mousemove', () => {
    setFocusStylesSafeRemoval(elem, className);
  });

  elem.addEventListener('keydown', () => {
    unsetFocusStylesSafeRemoval(elem, className);
  });
}

function createFocusStylesObserver(elem, className = 'safe-focus-removal') {
  return {
    start: startObserving.bind(null, elem, className)
  };
}

export default createFocusStylesObserver;
